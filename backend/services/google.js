import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import user from '../models/user.model.js';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let existingUser = await user.findOne({google_id:profile.id});
        if (!existingUser) {
            existingUser = await user.create({
                google_id: profile.id,
                fullName: profile.displayName,
                username:profile.displayName,
                profilePic: profile.photos?.[0]?.value,
            });
        }
        return done(null, existingUser);
    } catch (err) {
        return done(err, null);
    }
}));
