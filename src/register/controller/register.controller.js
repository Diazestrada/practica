const services = require('../service/register.service');
const controller = {};

controller.saveRegistre = (req,res) => {
    const data = req.body;
     return services.saveRegistre(data)
      .then(re =>  res.json(re))
      .catch(erro => res.status(400).json(erro));
};

module.exports = controller;