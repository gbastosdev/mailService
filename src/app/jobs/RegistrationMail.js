const Mail = require('../lib/Mail')

module.exports = {
    key: 'RegistrationMail',
    options: {
        delay: 1500,
    },
    //Método de envio de e-mail.
    async handle({data}) {
        //Recebendo as jobs e fazendo o envio de e-mail.
        await Mail.sendMail({
            from: 'Gabriel Bastos <gabriel.bastos@faesa.br>',
            to: `<${data.email_to}>`,
            subject: `${data.subject}`,
            html: `${data.html_body}.`,
            attachment: `${data.attachment}`
        })
        //Callback da situação dos envios de e-mail.
        .then((info, err)=>{
            if(err) console.log(err);
            if(info.accepted.length > 0){
                //E-mails que foram aceitos pelo usuário.
                console.log(`Email enviado para ${info.accepted[0]}!`)
            }
            if(info.rejected.length !== 0){
                //Envio dos e-mails que foram recusados pelo usuário.
                console.log(`Email enviado para ${info.rejected[0]}!`)
            }
            if(info.pending){
                if(info.pending.length !== 0){
                    //E-mails que estão pendentes na caixa de entrada do usuário.
                    console.log(`Email enviado para ${info.pending[0]}!`)
                }
            }
        });
    }
}