import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config()

const SECRET_KEY = process.env.JWT_SECRECT_KEY
const EXPIRES_IN = process.env.EXPIRES_IN
const AES_SECRET = process.env.AES_SECRET
const AES_IV = process.env.AES_IV

const encryptAES = (text) => {
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(AES_SECRET), AES_IV);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
};


const decryptAES = (encryptedText) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(AES_SECRET), AES_IV);
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

export const encryptPassword = (password) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
};

export const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

export const generatedToken = (payload) => {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
    // console.log(token, "token")
    return token;
}

export const verifyToken = (token) => {
    try {
        // const decryptedToken = decryptAES(token);
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        console.error("Invalid or expired token:", error.message);
        return null;
    }
}
