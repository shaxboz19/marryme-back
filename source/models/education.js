import {education} from '../odm';

export class EducationModel {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        try {
            const data = await education.find();

            const map =  data.map((i) => {
                return {value: i.value, _id: i._id, title: i.get('title.oz')};
            });


            return map;
        } catch (error) {
            throw new Error(error);
        }
    }
}
