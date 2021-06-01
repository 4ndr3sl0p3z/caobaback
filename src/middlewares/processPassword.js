import bcrypt from 'bcryptjs';


export const comparePassword = async ( passBd, passLogin ) => {
    return await bcrypt.compare(passLogin, passBd);
}

export const encryptPassword = async ( password ) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}