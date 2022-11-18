import  {MessagesModel} from '../models';

export class Messages {
    constructor(data) {
        this.models = {
            messages: new MessagesModel(data),
        };
    }

    async getByConversationId(conversationId) {
        const data =  await this.models.messages.getById(conversationId);

        return data;
    }

    async createMessage() {
        try {
            const data = await this.models.messages.create();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
