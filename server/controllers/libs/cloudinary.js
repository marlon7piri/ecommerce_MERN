import { v2 as cloudinary } from "cloudinary";



cloudinary.config({
  cloud_name:"dxi9fwjsu",
  api_key:"365676634229152",
  api_secret:"T6zJQAzBEYG_Ph4mArxKm-NBw7w",
})


export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "tienda_bolsas",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};

