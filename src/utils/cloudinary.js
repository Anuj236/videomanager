import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET 
  });

  const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.error("Local file path is missing.");
            return null;
        }

        // Upload file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File is uploaded", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error.message);

        // Optionally log the entire error object for more details
        console.error("Full error details:", error);

        // Remove locally saved temporary file as the file upload operation failed
        fs.unlinkSync(localFilePath);

        // Rethrow the error or return null, depending on your needs
        // throw error;
        return null;
    }
};



  export { uploadOnCloudinary };