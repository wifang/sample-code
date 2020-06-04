import { ConfigService } from "../../src/config.service";
import * as dev_config from '../../config/config.dev.json';
import * as test_config from '../../config/config.test.json';
import * as qa_config from '../../config/config.qa.json';
import * as prod_config from '../../config/config.prod.json';
import { expect } from "chai";

describe("config service",() =>{
    const service: ConfigService = new ConfigService();

    describe('default stage tests', () => {
        it('default stage test', () => {
            const undef = service.GetConfig(undefined);
            expect(undef.EUR.url).to.equal(dev_config.EUR.url);
            expect(undef.ANA.url).to.equal(dev_config.ANA.url);
            expect(undef.global.url).to.equal(dev_config.global.url);
        });
    });

   describe('dev stage tests', () =>{
        it('dev stage test', () => {
            const dev = service.GetConfig('dev');
            expect(dev.EUR.url).to.equal(dev_config.EUR.url);
            expect(dev.ANA.url).to.equal(dev_config.ANA.url);
            expect(dev.global.url).to.equal(dev_config.global.url);
        });
    });

    describe('test stage test', () => {
        it('test stage test', () => {
            const test = service.GetConfig('test');
            expect(test.EUR.url).to.equal(test_config.EUR.url);
            expect(test.ANA.url).to.equal(test_config.ANA.url);
            expect(test.global.url).to.equal(test_config.global.url);
        })
    });

    describe('qa stage test', () => {
        it('qa stage test', () => {
            const qa = service.GetConfig('qa');
            expect(qa.EUR.url).to.equal(qa_config.EUR.url);
            expect(qa.ANA.url).to.equal(qa_config.ANA.url);
            expect(qa.global.url).to.equal(qa_config.global.url);
        });
    });

    describe('prod stage test', () => {
        it('prod stage test', () => {
            const prod = service.GetConfig('prod');
            expect(prod.EUR.url).to.equal(prod_config.EUR.url);
            expect(prod.ANA.url).to.equal(prod_config.ANA.url);
            expect(prod.global.url).to.equal(prod_config.global.url);
        });
    });
});
