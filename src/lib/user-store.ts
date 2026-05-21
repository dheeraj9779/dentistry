import * as userService from '@/features/auth/services/user.service';

export const findUserByEmail = userService.findUserByEmail;
export const findUserById = userService.findUserById;
export const createLocalUser = userService.createLocalUser;
export const verifyPassword = userService.verifyPassword;

export default userService;
