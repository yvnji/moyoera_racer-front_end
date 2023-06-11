import { createPost, createPostImg } from '../api/apis';

export const registerPost = async (postData, previewImg) => {
  try {
    const data = await createPost(postData, previewImg);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const registerPostImg = async (imageData) => {
  try {
    const data = await createPostImg(imageData);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
