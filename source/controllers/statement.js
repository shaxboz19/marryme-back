import  {StatementModel} from '../models';

export class Statement {
    constructor(data) {
        this.models = {
            statement: new StatementModel(data),
        };
    }

    async create() {
        try {
            const data = await this.models.statement.create();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAll(params) {
        try {
            const data = await this.models.statement.getAll(params);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
