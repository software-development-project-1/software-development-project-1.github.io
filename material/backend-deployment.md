---
layout: page
title: Backend deployment
permalink: /backend-deployment
nav_order: 11
---

# Backend deployment

This guide covers Spring Boot backend and PostgreSQL database deployment using the Rahti platform. Follow the instructions carefully and perform the steps one by one.

## Register to CSC

Start by registering to CSC by following [these instructions](/assets/rahti/csc_instructions_register.pdf).

## Configuring the Spring Boot project

Make sure that your Spring Boot project is _in the repository's root folder, like this_ ✅:

```
src/
pom.xml
...
```

That is, _it is not inside a sub folder, like this_ ❌:

```
somesubfolder/
    src/
    pom.xml
    ...
```

Add PostgreSQL driver as dependency in your project's `pom.xml` file. Copy and paste the below snippet, place it as a child element of `<dependencies>` element:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

Create a file named `Dockerfile` (no file extension) in your repository's root folder (same folder that has the `pom.xml` file). Content of the `Dockerfile` for a Spring Boot application should be the following:

```docker
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /opt/app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline
COPY ./src ./src
RUN ./mvnw clean install -DskipTests
RUN find ./target -type f -name '*.jar' -exec cp {} /opt/app/app.jar \; -quit
FROM eclipse-temurin:21-jre-alpine
COPY --from=builder /opt/app/*.jar /opt/app/
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/opt/app/app.jar" ]
```

{: .highlight }

> This `Dockerfile` will only work for Spring Boot projects with Java version 21 or lower.

Create a new deployment profile for your application. You need to create a new file in the
`src/main/resources/` folder. Name the new file `application-rahti.properties`. Content of the `application-rahti.properties` should be the following:

```
spring.datasource.url=jdbc:postgresql://${POSTGRESQL_SERVICE_HOST}:${POSTGRESQL_SERVICE_PORT}/${DB_NAME}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.datasource.driver-class-name=org.postgresql.Driver
```

If you have a `CommandLineRunner` method inserting test data each time the server starts, add a condition checking if the database is empty before the insert. This avoids inserting duplicate data each time the project is deployed:

```java
@Bean
public CommandLineRunner generateTestData(MessageRepository messageRepository) {
    if (messageRepository.count() == 0) {
        messageRepository.save(new Message("Hello world!"));
    }
}
```

Commit the above changes and push them to your GitHub repository.

## Creating a project in CSC

{: .note }

> If you already have created a project in CSC, you are unable to create another one. In that case proceed to chapter "Creating a project in Rahti".
>
> ![Create a new project disclaimer](/assets/rahti/create-project-disclaimer.png)

Login to CSC at <https://my.csc.fi/login> using you Haka user account (Haaga-Helia credentials) or your CSC user account (username sent to your email). Navigate to "Projects" view and start creating a new project.

![New project](/assets/rahti/new-project.png)

Fill in your project's information. Choose project name and description freely. Set the "Course end date" to three months from now. In "Project resources" you can set "Primary science area" as ""Engineering and technology" and "Secondary science area" as "Other engineering and technologies". Read and accept all terms of use and privacy notice. Choose "Create project" to continue.

You have now created your CSC project. Within this project you can start adding CSC's services. For your deployment you only need Rahti – Container Cloud. Click "Add services" and select "Rahti".

![Project information](/assets/rahti/project-information.png)

{: .highlight }

> Check your project number in the "Project information" section. You will need it later!

Once you have added the Rahti service you might have to wait up to 60 mins for you to gain access after activation. So be patient!

{: .note }

> You can add other teams members as the CSC project members by opening the project in the "Projects" view and clicking "Add members" in the "Members" section.

## Creating a project in Rahti

After you have gained access to Rahti service, you can login to Rahti at your CSC project's Projects view. Choose your (only) project and scroll down to "Services". Clicking "Login" will take you to Rahti landing page.

![Rahti login](/assets/rahti/rahti-login.png)

Proceed the login process, you need to click Login buttons a few times in different pages. Use either Haka or CSC as your authentication method when prompted.

{: .highlight }

> If you'll get an "Could not find user" error after login, wait for a while (10 minutes or so) and try again.

Successfully logging in directs you to Rahti console. When starting the console for the first time take the site's tour showing important navigation options. After the tour you are ready to create your Rahti project.

Click the "Project: All projects" dropdown menu and choose "Create Project" or click the text "Create a Project". If you don't have these options visible in your page, make sure you are in 
"Developer" view (marked with yellow).

![Create Rahti project](/assets/rahti/rahti-create-project.png)

{: .note }

> You can have more than one Rahti projects in one CSC Project.

Give your project a name and a display name. In the description write `csc_project:<YOUR_CSC_PROJECT_NUMBER>`. You will find your CSC project number in your CSC Project's "Project information" view. Proceed by clicking Create.

![Create Rahti project details](/assets/rahti/rahti-create-project-details.png)

Next you will import your code from a Git repository. The following instructions assume that you have set your GitHub repository Public. In Rahti dashboard make sure you are in "Developer" view: go to "+Add" and choose "Import from Git".

![Import from Git](/assets/rahti/import-from-git.png)

Copy and paste your GitHub repository's URL into the corresponding form field and choose "Dockerfile" as your "Import Strategy" if it is not the suggested one. You can leave rest of the form fields to their default values. Move on to "Create".

![Import from Git config](/assets/rahti/import-from-git-config.png)

Successful creation will take you to your project's "Topology" view. Click the graphical representation of your deployment to open your deployment controls.

![Topology](/assets/rahti/topology.png)

You have now deployed your application into Rahti. But it is not in working condition yet. The "Crash Loop BackOff" error is due to the build's trials of connecting to a database that doesn't exist trying to use environment variables that haven't been declared. (You might have to wait a minute to get the error).

In Developer view, go to "+Add" page and start creating a database for your project. Choose "PostgreSQL". _Make sure you don't select the Ephemeral version!_ Click "Instantiate Template" to continue the process.

![Add database](/assets/rahti/add-database.png)

You can leave all the default values in the form where you create your database. Leaving PostgreSQL "Connection Username" and "Password" empty will make the system generate random credentials for you. This is fine within the scope of Haaga-Helia UAS course work.

![Database settings](/assets/rahti/database-settings.png)

{: .highlight }

> If you want to specify PostgreSQL "Connection Username" and "Password", don't use weak a password! Always use strong passwords even when practicing!

Successful creation of a database will show as a new "DeploymentConfig" object in your "Topology" view.

![Topology deployment config](/assets/rahti/topology-deployment-config.png)

You still need to configure the environmental variables before your application's deployment is finished. In "Administrator" view navigate to "Workloads > Deployments > NAME_OF_YOUR_DEPLOYMENT > Environment".

Set your environment variables as shown below (name: value). Click the circled "Add from ConfigMap or Secret" to get more form fields. _Make sure that you don't mistype variable names or values!_

- `SPRING_PROFILES_ACTIVE`: set as `rahti`
- `DB_NAME`: click "Add from ConfigMap or Secret" and choose resource as `postgresql` and key as `database-name`
- `DB_PASSWORD`: click "Add from ConfigMap or Secret" and choose resource as `postgresql` and key as `database-password`
- `DB_USER`: click "Add from ConfigMap or Secret" and choose resource as `postgresql` and key as `database-user`

_Click "Save" at the bottom of the page to activate your changes_.

![Environment config](/assets/rahti/environment-config.png)

Congratulations! You have now deployed your Spring application with a proper database to CSC/Rahti!

To get the URL for your app go back to "Developer view > Topology". Click your application's "Open URL" shortcut or navigate to deployment's quick controls (navigation pane on the right) and scroll down to "Routes". It might take few minutes before you are able to access your deployment's URL in browser.

![Rahti URL](/assets/rahti/rahti-url.png)

## Triggering deployment

Deploying the application after changes in the GitHub repository requires a manual step. In the "Topology" view click the deployment (has the "D" symbol before the name). Then, click "Start build" from the dialog.

![Start build](/assets/rahti/start-build.png)
