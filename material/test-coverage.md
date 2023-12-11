## Test coverage

We have analyzed the code that we are testing and we are quite sure that our test scenarios cover everything. The good news is, that we don't need to trust only on our gut. There are so called _test coverage_ tools that analyze which lines of code our test scenarios cover and which they don't.

[JaCoCo](https://www.eclemma.org/jacoco/) is one of the most widely used code coverage tools for Java. Let's add the jacoco-maven-plugin to the `<plugins>` list in the `pom.xml` file:

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

If we run the `./mvnw test` command in Git Bash, our tests are executed and JaCoCo will generate a _code coverage report_. Once the command has finished successfully, the code coverage report can be found as an `index.html` file in the `target/site/jacoco` folder. Open the `index.html` file in a web browser.

The report displayes the coverage of each package. The "Cov" column determines the _percentage of lines covered by the tests_. Bigger the number, better the coverage. If we click a package name, we see the classes in the package. By clicking a class name, we see the methods of the class. By clicking a method we see the method's implementation as code.

Green highlight indicates that the line _is fully covered_. Yellow highlight indicates that the line is _partially covered_. For example a certain condition of an `if` statement is not covered by a test. Red highlight indicates that line is _not covered_.

{: .note }

> Software development teams commonly decide the minimum test coverage percentage for the code. The test coverage is automatically checked each time new code is pushed to the repository. If the new code doesn't fullfill the minimum requirement, the code won't be integrated to the main branch of the repository. This is one of the practices of [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).

{: .note }

> When we change the code (in the tests or in the application), we need to re-run `./mvnw test` to generate the coverage report for the latest tests.

{: .important-title }

> Exercise 13
>
> Use the jacoco-maven-plugin in the project as instructed above. Generate a coverage report and check the coverage of the methods in the `ReadingRecommendationRestController` and `CategoryRestController` classes we tested previously. Are all the lines of the methods fully covered by the tests?
