import { Handler, APIGatewayEvent, Context } from 'aws-lambda';
import 'source-map-support/register';
import { ConfigService } from './config.service';
import { LosMapSetRepository } from './losMap-set.repository';
import { IHttpResponse } from './typed-fetch';
import { Headers } from 'node-fetch';
import { LosMapSet } from './losMap-set';

export let config = () => {
  return new ConfigService();
};

export let repo = (configService: ConfigService, stage: string, market: string = "global") => {
  const config: any = configService.GetConfig(stage);
  const keys: string[] = Object.keys(config);
  const key: string = keys.find(x => { return x === (market || 'global')});
  const url = config[key].url;

  return new LosMapSetRepository(url);
};


export const aboLosMapGet: Handler = async (event : APIGatewayEvent, _context : Context) : Promise<any> => {
  try {
    const market = event.pathParameters["market"];
    const affiliateCode = event.pathParameters["affiliatecode"];
    const aboNumber = event.pathParameters["abonum"];
    const period = event.pathParameters["period"];
    const headers: Headers = new Headers();
  
    const authHeader: string = event.headers['Authorization'];
    if (authHeader) {
      headers.set('Authorization', authHeader);
    } else {
      console.log('aboLosMapGet::no auth header retrieved from event');
    }
    const repository: LosMapSetRepository = repo(config(), event.requestContext.stage, market);
    const response: IHttpResponse<LosMapSet> = await repository.getLosMaps(affiliateCode, aboNumber, period, headers);
  
    const result = {
      statusCode: response.status, 
      headers: { },
      body: JSON.stringify(response.parsedBody),
      isBase64Encoded: false
    }
  
    return Promise.resolve(result);
  }
  catch(e) {
    console.log('aboLosMapGet handler::caught error');
    const body = { message: 'Server Error in MAGIC DMS', error: e };
    const result = {
      statusCode: 500,
      headers: { },
      body: JSON.stringify(body),
      isBase64Encoded: false
    }
    return Promise.resolve(result);
  }

}