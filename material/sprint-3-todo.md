---
layout: page
title: Sprint 3
permalink: /sprint-3-todo
nav_order: 8
nav_exclude: true
---

{% include toc.html %}

# Sprint 3

For the final Sprint of the course, the Sprint 3, we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Git branches, authentication and testing.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_3_deadline}}. We will be working on the exercises for a bit over a week.

The Sprint assesment is done based on the exercises 1-13. The team can earn up to 10 points from this Sprint. This is the final Sprint of the course and the team's project points will be composed of the points from this Sprint and the two previous Sprints. That is, the maximum number of project points is 30.

During this Sprint, each team member will do a [peer review](#peer-review) in which they asses themselves and other team members. The results of the peer review will heavily impact the personal points of a team member. Each team member can earn up to 10 personal points.

{: .highlight }

> At the end of this Sprint, the team has to write the [final report](#the-final-report) together and each team member needs to do the [peer review](#peer-review). Missing final report will decrease the project points by 5 points and the peer review is required for a passing grade. If the peer review is done after the Sprint deadline, the personal points will decrease by 5 points.

## Retrospective

Organize a similar Mad, Sad, Glad retrospective in Flinga for the Sprint 2 as we did at the end of the [Sprint 1](/sprint-2#retrospective).

{: .important-title }

> Exercise 1
>
> _One of the team members_ should create a new session in Flinga as instructed above. Name the session "Retrospective 2". Once the session is created, other team members should join the session with the "Join link". Setup the session board and organize the Retrospective event.
>
> Did similar issues arise as in Sprint 1 retrospective? If so, try to come up with different actions as before or ask the teacher for tips on how to solve these issues.
>
> Once you have completed the Retrospective write down the issues and actions to the repository's `retrospectives/sprint-2.md` file and push the changes to GitHub.

## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of branch to the main branch.

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story. Commonly, the main branch should only contain _working code_, which produces _deployment ready features_. This means that the _latest working version_ of our application can be found in the main branch at all times. We should be able to deploy this application for our users at any moment without issues.

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. For example, I would create the following branch:

```bash
git branch kaltsoon
```

{: .note }

> Typically, the branch name describes the feature develop in the branch or some other purpose of the branch, for example `filter-recommendations-by-category`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. The current branch is also displayed in brackets in the Git Bash after the path to the current folder.

We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

Next, create a Markdown file to the `documentation` folder which is named after you GitHub username (for example `kaltsoon.md`). Add some text to the file and save it. Check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Then let's switch back to the main branch with the `git checkout main` command. If we check the contents of `documentation` folder, we don't see our file there. That's because these changes _only exist in our other branch_.

Let's switch back to our branch with the `git checkout` command. Change the contents of your file in the `documentation` folder and create one more commit. Then, push the changes to GitHub with the `git push` command. We get the following error message:

```bash
fatal: The current branch kaltsoon has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin kaltsoon

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

The error means that the current branch is not in GitHub yet, just on our local computer. Let's run the command that Git suggests:

```bash
git push --set-upstream origin kaltsoon
```

Now, let's check that our branch is pushed to GitHub. Open the repository in GitHub and click the branch selector which says "main" below the repository name. We should see our branch there. Click the branch and check that the file exists in the `documentation` folder.

{: .important-title }

> Exercise 2
>
> _Each team member_ should do the steps mentioned above to create their own branch named by their GitHub username and push it to GitHub.

We can also pull remote (in GitHub) branches for our local computer and make changes to them. Check the list of branches on GitHub and pick _some other team member's branch_. Once you have picked a branch, switch to main branch first:

```bash
git checkout main
```

Then, create a branch that _has the same name_ as the one you picked from GitHub:

```bash
git branch <name-of-other-team-member-branch>
```

Once created, switch to the created branch:

```bash
git checkout <name-of-other-team-member-branch>
```

Now, we can pull the branch changes from GitHub with the `git pull` command:

```bash
git pull
```

<!-- TODO: tuleeko virhe? -->

Once we have pulled the changes from GitHub, let's change the contents of the team member's file in the `documentation` folder and push these changes to GitHub similarly as we did before. Once you have pushed the changes, check that changes are visible in GitHub like you did with your own branch.

{: .important-title }

> Exercise 3
>
> Pull _some other team member's_ branch from GitHub and make some changes for _their file_ in `documentation` folder. Push these changes to GitHub.

Once we have happy with the changes we have made in the branch, we should _merge_ it with the main branch. This basically means applying all the commits we have made for the branch to the main branch. For this we can use the `git merge` command.

Let's switch to the our branch first and see if there is any changes in GitHub:

```bash
git checkout <name-of-my-branch>
```

We can pull changes from GitHub with the `git pull` command:

```bash
git pull
```

Once we have the changes on our local computer, let's switch to the main branch:

```bash
git checkout main
```

Now, to merge our branch with the main branch we can do the following:

```bash
git merge <name-of-my-branch>
```

This creates a _merge commit_ for the main branch containing all the changes done in the other branch. Let's push the changes to GitHub:

```bash
git push
```

Now if we open the repository in GitHub, we should see that the main branch has our file in the `documentation` folder.

{: .highlight }

> Merge commits can cause _merge conflicts_. If you have trouble solving the merge conficts, see the [Git instructions](/git#merge-conflicts).

{: .important-title }

> Exercise 4
>
> Pull changes for _your branch_ from GitHub with the `git pull` command. Then, merge _your branch_ with the main branch. Check in GitHub that you changes are visible in the main branch.

{: .highlight }

> Once everyone is done with these exercises, remove each team member's file from the `documentation` folder in the main branch and push the changes to GitHub.

If you want to learn more about branches and how they are used in the software development workflow, read the [Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) tutorial by Atlassian.

## Sprint 3 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 2.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 3 goals in the Sprint Planning event:

> "The basic features for adding and organizing the reading recommendations work great! What we now need, is the possibility for the user to manage their own personl reading recommendations. This means that user should be able to register an account with an username and password. After registering, the user should be able to sign in using the username and password provided during the registration.
>
> An anonymous user, that is an user who is not signed in, should be able to see the reading recommendation list and the category list. However, they should not be able to add a reading recommendation or a category. That is, the links for adding a reading recommendation and adding a category should not be visible if the user is not signed in.
>
> After signing in, the user should be able to add reading recommendations and categories. However, a user should only be able to edit reading recommendations that they have added. That is, the "Edit" link in the reading recommendation list should only be visible if the user has added the reading recommendation."
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As an anonymous user I want to register an account so that I can manage my personal reading recommendations
2. As an anonymous user I want to sign in so that I can manage my personal reading recommendations
3. As a signed in user I want to associate the added reading recommendation with my account so that I can manage my personal reading recommendations

The order of the user stories represent the priotity provided by the Product Owner. That is, this should be the order of the user stories in the Product Backlog. The Developers should also implement the user stories in this order.

For the _first user story_, the Developers came up with the following tasks:

1. Add the spring-boot-starter-security and thymeleaf-extras-springsecurity6 dependencies for the project
2. Add a Spring Security configuration class
3. Add a User JPA entity class with id, username, role and passwordHash attributes, and a UserRepository JPA repository class
4. Add a Thymeleaf template for the user registration form
5. Add a UserController controller class and a method for rendering the user registration form
6. Add a method for the UserController class that saves the user to the database
7. Add a "Register" link to the navigation bar

For the _second user story_, the Developers came up with the following tasks:

1. Add the form login configuration to the Spring Security configuration
2. Add a UserRestController controller class and a method for the /api/users/current REST API endpoint that returns the authenticated user's information
3. Hide the "Add a reading recommendation" link in the reading recommendation list page if the user is not authenticated
4. Hide the "Add a category" link in the category list page if the user is not authenticated
5. Hide the "Register" link in the navigation bar if the user is authenticated
6. Add a "Sign in" link to the navigation bar which is visible if the user is not authenticated

{: .note }
The tasks described above are suggestions, feel free to alter them or add new tasks.

{: .important-title }

> Exercise 5
>
> Create a Sprint Backlog board for the third Spring in Trello. Name the Sprint Backlog board "Sprint 3 backlog". Add similar lists for the board as in the Sprint 2 backlog.

{: .important-title }

> Exercise 6
>
> Come up with tasks for the third user story, "As a signed in user I want to associate the added reading recommendation with my account so that I can manage my personal reading recommendations". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 12 to get an idea what the implementation could look like and the [Authentication](#authentication) section for the technical details.

{: .important-title }

> Exercise 7
>
> 1. Add these three user stories to the "Product Backlog" board as cards in Trello. The user stories should be initially in the "In sprint" list of the board.
> 2. Add the tasks to the "Sprint 3 Backlog" board as cards in Trello. The tasks should be initially in the "To do" list of the board.

## Testing

When we implement a new feature for the application we need to make sure that it works as intended. That is, we _test_ the implementation of a feature against the requirements. During the development of a feature we are constantly performing _manual testing_ for the implementation, meaning that we use the application ourselfs and see that we can perform certain actions successfully.

Manual testing is important, but we can't perform it _at scale_. When our application becomes more complex, each change to code can potentially break any part of the application. Testing each feature manually after each change to code would be tome time-consuming. That's why we implement _automated tests_: programs that test our code. We can usually execute hundreds of automated tests within just a minute. Martin Fowler explains the purpose of different kind of automated tests in his article [TestPyramid](https://martinfowler.com/bliki/TestPyramid.html).

Automated tests are implemented with programming language specific _testing frameworks_, such as Java's [JUnit](https://junit.org/junit5/) and JavaScript's [Vitest](https://vitest.dev/). During this Sprint we will implement some tests for our backend using JUnit. But first, let's discuss how to write code that is _easy to test_.

## Service classes

At the moment probably most of our application's _business logic_ is within controller methods. These methods usually read the user input from the request, do some database operations and send a response. Let's consider the following example that adds a message for an authenticated user:

```java
@Controller
public class MessageController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/messages/add")
    public ModelAndView addMessage(@ModelAttribute AddMessageDto message, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findOneByUsername(userDetails.getUsername());
        Message newMessage = new Message(message.getContent(), user);
        messageRepository.save(newMessage);

        return new ModelAndView("redirect:/");
    }

    // ...
}
```

Testing controller methods is a bit tricky because they operate on HTTP requests and responses. To make the business logic of "adding a message for an authenticated user" reusable and easier to test, we can create a service class `MessageService` with method `createMessage`:

```java
@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    public Message createMessage(AddMessageDto message, UserDetails userDetails) {
        User user = userRepository.findOneByUsername(userDetails.getUsername());
        Message newMessage = new Message(message.getContent(), user);

        return messageRepository.save(newMessage);
    }
}
```

We can use the `MessageService` class in the controller method to simplify the code:

```java
@Controller
public class MessageController {
    @Autowired
    private MessageService messageService;

    @PostMapping("/messages/add")
    public ModelAndView addMessage(@ModelAttribute AddMessageDto message, @AuthenticationPrincipal UserDetails userDetails) {
        messageService.createMessage(message, userDetails);

        return new ModelAndView("redirect:/");
    }

    // ...
}
```

Now that we have extracted the logic into the `createMessage` method, we can use it in other methods as well. Also, the logic is now easier to test as we will soon see.

{: .note }

> A common architecture for a Java application is that controllers use services and services use repositories. This architecture is referred to as the [Three-tier architecture](https://www.ibm.com/topics/three-tier-architecture).

These code snippets are from the [authentication-example](https://github.com/software-development-project-1/authentication-example) project. We'll have a closer look at it soon.

{: .important-title }

> Exercise 8
>
> Create a new package `fi.haagahelia.coolreads.service` for the project's service classes. You can do this in Eclipse by right-clicking the `src/main/java` folder and choosing New > Package. Implement a `ReadingRecommendationService` class within the package with the following method:
>
> ```java
> @Service
> public class ReadingRecommendationService {
>   @Autowired
>   ReadingRecommendationRepository recommendationRepository;
>
>   public ReadingRecommendation createRecommendation(AddReadingRecommendationDto recommendation) {
>       // Save the reading recommendation to the database and return the saved ReadingRecommendation object
>   }
> }
> ```
>
> It is fine that the names of your classes differ from these. Replace the names of the classes based on the classes on your project. You can also change the method parameters if they aren't suitable.
>
> Then, extract the current controller method's code into the `createRecommendation` method and call it in the controller method:
>
> ```java
> @Controller
> public class ReadingRecommendationController {
>   @Autowired
>   private ReadingRecommendationService recommendationService;
>
>    // ...
>
>   @PostMapping("/recommendations/add")
>   public ModelAndView addRecommendation(@ModelAttribute AddReadingRecommendationDto recommendation) {
>       recommendationService.createRecommendation(recommendation);
>
>       return new ModelAndView("redirect:/");
>   }
> }
> ```
>
> This change in code should not change how the application works in the user's perspective. Make sure that adding a reading recommendation works as before.

## Configuration for tests

Because our tests will alter the database we should consider _using a different database for tests_. This is a common practice because we don't want the tests to alter (for example delete) any data we are using during the development.

The database related configuration is in the `src/main/resources/application.properties` configuration file:

```
spring.datasource.url=jdbc:h2:file:~/cool-reads;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
```

The _database is stored in a file_ located in `~/cool-reads`. We can use a different, _in-memory database_ for the tests. For this we have a separate `src/test/resources/application.properties` configuration file (note the `test` folder in the path):

```
spring.datasource.url=jdbc:h2:mem:cool-reads-test;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
```

The configuration in the `src/test/resources/application.properties` file will be used while we are running the tests, which makes it suitable for test-specific configuration.

## Testing service classes

JUnit tests are implemented as test classes. Methods annotated with the `@Test` annotation are the _test methods_, which test a specific _test scenario_.

Test methods usually share certain common setup code, which should be done before each test method. This setup can be put inside a method annotated with the `@BeforeEach` annotation. For example here's the `setUp` method for the authentication-example project's [MessageServiceTest](https://github.com/software-development-project-1/authentication-example/blob/main/src/test/java/fi/haagahelia/coolreads/service/MessageServiceTest.java) test class:

```java
@SpringBootTest
class MessageServiceTest {
    // ...

    private UserDetails userDetails;

    @BeforeEach
    void setUp() throws Exception {
        // Make sure that the database is empty before each test
        messageRepository.deleteAll();
        userRepository.deleteAll();

        String passwordHash = passwordEncoder.encode("password123");
        User user = new User("tester", passwordHash, "USER");
        userRepository.save(user);

        // Initialize an object for the authenticated user for each test
        this.userDetails = new org.springframework.security.core.userdetails.User(user.getUsername(),
            user.getPasswordHash(), AuthorityUtils.createAuthorityList(user.getRole()));
    }

    // The test methods go here...
}
```

The tests should be _independent_ from each other, meaning that for example the order in which the tests are executed should not matter. To achieve the independence, each test needs to start with an _empty database_. This is achieved by deleting all entities in the `setUp` method before each test.

The test methods test specific scenario. We come up with scenarios by analyzing the code (for example a certain method) that we are testing: how does the code behave based on different parameters or database state? For example if we call a method with certain parameters, we expect it to return a certain value. We need to cover all divergences in the code behavior with a test scenario.

For example, if we consider the test scenarios for the `createMessage` method:

1. If we call the `createMessage` method with an object containing the message content, we expect that a single `Message` entity is saved to database with that content
2. If we call the `createMessage` method with an user object, we expect that a single `Message` entity is saved to database and it should be associated with that user object

To structure these test cases as test methods, we can follow the popular [Arrange-Act-Assert](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/) pattern:

1. _Arrange_ inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test
2. _Act_ on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior
3. _Assert_ expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails

Here's how the second test scenario could be tested with a `createMessageSetsUserCorrectly` test method:

```java
@SpringBootTest
class MessageServiceTest {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private MessageService messageService;

    private UserDetails userDetails;

    @BeforeEach
    void setUp() throws Exception {
        messageRepository.deleteAll();
        userRepository.deleteAll();

        String passwordHash = passwordEncoder.encode("password123");
        User user = new User("tester", passwordHash, "USER");
        userRepository.save(user);

        this.userDetails = new org.springframework.security.core.userdetails.User(user.getUsername(),
            user.getPasswordHash(), AuthorityUtils.createAuthorityList(user.getRole()));
    }

    @Test
    void createMessageSetsUserCorrectly() {
        // Arrange
        AddMessageDto message = new AddMessageDto("Hello world!");

        // Act
        messageService.createMessage(message, this.userDetails);

        // Assert
        List<Message> messages = messageRepository.findAll();
        assertEquals(1, messages.size());
        assertEquals("tester", messages.get(0).getUser().getUsername());
    }
}
```

{: .important-title }

> Exercise 9
>
> Create a new package `fi.haagahelia.coolreads.service` for the project's service class tests. You can do this in Eclipse by right-clicking the `src/test/java` folder and choosing New > Package. Implement a `ReadingRecommendationServiceTest` test class within the package with the following test methods for the `createRecommendation` method:
>
> ```java
> @SpringBootTest
> class ReadingRecommendationServiceTest {
>   // ...
>
>   @BeforeEach
>   void setUp() throws Exception {
>       // Delete all reading recommendations and categories
>   }
>
>   @Test
>   void createRecommendationSetsAttributesCorrectly() {
>       // Arrange: initialize a AddReadingRecommendationDto object with other attributes, except the category (the recommendation is uncategorized)
>
>       // Act: call the createRecommendation method with the initialized object
>
>       // Assert: retrieve all the recommendations from the database using the recommendationRepository.findAll() method. Then, the attributes of the first (and the only) object on the list should match the attributes of the AddReadingRecommendationDto object
>   }
>
>   @Test
>   void createRecommendationSetsCategoryAsNullWhenCategoryIsNotProvided() {
>       // Arrange: initialize a AddReadingRecommendationDto object with other attributes, except the category (the recommendation is uncategorized)
>
>       // Act: call the createRecommendation method with the initialized object
>
>       // Assert: retrieve all the recommendations from the database using the recommendationRepository.findAll() method. Then, the category attribute of the first (and the only) object on the list should be null
>   }
>
>   @Test
>   void createRecommendationSetsCategoryCorrectlyWhenCategoryIsProvided() {
>       // Arrange: initialize a Category object and save it to the database by calling the category.save() method. Then, initialize a AddReadingRecommendationDto object with with a category matching the initialized Category object and the other attributes
>
>       // Act: call the createRecommendation method with the initialized object
>
>       // Assert: retrieve all the recommendations from the database using the recommendationRepository.findAll() method. Then, the category attribute of the first (and the only) object on the list should match the initialized Category object (you can for example check that the name attribute of the objects is the same)
>   }
> }
> ```
>
> Replace the arrange, act and assert comments with the actual test implementation. The implementation doesn't have to precisely match the comment descriptions. Make alterations based on your implementation of the `createRecommendation` method. You can run the tests for the project either in Eclipse or by running the command `./mvnw test` in Git Bash.

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

For the authentication-example project, the report looks like this:

![JaCoCo](/assets/jacoco-overall.png)

The "Cov" column determines the _percentage of lines covered by the tests_. Bigger the number, better the coverage.

If we click a package name, we see the classes in the package. By clicking a class name, we see the methods of the class. By clicking a method we see the method's implementation as code. For example the `createMessage` method looks the following:

![JaCoCo](/assets/jacoco-class.png)

Green highlight indicates that the line _is fully covered_. Yellow highlight indicates that the line is _partially covered_. For example a certain condition of an `if` statement is not covered by a test. Red highlight indicates that line is _not covered_.

{: .note }

> When we change the code (in the tests or in the application), we need to re-run `./mvnw test` to generate the coverage report for the latest tests.

{: .important-title }

> Exercise 10
>
> Use the jacoco-maven-plugin in the project as instructed above. Generate a coverage report and check the coverage of the `createRecommendation` method we implemented and tested previously. Are all the lines of the method covered? If not, implement tests for the uncovered lines.

## Authentication

Most of the application have features that need to verify the user's identity before they are allowed to perform certain actions. This process is referred to as _authentication_. User's identity can be verified in different ways, but a quite common process is to associate a password with a certain username or some other unique identifier such as email. The user who knows the password of a username will be identified as that user.

The user's password is not stored to the database as a plain text, instead a [hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function) presentation of the password is stored. Hash is like a secret we put behind a door, lock it with a key and throw the key away. There's no way of getting the original text from a hash. But we can _comprare_ two hashes and see if their value is the same. If the data in the database gets into wrong hands, the password hashes can't be used to authenticate.

In web applications the common authentication flow goes like this:

1. The user sends a request with a username and password to the server
2. The server fetches the password hash with the given username from the database, hashes the provided password and compares it with the password hash in the database
3. If the hashes match, the server provides the user with a _token_ that they can use to authenticate the future requests. The server commonly puts the token to a [cookie](https://en.wikipedia.org/wiki/HTTP_cookie) and it is sent to server in each request by the web browser

[Spring Security](https://spring.io/projects/spring-security) is a popular authentication and access-control framework for Spring applications. Let's start using Spring Security in our application by adding the dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

To use authentication related information in Thymeleaf templates, we can use the [Thymeleaf Spring Security dialect](https://github.com/thymeleaf/thymeleaf-extras-springsecurity). Let's also add that dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity6</artifactId>
</dependency>
```

Next, we need to configure the Spring Security a bit. Let's add the following `SecurityConfig` configuration class for our project:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((requests) -> requests.requestMatchers(antMatcher("/"), antMatcher("/register"),
                                antMatcher("/categories"), antMatcher("/frontend/**"), antMatcher("/api/**")).permitAll().anyRequest().authenticated());

        http.formLogin((form) -> form.permitAll());
        http.logout((logout) -> logout.permitAll());
        http.csrf(csrf -> csrf.disable());

        return http.build();
    }
}
```

The `passwordEncoder` method returns the password encoder object used to hash passwords. We'll use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) which is the de facto hash algorithm for passwords.

The `securityFilterChain` returns the configuration object for Spring Security. The first piece of configuration determines the access-control for our application. We will allow anyone (authenticated or not) access the following paths:

- `/`, the reading recommendation list page, 
- `/register`, the registration form and registration form submission
- `/categories`, the category list page
- `/frontend/**`, the JavaScript assets required by the frontend application. The `**` part of the path means any path
- `/api/**`, the REST API endpoints

{: .note }
> Change this configuration if your application's paths don't match the ones above.

The `permitAll()` method call _will permit anyone to access the these paths_. This is follow by `anyRequest().authenticated()` method call, which means that _request to any other path will require authentication_.

{: .important-title }

> Exercise 11
>
> Implement the tasks of the first user story, "As an anonymous user I want to register an account so that I can manage my personal reading recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-3-user-story-1.png)
>
> Start the implementation by adding the spring-boot-starter-security and thymeleaf-extras-springsecurity6 dependencies for the project. Add similar Spring Security configuration class as instructed above.

{: .important-title }

> Exercise 12
>
> Implement the tasks of the second user story, "As an anonymous user I want to sign in so that I can manage my personal reading recommendations".
>
> Tips for implementing the tasks:
>
> - See how the `/api/users/current` REST API endpoint is implemented in the [UserRestController](https://github.com/software-development-project-1/authentication-example/blob/main/src/main/java/fi/haagahelia/coolreads/controller/UserRestController.java) class in the authentication-example project
> - [Spring Security with Thymeleaf](https://www.baeldung.com/spring-security-thymeleaf)
> - See how the "Add a message" button is hidden if the user is not signed in in the [messagelist](https://github.com/software-development-project-1/authentication-example/blob/main/src/main/resources/templates/messagelist.html) Thymeleaf template in the authentication-example project. Use the same logic for the "Add a category" link
> - You can sign out by visiting <http://localhost:8080/logout> in a web browser. You can also add a "Sign out" link to the navigation bar like in the [layout](https://github.com/software-development-project-1/authentication-example/blob/main/src/main/resources/templates/layout.html) Thymeleaf template in the authentication-example project
> - Once you have implemented the `/api/users/current` REST API endpoint, you can use the `fetch` function in the frontend to fetch the authenticated user and use that information to determine whether to hide the "Add a reading recommendation" link:
>
>   ```js
>   // ...
>   const [currentUser, setCurrentUser] = useState();
>
>   useEffect(() => {
>     fetch("/api/users/current")
>       .then((response) => {
>         if (!response.ok) {
>           // Backend response was not successful (HTTP status code is not in the range 200-299)
>           throw new Error("User is not authenticated");
>         }
>
>         return response.json();
>       })
>       .then((user) => {
>         setCurrentUser(user);
>       });
>   }, []);
>   ```
>
>   When we render the "Add a reading recommendation" link we can use the following logic to hide it:
>
>   ```jsx
>   {
>     currentUser && (
>       <a class="btn btn-primary" href={`/recommendations/add`}>
>         Add a reading recommendation
>       </a>
>     );
>   }
>   ```

{: .important-title }

> Exercise 13
>
> Implement the tasks of the third user story, "As a signed in user I want to associate the added reading recommendation with my account so that I can manage my personal reading recommendations".
>
> Put the business logic of "creating a reading recommendation for a user" into the `createReadingRecommendation` method implemented in exercise 8. These changes will probably break the tests implemented in exercise 9. Fix the existing tests, but you don't have to implement any new tests.
>
> The "Edit" link should only be visible in the reading recommendation list if the user has added the reading recommendation.
>
> Tips for implementing the tasks:
>
> - See how the `Message` entity is associated with the `User` entity in the [MessageService](https://github.com/software-development-project-1/authentication-example/blob/main/src/main/java/fi/haagahelia/coolreads/service/MessageService.java) class in the authentication-example project
> - You can use the following logic to hide the "Edit" link in the frontend application:
>
>   ```jsx
>   <td>
>     {currentUser &&
>       recommendation.user &&
>       currentUser.id === recomendation.user.id && (
>         <a
>           class="btn btn-secondary"
>           href={`/recommendations/${recommendation.id}/edit`}
>         >
>           Edit
>         </a>
>       )}
>   </td>
>   ```

{: .important-title }

> Exercise 14
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create create a GitHub release for the project. Create a new tag called "sprint3". The release title should be "Sprint 3". Give a brief description for the release that describes the features implemented during the Sprint.
> [Generate a JAR file](/sprint-2#jar) for the application like we did in the previous Sprint and add the JAR file to the release.

## Peer review

{: .highlight }

> Writing a peer review for each team member and receiving a passing grade from the peer reviews is required to pass the course.

The peer review is used to assess each team member. The 10 personal points are based on the peer reviews and the teacher's observations. _Every team member must write a peer review_.

The peer review is conducted with a form. You can find the link for your team's peer review form in [Moodle]({{site.peer_review_moodle_link}}). In the form you will need to assess every team member's (including yourself) efforts in the team work in the following aspects:

- _Activity in team work_: Attendance and active presence during team meetings
- _Technical contributions_: amount of working code written _or_ active participation in the writing process of the code (for example [pair-programming](https://en.wikipedia.org/wiki/Pair_programming))
- _Project management and documentation contributions_: Backlog management, efforts to improve the process (for example in Retrospectives), writing project related documentation

You will need to grade each these aspects in scale of 0-5 and provide a short reasoning for the grade. The peer reviews are _anonymous_, the team members won't see each other's peer reviews.

{: .important-title }

> Exercise 15
>
> Write the peer review for your team members. You can find the link to the peer review form in [Moodle]({{site.peer_review_moodle_link}}).

## Final report

Add a file `final-report.md` to the `documentation` folder. In that file, write _the final report_ for the course, which answers the following questions:

- What challenges did you face during each Sprint? Describe both technical and project management related challenges. You can use the Sprint Retrospective notes in the `retrospectives` folder.
- Where you able to overcome these challenges? If so, how?
- In which areas did you succeed as a team?
- In which areas there was room for improvement?
- What did you learn during the course? What would you have wanted to learn more about? What felt irrellevant?

The final report should also include the name of each team member.

Add a link to the `final-report.md` file in Github to the `README.md` file under the "Documentation" subheading.

{: .important-title }

> Exercise 16
>
> Write the final report for the course as instructed above.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 3 deadline on {{site.sprint_3_deadline}}.

## ⭐ Bonus user story

{: .note }

> This user story is optional. If you have implemented all other user stories, feel free to implement this one.

The Product Owner came up with a feature for the application if we run out of work during the Sprint:

> "The category filter on the reading recommendation list is very useful for finding the right things to read. But it would even more useful if a user would be able to filter reading recommendations based on their title or description.
>
> There could be a search field in the reading recommendation list page. If either the title or the description of a reading recommendation contains the keyword typed in to the field, the reading recommendation would be listed. If there's no keyword, all the reading recommendations would be listed."
>
> -- The Product Owner

{: .important-title }

> Bonus exercise
>
> Come up with a user story based on the Product Owner's description and add it to the "Product Backlog" board in Trello. Then, split the user story into tasks and add those to the "Sprint 2 Backlog" board in Trello. Finally, implement the tasks.
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-3-user-story-bonus.png)
>
> If you have trouble with the implementation, here's a high-level idea of the implementation:
>
> ```jsx
> // ...
> const [recommendations, setRecommendations] = useState([]);
> const [keyword, setKeyword] = useState("");
>
> let filteredRecommendations = recommendations;
>
> if (keyword) {
>   filteredRecommendations = recommendations.filter(/* ... */);
> }
> ```
>
> Check the documentation for the [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method to learn how to filter arrays.
