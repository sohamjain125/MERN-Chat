import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d", // expires in 24 hours
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    samSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
export default generateTokenAndSetCookie;
