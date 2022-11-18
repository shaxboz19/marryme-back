/* eslint-disable no-console */
/* eslint-disable no-undef */
import {users} from '../odm';

export class UsersModel {
    constructor(data) {
        this.data = data;
    }

    async create() {
        try {
            const data = await users.create(this.data);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try {
            const data = await users.findById(id);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getByEmail(email) {
        try {
            const data = await users.findOne({email});

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, newData) {
        try {
            const user = await users.findById(id);
            // eslint-disable-next-line max-len
            const data = await user.updateOne({$set: {...newData, name: {first: newData.name.first ? newData.name.first : user.name.first, last: newData.name.last ? newData.name.last : user.name.last  } }}, {new: true});

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }


    async whiteList(data) {
        try {
            const list = await users.updateOne({_id: data.uId}, {$push: {whiteList: data.id}});
            await users.updateOne({_id: data.uId}, {$pull: {blackList: data.id}});

            return list;
        } catch (error) {
            throw new Error(error);
        }
    }

    async blackList(data) {
        try {
            const list = await users.updateOne({_id: data.uId}, {$push: {blackList: data.id}});
            await users.updateOne({_id: data.uId}, {$pull: {whiteList: data.id}});

            return list;
        } catch (error) {
            throw new Error(error);
        }
    }


    async addFavorite(data) {
        try {
            const user = await users.findOne({_id: data.uId});
            if (user) {
                const isFavorite = user.favorite.indexOf(data.id);
                if (isFavorite === -1) {
                    // eslint-disable-next-line max-len
                    const favorite = await users.updateOne({_id: data.uId}, {$push: {favorite: data.id}});

                    return favorite;
                }

                // eslint-disable-next-line max-len
                const favorite = await users.updateOne({_id: data.uId}, {$pull: {favorite: data.id}});

                return favorite;
            }

            return 'User not found';
        } catch (error) {
            throw new Error(error);
        }
    }
}
