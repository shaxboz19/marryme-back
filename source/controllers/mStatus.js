import {MStatusModel} from '../models';

export class MStatus {
    constructor(data) {
        this.models = {
            MStatus: new MStatusModel(data),
        };
    }

    async getAll() {
        try {
            const data = await this.models.MStatus.getAll();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
