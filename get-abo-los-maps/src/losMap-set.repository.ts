import { IHttpResponse, get } from "./typed-fetch";
import { LosMap } from "./losMap";
import { LosMapSet } from "./losMap-set";
import { Headers, HeaderInit } from 'node-fetch';

export class LosMapSetRepository {
    private url: String; 
    constructor(theUrl: String) {
        this.url = theUrl;
    }

    public async getLosMaps(affiliateCode: String, aboNumber: String, period: String, headers: Headers) : Promise<IHttpResponse<LosMapSet>> {

        try {
            const losMapUrl: string = this.url + `?affAbo[]=${affiliateCode}-${aboNumber}&period[]=${period}&includeMap=true&includeAboAttr=true`;
            const auth: string = headers.get('Authorization');
            const headerInit: HeaderInit = { Authorization: auth };
            const magicResponse: IHttpResponse<any> = await get<any>(losMapUrl, headerInit); 
            const losMapSet: LosMapSet = new LosMapSet();
            losMapSet.losMap = this.ParseLosMapList(magicResponse.parsedBody),
       
            magicResponse.parsedBody = losMapSet; 
            const repoResponse: IHttpResponse<LosMapSet> = magicResponse as IHttpResponse<LosMapSet>;
            return Promise.resolve(repoResponse);
        }
        catch(err) {
            return Promise.reject(err);
        }
    }

    private ParseLosMapList(body: any) : Array<LosMap> {
        if (body.volumeDetailPeriods) {
            var losMapAr = new Array<LosMap>();
                losMapAr.push(this.MapFirstLevelLosMapData(body));
                
                losMapAr = this.traverse(losMapAr, body);
            return losMapAr;
        }
                      
        return undefined;
    }

  
   
    private MapFirstLevelLosMapData(body: any) : LosMap {
        
        const losMap :  LosMap = {
            affiliateCode: body.volumeDetailPeriods[0].aff,
            aboID: body.volumeDetailPeriods[0].abo,
            aboName: this.setFirstLevelAboName(body),
        }

        return losMap;
    }

    private setFirstLevelAboName(body: any) : String { 
        if (body.volumeDetailPeriods[0].detail.aboAttributes.aboName !== '')
        {
            return body.volumeDetailPeriods[0].detail.aboAttributes.aboName;
        }
       
    }

    private traverse(losMapAr,jsonObj):Array<LosMap> {
        if( jsonObj !== null && typeof jsonObj == "object" ) {
            Object.entries(jsonObj).forEach(([key, value]) => {
                // key is either an array index or object key
               
                if (key == 'downlines'){ 
                    
                    var arr : Array<any> = (value as Array<any>).filter( x =>{
                        return x.aff !== 0;
                    });        
                   
                    for (let i=0; i <arr.length; i++){
                    const losMap :  LosMap = {
                        affiliateCode: arr[i].aff,
                        aboID: arr[i].abo,
                        aboName: arr[i].aboAttributes.aboName,
                    };
                    losMapAr.push(losMap);
                   }
                }

                this.traverse(losMapAr,value);
            });
        }
        else {
            // jsonObj is a number or string
        }
        return losMapAr;
    }

  
}