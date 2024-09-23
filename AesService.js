const crypto = require('crypto');
//using aws-256. for other available algorithms, check this out: crypto.getCiphers()
const cryptkey = '3CfbafNA6dlvveW0ESaGsiUU771uDqboejmPCDKVMQ0=';
const iv =  'g5AoAjmzGa5vKPUX/RytjA==';


 function encrypt(text){
    try {
        const key_in_bytes = Buffer.from(cryptkey, 'base64')
        const iv_in_bytes = Buffer.from(iv,'base64');

        var cipher = crypto.createCipheriv('aes-256-cbc',key_in_bytes,iv_in_bytes);
        var crypted = cipher.update(text,'utf8','base64');  //base64 , hex
        crypted += cipher.final('base64');
        console.log('encriptado:' + crypted);
        return crypted;
    } catch (err) {
        console.error('encrypt error',err);
        return null;
    }
}

 function decrypt(encryptdata){
  
    try {
        const key_in_bytes = Buffer.from(cryptkey, 'base64')
        const iv_in_bytes = Buffer.from(iv,'base64');
        let decipher = crypto.createDecipheriv('aes-256-cbc',key_in_bytes, iv_in_bytes)
        decipher.setAutoPadding(true)
        let decoded  = decipher.update(encryptdata,'base64','utf8') //base64 , hex
        decoded  += decipher.final('utf8')
        return decoded
    } catch (err) {
        console.error('decrypt error',err)
        return null
    }
}

const AesService = {
    encrypt:encrypt,
    decrypt:decrypt,
}
module.exports = AesService
