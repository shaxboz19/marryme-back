/* eslint-disable no-console */
/* eslint-disable no-undef */
import {users, codes} from '../odm';
import random from 'random-number';
import { sendMailWrapper } from '../utils/helpers';
import { ValidationError } from '../utils/errors';
import { WRONG_CODE } from '../utils/constants/error.constants';


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
            const data = await users.findById(id).populate('favorite');

            return data;
        } catch (error) {
            console.log(error);
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

            const data = await user.updateOne({$set: {...newData, name:
                {first: newData.name.first ? newData.name.first : user.name.first,
                    last:  newData.name.last ? newData.name.last : user.name.last  } }},
            {new: true});

            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async updateAvatar(id, newData) {
        try {
            const user = await users.findById(id);

            const data = await user.updateOne({$set: {...newData}},
                {new: true});

            return data;
        } catch (error) {
            console.log('error', error);
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
            const user = await users.findById(data.uId);
            if (!user) {
                return 'User not found';
            }
            const isFavorite = user.favorite.indexOf(data.id);
            if (isFavorite === -1) {
                const favorite = await users.updateOne({_id: data.uId},
                    {$push: {favorite: data.id}});

                return favorite;
            }


            const favorite = await users.updateOne({_id: data.uId},
                {$pull: {favorite: data.id}});

            return favorite;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateSettings(id,  newData) {
        try {
            const user = await users.findById(id);
            const data = await user.updateOne({$set: {...newData }},
                {new: true});

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateByEmail(email, newData) {
        try {
            const user = await  users.findOne({email});
            const data = user.update(newData);

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async forgotPassword() {
        try  {
            let resetCode = random({min: 100000, max: 999999, integer: true});
            let token = await codes.findOne({ email: this.data.to });
            if (token) {
                await token.deleteOne();
            }
            const data = await  sendMailWrapper(this.data, resetCode);
            await codes.create({
                email:     this.data.to,
                code:      resetCode,
                createdAt: Date.now(),

            });

            return data;
        } catch (error) {
            throw error;
        }
    }

    async confirmCode() {
        try {
            const {email, code} = this.data;
            const data = await codes.findOne({email});
            if (data.code !== code) {
                throw  new ValidationError(WRONG_CODE, 400);
            }

            return {email};
        } catch (error) {
            throw error;
        }
    }
}
