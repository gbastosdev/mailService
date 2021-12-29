const Queue = require('./app/lib/Queue')
require('dotenv/config')
//Processando a fila de envio de e-mails (jobs).
Queue.process();
