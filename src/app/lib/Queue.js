const redisConfig = require('../../config/redis') 
const jobs = require('../jobs/index')
const Queue = require('bull')

//Criação de filas.
const queues = Object.values(jobs).map(job=>({
    bull: new Queue(job.key, redisConfig),
    name: job.key, 
    handle: job.handle,
    options: job.options
}))

module.exports = {
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue.name === name);
        //Percorrendo a lista de e-mails e adicionando cada objeto a uma job, dentro da lista. 
        data.map(function(job){
            return queue.bull.add(job, queue.options)
        })
    },
    process(){
        return this.queues.forEach(queue =>{
            //Processando a fila.
            queue.bull.process(queue.handle)
            //Escutando os processos iniciados.
            queue.bull.on('failed', (job, err)=>{
                //Caso a job não consiga ser processada, é gerado um texto mostrando o erro.
                console.log('Job failed: ', queue.key, job.data, err.name + ' : ' + err.message)
            }) 
            //Caso a job termine de ser processada, sem nenhum erro, é gerado um texto mostrando o sucesso.
            queue.bull.on('completed', (job) =>{
                console.log(`Job with id : ${job.id} has been completed!`, job.data)
            })
        })
    }
}