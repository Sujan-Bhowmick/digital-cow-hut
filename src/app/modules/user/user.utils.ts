import { User } from "./user.model";

// let lastUserId = 0;


export const findLastUserId = async() => {
  const lastUser = await User.findOne({}, {id:1, _id:0}).sort({
    createdAt: -1
  }).lean();

  return lastUser?.id
}


export const generateUserId = async() => {

const currnetId = (await findLastUserId()) || (0).toString().padStart(5, '0')

// increment by 1
const incrementedId = (parseInt(currnetId) + 1).toString().padStart(5, '0')

return incrementedId;
};