import { expect } from "chai";
import nock from 'nock';
import { LosMapSetRepository } from "../../src/losMap-set.repository";
import { LosMapSet } from "../../src/losMap-set";
import { IHttpResponse } from "../../src/typed-fetch";
import { Headers } from "node-fetch";

describe("los map set repository", () => {
    const url: String = 'https://api-dv.amwayglobal.com/rest/v1/losv3/magicLosApp/details';
    const affiliateCode: String = "180";
    const aboNum: String = "100038";
    const period: String = "201910";
    const service: LosMapSetRepository = new LosMapSetRepository(url);
   

    describe('Los map retrieve all', () => {
        const retrieveAllResponse = {
            "volumeDetailPeriods": [
                {
                    "aff": 180,
                    "abo": 100038,
                    "period": 201910,
                    "httpStatus": 200,
                    "detail": {
                        "aff": 180,
                        "abo": 100038,
                        "sponsorAbo": 6239506,
                        "losType": "A",
                        "segmentCode": "9",
                        "businessNature": "1",
                        "status": "1",
                        "aboAttributes": {
                            "segment": "9",
                            "aboName": "정윤희,",
                            "aboLocalName": "정윤희",
                            "country": 180,
                            "isoCountry": "KR",
                            "isoLanguage": "ko",
                            "privacyFlag": false,
                            "birthDate": "1900-01-01",
                            "entryDate": "2011-05-04",
                            "expireDate": "2019-05-31"
                        },
                        "downlines": [
                            {
                                "aff": 180,
                                "abo": 12538841,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "BaekEunJoo",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "privacyFlag": false,
                                    "birthDate": "1984-02-01",
                                    "entryDate": "2017-09-04",
                                    "expireDate": "2019-05-31"
                                },
                                "downlines": [
                                    {
                                        "aff": 180,
                                        "abo": 12595600,
                                        "sponsorAbo": 12538841,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "nam eun young",
                                            "aboLocalName": "남은영",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1982-02-22",
                                            "entryDate": "2017-09-19",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12631143,
                                                "sponsorAbo": 12595600,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "choi seulki",
                                                    "aboLocalName": "최슬기",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1981-04-18",
                                                    "entryDate": "2017-09-28",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "aff": 180,
                                "abo": 12092527,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "3",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "kongmisoon",
                                    "aboLocalName": "공미순",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1974-07-23",
                                    "entryDate": "2016-09-12",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 12778140,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "Jeoung Eun Young",
                                    "aboLocalName": "정은영",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1998-12-18",
                                    "entryDate": "2018-03-03",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 348552,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "최아주,",
                                    "aboLocalName": "최아주",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1900-01-01",
                                    "entryDate": "2011-12-02",
                                    "expireDate": "2019-05-31"
                                },
                                "downlines": [
                                    {
                                        "aff": 180,
                                        "abo": 12556443,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "suh sanghoon",
                                            "aboLocalName": "서상훈",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1980-10-04",
                                            "entryDate": "2017-09-08",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12536002,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "park juhye",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "privacyFlag": false,
                                            "birthDate": "1979-10-22",
                                            "entryDate": "2017-09-03",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12550554,
                                                "sponsorAbo": 12536002,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1983-10-11",
                                                    "entryDate": "2017-09-06",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 12551483,
                                                        "sponsorAbo": 12550554,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "nam sun suk",
                                                            "aboLocalName": "남선숙",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1977-06-09",
                                                            "entryDate": "2017-09-07",
                                                            "expireDate": "2019-05-31"
                                                        },
                                                        "downlines": [
                                                            {
                                                                "aff": 180,
                                                                "abo": 12572568,
                                                                "sponsorAbo": 12551483,
                                                                "losType": "A",
                                                                "segmentCode": "9",
                                                                "businessNature": "1",
                                                                "status": "1",
                                                                "aboAttributes": {
                                                                    "segment": "9",
                                                                    "aboName": "",
                                                                    "aboLocalName": "",
                                                                    "country": 180,
                                                                    "isoCountry": "KR",
                                                                    "isoLanguage": "ko",
                                                                    "privacyFlag": true,
                                                                    "birthDate": "1979-09-04",
                                                                    "entryDate": "2017-09-12",
                                                                    "expireDate": "2019-05-31"
                                                                },
                                                                "downlines": [
                                                                    {
                                                                        "aff": 180,
                                                                        "abo": 12609093,
                                                                        "sponsorAbo": 12572568,
                                                                        "losType": "A",
                                                                        "segmentCode": "9",
                                                                        "businessNature": "1",
                                                                        "status": "1",
                                                                        "aboAttributes": {
                                                                            "segment": "9",
                                                                            "aboName": "Do sejin",
                                                                            "aboLocalName": "도세진",
                                                                            "country": 180,
                                                                            "isoCountry": "KR",
                                                                            "isoLanguage": "ko",
                                                                            "privacyFlag": false,
                                                                            "birthDate": "1981-01-01",
                                                                            "entryDate": "2017-09-22",
                                                                            "expireDate": "2019-05-31"
                                                                        },
                                                                        "downlines": [
                                                                            {
                                                                                "aff": 180,
                                                                                "abo": 12609111,
                                                                                "sponsorAbo": 12609093,
                                                                                "losType": "A",
                                                                                "segmentCode": "9",
                                                                                "businessNature": "1",
                                                                                "status": "1",
                                                                                "aboAttributes": {
                                                                                    "segment": "9",
                                                                                    "aboName": "Byeon Hyejin",
                                                                                    "aboLocalName": "변혜진",
                                                                                    "country": 180,
                                                                                    "isoCountry": "KR",
                                                                                    "isoLanguage": "ko",
                                                                                    "privacyFlag": false,
                                                                                    "birthDate": "1986-12-01",
                                                                                    "entryDate": "2017-09-22",
                                                                                    "expireDate": "2019-05-31"
                                                                                },
                                                                                "downlines": [
                                                                                    {
                                                                                        "aff": 180,
                                                                                        "abo": 12609167,
                                                                                        "sponsorAbo": 12609111,
                                                                                        "losType": "A",
                                                                                        "segmentCode": "9",
                                                                                        "businessNature": "1",
                                                                                        "status": "1",
                                                                                        "aboAttributes": {
                                                                                            "segment": "9",
                                                                                            "aboName": "kim hyun mi",
                                                                                            "aboLocalName": "김현미",
                                                                                            "country": 180,
                                                                                            "isoCountry": "KR",
                                                                                            "isoLanguage": "ko",
                                                                                            "privacyFlag": false,
                                                                                            "birthDate": "1979-05-05",
                                                                                            "entryDate": "2017-09-22",
                                                                                            "expireDate": "2019-05-31"
                                                                                        },
                                                                                        "downlines": [
                                                                                            {
                                                                                                "aff": 180,
                                                                                                "abo": 12611175,
                                                                                                "sponsorAbo": 12609167,
                                                                                                "losType": "A",
                                                                                                "segmentCode": "9",
                                                                                                "businessNature": "1",
                                                                                                "status": "1",
                                                                                                "aboAttributes": {
                                                                                                    "segment": "9",
                                                                                                    "aboName": "Shin hye jung",
                                                                                                    "aboLocalName": "신혜정",
                                                                                                    "country": 180,
                                                                                                    "isoCountry": "KR",
                                                                                                    "isoLanguage": "ko",
                                                                                                    "privacyFlag": false,
                                                                                                    "birthDate": "1982-11-19",
                                                                                                    "entryDate": "2017-09-22",
                                                                                                    "expireDate": "2019-05-31"
                                                                                                },
                                                                                                "downlines": [
                                                                                                    {
                                                                                                        "aff": 180,
                                                                                                        "abo": 12612092,
                                                                                                        "sponsorAbo": 12611175,
                                                                                                        "losType": "A",
                                                                                                        "segmentCode": "9",
                                                                                                        "businessNature": "1",
                                                                                                        "status": "1",
                                                                                                        "aboAttributes": {
                                                                                                            "segment": "9",
                                                                                                            "aboName": "",
                                                                                                            "aboLocalName": "",
                                                                                                            "country": 180,
                                                                                                            "isoCountry": "KR",
                                                                                                            "isoLanguage": "ko",
                                                                                                            "privacyFlag": true,
                                                                                                            "birthDate": "1978-12-20",
                                                                                                            "entryDate": "2017-09-22",
                                                                                                            "expireDate": "2019-05-31"
                                                                                                        },
                                                                                                        "downlines": [
                                                                                                            {
                                                                                                                "aff": 180,
                                                                                                                "abo": 12614360,
                                                                                                                "sponsorAbo": 12612092,
                                                                                                                "losType": "A",
                                                                                                                "segmentCode": "9",
                                                                                                                "businessNature": "1",
                                                                                                                "status": "1",
                                                                                                                "aboAttributes": {
                                                                                                                    "segment": "9",
                                                                                                                    "aboName": "bae hyeongran",
                                                                                                                    "aboLocalName": "배형란",
                                                                                                                    "country": 180,
                                                                                                                    "isoCountry": "KR",
                                                                                                                    "isoLanguage": "ko",
                                                                                                                    "privacyFlag": false,
                                                                                                                    "birthDate": "1972-12-25",
                                                                                                                    "entryDate": "2017-09-24",
                                                                                                                    "expireDate": "2019-05-31"
                                                                                                                },
                                                                                                                "downlines": [
                                                                                                                    {
                                                                                                                        "aff": 180,
                                                                                                                        "abo": 12617318,
                                                                                                                        "sponsorAbo": 12614360,
                                                                                                                        "losType": "A",
                                                                                                                        "segmentCode": "9",
                                                                                                                        "businessNature": "1",
                                                                                                                        "status": "1",
                                                                                                                        "aboAttributes": {
                                                                                                                            "segment": "9",
                                                                                                                            "aboName": "",
                                                                                                                            "aboLocalName": "",
                                                                                                                            "country": 180,
                                                                                                                            "isoCountry": "KR",
                                                                                                                            "isoLanguage": "ko",
                                                                                                                            "privacyFlag": true,
                                                                                                                            "birthDate": "1980-08-12",
                                                                                                                            "entryDate": "2017-09-25",
                                                                                                                            "expireDate": "2019-05-31"
                                                                                                                        }
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12795393,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "bongsungmi",
                                            "aboLocalName": "봉성미",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1972-05-29",
                                            "entryDate": "2018-03-08",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 11663059,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Choi Kwi Kil",
                                            "aboLocalName": "최귀길",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1969-12-07",
                                            "entryDate": "2015-10-27",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 11895084,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Won Eun Joung",
                                            "aboLocalName": "원은정,",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1978-02-07",
                                            "entryDate": "2016-04-08",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12675401,
                                                "sponsorAbo": 11895084,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "lee hyun ok",
                                                    "aboLocalName": "이현옥",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1975-04-07",
                                                    "entryDate": "2017-11-07",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12851021,
                                                "sponsorAbo": 11895084,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "3",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1977-08-13",
                                                    "entryDate": "2018-03-25",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12831155,
                                                "sponsorAbo": 11895084,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "leeheawook",
                                                    "aboLocalName": "이혜욱",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1980-01-08",
                                                    "entryDate": "2018-03-19",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 13014617,
                                                "sponsorAbo": 11895084,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "song a reum",
                                                    "aboLocalName": "송아름",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1982-11-14",
                                                    "entryDate": "2018-08-20",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12721502,
                                                "sponsorAbo": 11895084,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "3",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "hwang bok sun",
                                                    "aboLocalName": "황복순",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1976-07-17",
                                                    "entryDate": "2017-12-28",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 11702031,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "im song been",
                                            "aboLocalName": "임송빈",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1974-12-28",
                                            "entryDate": "2015-12-04",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12556494,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "gu young suk",
                                                    "aboLocalName": "구영숙",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1976-12-02",
                                                    "entryDate": "2017-09-08",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12915676,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "SUKHEE OTGONBAYAR",
                                                    "aboLocalName": "수희오토곤바야르",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1975-12-18",
                                                    "entryDate": "2018-04-27",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 12953807,
                                                        "sponsorAbo": 12915676,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "3",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "parkgihwan",
                                                            "aboLocalName": "박기환",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1969-01-30",
                                                            "entryDate": "2018-06-02",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 13046395,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1972-07-11",
                                                    "entryDate": "2018-09-13",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12726414,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "junghyejin",
                                                    "aboLocalName": "정혜진",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1983-09-12",
                                                    "entryDate": "2018-01-04",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 13094759,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Yim yang bin",
                                                    "aboLocalName": "임양빈",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1971-06-05",
                                                    "entryDate": "2018-10-22",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 13111569,
                                                        "sponsorAbo": 13094759,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "LEE SANG KOOK",
                                                            "aboLocalName": "이상국",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1977-09-17",
                                                            "entryDate": "2018-11-09",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 13110551,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "LEE JUNG HAE",
                                                    "aboLocalName": "이정해",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1974-08-16",
                                                    "entryDate": "2018-11-08",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 13117359,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "yuhajin",
                                                    "aboLocalName": "유하진",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1978-01-20",
                                                    "entryDate": "2018-11-16",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 13129074,
                                                "sponsorAbo": 11702031,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "kimjua",
                                                    "aboLocalName": "김주아",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1977-02-10",
                                                    "entryDate": "2018-11-29",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 11355264,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "CHO JUNG OK",
                                            "aboLocalName": "조정옥",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1973-08-20",
                                            "entryDate": "2015-04-17",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 11387461,
                                                "sponsorAbo": 11355264,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "parkeunhee",
                                                    "aboLocalName": "박은희",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1980-03-09",
                                                    "entryDate": "2015-05-21",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 11387472,
                                                        "sponsorAbo": 11387461,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "hojiyeon",
                                                            "aboLocalName": "호지연",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1982-02-27",
                                                            "entryDate": "2015-05-21",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 548598,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "박숙희,",
                                            "aboLocalName": "박숙희",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2012-05-08",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12590716,
                                                "sponsorAbo": 548598,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1944-05-11",
                                                    "entryDate": "2017-09-18",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 10278242,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "KIMHEEJUNG",
                                            "aboLocalName": "김희정",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2013-01-30",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 11359053,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "kin hye jin",
                                                    "aboLocalName": "김혜진",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1983-01-05",
                                                    "entryDate": "2015-04-21",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 10539776,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "ji soo yeun",
                                                    "aboLocalName": "지수연",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1980-09-29",
                                                    "entryDate": "2013-08-16",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 11199165,
                                                        "sponsorAbo": 10539776,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "Ji eun ju",
                                                            "aboLocalName": "지은주",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1982-08-09",
                                                            "entryDate": "2014-12-18",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    },
                                                    {
                                                        "aff": 180,
                                                        "abo": 10549578,
                                                        "sponsorAbo": 10539776,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "kim sung mi",
                                                            "aboLocalName": "김성미",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1980-02-10",
                                                            "entryDate": "2013-08-27",
                                                            "expireDate": "2019-05-31"
                                                        },
                                                        "downlines": [
                                                            {
                                                                "aff": 180,
                                                                "abo": 10637697,
                                                                "sponsorAbo": 10549578,
                                                                "losType": "A",
                                                                "segmentCode": "9",
                                                                "businessNature": "1",
                                                                "status": "1",
                                                                "aboAttributes": {
                                                                    "segment": "9",
                                                                    "aboName": "shinmeesook",
                                                                    "aboLocalName": "신미숙",
                                                                    "country": 180,
                                                                    "isoCountry": "KR",
                                                                    "isoLanguage": "ko",
                                                                    "privacyFlag": false,
                                                                    "birthDate": "1964-03-27",
                                                                    "entryDate": "2013-10-26",
                                                                    "expireDate": "2019-05-31"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 10466760,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "lee soo yeun",
                                                    "aboLocalName": "이수연",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1974-10-20",
                                                    "entryDate": "2013-05-31",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 11596358,
                                                        "sponsorAbo": 10466760,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "",
                                                            "aboLocalName": "",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": true,
                                                            "birthDate": "1979-09-25",
                                                            "entryDate": "2015-09-22",
                                                            "expireDate": "2019-05-31"
                                                        },
                                                        "downlines": [
                                                            {
                                                                "aff": 180,
                                                                "abo": 11995138,
                                                                "sponsorAbo": 11596358,
                                                                "losType": "A",
                                                                "segmentCode": "9",
                                                                "businessNature": "1",
                                                                "status": "1",
                                                                "aboAttributes": {
                                                                    "segment": "9",
                                                                    "aboName": "kim jee hyun",
                                                                    "aboLocalName": "김지현,",
                                                                    "country": 180,
                                                                    "isoCountry": "KR",
                                                                    "isoLanguage": "ko",
                                                                    "privacyFlag": false,
                                                                    "birthDate": "1971-12-29",
                                                                    "entryDate": "2016-07-19",
                                                                    "expireDate": "2019-05-31"
                                                                },
                                                                "downlines": [
                                                                    {
                                                                        "aff": 180,
                                                                        "abo": 12555782,
                                                                        "sponsorAbo": 11995138,
                                                                        "losType": "A",
                                                                        "segmentCode": "9",
                                                                        "businessNature": "1",
                                                                        "status": "1",
                                                                        "aboAttributes": {
                                                                            "segment": "9",
                                                                            "aboName": "kim tae yong",
                                                                            "aboLocalName": "김태용",
                                                                            "country": 180,
                                                                            "isoCountry": "KR",
                                                                            "isoLanguage": "ko",
                                                                            "privacyFlag": false,
                                                                            "birthDate": "1964-02-26",
                                                                            "entryDate": "2017-09-08",
                                                                            "expireDate": "2019-05-31"
                                                                        }
                                                                    },
                                                                    {
                                                                        "aff": 180,
                                                                        "abo": 12584030,
                                                                        "sponsorAbo": 11995138,
                                                                        "losType": "A",
                                                                        "segmentCode": "9",
                                                                        "businessNature": "1",
                                                                        "status": "1",
                                                                        "aboAttributes": {
                                                                            "segment": "9",
                                                                            "aboName": "Kim min sung",
                                                                            "aboLocalName": "김민성",
                                                                            "country": 180,
                                                                            "isoCountry": "KR",
                                                                            "isoLanguage": "ko",
                                                                            "privacyFlag": false,
                                                                            "birthDate": "1976-07-29",
                                                                            "entryDate": "2017-09-15",
                                                                            "expireDate": "2019-05-31"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 11676890,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Park sul ki",
                                                    "aboLocalName": "박슬기",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1986-04-11",
                                                    "entryDate": "2015-11-09",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 10789338,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "KIM GEUMJU",
                                                    "aboLocalName": "김금주",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1955-08-25",
                                                    "entryDate": "2014-02-25",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12853421,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "ji da young",
                                                    "aboLocalName": "지다영",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1986-05-14",
                                                    "entryDate": "2018-03-26",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12853357,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "3",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "ji da young",
                                                    "aboLocalName": "지다영",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1986-05-14",
                                                    "entryDate": "2018-03-26",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12953352,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Kim Hee Jung",
                                                    "aboLocalName": "김희정",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1972-06-10",
                                                    "entryDate": "2018-06-01",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 11159682,
                                                "sponsorAbo": 10278242,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1980-04-19",
                                                    "entryDate": "2014-11-13",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12811101,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "",
                                            "aboLocalName": "",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": true,
                                            "birthDate": "1983-01-16",
                                            "entryDate": "2018-03-13",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12565446,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "",
                                            "aboLocalName": "",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": true,
                                            "birthDate": "1980-08-15",
                                            "entryDate": "2017-09-11",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12589351,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Kimyangmi",
                                            "aboLocalName": "김양미",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1981-02-07",
                                            "entryDate": "2017-09-18",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12595449,
                                                "sponsorAbo": 12589351,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1978-10-18",
                                                    "entryDate": "2017-09-19",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12621808,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Park Myung Ok",
                                            "aboLocalName": "박명옥",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1973-09-06",
                                            "entryDate": "2017-09-26",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 13084992,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "",
                                            "aboLocalName": "",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": true,
                                            "birthDate": "1991-04-17",
                                            "entryDate": "2018-10-11",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 10694476,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Choisimyeung",
                                            "aboLocalName": "최시명",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1980-09-29",
                                            "entryDate": "2013-12-10",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12378267,
                                        "sponsorAbo": 348552,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "klm yoon jung",
                                            "aboLocalName": "김윤정",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1979-04-28",
                                            "entryDate": "2017-03-30",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12802040,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "kimsooyoung",
                                                    "aboLocalName": "김수영",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1979-06-14",
                                                    "entryDate": "2018-03-10",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12678071,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Kim Sang Hee",
                                                    "aboLocalName": "김상희",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1976-11-10",
                                                    "entryDate": "2017-11-09",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12681107,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "kim soo yeon",
                                                    "aboLocalName": "김수연",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1980-03-24",
                                                    "entryDate": "2017-11-13",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 13013056,
                                                        "sponsorAbo": 12681107,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "jeun jun ki",
                                                            "aboLocalName": "전준기",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1957-04-28",
                                                            "entryDate": "2018-08-17",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12388729,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Lyu Kyung In",
                                                    "aboLocalName": "유경인",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1983-09-16",
                                                    "entryDate": "2017-04-07",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12828479,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "MoonMyungSooN",
                                                    "aboLocalName": "문명순",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1973-11-03",
                                                    "entryDate": "2018-03-19",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12621387,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "min eun ju",
                                                    "aboLocalName": "민은주",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1979-04-21",
                                                    "entryDate": "2017-09-26",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12626195,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "min jung ju",
                                                    "aboLocalName": "민정주",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1981-01-06",
                                                    "entryDate": "2017-09-27",
                                                    "expireDate": "2019-05-31"
                                                }
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 12658967,
                                                "sponsorAbo": 12378267,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "kim young ml",
                                                    "aboLocalName": "김영미",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1982-02-26",
                                                    "entryDate": "2017-10-19",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "aff": 180,
                                "abo": 442407,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "JUNG HEE JIN & LEE HYUN JUN",
                                    "aboLocalName": "정희진",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1900-01-01",
                                    "entryDate": "2012-02-17",
                                    "expireDate": "2019-05-31"
                                },
                                "downlines": [
                                    {
                                        "aff": 180,
                                        "abo": 12535067,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "yang jae sook",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "privacyFlag": false,
                                            "birthDate": "1928-12-20",
                                            "entryDate": "2017-09-03",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 10840348,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "cho young ju",
                                            "aboLocalName": "조영주",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1977-10-22",
                                            "entryDate": "2014-04-07",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12915160,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "3",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Lee Sun Kyung",
                                            "aboLocalName": "이선경",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1982-01-02",
                                            "entryDate": "2018-04-26",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 10175226,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "홍주연,",
                                            "aboLocalName": "홍주연",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2012-10-27",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 10176048,
                                                "sponsorAbo": 10175226,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "KIM HWA RAN",
                                                    "aboLocalName": "김혜란",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1900-01-01",
                                                    "entryDate": "2012-10-28",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 10176124,
                                                        "sponsorAbo": 10176048,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "HAN HEON HYEOL",
                                                            "aboLocalName": "한현열",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1900-01-01",
                                                            "entryDate": "2012-10-28",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "aff": 180,
                                                "abo": 10175589,
                                                "sponsorAbo": 10175226,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "LEE MI SUK",
                                                    "aboLocalName": "이미숙",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1900-01-01",
                                                    "entryDate": "2012-10-27",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 10175963,
                                                        "sponsorAbo": 10175589,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "CHOI HEA JUNG",
                                                            "aboLocalName": "최혜정",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1900-01-01",
                                                            "entryDate": "2012-10-28",
                                                            "expireDate": "2019-05-31"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12879244,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "lee myung ja",
                                            "aboLocalName": "이명자",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1961-04-27",
                                            "entryDate": "2018-03-31",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12879304,
                                                "sponsorAbo": 12879244,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "jongpil jung",
                                                    "aboLocalName": "정종필",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1960-09-20",
                                                    "entryDate": "2018-03-31",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12879371,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "3",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "jeong gi hong",
                                            "aboLocalName": "정기홍",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1986-12-08",
                                            "entryDate": "2018-03-31",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12630833,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "DY YOUNG BAEK",
                                            "aboLocalName": "백다영",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1978-02-16",
                                            "entryDate": "2017-09-27",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 12865602,
                                                "sponsorAbo": 12630833,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Baek hyun hee",
                                                    "aboLocalName": "백현희",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1974-01-10",
                                                    "entryDate": "2018-03-29",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 541760,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "SONG HYE GYEOUNG",
                                            "aboLocalName": "송혜경",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2012-05-01",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 13109599,
                                                "sponsorAbo": 541760,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "3",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "",
                                                    "aboLocalName": "",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": true,
                                                    "birthDate": "1978-05-02",
                                                    "entryDate": "2018-11-08",
                                                    "expireDate": "2019-05-31"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 10001682,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "3",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "jjurujy",
                                            "aboLocalName": "김주연",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2012-09-01",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12769575,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Hwang mi suk",
                                            "aboLocalName": "황미숙",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1979-07-08",
                                            "entryDate": "2018-02-22",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12638979,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "LEE YOUNGCHAN",
                                            "aboLocalName": "이영찬",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1976-01-27",
                                            "entryDate": "2017-09-29",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 644979,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "LEE JEOUNG HEE",
                                            "aboLocalName": "이정희",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2013-11-05",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12839542,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "3",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "JANG MI GEUN",
                                            "aboLocalName": "장미근",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1980-11-10",
                                            "entryDate": "2018-03-22",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 12625377,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "Jo Yeong Eun",
                                            "aboLocalName": "조영은",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1983-12-07",
                                            "entryDate": "2017-09-26",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 13118818,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "KIM HYOUNJU",
                                            "aboLocalName": "김현주",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1978-08-13",
                                            "entryDate": "2018-11-19",
                                            "expireDate": "2019-05-31"
                                        }
                                    },
                                    {
                                        "aff": 180,
                                        "abo": 10046652,
                                        "sponsorAbo": 442407,
                                        "losType": "A",
                                        "segmentCode": "9",
                                        "businessNature": "1",
                                        "status": "1",
                                        "aboAttributes": {
                                            "segment": "9",
                                            "aboName": "kim jeoung mi",
                                            "aboLocalName": "김정미",
                                            "country": 180,
                                            "isoCountry": "KR",
                                            "isoLanguage": "ko",
                                            "privacyFlag": false,
                                            "birthDate": "1900-01-01",
                                            "entryDate": "2012-09-10",
                                            "expireDate": "2019-05-31"
                                        },
                                        "downlines": [
                                            {
                                                "aff": 180,
                                                "abo": 10224013,
                                                "sponsorAbo": 10046652,
                                                "losType": "A",
                                                "segmentCode": "9",
                                                "businessNature": "1",
                                                "status": "1",
                                                "aboAttributes": {
                                                    "segment": "9",
                                                    "aboName": "Jo Hyoun Jin",
                                                    "aboLocalName": "조현진",
                                                    "country": 180,
                                                    "isoCountry": "KR",
                                                    "isoLanguage": "ko",
                                                    "privacyFlag": false,
                                                    "birthDate": "1900-01-01",
                                                    "entryDate": "2012-12-10",
                                                    "expireDate": "2019-05-31"
                                                },
                                                "downlines": [
                                                    {
                                                        "aff": 180,
                                                        "abo": 10230763,
                                                        "sponsorAbo": 10224013,
                                                        "losType": "A",
                                                        "segmentCode": "9",
                                                        "businessNature": "1",
                                                        "status": "1",
                                                        "aboAttributes": {
                                                            "segment": "9",
                                                            "aboName": "kim yu ah",
                                                            "aboLocalName": "김유아",
                                                            "country": 180,
                                                            "isoCountry": "KR",
                                                            "isoLanguage": "ko",
                                                            "privacyFlag": false,
                                                            "birthDate": "1900-01-01",
                                                            "entryDate": "2012-12-17",
                                                            "expireDate": "2019-05-31"
                                                        },
                                                        "downlines": [
                                                            {
                                                                "aff": 180,
                                                                "abo": 10256692,
                                                                "sponsorAbo": 10230763,
                                                                "losType": "A",
                                                                "segmentCode": "9",
                                                                "businessNature": "1",
                                                                "status": "1",
                                                                "aboAttributes": {
                                                                    "segment": "9",
                                                                    "aboName": "KIM KYOUNG DO",
                                                                    "aboLocalName": "김경도",
                                                                    "country": 180,
                                                                    "isoCountry": "KR",
                                                                    "isoLanguage": "ko",
                                                                    "privacyFlag": false,
                                                                    "birthDate": "1900-01-01",
                                                                    "entryDate": "2013-01-14",
                                                                    "expireDate": "2019-05-31"
                                                                },
                                                                "downlines": [
                                                                    {
                                                                        "aff": 180,
                                                                        "abo": 13019563,
                                                                        "sponsorAbo": 10256692,
                                                                        "losType": "A",
                                                                        "segmentCode": "9",
                                                                        "businessNature": "1",
                                                                        "status": "1",
                                                                        "aboAttributes": {
                                                                            "segment": "9",
                                                                            "aboName": "Yi Ji Hyeon",
                                                                            "aboLocalName": "이지현",
                                                                            "country": 180,
                                                                            "isoCountry": "KR",
                                                                            "isoLanguage": "ko",
                                                                            "privacyFlag": false,
                                                                            "birthDate": "1987-03-27",
                                                                            "entryDate": "2018-08-29",
                                                                            "expireDate": "2019-05-31"
                                                                        }
                                                                    },
                                                                    {
                                                                        "aff": 180,
                                                                        "abo": 10451705,
                                                                        "sponsorAbo": 10256692,
                                                                        "losType": "A",
                                                                        "segmentCode": "9",
                                                                        "businessNature": "1",
                                                                        "status": "1",
                                                                        "aboAttributes": {
                                                                            "segment": "9",
                                                                            "aboName": "kim jungmin",
                                                                            "aboLocalName": "김정민&정동현",
                                                                            "country": 180,
                                                                            "isoCountry": "KR",
                                                                            "isoLanguage": "ko",
                                                                            "privacyFlag": false,
                                                                            "birthDate": "1983-12-07",
                                                                            "entryDate": "2013-05-15",
                                                                            "expireDate": "2019-05-31"
                                                                        },
                                                                        "downlines": [
                                                                            {
                                                                                "aff": 180,
                                                                                "abo": 10788307,
                                                                                "sponsorAbo": 10451705,
                                                                                "losType": "A",
                                                                                "segmentCode": "9",
                                                                                "businessNature": "1",
                                                                                "status": "1",
                                                                                "aboAttributes": {
                                                                                    "segment": "9",
                                                                                    "aboName": "YU JU HYEON",
                                                                                    "aboLocalName": "유주현",
                                                                                    "country": 180,
                                                                                    "isoCountry": "KR",
                                                                                    "isoLanguage": "ko",
                                                                                    "privacyFlag": false,
                                                                                    "birthDate": "1986-11-26",
                                                                                    "entryDate": "2014-02-24",
                                                                                    "expireDate": "2019-05-31"
                                                                                },
                                                                                "downlines": [
                                                                                    {
                                                                                        "aff": 180,
                                                                                        "abo": 10854993,
                                                                                        "sponsorAbo": 10788307,
                                                                                        "losType": "A",
                                                                                        "segmentCode": "9",
                                                                                        "businessNature": "1",
                                                                                        "status": "1",
                                                                                        "aboAttributes": {
                                                                                            "segment": "9",
                                                                                            "aboName": "OH YOOMI",
                                                                                            "aboLocalName": "오유미",
                                                                                            "country": 180,
                                                                                            "isoCountry": "KR",
                                                                                            "isoLanguage": "ko",
                                                                                            "privacyFlag": false,
                                                                                            "birthDate": "1981-11-27",
                                                                                            "entryDate": "2014-04-20",
                                                                                            "expireDate": "2019-05-31"
                                                                                        },
                                                                                        "downlines": [
                                                                                            {
                                                                                                "aff": 180,
                                                                                                "abo": 11412096,
                                                                                                "sponsorAbo": 10854993,
                                                                                                "losType": "A",
                                                                                                "segmentCode": "9",
                                                                                                "businessNature": "3",
                                                                                                "status": "1",
                                                                                                "aboAttributes": {
                                                                                                    "segment": "9",
                                                                                                    "aboName": "OH YOUNGJU",
                                                                                                    "aboLocalName": "오영주",
                                                                                                    "country": 180,
                                                                                                    "isoCountry": "KR",
                                                                                                    "isoLanguage": "ko",
                                                                                                    "privacyFlag": false,
                                                                                                    "birthDate": "1987-09-18",
                                                                                                    "entryDate": "2015-06-15",
                                                                                                    "expireDate": "2019-05-31"
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "aff": 180,
                                                                        "abo": 12525716,
                                                                        "sponsorAbo": 10256692,
                                                                        "losType": "A",
                                                                        "segmentCode": "9",
                                                                        "businessNature": "3",
                                                                        "status": "1",
                                                                        "aboAttributes": {
                                                                            "segment": "9",
                                                                            "aboName": "YI JI HYEON",
                                                                            "aboLocalName": "이지현",
                                                                            "country": 180,
                                                                            "isoCountry": "KR",
                                                                            "isoLanguage": "ko",
                                                                            "privacyFlag": false,
                                                                            "birthDate": "1987-03-27",
                                                                            "entryDate": "2017-08-31",
                                                                            "expireDate": "2019-05-31"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "aff": 180,
                                "abo": 11727455,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "3",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "",
                                    "aboLocalName": "",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": true,
                                    "birthDate": "1966-01-13",
                                    "entryDate": "2016-01-02",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 10724458,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "BONG MI JUNG",
                                    "aboLocalName": "봉미정",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1980-09-05",
                                    "entryDate": "2014-01-02",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 11344025,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "Jin seunghee",
                                    "aboLocalName": "진승희",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1990-08-27",
                                    "entryDate": "2015-04-06",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 396722,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "Seon min jin",
                                    "aboLocalName": "선민진&김은중",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1900-01-01",
                                    "entryDate": "2012-01-17",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 12744793,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "3",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "",
                                    "aboLocalName": "",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": true,
                                    "birthDate": "1971-03-20",
                                    "entryDate": "2018-01-24",
                                    "expireDate": "2019-05-31"
                                }
                            },
                            {
                                "aff": 180,
                                "abo": 12855036,
                                "sponsorAbo": 100038,
                                "losType": "A",
                                "segmentCode": "9",
                                "businessNature": "1",
                                "status": "1",
                                "aboAttributes": {
                                    "segment": "9",
                                    "aboName": "oh kilsoo",
                                    "aboLocalName": "오길수",
                                    "country": 180,
                                    "isoCountry": "KR",
                                    "isoLanguage": "ko",
                                    "privacyFlag": false,
                                    "birthDate": "1979-10-09",
                                    "entryDate": "2018-03-26",
                                    "expireDate": "2019-05-31"
                                }
                            }
                        ]
                    }
                }
            ]
        }

        beforeEach(() => {
            nock(`${url}`, { allowUnmocked: true })
                .get(`/affAbo[]=${affiliateCode}-${aboNum}?period[]=${period}&includeMap=true&includeAboAttr=true`)
                .reply(200, retrieveAllResponse);
        });

        it('retrieve all', async() => {
            const headers: Headers = new Headers();
            headers.set('Authorization', 'bearer qy3e6q26dwq552b7spmyzzj7');
            const response: IHttpResponse<LosMapSet> = await service.getLosMaps(affiliateCode, aboNum, period, headers);
            const set: LosMapSet = response.parsedBody;
            expect(set).to.be.not.null;
            expect(set.losMap[0].affiliateCode).to.equal(180);
            expect(set.losMap[0].aboID).to.equal(100038);
            expect(set.losMap[0].aboName).to.equal('정윤희,');
            expect(set.losMap[1].affiliateCode).to.equal(180);
            expect(set.losMap[1].aboID).to.equal(12538841);
            expect(set.losMap[1].aboName).to.equal('BaekEunJoo');
            expect(set.losMap[2].affiliateCode).to.equal(180);
            expect(set.losMap[2].aboID).to.equal(12092527);
            expect(set.losMap[2].aboName).to.equal('kongmisoon');
            expect(set.losMap[3].affiliateCode).to.equal(180);
            expect(set.losMap[3].aboID).to.equal(12778140);
            expect(set.losMap[3].aboName).to.equal('Jeoung Eun Young');
        });
    });

    describe('invalid period', () => {
        const affiliateCode: String = "180";
        const abo: String = "100038";
        const invalidPeriod = "201913";
        const invalidResponse = {
            "status": 400,
            "exception": "DataRangeException / Throttle Checks failed!",
            "message": "missing required field: period[]"
        };

        beforeEach(() => {
            nock(`${url}`)  
                .get(`/affAbo[]=${affiliateCode}-${abo}?period[]=${invalidPeriod}&includeMap=true&includeAboAttr=true`)
                .reply(400, invalidResponse);
        });

        it('invalid Response', async() => {
            const headers: Headers = new Headers();
            headers.set('Authorization', 'bearer z5n3sq8pxzf5c6amwdnbpt38');
            const response: IHttpResponse<LosMapSet> = await service.getLosMaps(affiliateCode, aboNum, invalidPeriod, headers);
            expect(response.status).to.equal(400);
        });
    });
    
    describe('server down', () => {
        const serverDown = `<!DOCTYPE html>
        <html>
            <head>
                <title>Web App - Unavailable</title>
                <style type="text/css">
                html {
                    height: 100%;
                    width: 100%;
                }
        
                #feature {
                    width: 960px;
                    margin: 95px auto 0 auto;
                    overflow: auto;
                }
        
                #content {
                    font-family: "Segoe UI";
                    font-weight: normal;
                    font-size: 22px;
                    color: #ffffff;
                    float: left;
                    width: 460px;
                    margin-top: 68px;
                    margin-left: 0px;
                    vertical-align: middle;
                }
        
                    #content h1 {
                        font-family: "Segoe UI Light";
                        color: #ffffff;
                        font-weight: normal;
                        font-size: 60px;
                        line-height: 48pt;
                        width: 800px;
                    }
        
                p a, p a:visited, p a:active, p a:hover {
                    color: #ffffff;
                }
        
                #content a.button {
                    background: #0DBCF2;
                    border: 1px solid #FFFFFF;
                    color: #FFFFFF;
                    display: inline-block;
                    font-family: Segoe UI;
                    font-size: 24px;
                    line-height: 46px;
                    margin-top: 10px;
                    padding: 0 15px 3px;
                    text-decoration: none;
                }
        
                    #content a.button img {
                        float: right;
                        padding: 10px 0 0 15px;
                    }
        
                    #content a.button:hover {
                        background: #1C75BC;
                    }
            </style>
            </head>
            <body bgcolor="#00abec">
                <div id="feature">
                    <div id="content">
                        <h1 id="unavailable">Error 403 - This web app is stopped.</h1>
                        <p id="tryAgain">The web app you have attempted to reach is currently stopped and does not accept any requests. Please try to reload the page or visit it again soon.</p>
                        <p id="toAdmin">If you are the web app administrator, please find the common 403 error scenarios and resolution 
                            <a href="https://go.microsoft.com/fwlink/?linkid=2095007" target="_blank">here</a>. For further troubleshooting tools and recommendations, please visit
                            <a href="https://portal.azure.com/">Azure Portal</a>.
                        </p>
                    </div>
                </div>
            </body>
        </html>`

        beforeEach(() => {
            nock(`${url}`)
               .get(`/affAbo[]=${affiliateCode}-${aboNum}?period[]=${period}&includeMap=true&includeAboAttr=true`)
                .replyWithError(serverDown);
        });

        it('server down', async() => {
            try {
                const headers: Headers = new Headers();
                headers.set('Authorization', 'bearer nn436tt6gswzu9m4uwk7e9ja');
                const response: IHttpResponse<LosMapSet> = await service.getLosMaps(affiliateCode, aboNum, period, headers);
                expect(false).to.be.true; //prior line expected to throw an exception if it doesn't this will be executed and fail.
                console.log('server down test', response);
            }
            catch(e) {
                expect(e).to.be.not.null;
            }
        });
    });
    
});