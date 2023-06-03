import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleClientId, googleClientSecret } from "../config/keys.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
    }
  )
);
