import bcrypt from 'bcrypt';
import { userRepo } from '../repositories';

export const registrationService = {
  validateUsernameAndPassword(username, password) {
    if (username !== undefined && password === undefined) {
      return {
        message: 'Password is required.',
        status: 400,
      };
    }
    if (username === undefined && password !== undefined) {
      return {
        message: 'Username is required.',
        status: 400,
      };
    }
    if (username === undefined && password === undefined) {
      return {
        message: 'Username and password is required.',
        status: 400,
      };
    }
    if (
      username !== undefined
      && password !== undefined
      && password.length < 8
    ) {
      return {
        message: 'Password must be 8 characters.',
        status: 400,
      };
    }
    return undefined;
  },

  async userNameTaken(username) {
    const userSelected = await userRepo.getUserByUsername(username);
    if (userSelected.results.length === 1) {
      return {
        message: 'Username is already taken.',
        status: 400,
      };
    }
    return undefined;
  },
  async registerUser(username, email, password) {
    const validationObject = this.validateUsernameAndPassword(
      username,
      password,
    );
    if (validationObject !== undefined) {
      throw validationObject;
    }
    const usernameTakenObject = await this.userNameTaken(username);
    if (usernameTakenObject !== undefined) {
      throw usernameTakenObject;
    }
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return await userRepo.registerUser(username, email, hashedPassword);
    } catch (err) {
      throw { status: 401, message: err.message };
    }
  },
};
