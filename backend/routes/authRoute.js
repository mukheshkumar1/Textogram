import express from "express";
import multer from 'multer';
import { forgotPassword, login, logout, resetPassword, signup, updateProfile } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import fs from 'fs';


const router= express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.post("/forgot-password", forgotPassword)

router.post("/reset-password", resetPassword)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/profile-pics';
    // Ensure the directory exists
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

export { upload };
  
  router.put('/updateprofile', protectRoute, upload.single('profilePic'), updateProfile);

export default router;
