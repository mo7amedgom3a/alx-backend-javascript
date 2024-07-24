import { createUser, uploadPhoto } from './utils';
export default async function asyncUploadUser() {
    let user;
    let photo;
    try {
        user = await createUser();
    }
    catch (error) {
        user = null;
    }
    try {
        photo = await uploadPhoto();
    }
    catch (error) {
        photo = null;
    }
    return { photo, user };
  }
