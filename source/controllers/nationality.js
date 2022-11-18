import {NationalityModel} from '../models';

export class Nationality {
    constructor(data) {
        this.models = {
            nationality: new NationalityModel(data),
        };
    }

    async getAll() {
        try {
            const data = await this.models.nationality.getAll();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
