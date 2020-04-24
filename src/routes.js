const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', async (request, response) => {
   const { name, email, whatsapp, city, uf } = request.body;

   const id = crypto.randomBytes(4).toString('HEX'); 
   let registro;
   try {
    registro = await connection('ongs').insert({
        id,
        email,
        name,
        whatsapp,
        city,
        uf,
    }) 

   } catch (e) {
       console.log(e);
   }

   

       return response.json(registro);

});
  

module.exports = routes;