import {cType} from '../odm';

export class CTypeModel {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        try {
            const data =   await cType.find();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
