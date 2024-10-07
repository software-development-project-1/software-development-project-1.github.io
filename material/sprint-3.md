---
layout: page
title: Sprint 3
permalink: /sprint-3-todo
nav_order: 8
nav_exclude: true
---

{% include toc.html %}

# Sprint 3

For the final Sprint of the course, the Sprint 3, we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to testing and authentication.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_3_deadline}}. We will be working on the exercises for a bit over a week.

The Sprint assesment is done based on the exercises 1-24. The team can earn up to 10 points from this Sprint. This is the final Sprint of the course and the team's project points will be composed of the points from this Sprint and the two previous Sprints. That is, the maximum number of project points is 40.

During this Sprint, each team member will write a [peer review](#peer-review) in which they asses themselves and other team members. The results of the peer review will heavily impact the personal points of a team member. Each team member can earn up to 20 personal points.

{: .highlight }

> At the end of this Sprint, each team member has to submit the [final report](#final-report) and the [peer review](#peer-review). Both of them are _required to pass the course_. Submitting either of them after the Sprint deadline will decrease the personal points.

## Retrospective

Organize a similar Mad, Sad, Glad retrospective in Flinga for the Sprint 2 as we did at the end of the [Sprint 1](/sprint-2#retrospective).

{: .important-title }

> Exercise 1
>
> The Scrum Master should create a new session in Flinga as instructed above. Name the session "Retrospective 2". Once the session is created, other team members should join the session with the "Join link". Setup the session board and organize the Retrospective event.
>
> Did similar issues arise as in Sprint 1 retrospective? If so, try to come up with different actions as before or ask the teacher for tips on how to solve these issues.
>
> Once you have completed the Retrospective, add a link to the Retrospective's Flinga board and write down the successes, issues and actions you came up during the Retrospective to the repository's `retrospectives/sprint2.md` file and push the changes to GitHub.

{: .important-title }

> Exercise 2
>
> Choose a new (not the same team member as during the previous Sprint) Scrum Master among the team members for the third Sprint.

## 🏃‍♂️ Sprint 3 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 2.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 3 goals in the Sprint Planning event:

> "We now have the basic features for managing and taking quizzes. What we still need is a way for the teachers to manage their personal quizzes.
>
> The teacher should be able to register with a username, email, bio and password in the teacher dashboard. The teacher should not be able to register without an email, with a username less than three characters long or a password less than eight characters long. The username or email should not be already taken by another registered user. The teacher can provide a bio to describe themselves. The bio is optional. The user should also be required to retype the password to make sure that they didn't accidently mistype the password.
>
> Once registered, the teacher should be able to sign in with their username and password. If the user is not signed in the navigation bar should have "Register" and "Sign in" links, which will take the user to the register or sign in page.
>
> An anonymous user, that is an user who is not signed in, should be able to see the quiz and category list. However, they should not be able to add a quiz or a category. That is, the links for adding a quiz and category should not be visible if the user is not signed in.
>
> After signing in, the teacher should be able to add a quiz or a category. However, the teacher should only be able to edit and delete quizzes and categories they have added themselves. That is, the "Edit" link and the "Delete" button in the quiz list should only be visible if the teacher has added the quiz. The same logic should be applied to the categories and quiz's questions. The quiz list should also display the username of the teacher who has added the quiz both in teacher and student dashboard.
>
> The student should be able to share their thoughts about a quiz by writing a review. For this purpose there could be a separate review page. A review has a reviewer's nickname, a rating between 1 and 5 and a review text. The student should not be able to add a review with a nickname less than three characters long, a blank review text or without a rating between 1 and 5. The student should not be able to review a non-published quiz.
>
> The review page should list the added reviews from newest to oldest order. Each review should display the information submitted by the student and the date when the review was written. The review page should also display the number of reviews the quiz has. It should also be possible for the student to edit and delete reviews in the review page."
>
> -- The Product Owner

After some discussion the Scrum Team planned the following user stories:

1. {{site.sprint_3_user_story_1}}
2. {{site.sprint_3_user_story_2}}
3. {{site.sprint_3_user_story_3}}
4. {{site.sprint_3_user_story_4}}
5. {{site.sprint_3_user_story_5}}
6. {{site.sprint_3_user_story_6}}
7. {{site.sprint_3_user_story_7}}

{: .important-title }

> Exercise 3
>
> Make sure that all task related issues that have been completed during the Sprint 2 are _closed_ and their _status is "Done"_ in the Backlog project. Do the same with the user story related issues _accepted by the Product Owner_ during the Sprint Review event.
>
> Create a new milestone for the third Sprint. If you didn't manage to implement all user stories during the previous Sprint, set the third Sprint's milestone for the unfinished user story and task issues. If the Sprint Review brought up implementation improvements or flaws (e.g. bugs), create appropriate issues for the tasks.

{: .important-title }

> Exercise 4
>
> Create an issue for each _user story_. Add the "user story" label for each issue. Set the Sprint milestone and add the issues to the backlog.

{: .note }

> The [Authentication](#authentication) section covers topics related to the authentication. Take a look at it before planning the authentication-related tasks.

{: .important-title }

> Exercise 5
>
> Plan the tasks for the first user story, "{{site.sprint_3_user_story_1}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-3-us-1-register.png)

{: .important-title }

> Exercise 6
>
> Plan the tasks for the second user story, "{{site.sprint_3_user_story_2}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-3-us-2-1-sign-in.png)
>
> ![](/assets/sprint-3-us-2-2-sign-in.png)

{: .important-title }

> Exercise 7
>
> Plan the tasks for the third user story, "{{site.sprint_3_user_story_3}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-3-us-3-1-personal-quizzes.png)
>
> ![](/assets/sprint-3-us-3-2-personal-quizzes.png)

{: .important-title }

> Exercise 8
>
> Plan the tasks for the fourth user story, "{{site.sprint_3_user_story_4}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-3-us-4-add-review.png)

{: .important-title }

> Exercise 9
>
> Plan the tasks for the fifth user story, "{{site.sprint_3_user_story_5}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-3-us-5-1-list-reviews.png)
>
> ![](/assets/sprint-3-us-5-2-list-reviews.png)

{: .important-title }

> Exercise 10
>
> Plan the tasks for the sixth user story, "{{site.sprint_3_user_story_6}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 11
>
> Plan the tasks for the seventh user story, "{{site.sprint_3_user_story_7}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

## Testing

When we implement a new feature for the application we need to make sure that it works as intended. That is, we _test_ the implementation of a feature against the requirements. During the development of a feature we are constantly performing _manual testing_ for the implementation, meaning that we use the application ourselfs and see that we can perform certain actions successfully.

Manual testing is important, but we can't perform it _at scale_. When our application becomes more complex, each change to code can potentially break any part of the application. Testing each feature manually after each change to code would be tome time-consuming. That's why we implement _automated tests_: programs that test our code. We can usually execute hundreds of automated tests within just a minute. Martin Fowler explains the purpose of different kind of automated tests and their pros and cons in his article [TestPyramid](https://martinfowler.com/bliki/TestPyramid.html).

![TestPyramid](/assets/test-pyramid.png)

Fowler categorizes different tests in three categories: _unit_, _service_ and _UI_ (user interface) tests. The test pyramid represents the _amount_ of these different kind of tests we should have for our application. There are pros and cons for the different kind of tests. While we go up in the pyramid we get better reliability that our application works as inteaded as a whole, but the tests becomes _laborious to maintain_, _difficult to implement_, and _time consuming to run_. This is why our test portfolio should be balanced.

Automated tests are implemented with programming language specific _testing frameworks_, such as Java's [JUnit](https://junit.org/junit5/) and JavaScript's [Vitest](https://vitest.dev/). During this Sprint we will implement some integration tests for our backend's REST API endpoints using JUnit and the [MockMVC](https://docs.spring.io/spring-framework/reference/testing/spring-mvc-test-framework.html) framework.

### Unit tests

_Unit tests_ constitute the bottom of the test pyramid. Most of our application's tests should be unit tests. Unit tests test the smallest testable parts of an application, called _units_. These are commonly simple methods that does some operation based on their parameters and return some value. Units never _integrate_ to other parts of the application code, such as the database.

Here's an example of unit tests for a `calculateWords` method, which returns the number of words in the string provided as the paratamer:

```java
@Test
void calculateWordsCalculatesSingleWordCorrectly() {
    String message = "Hello";
    assertEquals(1, MessageUtils.calculateWords(message));
}

@Test
void calculateWordsCalculatesManyWordsCorrectly() {
    String message = "Hello world";
    assertEquals(2, MessageUtils.calculateWords(message));
}

@Test
void calculateWordsCalculatesZeroWordCorrectly() {
    String message = "";
    assertEquals(0, MessageUtils.calculateWords(message));
}
```

Unit tests have these pros and cons:

- 🟢 Simple to implement and easy to maintain
- 🟢 Fast to run
- 🔴 Doesn't provide good reliability that the application works as a whole

### Integration tests

_Integration tests_ (also known as service tests) constitute the middle of the test pyramid. We should have quite many integration tests for our application. As the name suggests, integration tests test that different parts of our application code work as inteded once they are _integrated_. For example, methods that perform database operations are tested with integration tests.

Here's an example of integration tests for a REST API endpoint `/api/messages` implemented by the `getAllMessages` method:

```java
@Test
public void getAllMessagesReturnsEmptyListWhenNoMessagesExist() throws Exception {
    this.mockMvc.perform(get("/api/messages"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(0)));
}

@Test
public void getAllMessagesReturnsListOfMessagesWhenMessagesExist() throws Exception {
    Message firstMessage = new Message("First message");
    Message secondMessage = new Message("Second message");
    messageRepository.saveAll(List.of(firstMessage, secondMessage));

    this.mockMvc.perform(get("/api/messages"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(2)))
            .andExpect(jsonPath("$[0].content").value("First message"))
            .andExpect(jsonPath("$[0].id").value(firstMessage.getId()))
            .andExpect(jsonPath("$[1].content").value("Second message"))
            .andExpect(jsonPath("$[1].id").value(secondMessage.getId()));
}
```

These tests send a request to the REST API endpoint and verify that the JSON response body contains the required information.

Integration tests have these pros and cons:

- 🟢 Fairly simple to implement and easy to maintain
- 🟢 Fairly fast to run
- 🟡 Provides a reasonable reliability that the application works as a whole

### UI tests

_UI tests_ (also known as end-to-end tests) constitute the top of the test pyramid. We should have a moderate amount of UI tests in our application. As the name suggests, UI tests test that the application works by actually performing actions on the user interface similarly as a real user. This means opening a page on a web browser, filling form fields, clicking buttons and expecting the page to have some content. Because UI tests need the user interface to operate on, they are _slow to execute_. In addition, because the application's user interface commonly changes more often than the code, UI tests are laborious to maintain.

Here's an example of testing the submission of the message form with the [Robot Framework](https://robotframework.org/) test automation framework:

```
*** Test Cases ***
Submit Valid Message
    Go To http://localhost:8080/add/message
    Input Text content "Hello world!"
    Click Button "Add"
    Go To http://localhost:8080
    Page Should Contain "Hello world!"
```

UI tests have these pros and cons:

- 🟢 Provides a good reliability that the application works as a whole
- 🔴 Difficult to implement and laborious to maintain
- 🔴 Slow to run

## Configuration for tests

Because our tests will alter the database we should consider _using a different database for tests_. This is a common practice because we don't want the tests to alter (for example delete) any data we are using during the development.

The database related configuration is in the `src/main/resources/application.properties` configuration file:

```
spring.datasource.url=jdbc:h2:file:~/quizzer;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
```

The _database is stored in a file_ located in `~/quizzer`. We can use a different, _in-memory database_ for the tests. To achieve this, we can add a test-specific `src/test/resources/application.properties` configuration file (note the `test` folder in the path):

```
spring.datasource.url=jdbc:h2:mem:quizzer-test;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
```

The configuration in the `src/test/resources/application.properties` file will be used while we are running the tests, which makes it suitable for test-specific configuration.

{: .important-title }

> Exercise 12
>
> Add a test-specific configuration file and configure a separate database for the tests. Make sure that running the tests doesn't alter (for example delete any data) the development environment database.

## Testing REST API endpoints

> "Write tests. Not too many. Mostly integration."
>
> -- Kent C. Dodds

Integration tests are a great balance of reliability and performance. Kent C. Dodds covers the importance of integration tests in his article [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests) As the name of the article implies, Dodds suggests that most of the tests for the application should be integration tests. He makes some fair points to justify this claim:

> One thing that it doesn't show though is that as you move up the pyramid, the confidence quotient of each form of testing increases. You get more bang for your buck. So while E2E tests may be slower and more expensive than unit tests, they bring you much more confidence that your application is working as intended.

To get some confidence that our application is working as inteded, let's implement some integration tests for our REST API endpoints.

In Java applications, tests are implemented and executed with the [JUnit](https://junit.org/junit5/) testing framework. JUnit tests are implemented as _test classes_. Test classes can be annoted with the `@SpringBootTest` annotation to access the Spring application context in tests. This, for example makes the `@Autowired` annotations work. Methods annotated with the `@Test` annotation are the _test methods_, which test a specific _test scenario_.

Test methods usually share certain common setup code, which should be executed before each test method. This setup can be put inside a method annotated with the `@BeforeEach` annotation. The tests should be _independent_ from each other, meaning that for example the order in which the tests are executed should not matter. To achieve the independence, each test needs to start with an _empty database_. This is achieved by deleting all entities in the `setUp` method before each test.

As an example, let's consider testing the following methods of a `MessageRestController` class:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageRestController {
    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("")
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable Long id) {
        return messageRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Message with id " + id + " does not exist"));
    }

    @PostMapping("")
    public Message createMessage(@Valid @RequestBody CreateMessageDto message, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                bindingResult.getAllErrors().get(0).getDefaultMessage());
        }

        return messageRepository.save(message);
    }
}
```

The test class files should be placed to the `src/test/java` folder and the name of the test class should have a `Test` prefix. For example, we can test the `MessageRestController` class with a `MessageRestControllerTest` class.

To make sure that the tests in the test class are independent, the `setUp` method should delete all messages at the beginning of each test:

```java
package fi.haagahelia.quizzer.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.List;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import fi.haagahelia.quizzer.model.Message;
import fi.haagahelia.quizzer.repository.MessageRepository;

@SpringBootTest
@AutoConfigureMockMvc
public class MessageRestControllerTest {
    @Autowired
    MessageRepository messageRepository;

    @Autowired
    private MockMvc mockMvc;

    ObjectMapper mapper = new ObjectMapper();

    @BeforeEach
    void setUp() throws Exception {
        // Make sure that the database is empty before each test
        messageRepository.deleteAll();
    }

    // The test methods go here
}
```

The test methods test specific scenario. We come up with scenarios by analyzing the code (for example a certain method) that we are testing: how does the code behave based on different parameters or database state? For example if we call a method with certain parameters, we expect it to return a certain value. We need to cover all divergences in the code behavior with a test scenario.

For example, we could have the following test scenarios for the `getAllMessages` method introduced above:

1. If we send a request to the `/api/messages` endpoint and _there is no messages in the database_, the JSON response body should be an empty list
2. If we send a request to the `/api/messages` endpoint and _there are messages in the database_, the JSON response body should contain the messages as a list

To structure these test cases as test methods, we can follow the popular [Arrange-Act-Assert](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/) pattern:

1. _Arrange_ inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test
2. _Act_ on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior
3. _Assert_ expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails

Here's the two test methods for our test scenarios:

```java
@Test
public void getAllMessagesReturnsEmptyListWhenNoMessagesExist() throws Exception {
    // Act
    this.mockMvc.perform(get("/api/messages"))
    // Assert
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(0)));
}

@Test
public void getAllMessagesReturnsListOfMessagesWhenMessagesExist() throws Exception {
    // Arrange
    Message firstMessage = new Message("First message");
    Message secondMessage = new Message("Second message");
    messageRepository.saveAll(List.of(firstMessage, secondMessage));

    // Act
    this.mockMvc.perform(get("/api/messages"))
    // Assert
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(2)))
            .andExpect(jsonPath("$[0].content").value("First message"))
            .andExpect(jsonPath("$[0].id").value(firstMessage.getId()))
            .andExpect(jsonPath("$[1].content").value("Second message"))
            .andExpect(jsonPath("$[1].id").value(secondMessage.getId()));
}
```

The tests use the `perform` method of the `MockMVC` class to send a GET request to the `/api/messages` endpoint. Then, we expect that the HTTP status of the response is `200 OK` and the JSON of the response body contains the messages we saved in the arrange step.

For another GET request example, here's the test methods of the `getMessageById` method introduced above:

```java
@Test
public void getMessageByIdReturnsMessageWhenMessageExists() throws Exception {
    // Arrange
    Message message = new Message("Message");
    messageRepository.save(message);

    // Act
    this.mockMvc.perform(get("/api/messages/" + message.getId()))
    // Assert
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.content").value("Message"))
            .andExpect(jsonPath("$.id").value(message.getId()));
}

@Test
public void getMessageByIdReturnsNotFoundWhenMessageDoesNotExist() throws Exception {
    // Act
    this.mockMvc.perform(get("/api/messages/1"))
    // Assert
            .andExpect(status().isNotFound());
}
```

For a POST request example, here's the test methods of the `createMessage` method introduced above:

```java
@Test
public void createMessageSavesValidMessage() throws Exception {
    // Arrange
    Message message = new CreateMessageDto("Hello world!");
    String requestBody = mapper.writeValueAsString(message);

    // Act
    this.mockMvc.perform(post("/api/messages").contentType(MediaType.APPLICATION_JSON).content(requestBody))
    // Assert
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.content").value("Hello world!"));

    List<Message> messages = messageRepository.findAll();
    assertEquals(1, messages.size());
    assertEquals("Hello world!", messages.get(0).getContent());
}

@Test
public void createMessageDoesNotSaveInvalidMessage() throws Exception {
    // Arrange
    Message message = new CreateMessageDto("");
    String requestBody = mapper.writeValueAsString(message);

    // Act
    this.mockMvc.perform(post("/api/messages").contentType(MediaType.APPLICATION_JSON).content(requestBody))
    // Assert
            .andExpect(status().isBadRequest());

    List<Message> messages = messageRepository.findAll();
    assertEquals(0, messages.size());
}
```

The basic test functionalitis are provided by the spring-boot-starter-test library. Let's add it to the `<dependencies>` list in the `pom.xml` file

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

The `jsonPath` method used to access the JSON payload in the test expectations is provided by the json-path libary. Before we start testing our REST API endpoints, let's add the json-path dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>com.jayway.jsonpath</groupId>
    <artifactId>json-path</artifactId>
    <version>2.8.0</version>
    <scope>test</scope>
</dependency>
```

While testing your application's REST API endpoints, refer to the examples above and guides, such as [Integration Testing in Spring](https://www.baeldung.com/integration-testing-in-spring).

{: .note }

> You can run the tests for the project either in your editor or by running the `./mvnw test` command on the command-line.

{: .highlight }

> If the implementation of the endpoint doesn't work as described in the test scenarios, fix the implementation.

{: .important-title }

> Exercise 13
>
> Implement a test class within the `src/test/java` package with the following test methods for the endpoint for _getting all (published) quizzes_:
>
> - `getAllQuizzesReturnsEmptyListWhenNoQuizzesExist`: send a request without saving a quiz to the database. Then, the response should have an empty list
> - `getAllQuizzesReturnsListOfPublishedQuizzesWhenQuizzesExist`: save a few quizzes (both published and non-published) to the database and send a request. Then, the response should have a list of the saved _published quizzes_
>
> Create an issue for this task.

{: .note }

> To keep the tests organized, it is good idea to implement a separate test class for each controller class.

{: .important-title }

> Exercise 14
>
> Implement the following test methods for the endpoint for _getting a quiz by id_:
>
> - `getQuizByIdReturnsPublishedQuizWhenQuizExists`: save a quiz to the database and send a request. Then, the response should have the saved quiz
> - `getQuizByIdReturnsErrorWhenQuizDoesNotExist`: send a request without saving a quiz to the database. Then, the response should have an appropriate HTTP status

{: .important-title }

> Exercise 15
>
> Implement the following test methods for the endpoint for _getting the questions of a quiz_:
>
> - `getQuestionsByQuizIdReturnsEmptyListWhenQuizDoesNotHaveQuestions`: save a quiz without questions to the database and send a request. Then, the response should have an empty list
> - `getQuestionsByQuizIdReturnsListOfQuestionsWhenQuizHasQuestions`: save a quiz with a few questions to the database and send a request. Then, the response should have a list of the quiz's questions
> - `getQuestionsByQuizIdReturnsErrorWhenQuizDoesNotExist`: send a request without saving a quiz to the database. Then, the response should have an appropriate HTTP status
> - An appropriate test methods for testing that the difficulty level filtering works

{: .important-title }

> Exercise 16
>
> Implement a test class with the following test methods for the endpoint for _creating an answer_:
>
> - `createAnswerSavesAnswer`: save a _published quiz_ with a question to the database and send a question id in the request body. Then, the response should have the saved answer and the database should have one answer with the attributes matching the request body
> - `createAnswerDoesNotSaveAnswerForNonExistingQuestion`: send a request with a non-existing question id in the request body. Then, the response should have an appropriate HTTP status and the database should not have any answers
> - `createAnswerDoesNotSaveAnswerForNonPublishedQuiz`: save a _non-published quiz_ with a question to the database and send a question id in the request body. Then, the response should have an appropriate HTTP status and the database should not have any answers

{: .important-title }

> Exercise 17
>
> Add instructions on _how to run the tests_ on the command-line to the "Developer guide" section in the `README.md` file.

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

To use authentication related information in templates, we can use the [Thymeleaf Spring Security dialect](https://github.com/thymeleaf/thymeleaf-extras-springsecurity). Let's also add that dependency to the `<dependencies>` list in the `pom.xml` file:

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
        http.authorizeHttpRequests((requests) -> requests
            .requestMatchers(
                // The REST API endpoints
                antMatcher("/api/**"),
                // The error page
                antMatcher("/error"),
                // Swagger documentation paths
                antMatcher("/v3/api-docs/**"),
                antMatcher("/configuration/ui"),
                antMatcher("/swagger-resources/**"),
                antMatcher("/configuration/security"),
                antMatcher("/swagger-ui/**"))
                // Rest of the permitted paths
                // ...
            .permitAll()
            .anyRequest()
            .authenticated());

        http.formLogin((form) -> form.permitAll());
        http.logout((logout) -> logout.permitAll());
        http.cors(Customizer.withDefaults());
        http.csrf((csrf) -> csrf.ignoringRequestMatchers(antMatcher("/api/**")));

        return http.build();
    }
}
```

The `passwordEncoder` method returns the password encoder object used to hash passwords. We'll use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) which is the de facto hash algorithm for passwords.

The `securityFilterChain` returns the configuration object for Spring Security. The first piece of configuration determines the access-control for our application. The `permitAll()` method call _will permit anyone to access these paths_. This is follow by `anyRequest().authenticated()` method call, which means that _request to any other path will require authentication_.

On top of the configuration class, we need to have class that implements the `UserDetailsService` interface. This class will determine how to fetch the user's information based on the username:

```java
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // ...
    }
}
```

The `loadUserByUsername` method will need to return a `UserDetails` object based on the username provided by the paramater or throw an `UsernameNotFoundException` exception if no user is found.

{: .important-title}

> Exercise 18
>
> Read the GitHub's documentation on [Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository). Then, choose a license for your repository and place the license text in a file named `LICENSE` at the root folder of your repository (the same folder that has the `pom.xml` file). If you don't have a strong opinion on the license, you can consider the [MIT](https://choosealicense.com/licenses/mit/) license.
>
> Add a "License" subheading to the `README.md` file and under that the chosen license name and the link to the `LICENSE` file in the GitHub repository. As a reference, you can take a look how the license is specified in the React project's [README.md](https://github.com/facebook/react/blob/main/README.md) file.

{: .important-title }

> Exercise 19
>
> Deploy the final versions of the backend and frontend applications to the production environment. Make sure that the applications work properly in the production environment.

{: .important-title }

> Exercise 20
>
> Make sure that all project-related documentation, such as project description, data model documentation, architecture documentation and Swagger documentation is up-to-date.

{: .important-title }

> Exercise 21
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project. Create a new tag called "sprint3". The release title should be "Sprint 3". Give a brief description for the release that describes the features implemented during the Sprint.

## Peer review

{: .highlight }

> Writing a peer review for each team member and receiving a passing grade from the peer reviews is required to pass the course.

The peer review is used to assess each team member. The 10 personal points are based on the peer reviews and the teacher's observations. _Every team member must write a peer review_.

The peer review is conducted with a form. You will receive the link to the form via email from the teacher at the beginning of the Sprint. In the form you will need to assess every team member's (including yourself) efforts in the team work in the following aspects:

- _Activity in team work_: Attendance and active presence during team meetings and communication with team members outside the meetings
- _Technical contributions_: amount of working code written _or_ active participation in the writing process of the code (for example [pair-programming](https://en.wikipedia.org/wiki/Pair_programming))
- _Project management and documentation contributions_: Backlog management, efforts to improve the process (for example in Retrospectives), writing project related documentation

You will need to grade each these aspects in scale of 0-5 and provide a short reasoning for the grade. The peer reviews are _anonymous_, the team members won't see each other's peer reviews.

{: .important-title }

> Exercise 22
>
> Write the peer review for your team members. You will receive the peer review form via email. If you haven't received the peer review form link, contact the teacher.

## Final report

Write the final report for the course, which covers the following questions:

- Scrum defines four events which take place during the Sprint. What are these events and what is the purpose of each event? How well did you succeed as a team to fulfil the purpose of each event?
- In which areas did you succeed _as a team_? In which areas there was room for improvement?
- In which areas did you succeed _personally_? In which areas there was room for improvement?
- Based on your experiences during the course, what would be three important advice you would give to a new software development team? Justify why these advice are important
- What did you learn during the course? What would you have wanted to learn more about?

Submit the final report as _a single PDF file_ to [this Moodle submission]({{site.final_report_moodle_submission_link}}).

{: .important-title }

> Exercise 23
>
> Write the final report as instructed above.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 3 deadline on {{site.sprint_3_deadline}}.
