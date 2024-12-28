---
layout: page
title: 🏃‍♂️ Sprint 2
permalink: /sprint-2-todo
nav_order: 7
nav_exclude: true
---

{% include toc.html %}

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, REST APIs and communication between frontend and backend.

## Retrospective

The Scrum Guide only describes high-level guideliness for the software development process. It is not a one-size-fits-all framework suitable for every kind of project. Instead, the Scrum Team should _adapt_ the process to match the project needs. To discuss about the issues with the process and to come up with solutions, the Scrum has a dedicated event called _Retrospective_.

After the Sprint Review, the Retrospective is the final event that ends the current Sprint. During the Retrospective, the Scrum Team openly discuss the issues with the process. Every member of the Scrum Team must be heard. Even more important than raising issues, is to find solutions together. These solutions are concrete actions that the Scrum Team can perform during the upcoming Sprint to improve the process. In the ideal case, after performing the necessary actions during the upcoming Sprint, the same issues aren't raised during the next Retrospective.

Scrum doesn't go into details how to actually arrange the event, but rather describe its purpose and goals. Luckily, there are many popular Retrospective techniques to arrange the event, such as [Mad, Sad, Glad](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective) and [Start, Stop, Continue](https://www.betterup.com/blog/start-stop-continue). Next, we will have a look how to arrange a _Mad, Sad, Glad_ style Retrospective. In this Retrospective, each member of Scrum Team writes down things during the Sprint that made them feel either mad, sad or glad.

The things in the _mad_ category are the ones that are very frustrating and are stopping you from performing at your best. For example:

- The Spring Boot application won't start on my computer.
- I always have conflicts when I try to pull code from the GitHub.

The things in the _sad_ category are the ones that are dissapointing, but you can cope with them. For example:

- The Daily Scrum meetings take too long.
- The Sprint Backlog isn't always up-to-date.

The things in the _glad_ category are the ones that made you happy. For example:

- Communication was clear.
- Everybody contributed to the tasks.

Retrospectives can be organized face-to-face or using virtual platforms. During this course we will be using the [Flinga](https://edu.flinga.fi) platform to organize our Retrospectives. You can login to Flinga with your Haaga-Helia credentials by choosing "Haaga-Helia ammattikorkeakoulu" at the [Flinga login page](https://edu.flinga.fi/).

Once logged in a new session can be created by clicking the "Create a session" button. In the session you can send cards to the board by typing the message and clicking the "Send" button. You can also choose a color for the card. Other team members can join the session using the "Join link" which can be found by cliking the menu icon on the top left corner of the page.

First, create a session board that has the _mad_, _sad_ and _glad_ categories like in [this board](https://edu.flinga.fi/s/E2L5YL9). Then, organize the Retrospective in the following manner:

1. Based on their experiences during the Sprint, each team member should write cards for each of the three categories. Choose the card color based on the category. Try to come up with cards for each category. _Don't discuss about the cards at this point_ because the cards should represent your personal opinions
2. Once everyone is done writing the cards, go through the cards from each category. If necessary, the writer of the card can shortly describe what their card means
3. Together, pick at least one success area during the Sprint from the _glad_ category and one most urgent issue from the _mad_ and _sad_ categories. Come up with at least one _concrete_ action to solve the issue during the upcoming Sprint. For example a concrete action for the issues "I always have conflicts when I try to pull code from the GitHub" could be "Pull code from GitHub more often" and "Create smaller commits and push code to GitHub more often"

The Scrum Master should make sure that everyone follows the event structure and that each team member gets their voice heard.

{: .important-title }

> Exercise 1
>
> The Scrum Master should create a new session in Flinga as instructed above. Name the session "Retrospective 1". Once the session is created, other team members should join the session with the "Join link". Setup the session board and organize the Retrospective event as instructed above.
>
> Once you have completed the Retrospective, add `retrospectives` folder to the repository and in it a `sprint1.md` file. In that file, add a link to the Retrospective's Flinga board and write down the successes, issues and actions you came up with during the Retrospective and push the changes to GitHub. Use this template in the file (_remember to use your board's Flinga board link_):
>
> ```md
> # Sprint 1 Retrospective
>
> [Retrospective board](https://edu.flinga.fi/s/<BOARD_ID>)
>
> Successes:
>
> - Something that we succeeded in
>
> Issues:
>
> - Some issue we had
>
> Actions:
>
> - Some action to fix an issue
> ```

{: .important-title }

> Exercise 2
>
> Choose a new (not the same team member as during the previous Sprint) Scrum Master among the team members for the second Sprint.

## 🏃‍♂️ Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1. The Sprint Review event gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> _"It's great that we now have the basic functionality for managing quizzes! What we now need is a way for the teacher to categorize quizzes and student to take the published quizzes._
>
> _To be able to categorize quizzes, the teacher should be able to add a category. A category has a name, for example "Agile" and a description, for example "Quizzes related to the Agile principles and project management frameworks". There should be a form for adding a category and a separate page for listing the added categories. The category list should have a delete button next to each category, which can be clicked to delete the category._
>
> _The teacher should be able to choose the quiz's category while adding or editing a quiz. There could be a dropdown menu listing all the categories in both forms, from which the teacher can choose the quiz's category. It should also be possible to leave the quiz uncategorized by not choosing a category. Deleting a category should leave the related quizzes uncategorized._
>
> _Once we have this basic set of features for the teachers, we can start working on the student dashboard application. The student dashboard should have a page that lists the published quizzes with the quiz name, description, course code, category and the date when it was added. The course code should be a link to the course's study guide page, for example https://opinto-opas.haaga-helia.fi/course_unit/SOF005AS3AE._
>
> _Each quiz name on the quiz list should be a link to a separate page where the quiz name, description and the questions are displayed. There should also be some kind of navigation menu from which the student can navigate to the quiz list page._
>
> _In the quiz page the student should be able to take a published quiz by answering the questions. The questions should be listed and the student should be able to choose an answer option and submit their answer for each question. When the student submits their answer, there should be some kind of feedback dialog which tells the student if their answer was correct or not. For example, "That is correct, good job!", or "That is not correct, try again". The information which answer option the student submitted should be stored for submission analysis._
>
> _There should be a page in the student dashboard where the results of a quiz are summarized. The results summarize all the answers submitted by different students to provide the teacher with an overview of how well the students know the quiz's topic. The page should display the question text, the difficulty level, the total number of answers, the correct answer percentage and the number of correct and wrong answers for each question of the quiz. Also the total number of answer and questions of a quiz should be displayed. There should be a link to the results page next to the quiz in the quiz list page._
>
> _Different students are interested in different quiz categories. To find interesting quizzes quickly, there should be page that lists all the categories. The category list page should be accessible from the navigation menu. Clicking the category's name on the list should take the student to a page that lists the quizzes in the category."_
>
> -- The Product Owner

After some discussion the Scrum Team planned the following user stories for the _teacher dashboard_ application:

1. {{site.sprint_2_user_story_1}}
2. {{site.sprint_2_user_story_2}}
3. {{site.sprint_2_user_story_3}}
4. {{site.sprint_2_user_story_4}}

And the following user stories for the _student dashboard_ application:

1. {{site.sprint_2_user_story_5}}
2. {{site.sprint_2_user_story_6}}
3. {{site.sprint_2_user_story_7}}
4. {{site.sprint_2_user_story_8}}
5. {{site.sprint_2_user_story_9}}
6. {{site.sprint_2_user_story_10}}

{: .important-title }

> Exercise 3
>
> Make sure that all task related issues that have been completed during the Sprint 1 are _closed_ and their _status is "Done"_ in the Backlog project. Do the same with the user story related issues _accepted by the Product Owner_ during the Sprint Review event.
>
> Create a new milestone for the second Sprint. If you didn't manage to implement all user stories during the previous Sprint, set the second Sprint's milestone for the unfinished user story and task issues. If the Sprint Review brought up implementation improvements or flaws (e.g. bugs), create appropriate issues for the tasks.

{: .important-title }

> Exercise 4
>
> To classify frontend-related and backend-related issues, create two new [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels): "frontend" and "backend". Add the "frontend" label for issues that are related to the frontend implementation and the "backend" label for issues that are related to the backend implementation.

{: .important-title }

> Exercise 5
>
> Create an issue for each _user story_. Add the "user story" label for each issue. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 6
>
> Plan the tasks for the first user story, "{{site.sprint_2_user_story_1}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-1-add-category.png)

{: .important-title }

> Exercise 7
>
> Plan the tasks for the second user story, "{{site.sprint_2_user_story_2}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-2-1-list-categories.png)
>
> ![](/assets/sprint-2-us-2-2-list-categories.png)

{: .important-title }

> Exercise 8
>
> Plan the tasks for the third user story, "{{site.sprint_2_user_story_3}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-3-1-select-quiz-category.png)
>
> ![](/assets/sprint-2-us-3-2-select-quiz-category.png)

{: .important-title }

> Exercise 9
>
> Plan the tasks for the fourth user story, "{{site.sprint_2_user_story_4}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 10
>
> Write the first version of the project's _data model documentation_. Implement an [entity relationship diagram](https://www.lucidchart.com/pages/er-diagrams) and write a description of the application's data model, which documents the application's entities, their attributes (including primary and foreign keys), their relationships and the relationship types (one-to-one, one-to-many, or many-to-many). The description should explain the purpose of each entity and their relationship to other entities. Add the documentation under a "Data model" subheading in the `README.md` file.
>
> GitHub supports including different kind of diagrams to Markdown files using the [Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/) syntax. Mermaid makes it easier to update diagrams, when for example new entities or attributes need to be added to an entity relationship diagram. Mermaid's entity relationship diagram documentation can be found [here](https://mermaid.js.org/syntax/entityRelationshipDiagram.html).
>
> _NB: Keep this documentation (like all other documentation) up-to-date when you add new entities or attributes for the application's data model._

## REST APIs

So far the user has interacted with our web application in the following manner:

1. The user opens a page at certain path, for example `/`, in a web browser.
2. The web browser sends a request to the server (the backend) for the resource of that path.
3. On the server, the request is delegated to the controller method responsible for handling requests for the path.
4. The controller method retrieves the required data from the database and based on the data creates an HTML page.
5. The HTML page is sent as a response and the browser displays the page for the user.

So, the representation of our application's data is an HTML page. To provide other applications, such as JavaScript frontend applications, a better access to our data we need to represent it in a format that is easier to consume, such as the JSON format.

Instead of sending a response as an HTML page, we can serialize Java objects into text-based JSON format and send it as a response. Let's consider a `MessageRestController` controller class as an example:

```java
@RestController
@RequestMapping("/api")
public class MessageRestController {
    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/messages")
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }
}
```

The `@RestController` annotation on the `MessageRestController` class specifies that each method of the controller class produces a JSON response body. Instead of returning the name of the template, we can directly return Java objects. For example the `getAllMessages` method returns a list of `Message` objects. If we open the page <http://localhost:8080/api/messages> in a web browser we should see this list.

By using JSON as the data representation format we can separate the _client_ (the user interface application) from the server. This allows as to implement many different kinds of client applications with different programming languages. This separation of server and client is one of the corner stones of the _the REST architectural style_.

_REST_, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called _RESTful systems_, are characterized by how they are stateless and separate the concerns of client and server.

In a RESTful system, the requests must contain a path to a _resource_ that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on. For example, the path `/users/29/messages` is a resource for messages of a user with a specific id. These paths are also referred to as _endpoints_.

The request should also contain the _HTTP method_, that determines the operation itself. The `GET` method is used for endpoints that retrieve data, and _never manipulate it_. The `POST`, `PUT` and `DELETE` methods on the other hand are used for endpoints that manipulate data. The `POST` method is commonly used for endpoints that create database entries, the `PUT` method for endpoints that update and the `DELETE` method for endpoints that delete them.

The resource path has certain naming conventions. The path starts with the resource _collection_ name in plural, for examples "users". The collection name is followed by resource specifiers, for example the id of the resource. Here's example of RESTful API paths for the "users" collection:

| HTTP method | Path          | Request mapping                 | Description                          |
| ----------- | ------------- | ------------------------------- | ------------------------------------ |
| `GET`       | `/users`      | `@GetMapping("/users")`         | List all users                       |
| `GET`       | `/users/{id}` | `@GetMapping("/users/{id}")`    | Get the user with the provided id    |
| `POST`      | `/users`      | `@PostMapping("/users")`        | Create a user                        |
| `PUT`       | `/users/{id}` | `@PutMapping("/users/{id}")`    | Update the user with the provided id |
| `DELETE`    | `/users/{id}` | `@DeleteMapping("/users/{id}")` | Delete the user with the provided id |

{: .note }

> Collections are commonly entities which we are storing in the database (for example quizzes and questions). The REST API endpoints provide ways to access and manipulate these entities.

The `{id}` part of the `/users/{id}` path is a _path variable_. For example, the path for user with id 2 would be `/users/2`.

{: .note }

> The "id" refers to the id attribute (the primary key) of the entity. The attribute's name doesn't necessarily have to be "id".

A collection can have _sub-collections_. For example, a path for a user's messages resource would be `/users/{id}/messages`, where "messages" is a sub-collection. [This guide](https://restfulapi.net/resource-naming/) has more information about the resource path naming conventions.

When we design and implement REST API endpoints we should consider the use-case. We don't implement endpoints arbitrary, there should be a _need for the endpoint_ first, for example a certain feature in a frontend application needs to display some data in the database. Based on the feature we consider what kind of data and operations the REST API needs to provide. These requirements will determine the endpoints we will implement.

We can create a separate controller class for each collection. The `@RequestMapping` annotation can be applied to the controller class to define the collection name prefix of the path. Each method will automatically get the prefix in the path, so we don't need to repeat it in the method's request mapping annotations:

```java
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MessageRestController {
    // ...

    @GetMapping("/messages/{id}")
    public Message getMessageById(@PathVariable Long id) {
        return messageRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Message with id " + id + " does not exist"));
    }

    @PostMapping("/messages")
    public Message createMessage(@Valid @RequestBody CreateMessageDto message, BindingResult bindingResult) {
        // Check if message object violates any validations defined by the CreateMessageDTO class
        if (bindingResult.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, bindingResult.getAllErrors().get(0).getDefaultMessage());
        }

        Message newMessage = new Message(message.getContent());
        return messageRepository.save(newMessage);
    }
}
```

{: .note }

> It's handy to use some prefix, such as "api" to distinguish paths that produce JSON response from paths that produce HTML pages.

In this case, the `getMessageById` method will handle GET request to the path `/api/messages/{id}` and the `createMessage` method will handle POST request to the path `/api/messages`.

In the `createMessage` method, the `CreateMessageDto` object annotated with the `@RequestBody` annotation contains the data in the request body. For example with JavaScript, the request body can be set with the `fetch` function call in the following way:

```js
fetch("http://localhost:8080/api/messages", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // This is the data in the request body
  body: JSON.stringify({ content: "Hello world!" }),
});
```

### Controlling the request and response body format with DTO classes

To have full control over the format of the request and response body we can use [DTO](https://www.baeldung.com/java-dto-pattern) classes. Especially with the request body annotated by the `@RequestBody` annotation, we should in general use a DTO class object instead of an entity class object. This is because using an entity class object might accidently allow users to update undesired attributes of an entity as described [here](https://rules.sonarsource.com/java/tag/spring/RSPEC-4684/).

For example, let's assume that we have a `User` entity with `id`, `username`, `password` and `isAdmin` (determines if user is an admin user or not) attributes. We want the user to be able to register with an username and password, but _they aren't suppose to be able to define their id or admin status_. To define the available attributes for the request body, we can create a `CreateUserDto` DTO class:

```java
public class CreateUserDto {
    // @NotBlank and @Size annotations are used for validation
    @NotBlank(message = "Username is required")
    private String username;
    @Size(min = 8, message = "Password should be at least 8 characters long")
    private String password;

    // constructors, getters and setters
}
```

In the controller method, the request body is mapped to a `CreateUserDto` object:

```java
@PostMapping("/users")
// The CreateUserDto class defines the request body
public User createUser(@Valid @RequestBody CreateUserDto user, BindingResult bindingResult) {
    // Check if user object violates any validations defined by the CreateUserDto class
    if (bindingResult.hasErrors()) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, bindingResult.getAllErrors().get(0).getDefaultMessage());
    }

    User newUser = new User(user.getUsername(), authenticationService.createPasswordHash(user.getPassword()));
    userRepository.save(newUser);

    // The PublicUserDto class (covered in the next example) defines the response body
    return new PublicUserDto(newUser.getId(), newUser.getUsername(), newUser.getIsAdmin())
}
```

This corresponds to the following JSON format for the _request body_:

```json
{ "username": "kalle", "password": "supersecret9000" }
```

Similarly, we can use DTOs to control the attributes in the response body (as in the previous example). For example, _we don't want to send the user's password hash in the response_. We can control the desired attributes using a `PublicUserDto` class:

```java
public class PublicUserDto {
    // The id, username and admin status are public information
    private Long id;
    private String username;
    private Boolean isAdmin;

    // constructors, getters and setters
}
```

In the controller method, we transform the `User` objects into `PublicUserDto` objects:

```java
@GetMapping("/users")
public List<PublicUserDto> getAllUsers() {
    return userRepository.findAll()
        .stream()
        .map(user -> new PublicUserDto(user.getId(), user.getUsername(), user.getIsAdmin()))
        .toList()
}
```

This corresponds to the following JSON format for the response body:

```json
[{ "id": 1, "username": "kalle", "isAdmin": false }]
```

{: .note }

> In the example above we could also use the `@JsonIgnore` annotation. With a DTO class we can get more fine grained control over the request and response body, if needed. However, this doesn't mean that every single request requires the use of a DTO class.

### HTTP status codes and REST API error handling

Previously we have handled errors in requests by sending a redirect or rendering a template with some error messages. With REST API endpoints we communicate errors with [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and JSON formatted error objects containing details about the error. HTTP status codes are numeric codes that describe whether the request was successful or not.

Successful status codes are in range 200 - 299. Most common successful status code is [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200), which is a generic way to inform the client that the request succeeded. Client error status codes are in range 400 - 499. These status codes indicate that there's something wrong with the client's request. Most common client error status codes are:

- [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404): the server cannot find the requested resource
- [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400): there was something wrong with the user's request. For example the request body of a POST request is not valid
- [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403): the user lacks the required authorization for the request. For example the user tries to update a resource that they don't have access to
- [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401): the user is not authenticated, meaning that the server can't identify the user. For example the user is not signed in and tries to access a resource which requires authentication

As in the previous example, we can use the [ResponseStatusException](https://www.baeldung.com/spring-response-status-exception) exception class to send HTTP status code with the response in case of errors. The exception should be thrown with an appropriate HTTP status code and an error message. For example, the line:

```java
throw new ResponseStatusException(HttpStatus.BAD_REQUEST, bindingResult.getAllErrors().get(0).getDefaultMessage());
```

In the `createMessage` method will send a `400 Bad Request` status code with the response in case the request body is not valid. The second parameter of the `ResponseStatusException` constructor is the error message which will be displayed in the error response object:

```json
{
  "timestamp": "2023-11-20T07:55:10.918+00:00",
  "status": 400,
  "error": "Bad Request",
  "trace": "...",
  "message": "Content is required",
  "path": "/api/messages"
}
```

If we don't throw a `ResponseStatusException` exception, the `200 OK` status code will be sent with the response, which indicates the that request succeeded:

```java
@GetMapping("/messages")
public List<Message> getAllMessages() {
    // HTTP status 200 OK will be used in the response by default
    return messageRepository.findAll();
}
```

To get more control over the response, we can use the [ResponseEntity](https://www.baeldung.com/spring-response-entity) class:

```java
@PostMapping("")
public ResponseEntity<?> createMessage(@Valid @RequestBody CreateMessageDto message, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
        List<String> errorMessages = bindingResult.getAllErrors().stream().map((error) -> error.getDefaultMessage())
                .toList();

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessages);
    }

    Message newMessage = new Message(message.getContent());
    messageRepository.save(newMessage);

    // HTTP status 201 Created will be used in this response
    return ResponseEntity.status(HttpStatus.CREATED).body(newMessage);
}
```

The error messages won't be visible by default. We can change this behavior by adding the following property to the `application.properties` file:

```
server.error.include-message=always
```

### Omitting attributes from the JSON response body

By default _all the attributes_ are present in the JSON response body. We can omit attributes from the JSON response body by using the [@JsonIgnore](https://www.baeldung.com/jackson-ignore-properties-on-serialization) annotation on an attribute. We usually want to omit attributes that hold private information, for example user's password hash, or attributes that can potentially contain lots of data, for example, the `@OneToMany` annotated attributes. We can, for example omit the `messages` attribute of a `User` entity class in the following way:

```java
@JsonIgnore
@OneToMany(mappedBy = "user")
private List<Message> messages;
```

To have more control over the attributes in the JSON response, [DTO](https://www.baeldung.com/java-dto-pattern) classes can be used instead of returning the entity classes directly from the controller methods.

## REST API endpoints for the user stories

Next, let's consider what kind of REST API endpoints we need for the remaining user stories. Implement the following endpoints _by following the REST API naming conventions for the endpoint path names_.

{: .note }

> GET method endpoints are easy to test with a web browser by just visiting the endpoint URL. POST method endpoints can be tested with tools such as [Postman](https://www.postman.com/).

{: .important-title }

> Exercise 11
>
> Implement a REST API endpoint for _getting a quiz by id_. Return an appropriate HTTP status code and error message in the following error case:
>
> - Quiz with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 12
>
> Implement a REST API endpoint for _getting the questions of a quiz_. In this case, instead of using the `@JsonIgnore` annotation, you can use [@JsonManagedReference and @JsonBackReference](https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion) annotations to include the question's answer options in to the JSON response. Return an appropriate HTTP status code and error message in the following error case:
>
> - Quiz with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 13
>
> Implement a REST API endpoint for _creating an answer_ for a question (or more specifically, for an answer option of a question). Before implementing the endpoint itself, consider what kind of data requirements the endpoint has. The student should be able to choose an answer option (e.g. "Helsinki") for a question (e.g. "What is the capital of Finland?") and submit their answer. The information, which answer option the student submitted should be stored to the database.
>
> Return an appropriate HTTP status code and error message in the following error case:
>
> - Answer option id is not provided (for example the `{ "answerOptionId": null }` request body)
> - Answer option with the provided id does not exist
> - Quiz is not published
>
> You can define the request body format with a [DTO](https://www.baeldung.com/java-dto-pattern) class. The frontend can send a JSON request body for example in the following format:
>
> ```json
> {
>   "answerOptionId": 1
> }
> ```
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 14
>
> Implement a REST API endpoint for _getting the results of a quiz_. Return an appropriate HTTP status code and error message in the following error case:
>
> - Quiz with the provided id does not exist
>
> The endpoint should return the total number of answers, the number of correct answers and the number of wrong answers for each question of the quiz based on the submitted answers of the students. You can for example consider the following structure for the response body:
>
> ```json
> [
>   {
>     "questionId": 1,
>     "questionText": "What is the capital of Finland?",
>     "questionDifficulty": "Easy",
>     "totalAnswers": 10,
>     "correctAnswers": 9,
>     "wrongAnswers": 1
>   }
> ]
> ```
>
> You can implement an appropriate [DTO](https://www.baeldung.com/java-dto-pattern) class for the question results object and use it to construct the response body.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 15
>
> Implement a REST API endpoint for _getting all categories_.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 16
>
> Implement a REST API endpoint for _getting a category by id_. Return an appropriate HTTP status code and error message in the following error case:
>
> - Category with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 17
>
> Implement a REST API endpoint for _getting the quizzes of a category_. Only _published quizzes of the category_ should be returned by the endpoint. Return an appropriate HTTP status code and error message in the following error case:
>
> - Category with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .note }

> The GET method endpoint error responses will be displayed as a HTML error page in a web browser. To see what the JSON error response looks like, use Postman to send the request.

## REST API documentation with Swagger

Now that we have implemented REST API endpoints for our application, we should describe to our fellow developers what these endpoints are and what kind of data they provide. We could write this documentation by hand, but there's a high risk that the documentation will become stale in the future. For example, if we make some alteration to the structure of the provided data and forget to update the documentation. That is why API documentation is commonly generated automatically by tools such as [Spring Doc](https://springdoc.org/).

Spring Doc is a library for generating a JSON-formatted description of a REST API from our controller classes and their methods. This description follows a common format called the [OpenAPI Specification](https://swagger.io/docs/specification/about/) format. Once the OpenAPI formatted description is generated, there are tools to display the information in a user-friendly way as a user interface. One of such tools is [Swagger](https://swagger.io/).

Swagger provides documentation for the API endpoints we define in the controller methods. The documentation is a user interface that lists the endpoints and provides information for each one, such as what the request for the endpoint looks like and what's in the response. We can also easily send requests and inspect the response using the user interface. [Here](https://petstore.swagger.io/) is an example of a Swagger documentation.

Let's start documenting our API by adding the Spring Doc dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
```

Then, let's start our application and open <http://localhost:8080/v3/api-docs> in a browser. We should see the JSON formatted description of our REST API in the OpenAPI format. For a more user-friendly description, the Swagger documentation can be found at <http://localhost:8080/swagger-ui/index.html>. In the Swagger documentation, we can see a documentation for the REST controller classes.

We can find documentation for each REST API endpoint under the section named by the REST controller class. We see all relevant information about the endpoint: the path, path parameters, and an example of the response. We can send a test request by clicking the "Try it out" button on the right. This is handy while we are exploring an API that we aren't familiar with.

We can provide more details about the endpoints by using specific annotations for the controller classes and methods. We can also provide more information about a specific endpoint using the `@Operation` annotation:

```java
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MessageRestController {
    // ...

    @Operation(
        summary = "Get a message by id",
        description = "Returns the message with the provided id"
    )
    @GetMapping("/messages/{id}")
    public Message getMessageById(@PathVariable Long id) {
        // ...
    }
}
```

The `@ApiResponses` and `@ApiResponse` annotations can be used to document different kind of success and error responses and their corresponding HTTP status codes:

```java
@Operation(
    summary = "Get a message by id",
    description = "Returns the message with the provided id"
)
@ApiResponses(value = {
    // The responseCode property defines the HTTP status code of the response
    @ApiResponse(responseCode = "200", description = "Message with the provided id retrieved successfully"),
    @ApiResponse(responseCode = "404", description = "Message with the provided id does not exist")
})
@GetMapping("/messages/{id}")
public Message getMessageById(@PathVariable Long id) {
    // ...
}
```

{: .highlight }

> We cannot define more than one `@ApiResponse` annotation with the same `responseCode` property (HTTP status code) inside a `@ApiResonses` annotation.

The `@Tag` annotation can be used to group endpoints, usually based on the REST API collection name, such as "messages" or "users":

```java
@Tag(name = "Messages")
@Operation(/* ... */)
@ApiResponses(/* .. */)
@GetMapping("/messages")
public Message getAllMessages(@PathVariable Long id) {
    // ...
}

@Tag(name = "Messages")
@Operation(/* ... */)
@ApiResponses(/* .. */)
@GetMapping("/messages/{id}")
public Message getMessageById(@PathVariable Long id) {
    // ...
}

@Tag(name = "Users")
@Operation(/* ... */)
@ApiResponses(/* .. */)
@GetMapping("/users")
public Message getAllUsers(@PathVariable Long id) {
    // ...
}

@Tag(name = "Users")
@Operation(/* ... */)
@ApiResponses(/* .. */)
@GetMapping("/users/{id}")
public Message getUserById(@PathVariable Long id) {
    // ...
}
```

In this example, the Swagger documentation would have two separate sections, "Messages" and "Users", which would contain the endpoints in the specific group. Grouping the endpoints using the `@Tag` operation makes it easier to find relevant endpoints in the Swagger documentation more easily.

It is also possible to have separate REST API controller classes for each collection and apply the `@Tag` annotation to the class instead of individual methods:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
@Tag(name = "Messages", description = "Operations for retrieving and manipulating messages")
public class MessageRestController {
    // ...
}

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
@Tag(name = "Users", description = "Operations for retrieving and manipulating users")
public class UserRestController {
    // ...
}
```

{: .note }

> Having separate REST controller class for each collection also improves the code quality by making it easier to find relevant endpoints.

{: .important-title }

> Exercise 18
>
> Generate a Swagger documentation for the project as described above. For each REST controller method add a proper summary and description using the `@Operation` annotation. Also add the `@ApiResponses` annotation with an `@ApiResponse` annotation for each success and error response. Group the endpoints based on the endpoint's collection name using the `@Tag` annotation.
>
> Test all the REST API endpoints you have implemented by opening the endpoint's documentation and clicking the "Try it out" button. Remember to also test that the error responses work properly. For example send a request to the endpoint wich returns the questions of a quiz with an id path parameter value of a non-existing quiz. Add a link to the Swagger documentation (at <http://localhost:8080/swagger-ui/index.html>) under a "REST API" subheading in the `README.md` file.

## Communication between frontend and backend

With REST APIs we can _separate_ the client application from the server application. In web applications these client applications are commonly called _frontend applications_. Together these components construct a _full stack application_.

The communication between the frontend application and the backend application is performed using the JavaScript's [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). The Fetch API provides the `fetch` function, which can be used to send a HTTP request to a specific URL:

```js
fetch("http://localhost:8080/api/messages")
  .then((response) => response.json())
  .then((messages) => {
    console.log(messages);
  });
```

The default request method is GET. We can use a different request method, such as POST, by providing addional options for the `fetch` call:

```js
fetch("http://localhost:8080/api/messages", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ content: "Hello world!" }),
})
  .then((response) => response.json())
  .then((newMessage) => {
    console.log(newMessage);
  });
```

{: .note }

> The `fetch` calls require somewhat boilerplate code, especially while sending JSON formatted data to the server with a POST request. Different HTTP client libraries such as [Axios](https://axios-http.com/docs/intro) are used to reduce this boiplerate code and to provide useful additional features.

As an example, the logic of fetching and creating messages could be extracted into `getAllMessages` and `createMessage` functions:

```js
const BACKEND_URL = "http://localhost:8080";

export function getAllMessages() {
  return fetch(`${BACKEND_URL}/api/messages`).then((response) =>
    response.json()
  );
}

export function createMessage(message) {
  return fetch(`${BACKEND_URL}/api/messages`, {
    method: "post",
    body: JSON.stringify(message),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create the message");
    }

    return response.json();
  });
}
```

These are simple _abstractions_ for fetching and creating messages, but they are quite handy. If for example the logic for fetching the messages (for example the API URL) changes, we only need to change the logic inside the `getAllMessages` function and nowhere else. This will become relevant for example, when we deploy the frontend.

As an example, we could call the `getAllMessages` function to display the messages list in a `MessageList` component in the following way:

{% raw %}

```jsx
import { useEffect, useState } from "react";
import { getAllMessages, createMessage } from "../services/message";

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  function fetchMessages() {
    getAllMessages().then((messages) => {
      setMessages(messages);
    });
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  // ...
}
```

{% endraw %}

{: .highlight}

> The remaining user stories are related to the student dashboard application and they should be implemented as a frontend application which uses REST API endpoints implemented in the backend.

{: .important-title }

> Exercise 19
>
> Plan the tasks for the fifth user story, "{{site.sprint_2_user_story_6}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-6-list-quizzes.png)

{: .important-title }

> Exercise 20
>
> Plan the tasks for the sixth user story, "{{site.sprint_2_user_story_6}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-7-1-quiz-questions.png)
>
> ![](/assets/sprint-2-us-7-2-quiz-questions.png)

{: .important-title }

> Exercise 21
>
> Plan the tasks for the seventh user story, "{{site.sprint_2_user_story_7}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-8-1-answer-quiz.png)
>
> ![](/assets/sprint-2-us-8-2-answer-quiz.png)

{: .important-title }

> Exercise 22
>
> Plan the tasks for the eight user story, "{{site.sprint_2_user_story_8}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-9-1-quiz-results.png)
>
> ![](/assets/sprint-2-us-9-2-quiz-results.png)

{: .important-title }

> Exercise 23
>
> Plan the tasks for the ninth user story, "{{site.sprint_2_user_story_9}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-10-list-categories.png)

{: .important-title }

> Exercise 24
>
> Plan the tasks for the tenth user story, "{{site.sprint_2_user_story_10}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-11-1-category-quizzes.png)
>
> ![](/assets/sprint-2-us-11-2-category-quizzes.png)

## Deploying the frontend

We managed to deploy the backend during the previous Sprint, but we still haven't deployed the frontend. We can deploy the frontend to Render with the following steps:

1. In the frontend folder, add a `.env` [environment variable](https://vitejs.dev/guide/env-and-mode) file for the _development environment_. The `.env` file should contain a `VITE_BACKEND_URL` environment variable for the backend's _development environment URL_:

   ```
   VITE_BACKEND_URL=http://localhost:8080
   ```

   Make sure that every `fetch` function call has the environment variable as the URL prefix. For example:

   ```js
   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/messages`).then(
     (response) => {
       // ...
     }
   );
   ```

1. Add a `.env.production` environment variable file for the _production environment_. The `.env.production` file should contain a `VITE_BACKEND_URL` environment variable for the backend's _production environment URL_. For example:

   ```
   VITE_BACKEND_URL=https://name-of-the-backend-service.onrender.com
   ```

   Finally, _push the changes to GitHub_

1. On the Render dashboard, click the "New" button and choose "Static Site"
1. From the repository list, find you project's repository and click the "Connect" button
1. Come up with the name for the service. If the frontend application is not initialized in the repository's root folder (this is the case if you don't have a separate repository for the frontend application), set "Root Directory" as the frontend folder's name. Set "Build Command" as `npm run build` and "Publish Directory" as `dist`
1. If you have a separate branch for the production code, click the "Advanced" button and set "Auto-Deploy" as "Yes" and "Branch" as "production". Otherwise set is as "No"
1. Click the "Create Static Site" button to create the service
1. On the service's page, click "Redirects/Rewrites" from the navigation on the left. Set the "Source" as `/*`, "Destination" as `/index.html` and "Action" as "Rewrite". Finally, click the "Save Changes" button. This configuration will make the frontend routing work

{: .important-title }

> Exercise 25
>
> Deploy the frontend application to a production environment. _Test that the application works in the production envinronment_ by e.g. answering a few quizzes and taking a look at their results. Add the production environment URL of the frontend application (the static site URL in the Render dashboard) to the project description section in the `README.md` file.

{: .important-title }

> Exercise 26
>
> Add instructions on _how to start the frontend application_ to the "Developer guide" section in the `README.md` file. Don't forget important details, such as in which folder the commands should be run in an how to install the frontend dependencies.
>
> For the sake of clarity, you can add separate subheadings for backend's and frontend's developer guide:
>
> ```md
> ## Developer guide
>
> The architecture description and other common technical details go here.
>
> ### Backend
>
> The backend developer guide goes here.
>
> ### Frontend
>
> The frontend developer guide goes here.
> ```
>
> Also, include the following information about the project's architecture and implementation technologies:
>
> 1. The project's architecture consists of three components: the database, the backend and the frontend. Mention these components and explain the purpose of each component. Also, visualize how the components communicate with each other by implementing an [architecture diagram](https://aws.amazon.com/what-is/architecture-diagramming/). You can implement the diagram as a [Mermaid flow diagram](https://mermaid.js.org/syntax/flowchart.html)
> 2. Which programming language, frameworks and major libraries are used in the _backend implementation_?
> 3. Which _database platforms_ are used in different environments (development and production environment)?
> 4. Which programming language, frameworks and major libraries are used in the _frontend implementation_?

## Sprint Review

We have all kinds of cool stuff to show for the Product Owner at the end of this Sprint. Prepare for the upcoming [Sprint Review](/sprint-1#print-review) event, similarly as in the previous Sprint.

{: .important-title }

> Exercise 27
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint2". The release title should be "Sprint 2". Give a brief description for the release that describes the features implemented during the Sprint.

{: .important-title }

> Exercise 28
>
> The Scrum Master should prepare the Sprint Review demonstration at the beginning of the next Sprint. The Scrum Master should make sure that they have a working version of the teacher dashboard and the student dashboard applications on their computer and is able to show how the new features work in the user's perspective. If possible, demonstrate both teacher and student dashboard's features in the production environment. As in the previous Sprint Review, prepare some _sensible_ test data for the Sprint Review.

{: .highlight }

> Make sure that you have pushed your work to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.
