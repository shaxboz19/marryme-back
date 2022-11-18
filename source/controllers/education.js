import {EducationModel} from '../models';

export class Education {
    constructor(data) {
        this.models = {
            education: new EducationModel(data),
        };
    }

    async getAll() {
        try {
            const data = await this.models.education.getAll();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
