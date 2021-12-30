# mailService 

#### PORTUGUÊS/BR ####
- Envio automático de e-mails com Node.js e Redis!

- Para utilizar a aplicação corretamente, voce precisa: 
  * Instalar as dependências do projeto com npm. Perceba que você precisa ter o Node.js instalado em sua máquina para utilizar o npm como seu gerenciador de pacotes.
  * Se você utiliza o Windows como seu SO, recomendo utilizar o Docker Desktop. De outro modo, instale o Docker do jeito que preferir em sua máquina.
  * Crie uma imagem do Docker. Para esse projeto, utilizei, por linha de comando: "docker run --name redis -p 6379:6379 -d -t redis:alpine". Você pode utilizar os arquivos composer para te auxiliar na criação de conteiners e imagens.
  * Por fim, você pode rodar o projeto no modo desenvolvedor utilizando: "npm run dev". Se estiver usando o yarn como seu gerenciador de pacotes, use: "yarn dev".

- Para testar a aplicação:
  * Enviar uma requisição GET para a rota: "/" na porta 3000. Se receber "Ok" como resposta, a aplicação está pronta para utilizar e modificar, caso queira.

- Usando o envio de e-mail: 
  * É importante entender que a rota para envio de e-mail, utiliza uma função simples como middleware. Esse, busca pelo cabeçalho da requisição um Bearer Token para autenticação. Dessa forma, crie um token novo, guarde-o no arquivo "conn" (/src/config/conn.js) e use-o no cabeçalho da requisição.
  * Para o corpo da requisição, use uma lista de objetos JSON com os campos: "email_to", "subject", "html_body" e "attachment" para cada objeto.

Divirta-se!


#### ENGLISH ####
- Automatically e-mail sender with Node.js and Redis!

- For using the application properly, you should: 
  * Install the dependencies with npm. Note that you must have Node.js installed to use npm package manager.
  * If you are using Windows as your OS, I recommend you to use Docker Desktop. Otherwise, make sure to install Docker whichever way you prefer.
  * Create the Docker image. For this project, I used the command: "docker run --name redis -p 6379:6379 -d -t redis:alpine". You can use composer files to help you on creating and running docker containers and images. 
  * Finally, you can run the project on dev mode using: "npm run dev". If you are using yarn as your main package manager, use: "yarn dev".

- Testing the application:
  * Send a GET request to route: "/" on port 3000. If your response is "Ok", then the application is ready to use and modify, if you want.

- Usage of e-mail sender:
  * Is important to understand that the route of e-mail sender, utilizes a simple middleware function. That function search for a Bearer Token on request header for authentication. That way, generate a new token, save it on "conn.js" (/src/config/conn.js) file, then use it on request header.
  * For the request body, use a list of JSON objects with fields: "email_to", "subject", "html_body" and "attachment" for each object. 

Enjoy!
