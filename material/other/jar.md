## JAR

A JAR (Java Archive) is a package file format typically used to aggregate many Java class files and associated metadata and resources (such as CSS files, JavaScript files and other assets) into one file to distribute application software or libraries on the Java platform. If a user wants to use our application, instead of providing them with the entire source code, we can just provide a JAR file containing everything needed to run our application.

The name of the JAR file is specified by the `artifactId` and the `version` properties in the `pom.xml` file. They should be the following:

```xml
<artifactId>quizzer</artifactId>
<version>0.0.1-SNAPSHOT</version>
```

We can generate a JAR file for the application with the following command:

```bash
./mvnw package
```

The command output will display the path to the generated JAR file.

{: .highlight }

> If you have trouble generating the JAR file with the `./mvnw package` command, see if [this](problems-and-solutions#warning-java_home-environment-variable-is-not-set) solves the problem.

If the application is currently running, for example in Eclipse, stop it. Then, run `java -jar target/quizzer-0.0.1-SNAPSHOT.jar` to run the application with the JAR file. Open the application in <http://localhost:8080> and see that it is working.

{: .important-title }

> Exercise 26
>
> Generate a JAR file for the application and run the application using the JAR file. Add instructions on how to generate and run the application using the JAR file to the "Developer guide" section in the `README.md` file.
>
> NB: The `target` folder (including the JAR file) _should not be pushed to GitHub_. The whole `target` folder is commonly ignored by Git using a `.gitignore` file. We'll get to the purpose of this file later.

{: .note }

> When you change the application's code, you need to re-generate the JAR file with the `./mvnw package` command to have a JAR file for the latest version of the application.
