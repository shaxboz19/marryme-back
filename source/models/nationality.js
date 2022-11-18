import {nationality} from '../odm';

export class NationalityModel {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        try {
            const data = await nationality.find();

            const map =  data.map((i) => {
                return {value: i.value, _id: i._id, title: i.get('title.oz')};
            });


            return map;
        } catch (error) {
            throw new Error(error);
        }
    }
}
