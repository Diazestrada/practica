const registro = require('../model/register.model');
const service = {};

service.saveRegistre = (data) => new Promise((resolve, reject) =>{
    
    const register = new registro(data);

    register.save((error, regis) => {
         if(!error)
         {
             const ok =
             {
                 ok: true,
                 regis,
                 status: 200
             }

             return resolve(ok);
         }else{
             const error = {
                 ok: false,
                 error,
                 status: 400
             }

             return reject(error);
         }
    });
    


});

module.exports = service;