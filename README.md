# Simple Image Moderation Project

## What is the use of this Repo

This Project is a Simple Fullstack React-SpringBoot Project which demonstrates the following
1. Creating a Component in React
2. Using react-beautiful-dnd (drag and drop component)
3. Making HTTP calls using axios
4. Communicating between parent and child component
5. Spring Data Jpa Implementation
6. Spring Rest Controller

# Quickstart with Docker-Compose
### Install Docker
Refer to [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/) for docker installation. After the installation completed, run :
```bash
docker-compose up --build
```
Navigate to http://localhost:3000/.

# Running Application in Local
## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install Node Dependencies
Install node dependencies by using the following command :

```bash
npm install
```
### Install Maven
Refer to [https://maven.apache.org/install.html](https://maven.apache.org/install.html)
(Java JDK 1.7 is required)

### Install MySQL
Refer to [https://dev.mysql.com/doc/refman/5.7/en/installing.html](https://dev.mysql.com/doc/refman/5.7/en/installing.html).

### Running Application

 1. Navigate to image-moderation-fe and run following commands to start React-App
 ```bash
npm start
```
 2. Run Spring-Boot Application by navigating to image-moderation-be and run following command
 ```bash
mvn spring-boot:run
```
(Make sure MySQL is running before running Spring-Boot Application
 3. Navigate to http://localhost:3000/ 



## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Spring** : Refer to [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot) to understand how to use Spring-Boot