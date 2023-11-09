---
layout: page
title: Sprint 2
permalink: /sprint-2-todo
nav_order: 7
---

{% include toc.html %}

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, REST APIs and communication between frontend and backend.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_2_deadline}}. We will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-22. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

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
> Once you have completed the Retrospective write down the issues and actions to the repository's `retrospectives/sprint-1.md` file and push the changes to GitHub.

## Estimation

Good user stories are _estimable_ (the "E" of INVEST) and a good Product Backlog is _estimated_ (the "E" of DEEP). _Estimation_ is the process where the Developers consider the efforts required to implement a certain user story in the Product Backlog. The purpose of estimation is not to create financial budgets for the project, but to help the _Product Owner to prioritize the user stories_ in the Product Backlog and _facilitate discussion about the user stories among the Developers_.

The Product Owner isn't commonly a technical person, so they won't be able to come up with estimates for the user stories. That's the job of the Developers. The estimates provided by the Developers have high value for the Product Owner in the prioritization of the user stories. For example if the implementation of a certain user story requires huge amount of effort, it might make sense to lower its priority.

User stories aren't commonly estimated by considering the working hours required to implement a user story. That's because such estimate is very hard to come up with and thus it is very unreliable. Instead we consider the _relative effort_ required compared to some other user story.

For example let's consider these three user stories from the previous Sprint:

1. As a user I want to add a reading recommendation so that I can build a collection of recommendations
2. As a user I want to list the added reading recommendations so that I can find interesting things to read
3. As a user I want to be able to edit a reading recommendation so that I can change its information

Some Developer could estimate that the implementation of the _first user story_ requires the double amount of effort compared to the implementation of the _second user story_. Also, some could estimate that the implementation of the _first_ and the _third user story_ require somewhat the same amount of effort.

In Scrum, the user story estimation is commonly provided in _story points_. A story point isn't based on time (working hours) required for the implementation. The Scrum Team will define themselves what amount of effort one story point represents so that their estimations are "calibrated". Based on our experience on the previous Sprint we could say, for example that the _second user story_ is worth _2 story points_. This would mean that the estimate suggested above would estimate that the _first_ and the _third user stories_ are worth _4 story points_ (double the amount effort). Estimates from a different Developer _could be different_ but at least they are comparing the effort with the same user story.

During estimation the Developers usually have a different view of how many story points a certain user story is worth. However, in the end they need to come up with an single estimate for each user story that _everyone agrees on_. There are different techniques to facilitate the estimation so that the agreement can be eventually accomplished. One such technique is the _planning poker_.

### Planning poker

[Planning poker](https://en.wikipedia.org/wiki/Planning_poker) is a (fun) technique to facilitate estimation of user stories. We first need to decide which are the number of story points we use for the estimation. The [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) is a common choice: 1, 2, 3, 5 or 8 story points. Then we need to make sure that everyone knows the amount of effort required for a certain amount of story points. Let's say that the user story "As a user I want to list the added reading recommendations so that I can find interesting things to read" is worth _2 story points_ and we should compare the effort of other user stories to that.

{: .note }
> The Fibonacci sequence is commonly used instead of a linear sequence (1, 2, 3, 4...) because _larger user stories are more difficult to estimate_. The Fibonacci sequence starts to grow quickly after five, so we don't need to be very accurate while estimating large user stories. On the other hand, if we have a user story worth more than 8 story points, we should really consider splitting it into smaller user stories.

Once we have "calibrated" the worth of a story point we can start the actual planning poker event. For each user story under estimation we should perform the following steps:

1. Discuss the technical requirements (tasks) for the user story. Make sure that everyone is on the same page what is required to implement the user story.
2. Everyone will consider _by themself_ (no dicussion) how many story points the user story is worth. The estimate needs to be 1, 2, 3, 5 or 8 story points. Compare the effort to the user story "As a user I want to list the added reading recommendations so that I can find interesting things to read" which is worth 2 story points
3. Everyone will write down their story point estimate.
4. Once everyone is ready, everyone will show their estimate at the same time
5. If there's more than one point difference in the least and most amount of story points in the suggested estimates, discuss the implementation further and repeat the steps 1 - 5 until you have an agreement.
6. Once there's an agreed user story estimate for the user story, it should be added to the Product Backlog. For example "As a user I want to list the added reading recommendations so that I can find interesting things to read (2 story points)"

{: .note }

> In a traditional planning poker session, each team member will have a card for different story points (for example card for 1, 2, 3, 5 and 8 story points). Team members are sitting in a round table revealing their cards. Because the session is a bit like a poker game, the "planning poker" name is suitable.

## Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> "It's great that we can now add and list the reading recommendations! But, after adding many recommendations it gets really hard to find the right kind of recommendations from the list.
>
> It would nice if the reading recommendation list would display the date when the recommendations was added. This way, the user would know how old the recommendation is.
>
> To better organize the reading recommendations, it would be useful to be able to add different categories, like "Programming tutorials" or "Video game news". User should be able to add a category using a form. The form should only have a field for the category name. The user should not be able to add a category with a blank name or a name that already exists. There should also be a page that lists all the added categories and has a "Add a category" link that takes the user to the form.
>
> After adding a category, the user should be able to select a category from a dropdown menu while adding a recommendation. The dropdown menu should also have an "Uncategorized" option to leave the reading recommendation uncategorized. Once a reading recommendation has been added, the user should be able to change the category in the edit form. The reading recommendation's category should be displayed on the reading recommendation list.
>
> In the reading recommendation list, the user should be able to filter the recommendations based on the category. For example if user chooses a "Programming tutorials" category from a dropdown menu, only the recommendations in that category will be listed. The dropdown menu should also have an "Any category" option to list all the reading recommendations."
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As a user I want to know the date when a reading recommendation was added so that I know how old it is
2. As a user I want to add a category so that I can organize my recommendations
3. As a user I want to see a list of categories so that I know which categories exist
4. As a user I want to provide a category for a reading recommendation so that I can organize my recommendations
5. As a user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier

For the _first user story_, the Developers came up with the following tasks:

1. Add a createdAt attribute with the CreationTimestamp annotation for the ReadingRecommendation entity
2. Add a "Added on" column which displays the formatted date for the Thymeleaf template

For the _second user story_, the Developers came up with the following tasks:

1. Add a Category JPA entity class with id and name attributes, and a CategoryRepository JPA repository class
2. Add a Thymeleaf template for the category submission form containing a field for the category name
3. Add a CategoryController controller class and a method for rendering the category submission form
4. Add a method for the CategoryController class that saves the category to the database
5. Add validation for the category name

The tasks for the fifth user story will be covered in the [Communication between frontend and backend](#communication-between-frontend-and-backend) section.

{: .note }
The tasks described above are suggestions, feel free to alter them or add new tasks.

{: .important-title }

> Exercise 2
>
> Create a Sprint Backlog board for the second Spring in Trello. Name the Sprint Backlog board "Sprint 2 backlog". Add similar lists for the board as in the Sprint 1 backlog.

{: .important-title }

> Exercise 3
>
> Come up with tasks for the third user story, "As a user I want to see a list of categories so that I know which categories exist". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 8 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 4
>
> Come up with tasks for the fourth user story, "As a user I want to provide a category for a reading recommendation so that I can organize my recommendations". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 9 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 5
>
> 1. Add these five user stories to the "Product Backlog" board as cards in Trello. The user stories should be initially in the "In sprint" list of the board.
> 2. Add the tasks of the _first four user stories_ to the "Sprint 2 Backlog" board as cards in Trello. The tasks should be initially in the "To do" list of the board.

{: .important-title }

> Exercise 6
>
> The Product Owner needs your help in estimating user stories. Facilitate a planning poker event where you estimate the _first four user stories_ of the Sprint. Add the story point estimates for the user stories to the Product Backlog.

{: .note }
At this point it might sense to distribute the workload a bit instead of working on each user story together. For example two members of the team could start working on the first user story and the others on the second one. Decide who will be working on which task and assign at least one team member for each task on the Trello board.

{: .important-title }

> Exercise 7
>
> Implement the tasks of the first user story, "As a user I want to know the date when a reading recommendation was added so that I know how old it is".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-1.png)
>
> Tips for implementing the tasks:
>
> - [CreationTimestamp](https://www.baeldung.com/hibernate-creationtimestamp-updatetimestamp)
> - You can format an [Instant](https://www.baeldung.com/java-instant-vs-localdatetime) object in a Thymeleaf template like this: `th:text="${#temporals.format(message.createdAt,'dd.MM.yyyy')}"`

{: .important-title }

> Exercise 8
>
> Implement the tasks of the second user story, "As a user I want to add a category so that I can organize my recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-2.png)
>
> Validate that the category name is not blank and it is unique.

{: .important-title }

> Exercise 9
>
> Implement the tasks of the third user story, "As a user I want to see a list of categories so that I know which categories exist".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-3.png)
>
> User should be able to visit the page by clicking a "Categories" link in the navigation bar.

{: .important-title }

> Exercise 10
>
> Implement the tasks of the fourth user story, "As a user I want to provide a category for a reading recommendation so that I can organize my recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-4-1.png)
>
> ![](/assets/sprint-2-user-story-4-3.png)
>
> ![](/assets/sprint-2-user-story-4-2.png)
>
> Tips for implementing the tasks:
>
> - [OneToMany](https://www.baeldung.com/hibernate-one-to-many)
> - [HTML select tag](https://www.w3schools.com/tags/tag_select.asp)

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

We can create a separate controller class for each collection. The `@RequestMapping` annotation can be used the define the collection name prefix of the path. Each method will automatically get the prefix in the path, so we don't need to have it in the `@GetMapping` annotation:

```java
@RestController
@RequestMapping("/api/messages")
public class MessageRestController {
  // ...

  @GetMapping("/{id}")
  public Message getMessageById(@PathVariable("id") Long id) {
    // ...
  }
}
```

In this case, the `getMessageById` method will handle request to the path `/api/messages/{id}`.

{: .note }

> It's handy to use some prefix, such as "api" to distinguish paths that produce JSON responses from paths that produce HTML pages.

{: .important-title }

> Exercise 11
>
> Create a controller class `ReadingRecommendationRestController` that has a method `getReadingRecommendations`. This method should return _all the reading recommendations_ in path `/api/recommendations` in JSON format. You should be able to see the list of recommendations when opening <http://localhost:8080/api/recommendations> in a web browser.
>
> Add this task to the "Sprint 2 Backlog" board in Trello and assign a team member for the task. This task is related to fifth user story.

{: .important-title }

> Exercise 12
>
> Create a controller class `CategoryRestController` that has a method `getCategories`. This method should return _all the categories_ in path `/api/categories` in JSON format. You should be able to see the list of categories when opening <http://localhost:8080/api/categories> in a web browser.
>
> Add this task to the "Sprint 2 Backlog" board in Trello and assign a team member for the task. This task is related to fifth user story.

{: .important-title }

> Exercise 13
>
> Create a method `getReadingRecommendationsByCategoryId` for the `CategoryRestController` class. This method should return _reading recommendations in a specific category_ in path `/api/categories/{categoryId}/recommendations` in JSON format. The `categoryId` path variable should determine the category id. You should be able to see the list of reading recommendation when opening <http://localhost:8080/api/categories/CATEGORY_ID/recommendations> in a web browser (just replace `CATEGORY_ID` with id of some category that has recommendations).
>
> Add this task to the "Sprint 2 Backlog" board in Trello and assign a team member for the task. This task is related to fifth user story.

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

Then, let's start our application and open <http://localhost:8080/v3/api-docs> in a browser. We should see the JSON formatted description of our REST API in the OpenAPI format. For a more user-friendly description, the Swagger documentation can be found at <http://localhost:8080/swagger-ui.html>. In the Swagger documentation, we can see a documentation for two controllers: the `ReadingRecommendationRestController` controller and the `CategoryRestController` controller.

Let's have a look at the documentation for the `/api/categories/{id}/recommendations` endpoint under the "category-rest-controller". We see all relevant information about the endpoint: the path, path parameters, and an example of the response. We can send a test request by clicking the "Try it out" button on the right. This is handy while we are exploring an API that we aren't familiar with.

We can provide more details about the endpoints by using specific annotations for the controller classes and methods. For example, we can provide a better name and a description for the category API using the `@Tag` annotation:

```java
@RestController
@RequestMapping("/api/categories")
@Tag(name="Category", description="Information about categories and their reading recommendations")
public class CategoryRestController {
  // ...
}
```

Now, if we open <http://localhost:8080/swagger-ui.html> again, we should see the new name and the description for the category API.

We can also provide more information about a specific endpoint using the `@Operation` annotation:

```java
@RestController
@RequestMapping("/api/categories")
@Tag(name="Category", description="Information about categories and their reading recommendations")
public class CategoryRestController {
  // ...

  @Operation(
    summary = "Reading recommendations of a cateogry",
    description = "Fetches all the reading recommendations of a specific category"
  )
  @GetMapping("/{id}/recommendations")
  public List<ReadingRecommendation> getReadingRecommendationsByCategoryId(@PathVariable Long id) {
    // ...
  }
}
```

{: .important-title }

> Exercise 14
>
> Generate a Swagger documentation for the project as described above. Add proper name and description for both the `ReadingRecommendationRestController` and the `CategoryRestController` controllers using the `@Tag` annotation. For each controller method add a proper summary and description using the `@Operation` annotation.
>
> For other developers to find the Swagger documentation, add a "Documentation" subheading for the `README.md` file and under that a link to the Swagger documentation at <http://localhost:8080/swagger-ui.html>.

## Communication between frontend and backend

The purpose of the REST APIs we just implemented on the backend is that we can _separate_ the client application from the backend application. In web applications these client applications are commonly called _frontend applications_ and they are implemented using JavaScript programming language.

It's very difficult to implement complex frontend applications using plain JavaScript. That's is why libraries such as [React](https://react.dev/) are used. React allows us to build user interfaces out of individual pieces called _components_. Components represent a visual element on the page, such as `MessageList`, or `MessageListItem`:

```jsx
import React from "react";

// We can use props object to reuse components, just like regular functions
export default function MessageListItem(props) {
  return <li>{props.message.content}</li>;
}
```

If you aren't familiar with React yet, React's documentation has great [tutorials](https://react.dev/learn).

{: .note }

> This material doesn't go into React details. It is recommended that those team members who have completed (or currently completing) the Front End Development course will be working on the exercises in this section.

The example project has a simple React frontend application in the `frontend/messageList` folder. We will be using this application as an example.

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

In the example project, fetching the messages is extracted into a function called `fetchMessages`, which can be found in the `frontend/messageList/fetchMessages.js` file:

```js
export default function fetchMessages() {
  return fetch("/api/messages").then((response) => response.json());
}
```

This is a simple _abstraction_ for fetching the messages, but it's quite handy. If the logic for fetching the messages (for example the API URL) changes, we only need to change the logic inside the `fetchMessages` function and nowhere else.

The `MessageList` component in the `frontend/messageList/MessageList.jsx` calls the `fetchMessages` function to display the message list:

```jsx
import React, { useEffect, useState } from "react";
import MessageListItem from "./MessageListItem";
import fetchMessages from "./fetchMessages";

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then((fetchedMessages) => setMessages(fetchedMessages));
  }, []);

  return (
    <div>
      <h1>Messages</h1>

      <ul>
        {messages.map((message) => (
          <MessageListItem message={message} key={message.id} />
        ))}
      </ul>

      <a className="btn btn-primary" href="/messages/add">
        Add a message
      </a>
    </div>
  );
}
```

The `MessageList` component is rendered on the page in the `frontend/messageList/renderMessageList.jsx` file:

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import MessageList from "./MessageList";

const root = createRoot(document.getElementById("messageListRoot"));
root.render(<MessageList />);
```

The component is rendered on a HTML element with an id "messageListRoot". This element can be found in the `src/main/resources/templates/reactmessagelist.html` template file:

```html
<!DOCTYPE html>
<html
  xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
  layout:decorate="~{layout.html}"
>
  <head>
    <script th:src="@{/frontend/renderMessageList.js}" defer></script>
  </head>
  <body>
    <div layout:fragment="content">
      <div id="messageListRoot"></div>
    </div>
  </body>
</html>
```

The JavaScript file for the frontend application is added with a `script` tag:

```html
<script th:src="@{/frontend/renderMessageList.js}" defer></script>
```

The JavaScript file is bundled using a _bundler_. The bundler will combines many JavaScript code files into a single file that is loadable in the browser. We will be using the [esbuild](https://esbuild.github.io/) bundler.

If we take a look at the `scripts` section of the `package.json` file in the root folder of the project, we'll see three scripts:

```json
{
  "esbuild-bundle": "esbuild frontend/messageList/renderMessageList.jsx --bundle --sourcemap --outdir=src/main/resources/static/frontend",
  "dev": "npm run esbuild-bundle -- --watch",
  "build": "npm run esbuild-bundle -- --minify"
}
```

Here's what the scripts do:

- The `esbuild-bundle` script will bundle the `frontend/messageList/renderMessageList.jsx` entry file and output the result to the `src/main/resources/static/frontend` folder.
- The `dev` script will execute the `esbuild-bundle` script with a `--watch` flag, which will generate the output files each time one of the source files changes. Use this script while writing the frontend code. This is handy while we are developing the frontend.
- The `build` script will generate a [minified](https://esbuild.github.io/api/#minify) version of the code. This version should be used for the _production version_ of the application due to its smaller file size that is faster to download through the network.

Let's open the open project folder in an editor. If you have previously written frontend code using Visual Studio Code, you can use that instead of Eclipse. Then, open the project folder in a command-line interface such as Git Bash or the Visual Studio Code's integrated terminal.

Start by installing the frontend dependencies by running the `npm install` command. Then, run `npm run dev` command to bundle the frontend code. Next, open <http://localhost:8080/react-messages> in browser and you should see a list of messages if there's any. If the list is empty, add a message in <http://localhost:8080/messages/add> and check again.

{: .note }

> Run the `npm run dev` command when you are developing the frontend application.

Now that we have the <http://localhost:8080/api/recommendations> REST API, we can implement a frontend application for the recommendations list. Create a folder `recommendationList` in the `frontend` folder. In that folder, create a file `renderRecommendationList.jsx` with the following content:

```jsx
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("recommendationListRoot"));
root.render(<h1>Reading recommendation list coming soon!</h1>);
```

Next, alter the template file for the reading recommendation list so that it only has the root element for the React application:

```html
<!DOCTYPE html>
<html
  xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
  layout:decorate="~{layout.html}"
>
  <head>
    <script th:src="@{/frontend/renderRecommendationList.js}" defer></script>
  </head>
  <body>
    <div layout:fragment="content">
      <div id="recommendationListRoot"></div>
    </div>
  </body>
</html>
```

In order to bundle the `renderRecommendationList.jsx` file with esbuild, we'll need to alter the `esbuild-bundle` script in the `package.json` file:

```json
{
  "esbuild-bundle": "esbuild frontend/recommendationList/renderRecommendationList.jsx --bundle --sourcemap --outdir=src/main/resources/static/frontend",
  "dev": "npm run esbuild-bundle -- --watch",
  "build": "npm run esbuild-bundle -- --minify"
}
```

So, we replaced the previous `frontend/messageList/renderMessageList.jsx` entry file with the `frontend/recommendationList/renderRecommendationList.jsx` entry file. If you still have the `npm run dev` command running, stop it by pressing `ctrl` and `c` keys in the command-line window. Then run the `npm run dev` command again to apply the changes we made for the `dev` script.

Open <http://localhost:8080> in browser. We should see the text "Reading recommendation list coming soon!" where used to be the list of reading recommendations. Change the text in the `renderRecommendationList.jsx` and save the changes. Then, reaload the page and you should see that the text has changed.

Next we will implement the list of reading recommendations as a React frontend application. After that we will implement the the fifth user story "As a user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier".

For the _fifth user story_ we can have the following tasks in addition to the REST API tasks mentioned before:

1. Create a React component RecommendationList which lists reading recommendations from /api/recommendations
2. Render the RecommandationList component on the reading recommendation list Thymeleaf template
3. Add the category filter for the RecommendationList component

{: .important-title }

> Exercise 15
>
> Add the tasks of the _fifth user story_ to the "Sprint 2 Backlog" board as cards in Trello.

{: .important-title }

> Exercise 16
>
> Implement a React frontend application to the `frontend/recommendationList` folder which lists the reading recommendations _similarly as before_. The frontend application should fully replace the implementation in the Thymeleaf template. That is, the `<body>` tag should only contain the following:
>
> ```html
> <body>
>   <div layout:fragment="content">
>     <div id="recommendationListRoot"></div>
>   </div>
> </body>
> ```
>
> Use the `fetch` function to fetch the recommendations from <http://localhost:8080/api/recommendations>. Take a look at the files in the `frontend/messageList` folder for examples.
>
> For now the "Delete" button can be implemented with a form:
>
> ```jsx
> <form method="POST" target={`/recommendations/${recommendation.id}/delete`}>
>   <button class="btn btn-danger">Delete</button>
> </form>
> ```
>
> We will improve the user experience of the feature in exercise 17.

{: .important-title }

> Exercise 17
>
> Implement the rest of the tasks of the fifth user story "As a user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-5-1.png)
>
> The select menu should list all added categories. If the user chooses the "Any category" option, all recommendations should be listed. Otherwise only recommendations in the selected category.
>
> If you have trouble with the implementation, here's a high-level idea of the implementation:
>
> ```jsx
> export default function RecommendationList() {
>   const [categories, setCategories] = useState([]);
>   // "any" is used as the id of the "Any category" option
>   const [selectedCategoryId, setSelectedCategoryId] = useState("any");
>   const [recommendations, setRecommendations] = useState([]);
>
>   // effect for fetching categories
>   useEffect(() => {
>     // fetch categories
>   }, []);
>
>   // effect for fetching recommendations
>   useEffect(() => {
>     if (selectedCategoryId !== "any") {
>       // If category is selected fetch recommendations from /api/categories/{id}/recommendations
>     } else {
>       // If no category is selected fetch recommendations from /api/recommendations
>     }
>   }, [selectedCategoryId]); // Re-run the effect when selectedCategoryId changes
>
>   function handleCategoryFilterChange(event) {
>     setSelectedCategoryId(event.target.value);
>   }
>
>   return (
>     <div>
>       <div class="mb-3">
>         <label class="form-label">Filter by a category</label>
>         <select
>           class="form-select"
>           onChange={handleCategoryFilterChange}
>           value={selectedCategoryId}
>         >
>           <option value="any">Any category</option>
>           {categories.map((category) => (
>             <option value={category.id} key={category.id}>
>               {category.name}
>             </option>
>           ))}
>         </select>
>       </div>
>       {/* The list of reading recommendations goes here */}
>     </div>
>   );
> }
> ```

{: .important-title }

> Exercise 18
>
> The form implementation of the "Delete" button has a few drawbacks in the user experience:
>
> - Submitting the form causes a full page reload. This will lose the state of the page (for example the current category filter) and will feel slow and unresponsive for the user
> - Submitting the form doesn't request a confirmation from the user. User might accidently delete a reading recommendation quite easily
>
> Improve the user experience by replacing the form submission with a `fetch` call:
>
> ```js
> function handleDelete(recommendation) {
>   fetch(`/recommendations/${recommendation.id}/delete`, {
>     method: "POST",
>   }).then(() => {
>     // Remove the deleted recommendation from the recommendations state variable array
>   });
> }
> ```
>
> You can use the [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method to create a new array without the deleted recommendation and set that as the state. The user confirmation can be requested using the [window.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) method.
>
> ![](/assets/sprint-2-user-story-5-2.png)

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

## The .gitignore file

In the root folder of our repository there is a [.gitignore](https://git-scm.com/docs/gitignore) file. The `.gitignore` file has a special role in the Git project. It specificies _which files Git should ignore_. There are a few reason why we want specific files or entire folders being ignored by Git:

- The file contains _sensitive information_, such as database usernames and passwords. We don't want these to end up in our repository for everyone to see
- The file or folder contains content _that can be generated by running a certain command_. En example of such folder is the `node_modules` folder, which contains the library dependencies for the frontend. This folder is usally quite big and we can always generate it by running `npm install`. Another such example is the `target` folder where Maven generates different files.

Let's open our project's `.gitignore` file and have a look at it. Eclipse doesn't list files that start by "." by default, but Visual Studio Code should. Most of the contents of the file is provided by the [Spring Initializr](https://start.spring.io/). Here's a few lines from the file:

```
node_modules
src/main/resources/static/frontend
```

Each line specifies a file or folder to ignore. The first line ignores the `node_modules` folder and all files inside it. The second line ignores the frontend files generated by the `npm run dev` and `npm run build` commands.

## Frontend workflow with Maven

We can integrate the frontend's npm scripts with the backend's Maven workflow using the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin). Using the plugin, we can run all the commands required for the frontend application when we compile the Java code. This will simplify the development workflow of the whole application.

Let's add the frontend-maven-plugin to the `<plugins>` list in the `pom.xml` file:

```xml
<plugin>
  <groupId>com.github.eirslett</groupId>
  <artifactId>frontend-maven-plugin</artifactId>
  <version>1.14.2</version>
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

1. Install Node.js
2. Run `npm install` command
3. Run `npm run build` command

Now, if we run the `./mvnw spring-boot:run` command, the command output indicates that the frontend related commands are executed.

{: .important-title }

> Exercise 19
>
> Use the frontend-maven-plugin in the project as instructed above.

## JAR

A JAR (Java Archive) is a package file format typically used to aggregate many Java class files and associated metadata and resources (such as CSS files, JavaScript files and other assets) into one file to distribute application software or libraries on the Java platform. If a user wants to use our application, instead of providing them with the entire source code, we can just provide a JAR file containing everything needed to run our application.

We can generate a JAR file for the application with the following command:

```bash
./mvnw package
```

The command will generate the JAR file under the `target` folder. Inside the folder there should a file `cool-reads-0.0.1-SNAPSHOT.jar`. Because we added the frontend-maven-plugin for the project previously, the JAR file will contain the JavaScript files required by the frontend.

If the application is currently running, for example in Eclipse, stop it. Then, run `java -jar target/cool-reads-0.0.1-SNAPSHOT.jar` to run the application with the JAR file. Open the application in <http://localhost:8080> and see that it is working.

{: .note }

> When you change the application's code, you need to re-generate the JAR file with the `./mvnw package` command to have a JAR file for the latest version of the application.

## Sprint Review

We have all kinds of cool stuff to show for the Product Owner at the end of this Sprint. Prepare for the upcoming [Sprint Review](/sprint-1#print-review) event, similarly as in the previous Sprint.

{: .important-title }

> Exercise 20
>
> Once you have implemented the user stories of the Sprint, remove the excessive Java class files and Thymeleaf template files that were in the original example project and are not relevant to your project. Also, remove the excessive `messageList` folder from the `frontend` folder.

{: .important-title }

> Exercise 21
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint2". The release title should be "Sprint 2". Give a brief description for the release that describes the features implemented during the Sprint.
>
> Also generate a _JAR file for the application_ as instructed previously. Make sure to check that the application can be started using the `java -jar <path-to-the-jar-file>` command and it is working as expected.
>
> Add the JAR file to the release by clicking the "Attach binaries by dropping them here or selecting them." section in the release form.

{: .important-title }

> Exercise 22
>
> Decide which team member gives the Sprint Review demonstration at the beginning of the next Sprint. The team member should be _someone else as the one who gave it previously_. This team member should make sure that they have a working version of the application on their computer and is able to show how the new features work in the user's perspective.
>
> Prepare some _sensible_ test data (no [lorem ipsum](https://www.lipsum.com/)) for the Sprint Review. This means that you should add a few categories and a few reading recommendations using the application so that you can easily demonstrate the user stories.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.

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
> ![](/assets/sprint-2-user-story-bonus.png)
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
