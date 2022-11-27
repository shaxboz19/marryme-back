import {codes} from '../odm';

export class CodesModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        try {
            const data = await  codes.create(this.data);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async find() {
        try {
            const {email } = this.data;

            const token = await codes.findOne({email});


            return token;
        } catch (error) {
            throw error;
        }
    }

    async deleteByEmail(email) {
        try {
            const data = await codes.findOneAndDelete({email});

            return data;
        } catch (error) {
            throw error;
        }
    }
}
