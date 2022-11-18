import {message} from '../odm';

export class MessagesModel {
    constructor(data) {
        this.data = data;
    }

    async getById(conversationId) {
        try {
            let data = await message.find({
                conversationId,
            });

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }


    async create() {
        try {
            const data = await message.create(this.data);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
