const AesService  = require("./AesService")
    
 //test the 2 functions:
 let toEncrypt = '4zu4n_t3chn0l0g13s';
 let encryptedData =  AesService.encrypt(toEncrypt)            
              
 let decryptedDataAgain =  AesService.decrypt(encryptedData)
 console.log(toEncrypt,decryptedDataAgain)
    
          
      