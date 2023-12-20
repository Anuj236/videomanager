import multer from "multer";

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, "./public/temp") // uploaded file directory
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname) // name of the original filename
    }
  })
  
export const upload = multer(
  { 
    storage: storage
   })