import express from "express";
import passport from "passport";
import { login, logout, signup, google, googleCallback } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get('/google', google )

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/login' }), googleCallback);

router.post("/logout", logout);

export default router;
