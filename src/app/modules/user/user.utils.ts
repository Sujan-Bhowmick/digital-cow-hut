import { User } from './user.model';
export const findLastBuyerId = async () => {
  const lastBuyer = await User.findOne(
    {
      role: 'buyer',
    },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastBuyer?.id ? lastBuyer.id.substring(2) : undefined;
};

export const generateBuyerId = async (): Promise<string> => {
  const currnetId =
    (await findLastBuyerId()) || (0).toString().padStart(5, '0');

  // increment by 1
  let incrementedId = (parseInt(currnetId) + 1).toString().padStart(5, '0');

  incrementedId = `B-${incrementedId}`;
  return incrementedId;
};

// Seller id
export const findLastSellerId = async () => {
  const lastSeller = await User.findOne(
    {
      role: 'seller',
    },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastSeller?.id ? lastSeller.id.substring(2) : undefined;
};

export const generateSellerId = async () => {
  const currnetId =
    (await findLastSellerId()) || (0).toString().padStart(5, '0');

  // increment by 1
  let incrementedId = (parseInt(currnetId) + 1).toString().padStart(5, '0');

  incrementedId = `S-${incrementedId}`;
  return incrementedId;
};

// Admin id
export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  const currnetId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');

  // increment by 1
  let incrementedId = (parseInt(currnetId) + 1).toString().padStart(5, '0');

  incrementedId = `A-${incrementedId}`;
  return incrementedId;
};
