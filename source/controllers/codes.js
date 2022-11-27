import {CodesModel} from '../models';

export class Codes {
    constructor(data) {
        this.models = {
            codes: new CodesModel(data),
        };
    }

    async create() {
        try {
            const data = await this.models.codes.create();

            return data;
        } catch (error) {
            throw error;
        }
    }

    async find() {
        try {
            const data = await this.models.codes.find();


            return data;
        } catch (error) {
            throw error;
        }
    }

    async deleteByEmail(email) {
        try {
            const data = await this.models.codes.deleteByEmail(email);

            return data;
        } catch (error) {
            throw error;
        }
    }
}
