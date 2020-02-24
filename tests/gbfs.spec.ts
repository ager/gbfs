import axios from 'axios';
import * as path from "path";
import * as chai from 'chai';
import {readFileSync} from 'fs';

const chaiResponseValidator = require("chai-openapi-response-validator");
const config = require('./config.json');
const expect = chai.expect;

const openApiSpec = readFileSync(config.ABS_PATH_TO_API_SPEC, 'utf8');

chai.use(chaiResponseValidator(path.resolve(config.ABS_PATH_TO_API_SPEC)));

describe('Test Open-API implementation for ' + config.API_URL, function () {

    describe('GET /gbfs.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/gbfs.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /gbfs_versions.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/gbfs_versions.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /station_information.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/station_information.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /system_calendar.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/system_calendar.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /system_hours.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/system_hours.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /system_information.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/system_information.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /system_pricing_plans.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/system_pricing_plans.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /system_alerts.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/system_alerts.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

    describe('GET /free_bike_status.json', function () {
        it('should satisfy OpenAPI spec', async function () {
            const res = await axios.get(config.API_URL + '/free_bike_status.json');

            expect(res.status).to.equal(200);

            (expect(res).to as any).satisfyApiSpec;
        });
    });

})

