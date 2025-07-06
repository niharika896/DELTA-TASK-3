import express from "express"
import multer from "multer"
const router = express.Router();
const upload = multer({ dest: 'uploads/' })

const uploadMiddleware = upload.single("uploaded_photo");
router.post('/', uploadMiddleware, (req, res, next) => {
    if(!req.file){
        console.log("no image received")
    }
    else{

        res.json({filename:req.file.filename}); 
    }

})

export default router;