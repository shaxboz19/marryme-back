import {UsersModel} from '../models';

export class Users {
    constructor(data) {
        this.models = {
            users: new UsersModel(data),
        };
    }

    async create() {
        try {
            const data = await this.models.users.create();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try {
            const data = await this.models.users.getById(id);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getByEmail(email) {
        try {
            const data = await this.models.users.getByEmail(email);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async update (id, updateData) {
        try {
            const data = await this.models.users.update(id, updateData);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateAvatar (id, updateData) {
        try {
            const data = await this.models.users.updateAvatar(id, updateData);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async whiteList(data) {
        try {
            const list = await this.models.users.whiteList(data);

            return list;
        } catch (error) {
            throw new Error(error);
        }
    }

    async blackList (data) {
        try {
            const list = await this.models.users.blackList(data);

            return list;
        } catch (error) {
            throw new Error(error);
        }
    }

    // eslint-disable-next-line no-unused-vars
    async addFavorite(addData) {
        try {
            const data = await this.models.users.addFavorite(addData);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateSettings(id, updateData) {
        try {
            const data = await this.models.users.updateSettings(id, updateData);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async forgotPassword() {
        try {
            const data = await this.models.users.forgotPassword();

            return data;
        } catch (error) {
            throw error;
        }
    }

    async  confirmCode() {
        try {
            const data = await this.models.users.confirmCode();

            return data;
        } catch (error) {
            throw error;
        }
    }

    async updateByEmail(email, newData) {
        try {
            const data = await this.models.users.updateByEmail(email, newData);

            return data;
        } catch (error) {
            throw error;
        }
    }
}
