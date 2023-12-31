import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser, ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const loginUser = async (payload: ILoginUser):Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  const isUserExist = await User.isUserExist(id);

  // const isUserExist = await user.isUserExist(id)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExist?.password &&
    !User.isPasswordMatched(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // create token
  const { id: userId, role, needsPasswordChange } = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { userId,role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelpers.createToken(
    { userId,role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );
  console.log({"a":accessToken, "r":refreshToken, "n":needsPasswordChange});

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

const refreshToken = async(token: string):Promise<IRefreshTokenResponse> => {
  console.log("t",token)
  // verify token
  let verifiedToken = null;
  try {
     verifiedToken = jwtHelpers.verifyToken(token, config.jwt.refresh_secret as Secret)

  } catch(err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid refresh token')
  }

  const {userId} = verifiedToken;

  const isUserExist = await User.isUserExist(userId)
  if(!isUserExist){
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist")
  }

// generate new token
const newAccessToken = jwtHelpers.createToken({id:isUserExist.id, role: isUserExist.role},
  config.jwt.secret as Secret,
  config.jwt.expires_in as string
  );

  return {
    accessToken : newAccessToken
  }

}

export const AuthService = {
  loginUser,
  refreshToken
};
