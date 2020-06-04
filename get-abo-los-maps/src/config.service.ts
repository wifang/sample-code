import * as dev_config from '../config/config.dev.json';
import * as qa_config from '../config/config.qa.json';
import * as test_config from '../config/config.test.json';
import * as prod_config from '../config/config.prod.json';

export class ConfigService {
    constructor() { }

    public GetConfig(stage: String) : any {
        let data: any = dev_config;

        if (stage === 'qa') {
            data = qa_config;
        } else if (stage === 'test') {
            data = test_config;
        } else if (stage === 'prod') {
            data = prod_config;
        }

        return data.default;
    }
}