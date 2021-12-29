const Queue = require('../lib/Queue')
module.exports = {
    async store(req,res){
        //Recebendo array de envio de e-mails.
        const arr = req.body;
        //Adicionar a job na fila.
        await Queue.add('RegistrationMail', arr)
        res.json(arr)
    }
}