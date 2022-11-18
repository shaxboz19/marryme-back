import { conversation } from '../odm';

export class ConversationModel {
    constructor(data) {
        this.data = data;
    }

    async getById(id) {
        try {
            let data = await conversation.find(
                {
                    members: { $in: [ id ] },
                },

            ).populate('senderId receiverId');

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAll() {
        try {
            const data = await conversation.find();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create() {
        try {
            const item = await conversation.findOne({
                members: { $all: [ this.data.senderId, this.data.receiverId ] },
            });
            if (item) {
                return item;
            }
            const data = await conversation.create(this.data);


            return data;
        } catch (error) {
            throw error;
        }
    }

    async getByTwoUsers(firstUserId, secondUserId) {
        try {
            const data = await conversation.findOne({
                members: { $all: [ firstUserId, secondUserId ] },
            });

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
