import  {ConversationModel} from '../models';

export class Conversation {
    constructor(data) {
        this.models = {
            conversation: new ConversationModel(data),
        };
    }

    async getById(id) {
        const data =  await this.models.conversation.getById(id);

        return data;
    }

    async createConversation() {
        try {
            const data = await this.models.conversation.create();

            return data;
        } catch (error) {
            throw error;
        }
    }


    async getTwoUsers(firstUserId, secondUserId) {
        const data = await this.models.conversation.getByTwoUsers(firstUserId, secondUserId);

        return data;
    }
}
