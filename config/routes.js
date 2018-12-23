//import route
const register = require('../src/register');


const router = (app) =>{
 app.use('/register', register);
   
};

module.exports = router;