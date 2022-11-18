import {CTypeModel} from '../models';

export class CType {
    constructor(data) {
        this.models = {
            CType: new CTypeModel(data),
        };
    }

    async getAll() {
        try {
            const data = await this.models.CType.getAll();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
