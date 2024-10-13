---
layout: page
title: Sprint 2
permalink: /sprint-2-todo
nav_order: 7
nav_exclude: true
---

{% include toc.html %}

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, REST APIs and communication between frontend and backend.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_2_deadline}}. We will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-30. The team can earn up to 15 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

## Retrospective

The Scrum Guide only describes high-level guideliness for the software development process. It is not a one-size-fits-all framework suitable for every kind of project. Instead, the Scrum Team should _adapt_ the process to match the project needs. To discuss about the issues with the process and to come up with solutions, the Scrum has a dedicated event called _Retrospective_.

After the Sprint Review, the Retrospective is the final event that ends the current Sprint. During the Retrospective, the Scrum Team openly discuss the issues with the process. Every member of the Scrum Team must be heard. Even more important than raising issues, is to find solutions together. These solutions are concrete actions that the Scrum Team can perform during the upcoming Sprint to improve the process. In the ideal case, after performing the necessary actions during the upcoming Sprint, the same issues aren't raised during the next Retrospective.

There are different Retrospective techniques to arrange the event. A quite common Retrospective technique is the [Mad, Sad, Glad](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective) Retrospective. In the Mad, Sad, Glad Retrospective, each member of Scrum Team writes down things during the Sprint that made them feel either mad, sad or glad.

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
2. Once everyone is done writing the cards, go through the cards from each category. The writer of the card should shortly describe what their card means.
3. Together, pick at least two successes during the Sprint from the _glad_ category and two most urgent issues from the _mad_ and _sad_ categories. Come up with _concrete_ actions to solve each of these issues during the upcoming Sprint. For example a concrete action for the issue "I always have conflicts when I try to pull code from the GitHub" could be "Pull code from GitHub more often" and "Create smaller commits and push code to GitHub more often".

Make sure that everyone follows the event structure and that each team member gets their voice heard.

{: .important-title }

> Exercise 1
>
> The Scrum Master should create a new session in Flinga as instructed above. Name the session "Retrospective 1". Once the session is created, other team members should join the session with the "Join link". Setup the session board and organize the Retrospective event as instructed above.
>
> Once you have completed the Retrospective, add `retrospectives` folder to the repository and in it a `sprint1.md` file. In that file, add a link to the Retrospective's Flinga board and write down the successes, issues and actions you came up with during the Retrospective and push the changes to GitHub. You can use this template in the file:
>
> ```md
> # Sprint 1 Retrospective
>
> [Retrospective board](link-to-the-flinga-board)
>
> ## Successes
>
> - Something that we succeeded in.
>
> ## Issues
>
> - Some issue we had.
>
> ## Actions
>
> - Some action to fix an issue.
> ```

{: .important-title }

> Exercise 2
>
> Choose a new (not the same team member as during the previous Sprint) Scrum Master among the team members for the second Sprint.

## 🏃‍♂️ Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> "It's great that we now have the basic functionality for managing quizzes! What we now need is a way for the teacher to categorize quizzes and student to take the published quizzes.
>
> To be able to categorize quizzes, the teacher should be able to add a category. A category has a name, for example "Vocabulary" and a description, for example "Questions related to the vocabulary of a language". There should be a form for adding a category and a separate page for listing the added categories.
>
> The category list should have a delete button next to each category, which can be clicked to delete the category. There should also be a link which should take the teacher to an edit form, where they can edit all the information of the category.
>
> The teacher should be able to choose the quiz's category while adding or editing a quiz. There could be a dropdown menu in both forms where categories are listed.
>
> Once we have this basic set of features for the teachers, we can start working on the student dashboard application. The student dashboard should have a page that lists the published quizzes with the quiz name, description, category and the date when it was added.
>
> Each quiz name on the quiz list should be a link to a separate page where the quiz name, description and the questions are displayed. There should also be some kind of navigation menu from which the student can navigate to the quiz list page.
>
> In the quiz page the student should be able to take a published quiz by answering the questions. The questions should be listed and the student should be able to choose an answer option and submit their answer for each question. When the student submits their answer, there should be some kind of feedback which tells the student if their answer was correct or not. For example, "That is correct, good job!", or "That is not correct, try again".
>
> There should be a page in the student dashboard where the results of a quiz are displayed. At the top of the page, the total number of answers for the quiz should be displayed. The page should display the difficulty level, the total number of answers, the correct answer percentage and the number of correct and wrong answers for each question of the quiz. There should be a link to the results page next to the quiz in the quiz list page.
>
> Different students are interested in different quiz categories. To find interesting quizzes quickly, there should be page that lists all the categories. Clicking the category's name on the list should take the student to a page that lists the quizzes in the category. The category list page should be accessible from the navigation menu."
>
> -- The Product Owner

After some discussion the Scrum Team planned the following user stories:

1. {{site.sprint_2_user_story_1}}
2. {{site.sprint_2_user_story_2}}
3. {{site.sprint_2_user_story_3}}
4. {{site.sprint_2_user_story_4}}
5. {{site.sprint_2_user_story_5}}
6. {{site.sprint_2_user_story_6}}
7. {{site.sprint_2_user_story_7}}
8. {{site.sprint_2_user_story_8}}
9. {{site.sprint_2_user_story_9}}
10. {{site.sprint_2_user_story_10}}

{: .important-title }

> Exercise 3
>
> Make sure that all task related issues that have been completed during the Sprint 1 are _closed_ and their _status is "Done"_ in the Backlog project. Do the same with the user story related issues _accepted by the Product Owner_ during the Sprint Review event.
>
> Create a new milestone for the second Sprint. If you didn't manage to implement all user stories during the previous Sprint, set the second Sprint's milestone for the unfinished user story and task issues. If the Sprint Review brought up implementation improvements or flaws (e.g. bugs), create appropriate issues for the tasks.

{: .important-title }

> Exercise 4
>
> Create an issue for each _user story_. Add the "user story" label for each issue. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 5
>
> Plan the tasks for the first user story, "{{site.sprint_2_user_story_1}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-1-add-category.png)

{: .important-title }

> Exercise 6
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

> Exercise 7
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

> Exercise 8
>
> Plan the tasks for the fourth user story, "{{site.sprint_2_user_story_4}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 9
>
> Write the first version of the project's _data model documentation_. Implement an [entity relationship diagram](https://www.lucidchart.com/pages/er-diagrams) and write a description of the application's data model, which documents the application's entities, their attributes, their relationships and the relationship types (one-to-one, one-to-many, or many-to-many). The description should explain the purpose of each entity and their relationship to other entities. Add the documentation under a "Data model" subheading in the `README.md` file.
>
> GitHub supports [Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/) syntax for diagrams in Markdown files. Using Mermaid syntax makes it easier to maintain diagrams. Take a look at Mermaid's [Entity Relationship Diagrams](https://mermaid.js.org/syntax/entityRelationshipDiagram.html) documentation for more information.
>
> _NB: Keep this documentation (like all other documentation) up-to-date when you add new entities for the application._

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
@RequestMapping("/api/messages")
public class MessageRestController {
    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("")
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
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageRestController {
    // ...

    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable Long id) {
        return messageRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Message with id " + id + " does not exist"));
    }

    @PostMapping("")
    public Message createMessage(@Valid @RequestBody CreateMessageDto message, BindingResult bindingResult) {
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

To have full control over the format of the request and response body we can use [DTO](https://www.baeldung.com/java-dto-pattern) classes. Especially with the request body annotated by the `@RequestBody` annotation, we should _always_ use a DTO class object instead of an entity class object. This is because using an entity class object might accidently allow users to update undesired attributes of an entity as described [here](https://rules.sonarsource.com/java/tag/spring/RSPEC-4684/).

For example, in the `createMessage` method the request body format is defined by the `CreateMessageDto` class:

```java
public class CreateMessageDto {
    private String content;

    // constructors, getters and setters
}
```

This corresponds to the following JSON format for the request body:

```json
{ "content": "Hello world!" }
```

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

If we don't throw a `ResponseStatusException` exception, the `200 OK` status code will be sent with the response, which indicates the that request succeeded. To get more control over the response, we can use the [ResponseEntity](https://www.baeldung.com/spring-response-entity) class:

```java
@PostMapping("")
public ResponseEntity<?> createMessage(@Valid @RequestBody CreateMessageDto message, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
        List<String> errorMessages = bindingResult.getAllErrors().stream().map((error) -> error.getDefaultMessage())
                .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessages);
    }

    Message newMessage = new Message(message.getContent());
    messageRepository.save(newMessage);

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

## Designing the REST API endpoints for the user stories

Next, let's consider what kind of REST API endpoints we need for the remaining user stories. Implement the following endpoints _by following the REST API naming conventions for the endpoint path names_.

{: .important-title }

> Exercise 10
>
> To classify frontend-related and backend-related issues, create two new [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels): "frontend" and "backend". Add the "frontend" label for issues that are related to the frontend implementation and the "backend" label for issues that are related to the backend implementation.

{: .highlight}

> Omit the `@OneToMany` attributes from the JSON response in every entity by using the [@JsonIgnore](https://www.baeldung.com/jackson-ignore-properties-on-serialization) annotation on the attributes.

{: .note}

> To keep the code organized, it is a good idea to create a separate REST controller class for each REST API collection, such as "quizzes" or "categories". The collection-specfic path prefix can be added to all methods using the `@RequestMapping` annotation on the class.

{: .note }

> GET method endpoints are easy to test with a web browser by just visiting the endpoint URL. POST method endpoints can be tested with tools such as [Postman](https://www.postman.com/).

{: .important-title }

> Exercise 11
>
> Implement a REST API endpoint for _getting all quizzes_. Only _published quizzes_ should be returned by the endpoint.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 12
>
> Implement a REST API endpoint for _getting a quiz by id_. Return an appropriate HTTP status code and error message in the following error case:
>
> - Quiz with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 13
>
> Implement a REST API endpoint for _getting the questions of a quiz_. In this case, instead of using the `@JsonIgnore` annotation, you can use [@JsonManagedReference and @JsonBackReference](https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion) annotations to include the question's answer options in to the JSON response. Return an appropriate HTTP status code and error message in the following error case:
>
> - Quiz with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 14
>
> Implement a REST API endpoint for _creating an answer_ for a quiz's question. Before implementing the endpoint itself, consider what kind of data requirements the endpoint has. Return an appropriate HTTP status code and error message in the following error case:
>
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

> Exercise 15
>
> Implement a REST API endpoint for _getting the anwers of a quiz_. Return an appropriate HTTP status code and error message in the following error case:
>
> - Quiz with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 16
>
> Implement a REST API endpoint for _getting all categories_.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 17
>
> Implement a REST API endpoint for _getting a category by id_. Return an appropriate HTTP status code and error message in the following error case:
>
> - Category with the provided id does not exist
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.

{: .important-title }

> Exercise 18
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

We can provide more details about the endpoints by using specific annotations for the controller classes and methods. As an example, we could provide a better name and a description for the message API using the `@Tag` annotation:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
@Tag(name = "Message", description = "Operations for accessing and managing messages")
public class MessageRestController {
    // ...
}
```

We can also provide more information about a specific endpoint using the `@Operation` annotation:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
@Tag(name = "Message", description = "Operations for accessing and managing messages")
public class MessageRestController {
    // ...

    @Operation(
        summary = "Get a message by id",
        description = "Returns the message with the provided id"
    )
    @GetMapping("/{id}")
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
    @ApiResponse(responseCode = "200", description = "Successful operation"),
    @ApiResponse(responseCode = "404", description = "Message with the provided id does not exist")
})
@GetMapping("/{id}")
public Message getMessageById(@PathVariable Long id) {
    // ...
}
```

{: .highlight }

> We cannot define more than one `@ApiResponse` annotation with the same `responseCode` property (HTTP status code) inside a `@ApiResonses` annotation.

{: .important-title }

> Exercise 19
>
> Generate a Swagger documentation for the project as described above. Add proper name and description for all REST controller classes using the `@Tag` annotation. For each REST controller method add a proper summary and description using the `@Operation` annotation. Also add the `@ApiResponses` annotation with an `@ApiResponse` annotation for each success and error response.

## Communication between frontend and backend

With REST APIs we can _separate_ the client application from the server application. In web applications these client applications are commonly called _frontend applications_.

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

These are simple _abstractions_ for fetching and creating messages, but they are quite handy. If for example the logic for fetching the messages (for example the API URL) changes, we only need to change the logic inside the `getAllMessages` function and nowhere else.

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

{: .important-title }

> Exercise 20
>
> Initialize a frontend application for the student dashboard application for example using [Vite](https://vitejs.dev/). You don't necessarily need a separate repository for the frontend application, you can initialize it in folder within the current repository.

## Cross-Origin Resource Sharing (CORS)

The Vite development server is serving the JavaScript files from an URL that starts with `http://localhost:5173`. Our backend is accessible in the URL `http://localhost:8080`. When we send a request with the `fetch` function from the frontend to our backend, we send a request to a _different origin_. These kind of requests are called _cross-orgin_ requests.

Web browsers don't allow `fetch` functions to send cross-origin requests by default. This is called the _same-origin policy_. We can however allow certain (or every) cross-origin request by using [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS).

The idea of CORS is that the web browser "asks" the backend if cross-origin request from a certain origin is allowed by sending a special HTTP request. If the backend allows the requests, then the web browser will send it. In a Spring Boot application we can use the [@CrossOrigin](https://spring.io/guides/gs/rest-service-cors/) annotation in the class or method level to allow cross-origin requests to certain or all paths of controller. For example we can allow cross-origin requests from all origins for all `MessageRestController` method paths in the following way:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageRestController {
    // ...
}
```

{: .highlight}

> The remaining user stories are related to the student dashboard application and they should be implemented as a frontend application which uses REST API endpoints implemented in the backend.

{: .highlight}

> Use the `@CrossOrigin` annnotation on the REST controller classes to allow cross-origin requests from the frontend application.

{: .important-title }

> Exercise 21
>
> Plan the tasks for the fifth user story, "{{site.sprint_2_user_story_6}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-6-list-quizzes.png)

{: .important-title }

> Exercise 22
>
> Plan the tasks for the sixth user story, "{{site.sprint_2_user_story_6}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-7-1-quiz-questions.png)
>
> ![](/assets/sprint-2-us-7-2-quiz-questions.png)

{: .important-title }

> Exercise 23
>
> Plan the tasks for the seventh user story, "{{site.sprint_2_user_story_7}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> Tips for the tasks:
>
> - The nofitication can be implemented for example using the Material UI's [Snackbar](https://mui.com/material-ui/react-snackbar/) component
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-8-1-answer-quiz.png)
>
> ![](/assets/sprint-2-us-8-2-answer-quiz.png)

{: .important-title }

> Exercise 24
>
> Plan the tasks for the eight user story, "{{site.sprint_2_user_story_8}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-9-1-quiz-results.png)
>
> ![](/assets/sprint-2-us-9-2-quiz-results.png)

{: .important-title }

> Exercise 25
>
> Plan the tasks for the ninth user story, "{{site.sprint_2_user_story_9}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-10-list-categories.png)

{: .important-title }

> Exercise 26
>
> Plan the tasks for the tenth user story, "{{site.sprint_2_user_story_10}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the Sprint milestone and add the issues to the backlog.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-us-11-1-category-quizzes.png)
>
> ![](/assets/sprint-2-us-11-2-category-quizzes.png)

{: .important-title }

> Exercise 27
>
> Add instructions on _how to start the frontend application_ to the "Developer guide" section in the `README.md` file. Don't forget important details, such as in which folder the commands should be run in an how to install the frontend dependencies.
>
> For the sake of clarity, you can add separate subheadings for backend's and frontend's developer guide:
>
> ```md
> ## Developer guide
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
> You can test how good your user guide is by cloning a new copy of the repository and executing the steps precisely as they are in the developer guide without making any assumptions.

{: .important-title }

> Exercise 28
>
> Write the first version of the project's _architecture documentation_. Add the documentation under a "Architecture" subheading in the `README.md` file. The documentation should contain the following things:
>
> 1. The project's overall architecture consists of three components: the backend, the database and the frontend. Mention these components and briefly explain the purpose of each component
> 2. Which programming language, frameworks and major libraries are used in the _backend implementation_?
> 3. Which _database platforms_ are used in different environments (development and production environment)?
> 4. Which programming language, frameworks and major libraries are used in the _frontend implementation_?

## Sprint Review

We have all kinds of cool stuff to show for the Product Owner at the end of this Sprint. Prepare for the upcoming [Sprint Review](/sprint-1#print-review) event, similarly as in the previous Sprint.

{: .important-title }

> Exercise 29
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint2". The release title should be "Sprint 2". Give a brief description for the release that describes the features implemented during the Sprint.

{: .important-title }

> Exercise 30
>
> The Scrum Master should prepare the Sprint Review demonstration at the beginning of the next Sprint. The Scrum Master should make sure that they have a working version of the teacher dashboard and the student dashboard applications on their computer and is able to show how the new features work in the user's perspective. If possible, demonstrate the teacher dashboard application's features in the production environment.
>
> As in the previous Sprint Review, prepare some _sensible_ test data for the Sprint Review.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.
