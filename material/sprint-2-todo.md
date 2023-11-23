---
layout: page
title: Sprint 2
permalink: /sprint-2-todo
nav_order: 7
nav_exclude: true
---

{% include toc.html %}

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, Estimation, REST APIs and communication between frontend and backend.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_2_deadline}}. We will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-26. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

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

1. Based on their experiences during the Sprint, each team member should write cards for each of the three categories. Choose the card color based on the category. Try to come up with cards for each category.
2. Once everyone is done writing the cards, go through the cards from each category. The writer of the card should shortly describe what their card means.
3. Pick at least three most urgent issues from the _mad_ and _sad_ categories and come up with _concrete_ actions to solve each of these issues during the upcoming Sprint. For example a concrete action for the issue "I always have conflicts when I try to pull code from the GitHub" could be "Pull code from GitHub more often" and "Create smaller commits and push code to GitHub more often".

Make sure that everyone follows the event structure and that each team member gets their voice heard.

{: .important-title }

> Exercise 1
>
> _One of the team members_ should create a new session in Flinga as instructed above. Name the session "Retrospective 1". Once the session is created, other team members should join the session with the "Join link". Setup the session board and organize the Retrospective event as instructed above.
>
> Once you have completed the Retrospective write down the issues and actions to the repository's `documentation/retrospectives/sprint-1.md` file and push the changes to GitHub.

## Estimation

Good user stories are _estimable_ (the "E" of INVEST) and a good Product Backlog is _estimated_ (the "E" of DEEP). _Estimation_ is the process where the Developers consider the efforts required to implement a certain user story in the Product Backlog. The purpose of estimation is not to create financial budgets for the project, but to help the _Product Owner to prioritize the user stories_ in the Product Backlog and _facilitate discussion about the user stories among the Developers_.

The Product Owner isn't commonly a technical person, so they won't be able to come up with estimates for the user stories. That's the job of the Developers. The estimates provided by the Developers have high value for the Product Owner in the prioritization of the user stories. For example if the implementation of a certain user story requires huge amount of effort, it might make sense to lower its priority.

User stories aren't commonly estimated by considering the working hours required to implement a user story. That's because such estimate is very hard to come up with and thus it is very unreliable. Instead we consider the _relative effort_ required compared to some other user story.

For example let's consider these three user stories from the previous Sprint:

1. As a teacher, I want to add a quiz so that my students can learn about course-related topics
2. As a teacher, I want to list the added quizzes so that I know which quizzes are added
3. As a teacher, I want to be able to edit a quiz so that I can change its information

Some team member could estimate that the implementation of the _first user story_ requires the double amount of effort compared to the implementation of the _second user story_. Also, some could estimate that the implementation of the _first_ and the _third user story_ require somewhat the same amount of effort.

In Scrum, the user story estimation is commonly provided in _story points_. A story point isn't based on time (working hours) required for the implementation. The Scrum Team will define themselves what amount of effort one story point represents so that their estimations are "calibrated".

We could say, for example that the _second user story_ from the previous Sprint is worth _2 story points_. In our estimations we would then compare other user stories to this user story. This would mean that the estimate suggested above would estimate that the _first_ and the _third user stories_ are worth _4 story points_ (double the amount effort). Estimates from a different team members _could be different_ (and probably are) but at least they are comparing the effort with the same user story.

During estimation the Developers usually have a different view of how many story points a certain user story is worth. However, in the end they need to come up with an single estimate for each user story that _everyone agrees on_. There are different techniques to facilitate the estimation so that the agreement can be eventually accomplished. One such technique is the _planning poker_.

### Planning poker

[Planning poker](https://en.wikipedia.org/wiki/Planning_poker) is a (fun) technique to facilitate estimation of user stories. We first need to decide which are the number of story points we use for the estimation. The [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) is a common choice: 1, 2, 3, 5 or 8 story points. Then we need to make sure that everyone knows the amount of effort required for a certain amount of story points. Let's say that the user story "As a teacher, I want to list the added quizzes so that I know which quizzes are added" is worth _2 story points_ and we should compare the effort of other user stories to that.

Here's a table describing the worth of the available story points:

| The required effort                                             | Story points   |
| --------------------------------------------------------------- | -------------- |
| _Half the effort_ compared to the reference user story          | 1 story point  |
| _Somewhat the same effort_ compared to the reference user story | 2 story points |
| _A bit more effort_ compared to the reference user story        | 3 story points |
| _Double the effort_ compared to the reference user story        | 5 story points |
| _Four times the effort_ compared to the reference user story    | 8 story points |

As mentioned, the reference user story is the first user story of the previous Sprint:

> As a teacher, I want to list the added quizzes so that I know which quizzes are added

{: .note }

> The Fibonacci sequence is commonly used instead of a linear sequence (1, 2, 3, 4...) because _larger user stories are more difficult to estimate_. The Fibonacci sequence starts to grow quickly after five, so we don't need to be very accurate while estimating large user stories. On the other hand, if we have a user story worth more than 8 story points, we should really consider splitting it into smaller user stories.

Once we have "calibrated" the worth of a story point we can start the actual planning poker event. For each user story under estimation we should perform the following steps:

1. Discuss the technical requirements (tasks) for the user story. Make sure that everyone is on the same page what is required to implement the user story.
2. Everyone will consider _by themself_ (no dicussion) how many story points the user story is worth. The estimate needs to be 1, 2, 3, 5 or 8 story points. Compare the effort to the user story "As a teacher, I want to list the added quizzes so that I know which quizzes are added" which is worth 2 story points
3. Everyone will write down their story point estimate.
4. Once everyone is ready, everyone will show their estimate at the same time
5. If there's more than one point difference in the least and most amount of story points in the suggested estimates, discuss the implementation further to find out why there is such difference in the estimates. Then, repeat the steps 1 - 5 until you have an agreement.
6. Once the team has agreed on the user story estimate for the user story, the estimate should be added to the Product Backlog. We can for example add a [label](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) with the story points for the user story related issue.

{: .note }

> In a traditional planning poker session, each team member will have a card for different story points (for example card for 1, 2, 3, 5 and 8 story points). Team members are sitting in a round table revealing their cards. Because the session is a bit like a poker game, the "planning poker" name is suitable.

## 🏃‍♂️ Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> "It's great that we can now add, list, edit and delete quizzes! What we now need is a way for the teacher to add questions for the quizzes and student to take the quizzes.
>
> Let's start with a small user-experience improvement. It would nice if the quiz list would display the date when the quiz was added. This way, the teacher would know how old the quiz is. Also, quizzes should be listed from newest to oldest. This way, the teacher can find the latest quizzes quickly at the top of the list.
>
> The teacher should be able to add questions for the quizzes. For example the "The capital cities of Europe" of quiz could have questions "What's the capital of Finland?" and "What's the capital of Sweden?". In addition to the question text, the teacher should be able to provide the correct answer for questions, for example "Helsinki" and "Stockholm". A question can be added in the quiz edit form we implemented during the previous Sprint. The added questions for the quiz should be listed and below the list there should be a form for adding a question. The form should have fields for the question text and the correct answer. The teacher should not be able to add a question with a blank text or correct answer. Once a question has been added for the quiz, the teacher should be able to delete it. The question list should have a "Delete" button next to each question.
>
> Once we have this basic set of features for the teachers, we can start working on the student dashboard. The student dashboard should have a separate page that lists the added quizzes with the quiz name and the date when it was added. These quizzes should be listed from newest to oldest as well. Each quiz name should be a link to a separate page where the quiz name, description and the questions are displayed.
>
> In the quiz page the student should be able to take the quiz by answering the questions. The questions should be displayed one by one and the student should see the quiz progress with some kind of a progress bar. When the student answers a question, there should be some kind of feedback which tells the student if their answer was correct or not. For example, "That's correct, good job!", or "That's not correct, the correct answer is "Helsinki"". Once the student has answered all the questions there should be a summary of the results, for example "You got 3/5 questions correct" and a button "Retake the quiz" which the student can click to take the same quiz again.
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As a teacher, I want to know the date when a quiz was added so that I know how old it is
2. As a teacher, I want the quizzes to be listed from newest to oldest so that I can find the latest quizzes quickly
3. As a teacher, I want to add a question for a quiz so that my students can learn about course-related topics
4. As a teacher, I want to see a list of quiz-related questions so that I know which questions the quiz has
5. As a teacher, I want to delete quiz-related questions so that I can get rid of questions I don't need
6. As a student, I want to see a list of quizzes so that I know what kind of quizzes I can take
7. As a student, I want to see a the questions of the quiz, so that I know the contents of the quiz
8. As a student, I want to answer the quiz questions so that I can learn the correct answers

For the _first user story_, the Developers came up with the following tasks:

1. Add a createdAt attribute with the CreationTimestamp annotation for the Quiz class
2. Add a "Added on" column which displays the formatted date for the quiz list Thymeleaf template

The tasks for the last three user stories will be covered in the [REST APIs](#rest-apis) and [Communication between frontend and backend](#communication-between-frontend-and-backend) sections.

{: .note }
The tasks described above are suggestions, feel free to alter them or add new tasks.

{: .important-title }

> Exercise 2
>
> Create a Sprint Backlog project for the second Sprint in GitHub Projects. Name the project "Sprint 2 Backlog". Use the default project columns, similar as in the Sprint 1 Backlog project. Add a "Sprint 2 Backlog" link for the project to the "Backlogs" section in the `README.md` file.

{: .important-title }

> Exercise 3
>
> Make sure that all task related issues that have been completed during the Sprint 1 are _closed_ and their _status is "Done"_ in the Sprint 1 Backlog project. Do the same with the user story related issues _accepted by the Product Owner_ during the Sprint Review event.
>
> If you didn't manage to implement all user stories during Sprint 1, move the task related issues of the unfinished user stories to the Sprint 2 Backlog project.

{: .important-title }

> Exercise 4
>
> Come up with tasks for the second user story, "As a teacher, I want the quizzes to be listed from newest to oldest so that I can find the latest quizzes quickly". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 11 to get tips for the implementation.

{: .important-title }

> Exercise 5
>
> Come up with tasks for the third user story, "As a teacher, I want to add a question for a quiz so that my students can learn about course-related topics". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 11 to get tips for the implementation.

{: .important-title }

> Exercise 6
>
> Come up with tasks for the fourth user story, "As a teacher, I want to see a list of quiz-related questions so that I know which questions the quiz has". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 12 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 7
>
> Come up with tasks for the fifth user story, "As a teacher, I want to delete quiz-related questions so that I can get rid of questions I don't need". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 13 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 8
>
> 1. Create a [label](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) for each user story, such as "quiz creation date" and "add question"
> 2. Create an issue for each _user story_. Add a label "user story" and the user story's label for each issue. Add the issues to the Product Backlog project and move them to the "In Sprint" column
> 3. Create an issue for each _tasks_ of the _first five user stories_. If the task description is long, use a short version of the description as the issue title and add the full description as the issue description. Add a label "task" and the task related user story's label for each issue. Add the issues to the Sprint 2 Backlog project and move them to the "Todo" column

{: .important-title }

> Exercise 9
>
> The Product Owner needs your help in estimating user stories.
>
> 1. Create [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) "1 story point", "2 story points", "3 story points", "5 story points" and "8 story points"
> 2. Facilitate a planning poker event where you estimate the _first five user stories_ of the Sprint
> 3. Based on the user story estimation, add the story point labels for the five user story related issues

{: .important-title }

> Exercise 10
>
> Implement the tasks of the first user story, "As a teacher, I want to know the date when a quiz was added so that I know how old it is".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-1.png)
>
> Tips for implementing the tasks:
>
> - [CreationTimestamp](https://www.baeldung.com/hibernate-creationtimestamp-updatetimestamp)
> - You can format an [Instant](https://www.baeldung.com/java-instant-vs-localdatetime) object in a Thymeleaf template in the following way:
>
>   ```html
>   <td th:text="${#temporals.format(message.createdAt,'dd.MM.yyyy')}"></td>
>   ```

{: .important-title }

> Exercise 11
>
> Implement the tasks of the second user story, "As a teacher, I want the quizzes to be listed from newest to oldest so that I can find the latest quizzes quickly".
>
> Tips for implementing the tasks:
>
> - Use the `createdAt` attribute (see the tasks of the first user story) in ordering the recommendations
> - [Sorting Query Results with Spring Data](https://www.baeldung.com/spring-data-sorting)

{: .important-title }

> Exercise 12
>
> Implement the tasks of the third user story, "As a teacher, I want to add a question for a quiz so that my students can learn about course-related topics".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-2.png)
>
> Validate that the question text and correct answer is not blank.

{: .important-title }

> Exercise 13
>
> Implement the tasks of the fourth user story, "As a teacher, I want to see a list of quiz-related questions so that I know which questions the quiz has".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-3.png)

{: .important-title }

> Exercise 14
>
> Implement the tasks of the fifth user story, "As a teacher, I want to delete quiz-related questions so that I can get rid of questions I don't need".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-4-1.png)

## Reducing boilerplate code with Lombok

{: .note }

> Lombok is a nice-to-have addition for the project, _but not required_.

Java classes require a lot of _boilerplate code_ in the form of getters, setters and constructors. Each time we define an attribute for a class, we need to implement getter and setter methods for it and alter the constructor. [Lombok](https://projectlombok.org/) is library that automatically generates getters, setters and constructors from the attributes.

Before we can start using Lombok, we need to add it as dependency for our Maven project. Let's add the dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.18.30</version>
  <scope>provided</scope>
</dependency>
```

Lombok also needs the IDE support. We can setup Lombok for Eclipse by following these [instructions](https://projectlombok.org/setup/eclipse#via-eclipse-plugin-installer).

Once we have successfully setup the Lombok library, we can start using it in our classes. Lombok generates boilerplate code for classes using a set of [annotations](https://projectlombok.org/features/). For example, the [@Getter](https://projectlombok.org/features/GetterSetter) annotation generates getters and the [@Setter](https://projectlombok.org/features/GetterSetter) annotation setters for the class. We also need an empty constructor for Entity classes. We can use the [@NoArgsConstructor](https://projectlombok.org/features/constructor) annotation for this.

Here's an example of using these annotations on the `Message` class:

```java
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Message {
  @Id
  @GeneratedValue
  private Long id;

  @CreationTimestamp
  private LocalDateTime createdAt;

  @Column(nullable=false)
  private String content;

  public Message(String content) {
    this.content = content;
  }
}
```

Wow, that eliminates a lot of boilerplate code! Lombok has many other useful annotations as well, such as the [@Builder](https://projectlombok.org/features/Builder) annotation. Check the [documentation](https://projectlombok.org/features/) for more.

## REST APIs

So far the user has interacted with our web application in the following manner:

1. The user opens a page at certain path, for example `/`, on a web browser.
2. The web browser sends a request to the server (the backend) for the resource of that path.
3. On the server, the request is delegated to the controller method responsible for handling requests for the path.
4. The controller method retrieves the required data from the database and based on the data creates an HTML page.
5. The HTML page is sent as a response and the browser displays the page for the user.

So the representation of our application's data is an HTML page. But what if we would like to implement the user interface with JavaScript, for example using React? In this case, instead of representing the data as HTML pages we need a proper _application programming interface_ (API) for the data.

There are different kinds text-based data presentation formats that programming languages, such as JavaScript, know how to _parse_ and _serialize_. One such format is JavaScript Object Notation (JSON). The server can send text-based JSON data as a response and JavaScript has built-in functions to parse the data as JavaScript objects:

```js
// jsonData contains a string of JSON data (note the quotes around the array brackets)
const jsonData = '["This", "is", "a", "JSON", "array"]';
// parsedData contains a JavaScript array
const parsedData = JSON.parse(jsonData);
console.log(parsedData.length); // 5
```

Similarly, we can serialize a JavaScript object into a text-based JSON string and send it to the server:

```js
const data = ["This", "is", "a", "JavaScript", "array"];
// jsonData contains a string of JSON data
const jsonData = JSON.stringify(data);
console.log(jsonData); // '["This", "is", "a", "JavaScript", "array"]'
```

Instead of sending a response as an HTML page, we can serialize Java objects into JSON strings and send it as a response. Let's have a look at the [MessageRestController](https://github.com/software-development-project-1/example-project/blob/main/src/main/java/fi/haagahelia/coolreads/controller/MessageRestController.java) controller class in the example project:

```java
@RestController
@RequestMapping("/api/messages")
public class MessageRestController {
  @Autowired
  private MessageRepository messageRepository;

  @GetMapping("")
  public List<Message> getMessages() {
    return messageRepository.findAll();
  }
}
```

The `@RestController` annotation on the `MessageRestController` class specifies that each method of the controller class produces a JSON response. Instead of returning the name of the Thymeleaf template, we can directly return Java objects. For example the `getMessages` method returns a list of `Message` objects. If we open the page <http://localhost:8080/api/messages> in a web browser we should see this list.

By using JSON as the data representation format we can separate the _client_ (the user interface application) from the server. This allows as to implement many different kinds of client applications with different programming languages. This separation of server and client is one of the corner stones of the _the REST architectural style_.

_REST_, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called _RESTful systems_, are characterized by how they are stateless and separate the concerns of client and server.

In a RESTful system, the requests must contain a path to a _resource_ that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on. For example, the path `/users/29/messages` is a resource for messages of a user with a specific id. These paths are also referred to as _endpoints_.

The request should also contain the _HTTP method_, that determines the operation itself. For example, the `GET` method is used to retrieve data, and _never to manipulate it_. When we open a page on a web browser, a `GET` request is sent. The `POST` method on the other hand is used to manipulate the data, so it can have side-effects such as creating an entry to the database. The `PUT` method is used to update an entry and the `DELETE` method is used to delete it. `POST`, `PUT` or `DELETE` methods are commonly used when user submits a form.

The resource path has certain naming conventions. The path starts with the resource _collection_ name in plural, for examples "users". The collection name is followed by resource specifiers, for example the id of the resource. Here's example of RESTful API paths for the "users" collection:

| Method   | Path          | Description                          |
| -------- | ------------- | ------------------------------------ |
| `GET`    | `/users`      | List all users                       |
| `GET`    | `/users/{id}` | Get the user with the provided id    |
| `POST`   | `/users`      | Create a user                        |
| `PUT`    | `/users/{id}` | Update the user with the provided id |
| `DELETE` | `/users/{id}` | Delete the user with the provided id |

The `{id}` part of the `/users/{id}` path is a _path variable_. For example, the path for user with id 2 would be `/users/2`.

A collection can have _sub-collections_. For example, a path for a user's messages resource would be `/users/{id}/messages`, where "messages" is a sub-collection. [This guide](https://restfulapi.net/resource-naming/) has more information about the resource path naming conventions.

When we design and implement REST API endpoints we should consider the use case. We don't implement endpoints arbitrary, there should be a _need for the endpoint_ first, for example a certain feature in a frontend application needs to display some data in the database. Based on the feature we consider what kind of data and operations the REST API needs to provide. These requirements will determine the endpoints we will implement.

We should however remember to _follow the implementation conventions_ to keep the REST API endpoints _reusable_ throughout the application. For example we don't want to implement a `/api/recommendations-for-home-page` endpoint just to provide data for a specific feature. Instead, we should be implement a single `/api/recommendations` endpoint, which is reusable for other features as well.

We can create a separate controller class for each collection. The `@RequestMapping` annotation can be used the define the collection name prefix of the path. Each method will automatically get the prefix in the path, so we don't need to have it in the `@GetMapping` or `@PostMapping` annotations:

```java
@RestController
@RequestMapping("/api/messages")
public class MessageRestController {
  // ...

  @GetMapping("/{id}")
  public Message getMessageById(@PathVariable Long id) {
    return messageRepository.findById(id).orElseThrow(
      () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Message with id " + id + " does not exist"));
  }

  @PostMapping("")
  public Message createMessage(@Valid @RequestBody AddMessageDto message, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, bindingResult.getAllErrors().get(0).getDefaultMessage());
    }

    Message newMessage = new Message(message.getContent());
    return messageRepository.save(newMessage);
  }
}
```

In this case, the `getMessageById` method will handle GET request to the path `/api/messages/{id}` and the `createMessage` method will handle POST request to the path `/api/messages`.

{: .note }

> It's handy to use some prefix, such as "api" to distinguish paths that produce JSON responses from paths that produce HTML pages.

### REST API error handling and HTTP status codes

Previously we have handled errors in requests by sending a redirect or rendering a Thymeleaf template with some error messages. With REST API endpoints we communicate errors with [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and JSON formatted error objects containing details about the error. HTTP status codes are numeric codes that describe whether the request was successful or not.

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

If we don't throw a `ResponseStatusException` exception, the `200 OK` status code will be sent with the response, which indicates the that request succeeded.

## Communication between frontend and backend

The purpose of the REST APIs we just implemented on the backend is that we can _separate_ the client application from the backend application. In web applications these client applications are commonly called _frontend applications_ and they are implemented using JavaScript programming language.

It's very difficult to implement complex frontend applications using plain JavaScript. That's is why libraries such as [React](https://react.dev/) are used. React allows us to build user interfaces out of individual pieces called _components_. Components represent a visual element on the page, such as `MessageList`, or `MessageListItem`:

```jsx
// We can use props object to reuse components, just like regular functions
export default function MessageListItem(props) {
  return <li>{props.message.content}</li>;
}
```

If you aren't familiar with React yet, React's documentation has great [tutorials](https://react.dev/learn).

{: .note }

> This material doesn't go into React details. It is recommended that those team members who have completed (or currently completing) the Front End Development course will be working on the exercises in this section.

The example project has a simple [Vite](https://vitejs.dev/) frontend application in the `frontend` folder. We will be using this application as an example.

The communication between the frontend application and the backend application is performed using the JavaScript's [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). The Fetch API provides the `fetch` function, which can be used to send a HTTP request to a specific URL:

```js
fetch("/api/messages")
  .then((response) => response.json())
  .then((messages) => {
    console.log(messages);
  });
```

{: .note }

> Our frontend application's source is served from the same _origin_ as the backend, which is <http://localhost:8080>. This is why don't need to specify the full URL in the `fetch` call, which is <http://localhost:8080/api/messages>. Instead we can specify just the path. For example, the Vite development server serves the source files from a different origin (by default <http://localhost:5173>) and in this case we would need to use the full URL.

The `fetch` function returns a [Promise](https://javascript.info/promise-basics) object. The promise resolves a `Response` object, which contains the response from the server. The response's JSON payload can be parsed into JavaScript objects using the `response.json()` method.

The default request method is GET. We can also send a POST request with a JSON formatted request body by providing addional options for the `fetch` call:

```js
fetch("/api/messages", {
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

In the example project, the logic of fetching and creating messages is extracted into `getAllMessages` and `createMessage` functions, which can be found in the `frontend/src/services/messageService.js` file:

```js
export function getAllMessages() {
  return fetch("/api/messages").then((response) => response.json());
}

export function createMessage(message) {
  return fetch("/api/messages", {
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

The `MessageList` component in the `frontend/src/components/MessageList.jsx` calls the `getAllMessages` function to display the message list:

```jsx
import { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getAllMessages } from "../services/messageService";
import MessageListItem from "./MessageListItem";

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAllMessages().then((messages) => {
      setMessages(messages);
    });
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1">
        Messages
      </Typography>
      <ul>
        {messages.map((message) => (
          <MessageListItem key={message.id} message={message} />
        ))}
      </ul>
      <Button
        component={Link}
        to="/messages/add"
        variant="contained"
        sx={{ marginBottom: 2 }}
      >
        Add a message
      </Button>
    </>
  );
}
```

Explore the code in the `frontend` folder. You can start the Vite development server by runing the `npm run dev` command in the `frontend` folder.

## Designing REST API endpoints for user stories

Next, let's consider what kind of REST API endpoints we need for the last three user stories. In the sixth user story, "As a student, I want to see a list of quizzes so that I know what kind of quizzes I can take", we need an lists all the quizzes. To follow the REST API naming principles, we can implement a GET method endpoint `/api/quizzes`. We can add a `QuizRestController` class and implement the endpoint with a `getQuizzes` method.

In the seventh user story, "As a student, I want to see a the questions of the quiz, so that I know the contents of the quiz", we need to display information of a quiz with a specific id. For this use-case we can implement a GET method enpoint `/api/quizzes/{id}`. We also want to list the quiz-related questions. For this use-case we can implement a GET method endpoint `/api/quizzes/{id}/questions`. We can implement the endpoints with a `getQuizById` and a `getQuestionsByQuizId` method in the `QuizRestController` class.

In the eighth user story, "As a student, I want to answer the quiz questions so that I can learn the correct answers", we need save the student's answer to the database. Before implementing the endpoint we need to consider what kind of data we need to store about the student's answer. We want at least to know which questions the answer is related to, what's the answer text and whether the answer was correct or not (we could also infer this information from the question). So, we need to implement the appropriate JPA entity class and a JPA repository class first. Then, we can implement a POST method endpoint `/api/answers` for this use-case. We can add a `AnswerRestController` class and implement the endpoint with a `createAnswer` method.

Before starting to implement the frontend features, we should test that the endpoints work as expected. GET method endpoints are easy to test with a web browser by just visiting the endpoint URL, for example <http://localhost:8080/api/quizzes>. POST method endpoints can be tested with tools such as [Postman](https://www.postman.com/).

{: .important-title }

> Exercise 15
>
> Come up with tasks for the sixth user story, "As a student, I want to see a list of quizzes so that I know what kind of quizzes I can take". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise X to get tips for the implementation.
>
> Create an issue for each task and add them to the Sprint 2 Backlog project.

{: .important-title }

> Exercise 16
>
> Come up with tasks for the seventh user story, "As a student, I want to see a the questions of the quiz, so that I know the contents of the quiz". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise X to get tips for the implementation.
>
> Create an issue for each task and add them to the Sprint 2 Backlog project.

{: .important-title }

> Exercise 17
>
> Come up with tasks for the eighth user story, "As a student, I want to answer the quiz questions so that I can learn the correct answers". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise X to get tips for the implementation.
>
> Create an issue for each task and add them to the Sprint 2 Backlog project.

## Cross-Origin Resource Sharing (CORS)

In our case the frontend application's JavaScript file is served by the backend from URL of form `http://localhost:8080/frontend/renderRecommendationList-RANDOM_HASH.js`. The frontend application is sending requests using the `fetch` function to URLs that start with `http://localhost:8080`. That is, the JavaScript file is sending request to the _same origin_, which is `http://localhost:8080`.

That's not case all the time. For example a Vite development server is serving the JavaScript files from an URL that starts with `http://localhost:5173`. If we would send a request from a frontend application served from the Vite development server to our backend, we would send a request to a _different origin_. These kind of requests are called _cross-orgin_ requests.

Web browsers don't allow `fetch` functions to send cross-origin requests by default. This is called the Same-origin Policy. The reason for this is that cross-origin requests can cause [security issues](https://medium.com/@ehayushpathak/security-risks-of-cors-e3f4a25c04d7). We can however allow certain (or every) cross-origin request by using [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS).

The idea of CORS is that the web browser "asks" the backend if cross-origin request from a certain origin is allowed by sending a special HTTP request. If backend allows the requests, then the web browser will send it. In a Spring Boot application we can use the [@CrossOrigin](https://spring.io/guides/gs/rest-service-cors/) annotation in the class or method level to allow cross-origin requests to certain or all paths of controller.

For example we can allow cross-origin requests from `http://localhost:5173` origin for all `ReadingRecommendationRestController` method paths in the following way:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins="http://localhost:5173")
public class MessageRestController {
  // ...
}
```

TODO: proxy

{: .important-title }

> Exercise 18
>
> Implement the tasks of the sixth user story, "As a student, I want to see a list of quizzes so that I know what kind of quizzes I can take".
>
> The implementation should look roughly something like this:

{: .important-title }

> Exercise 19
>
> Implement the tasks of the seventh user story, "As a student, I want to see a the questions of the quiz, so that I know the contents of the quiz".
>
> The implementation should look roughly something like this:

{: .important-title }

> Exercise 20
>
> Implement the tasks of the eighth user story, "As a student, I want to answer the quiz questions so that I can learn the correct answers". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise X to get tips for the implementation.
>
> The implementation should look roughly something like this:

## API documentation with Swagger

Now that we have implemented REST API endpoints for our application, we should describe to our fellow developers what these endpoints are and what kind of data they provide. We could write this documentation by hand, but there's a high risk that the documentation will become stale in the future. For example, if we make some alteration to the structure of the provided data and forget to update the documentation. That is why API documentation is commonly generated automatically by tools such as [Spring Doc](https://springdoc.org/).

Spring Doc is a library for generating a JSON-formatted description of a REST API from our controller classes and their methods. This description follows a common format called the [OpenAPI Specification](https://swagger.io/docs/specification/about/) format. Once the OpenAPI formatted description is generated, there are tools to display the information in a user-friendly way as a user interface. One of such tools is [Swagger](https://swagger.io/).

Swagger provides documentation for the API endpoints we define in the controller methods. The documentation is a user interface that lists the endpoints and provides information for each one, such as what the request for the endpoint looks like and what's in the response. We can also easily send requests and inspect the response using the user interface. [Here](https://petstore.swagger.io/) is an example of a Swagger documentation.

Let's start documenting our API by adding the Spring Doc dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
   <groupId>org.springdoc</groupId>
   <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
   <version>2.0.2</version>
</dependency>
```

Then, let's start our application and open <http://localhost:8080/v3/api-docs> in a browser. We should see the JSON formatted description of our REST API in the OpenAPI format. For a more user-friendly description, the Swagger documentation can be found at <http://localhost:8080/swagger-ui.html>. In the Swagger documentation, we can see a documentation for two controllers: the `QuizRestController` controller and the `AnswerRestController` controller.

Let's have a look at the documentation for the `/api/quizzes/{id}/questions` endpoint under the "quiz-rest-controller". We see all relevant information about the endpoint: the path, path parameters, and an example of the response. We can send a test request by clicking the "Try it out" button on the right. This is handy while we are exploring an API that we aren't familiar with.

We can provide more details about the endpoints by using specific annotations for the controller classes and methods. For example, we can provide a better name and a description for the category API using the `@Tag` annotation:

```java
@RestController
@RequestMapping("/api/quizzes")
@Tag(name="Quiz", description="Information about quizzes and their answers")
public class QuizRestController {
  // ...
}
```

Now, if we open <http://localhost:8080/swagger-ui.html> again, we should see the new name and the description for the category API.

We can also provide more information about a specific endpoint using the `@Operation` annotation:

```java
@RestController
@RequestMapping("/api/quizzes")
@Tag(name="Quiz", description="Information about quizzes and their answers")
public class QuizRestController {
  // ...

  @Operation(
    summary = "Questions of a quiz",
    description = "Returns all the questions of a specific quiz"
  )
  @GetMapping("/{id}/questions")
  public List<Question> getQuestionsByQuizId(@PathVariable Long id) {
    // ...
  }
}
```

{: .important-title }

> Exercise 21
>
> Generate a Swagger documentation for the project as described above. Add proper name and description all REST controller classes using the `@Tag` annotation. For each REST controller method add a proper summary and description using the `@Operation` annotation.
>
> For other developers to find the Swagger documentation, add a "Documentation" subheading for the `README.md` file and under that a link to the Swagger documentation at <http://localhost:8080/swagger-ui.html>.

## The .gitignore file

In the root folder of our repository there is a [.gitignore](https://git-scm.com/docs/gitignore) file. There's also one in the `frontend` folder. The `.gitignore` file has a special role in the Git project. It specificies _which files Git should ignore_. There are a few reason why we want specific files or entire folders being ignored by Git:

- The file contains _sensitive information_, such as database usernames and passwords. We don't want these to end up in our repository for everyone to see.
- The file or folder contains content _that can be generated by running a certain command_. An example of such folder is the `node_modules` folder, which contains the library dependencies for the frontend. This folder is usally quite big and we can always generate it by running `npm install`. Another such example is the `target` folder where Maven generates different files.
- The file or folder contains IDE specific configuration that is only relevant for a certain developer. An example of such folder is the `.vscode` folder.

In the `.gitignore` file (generated by [Vite](https://vitejs.dev/)) in the `frontend` folder we have for example the following lines:

```
node_modules
dist
```

These two lines will ignore both the `node_modules` and `dist` folders in the `frontend` folder. The `.gitignore` file makes sure that when we run the `git add` command, we don't accidently add files or folders that shouldn't end up in the repository.

## Deploying the frontend

TODO

We can integrate the frontend's npm scripts with the backend's Maven workflow using the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin). Using the plugin, we can run all the commands required for the frontend application when we compile the Java code. This will simplify the development workflow of the whole application.

Let's add the frontend-maven-plugin to the `<plugins>` list in the `pom.xml` file:

```xml
<plugin>
  <groupId>com.github.eirslett</groupId>
  <artifactId>frontend-maven-plugin</artifactId>
  <version>1.14.2</version>
  <configuration>
    <installDirectory>target</installDirectory>
  </configuration>
  <executions>
    <execution>
      <id>install node and npm</id>
      <goals>
        <goal>install-node-and-npm</goal>
      </goals>
      <phase>generate-resources</phase>
      <configuration>
        <nodeVersion>v18.16.0</nodeVersion>
      </configuration>
    </execution>
    <execution>
      <id>npm install</id>
      <goals>
        <goal>npm</goal>
      </goals>
      <phase>generate-resources</phase>
      <configuration>
        <arguments>install</arguments>
      </configuration>
    </execution>
    <execution>
      <id>npm build</id>
      <goals>
        <goal>npm</goal>
      </goals>
      <phase>generate-resources</phase>
      <configuration>
        <arguments>run build</arguments>
      </configuration>
    </execution>
  </executions>
</plugin>
```

The plugin will execute three commands when we generate the resources for the project:

1. Install a _project-specific_ Node.js version into the `node` folder. This won't effect your other Node.js installations
2. Run `npm install` command to install frontend dependencies
3. Run `npm run build` command to generate a minified bundle of the frontend code, suitable for the production version of the application

Now, if we run the `./mvnw spring-boot:run` command, the command output indicates that the frontend related commands are executed.

{: .important-title }

> Exercise 22
>
> Use the frontend-maven-plugin in the project as instructed above.

## Sprint Review

We have all kinds of cool stuff to show for the Product Owner at the end of this Sprint. Prepare for the upcoming [Sprint Review](/sprint-1#print-review) event, similarly as in the previous Sprint.

{: .important-title }

> Exercise 23
>
> Once you have implemented the user stories of the Sprint, remove the excessive Java class files and Thymeleaf template files that were in the original example project and are not relevant to your project. Also, remove the excessive `messageList` folder from the `frontend` folder.

{: .important-title }

> Exercise 24
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint2". The release title should be "Sprint 2". Give a brief description for the release that describes the features implemented during the Sprint.

{: .important-title }

> Exercise 25
>
> Decide which team member gives the Sprint Review demonstration at the beginning of the next Sprint. The team member should be _someone else as the one who gave it previously_. This team member should make sure that they have a working version of the application either deployed to Render (preferred) or on their computer and is able to show how the new features work in the user's perspective. If you managed to deploy the application to Render, demonstrate the features in the production environment.
>
> As in the previous Sprint Review, prepare some _sensible_ test data for the Sprint Review.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.

## ⭐ Bonus user story

{: .note }

> This user story is optional. If you have implemented all other user stories, feel free to implement this one.

The Product Owner came up with a feature for the application if we run out of work during the Sprint:

> "It would be very useful if a student would be able to filter quizzes in the student dashboard based on their name or description.
>
> There could be a search field at the top of the quiz list page. If either the name or the description of a quiz contains the keyword typed in to the field, the quiz would be listed. If there's no keyword, all the quizzes should be listed."
>
> -- The Product Owner

{: .important-title }

> Bonus exercise
>
> Come up with a user story based on the Product Owner's description, create an issue for the user story and add it to the "Product Backlog" project. Then, split the user story into tasks, create an issue for each task and add those to the Sprint 2 Backlog project. Finally, implement the tasks.
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-bonus.png)
>
> The [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method might be useful for the implementation.
