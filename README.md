# mailService

#### ENGLISH ####
- Automatically e-mail sender with Node.js and Redis!

- In order to use the application properly, you should: 
  * Install the dependencies with npm. Note that you must have Node.js installed to use npm package manager.
  * If you are using Windows as your OS, I recommend you to use Docker Desktop. Otherwise, make sure to install Docker whichever way you prefer.
  * Create the Docker image. For this project, I used the command: "docker run --name redis -p 6379:6379 -d -t redis:alpine". You can use composer files to help you on creating and running docker containers and images. 
  * Finally, you can run the project on dev mode using: "npm run dev". If you are using yarn as your main package manager, use: "yarn dev".

- Testing the application:
  * Send a GET request to route: "/" on port 3000. If your response is "Ok", then the application is ready to use and modify, if you want.

- Usage of e-mail sender:
  * Is important to understand that the route of e-mail sender, utilizes a simple middleware function. This function search for a Bearer Token on request header for authentication. So, generate a new token, save it on "conn.js" (/src/config/conn.js) file, then use it on request header.
  * For the request body, use a list of JSON objects with fields: "email_to", "subject", "html_body" and "attachment" for each object. 

Enjoy!
