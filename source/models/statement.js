import {statement} from '../odm';

export class StatementModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        try {
            const data = await statement.create(this.data);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try {
            const data = await statement.findById(id);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAll(params) {
        try {
            const {maxAge, minAge, ...obj} = params;
            const query = {...obj, age: {$gte: minAge || 18, $lte: maxAge || 999}};
            const options = {limit:    10, offset:   0, populate: {
                path:   'nationality education maritalStatus candidateType',
                select: '-_id -id -value',
            }};
            const data = await statement.paginate(query, options);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
