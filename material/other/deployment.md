## Production database

To get started with the deployment, we will need to set up a _production database_ for our application. The H2 database is convenient in the development environment but not suitable for the production environment. Instead, we will be using a [PostgreSQL](https://www.postgresql.org/) database hosted in the [Aiven](https://aiven.io/) platform. Complete the following steps to create a PostgreSQL database in the Aiven dashboard:

1. [Sign up](https://console.aiven.io/signup) to Aiven using your GitHub account and go through the sign up process. The information you provide in the sign up process doesn't matter
2. Once you have completed the sign up and you are in the Aiven dashboard, choose "PostgreSQL" in the "Create new service" section
3. Choose "Free plan" and click the "Create free service" button. Go through the setup steps (you don't need to change any information in the steps)
4. After finishing the setup, click the "Quick connect" button and choose "Java" from the "Connect with" dropdown menu. Copy the JDBC URI (starting with `jdbc:postgresql//...`) by clicking the "Copy to clipboard" button next to the URI. _Save the JDBC URI somewhere_ (e.g. in an editor), we'll need it soon.

## Production web server

Once we have the PostgreSQL database setup, we will need to setup a _production web server_ for our application. Render supports deploying [Docker](https://www.docker.com/) containers which are isolated environments for running all kinds of applications.

A Docker image is a set of instructions used to run containers. These instructions are defined with a [Dockerfile](https://docs.docker.com/engine/reference/builder/). Add the following `Dockerfile` file (the file name is just `Dockerfile` without a file extension) to the root folder of the Maven project (same folder that has the `pom.xml` file):

```dockerfile
FROM maven:3.9.8-eclipse-temurin-21 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /target/quizzer-0.0.1-SNAPSHOT.jar quizzer.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","quizzer.jar"]
```

In the `Dockerfile` we generate a [JAR file](https://en.wikipedia.org/wiki/JAR_(file_format)) for the project and start the application using the JAR file. The name of the JAR file is specified by the `artifactId` and the `version` properties in the `pom.xml` file. Set the values of these properties as the following so that the JAR file's name matches the one in the `Dockerfile`:

```xml
<artifactId>quizzer</artifactId>
<version>0.0.1-SNAPSHOT</version>
```

Because we use PostgreSQL as the production database, we will need to specific production environment configuration. Add a file `application-production.properties` to the `src/main/resources` folder (same folder that has the `application.properties` file) with the following content:

```
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.datasource.url=${POSTGRES_URL}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
```

The `POSTGRES_URL` property value in the file is an [environment variable](https://en.wikipedia.org/wiki/Environment_variable). We use an environment variable because we don't want our production database connection string to end up in wrong hands in our public GitHub repository. We will define a value for the `POSTGRES_URL` environment variable in Render soon.

The PostgreSQL database requires a suitable driver for the application. Let's add the PostgreSQL driver dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

Now that we have the database-related changes in order, push these changes to GitHub before heading further.

Finally, for the application itself, we need to create a web service. Complete the following steps to create a web service in the Render dashboard:

1. [Sign up](https://dashboard.render.com/) to Render using your GitHub account and go through the sign up process. The information you provide in the sign up process doesn't matter
2. Once you have completed the sign up and you are in the Render dashboard, click the "New" button on the navigation bar and choose "Web Service"
3. Choose "Public Git Repository", put the URL of your GitHub repository to the field and click the "Connect" button
4. Choose "Docker" from the "Language" dropdown menu
5. _If your Maven project is inside a sub folder in the repository_, set the "Root Directory" as the name of that folder
6. In the "Instance Type" section, choose "Free"
7. In the "Environment Variables" section, add these two environment variables (key, value):

   - `POSTGRES_URL`: the JDBC URI (starting with `jdbc:postgresql//...`) you copied previously from the Aiven dashboard while setting up the PostgreSQL database
   - `SPRING_PROFILES_ACTIVE`: set as `production`

8. In the "Advanced" section, set "Auto-Deploy" as "No" from the dropdown menu
9. Click the "Deploy Web service" button at the bottom of the page

Open the created web service in the Render dashboard. The deployment of the application should have started and it will take some time to finish. You can always deploy the application by clicking the "Manual Deploy" button and choosing "Deploy latest commit". Once the deployment is complete the application will be accessible to everyone in the URL that is displayed under the web service's name.

{: .highlight }

> It might take a while for the application to open in the web browser.
