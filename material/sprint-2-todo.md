---
layout: page
title: Sprint 2
permalink: /sprint-2-todo
nav_order: 7
nav_exclude: true
---

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, REST APIs and communication between frontend and backend.

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

Once logged in a new session can be created by clicking the "Create a session" button. In the session you can send cards to the board by typing the message and clicking the "Send" button. You can also choose a color for the card. Other group members can join the session using the "Join link" which can be found by cliking the menu icon on the top left corner of the page.

First, create a session board that has the _mad_, _sad_ and _glad_ categories like in [this board](https://edu.flinga.fi/s/E2L5YL9). Then, organize the Retrospective in the following manner:

1. Based on their experiences during the Sprint, each group member should write cards for each of the three categories. Choose the card color based on the category. Try to come up with cards for each category.
2. Once everyone is done writing the cards, go through the cards from each category. The writer of the card should shortly describe what their card means.
3. Pick at least three most urgent issues from the _mad_ and _sad_ categories and come up with _concrete_ actions to solve each of these issues during the upcoming Sprint. For example a concrete action for the issue "I always have conflicts when I try to pull code from the GitHub" could be "Pull code from GitHub more often" and "Create smaller commits and push code to GitHub more often".

Make sure that everyone follows the event structure and that each group member gets their voice heard.

{: .highlight-title}

> Submitting this Sprint's exercises
>
> This Sprint does not have a Moodle submission. It is enough that the project's GitHub repository is up-to-date before the submission deadline on {{site.sprint_2_deadline}}. We will be working on the exercises for the next two weeks.

{: .important-title }

> Exercise 1
>
> _One of the group members_ should create a new session in Flinga as instructed above. Name the session "Retrospective 1". Once the session is created, other group members should join the session with the "Join link". Setup the session board organize the Retrospective event as instructed above.
>
> Once you have completed the Retrospective write down the issues and actions to the repository's `retrospectives/sprint-1.md` file and push the changes to GitHub.

## Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finnishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> "It's great that we can now add and list the reading recommendations! But, after adding many recommendations it gets really hard to find the right kind of recommendations from the list.
>
> It would nice if the reading recommendation list would display the date and time when the recommendations was added. This way, the user would know how old the recommendation is.
>
> To better organize the reading recommendations, it would be useful to be able to add different categories, like "Programming tutorials" or "Video game news". After adding a category, the user could select a category from a dropdown menu while adding a recommendation. Then, in the reading recommendation list, the user should be able to filter the recommendations based on the category. For example if user chooses a "Programming tutorials" category from a dropdown menu, only the recommendations in that category will be listed."
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As an user I want to know the date and time when a reading recommendation was added so that I know how old it is
2. As an user I want to add a category so that I can organize my recommendations
3. As an user I want to see a list of categories so that I know which categories exist
4. As an user I want to provide a category for a reading recommendation so that I can organize my recommendations
5. As an user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier

For the _first user story_, the Developers came up with the following tasks:

1. Add createdAt attribute of LocalDateTime type for the ReadingRecommendation entity
2. Add a CreationTimestamp annotation for the createdAt attribute
3. Add a getFormattedCreatedAt method for the ReadingRecommendation entity which returns the formatted createdAt attribute value
4. Add a "Added on" column which displays the formatted date for the Thymeleaf template

For the _second user story_, the Developers came up with the following tasks:

1. Add Category JPA entity class and CategoryRepository JPA repository class
2. Add Thymeleaf template for the category submission form containing a field for the category name
3. Add CategoryController controller class and a method for rendering the category submission form
4. Add a method for the CategoryController class that saves the reading category to the database

for the _third user story_, the Developers came up with the following tasks:

1. Add Thymeleaf template for listing the added categories
2. Add a method for rendering the categories list for the CategoryController class

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
> Come up with tasks for the fourth user story, "As an user I want to provide a category for a reading recommendation so that I can organize my recommendations".

{: .important-title }

> Exercise 4
>
> 1. Add these five user stories to the "Product Backlog" board as cards in Trello. The user stories should be initially in the "In sprint" list of the board.
> 2. Add the tasks of the _first four user stories_ to the "Sprint 2 Backlog" board as cards in Trello. The tasks should be initially in the "To do" list of the board.

{: .note }
At this point it might sense to distribute the workload a bit instead of working on each user story together. For example two members of the group could start working on the first user story and the others on the second one. Decide who will be working on which task and assign at least one group member for each task on the Trello board.

{: .important-title }

> Exercise 5
>
> Implement the tasks of the first user story, "As an user I want to know the date and time when a reading recommendation was added so that I know how old it is".
>
> Tips for implementing the tasks:
>
> - [CreationTimestamp](https://www.baeldung.com/hibernate-creationtimestamp-updatetimestamp)
> - [DateTimeFormatter](https://www.baeldung.com/java-datetimeformatter)
> - If the method `getFormattedCreatedAt` returns the formatted date string, you can access it with `th:text="${recommendation.formattedCreatedAt}"` in the Thymeleaf template

{: .important-title }

> Exercise 6
>
> Implement the tasks of the second user story, "As an user I want to add a category so that I can organize my recommendations".

{: .important-title }

> Exercise 7
>
> Implement the tasks of the third user story, "As an user I want to see a list of categories so that I know which categories exist".

{: .important-title }

> Exercise 8
>
> Implement the tasks of the third user story, "As an user I want to provide a category for a reading recommendation so that I can organize my recommendations".
>
> Tips for implementing the tasks:
>
> - [OneToMany](https://www.baeldung.com/hibernate-one-to-many)
> - [HTML select tag](https://www.w3schools.com/tags/tag_select.asp)

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

In a RESTful system, the requests must contain a path to a _resource_ that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on. For example, the path `/users/29/messages` is a resource for messages of an user with a specific id.

The request should also contain the _HTTP method_, that determines the operation itself. For example, the `GET` method is used to retrieve data, and _never to manipulate it_. The `POST` method on the other hand is used to manipulate the data, so it can have side-effects such as creating an entry to the database. The `PUT` method is used to update an entry and the `DELETE` method is used to delete it.

The resource path has certain naming conventions. The path starts with the resource _collection_ name in plural, for examples "users". The collection name is followed by resource specifiers, for example the id of the resource. Here's example of RESTful API paths for the "users" collection:

| Method   | Path          | Description                          |
| -------- | ------------- | ------------------------------------ |
| `GET`    | `/users`      | List all users                       |
| `GET`    | `/users/{id}` | Get the user with the provided id    |
| `POST`   | `/users`      | Create an user                       |
| `PUT`    | `/users/{id}` | Update the user with the provided id |
| `DELETE` | `/users/{id}` | Delete the user with the provided id |

The `{id}` part of the `/users/{id}` path is a _path variable_. For example, the path for user with id 2 would be `/users/2`.

A collection can have _sub-collections_. For example, a path for a user's messages resource would be `/users/{id}/messages`, where "messages" is a sub-collection. [This guide](https://restfulapi.net/resource-naming/) has more information about the resource path naming conventions.

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

> Exercise 9
>
> Create a controller class `ReadingRecommendationRestController` that has a method `getReadingRecommendations`. This method should return _all the reading recommendations_ in path `/api/recommendations` in JSON format. You should be able to see the list of recommendations when opening <http://localhost:8080/api/recommendations> in a web browser.

{: .important-title }

> Exercise 10
>
> Create a controller class `CategoryRestController` that has a method `getCategories`. This method should return _all the categories_ in path `/api/categories` in JSON format. You should be able to see the list of categories when opening <http://localhost:8080/api/categories> in a web browser.

{: .important-title }

> Exercise 11
>
> Create a method `getReadingRecommendationsByCategoryId` for the `CategoryRestController` class. This method should return _reading recommendations in a specific category_ in path `/api/categories/{categoryId}/recommendations` in JSON format. The `categoryId` path variable should determine the category id.

## Communication between frontend and backend

{: .important-title }

> Exercise 12
>
> React recommendations list

{: .important-title }

> Exercise 13
>
> React category filter

{: .important-title }

> Exercise 14
>
> Decide which group member gives the Sprint Review demonstration at the beginning of the next Sprint. The group member should be someone else as the one who gave it previously. This group member should make sure that they have a working version of the application on their computer and is able to show how the new features work in the user's perspective.

{: .note }

> Once you have completed the exercises, remove the excessive Java class files and Thymeleaf template files that were in the original example project and are not relevant to your project. Also, remove the excessive `messageList` folder from the `frontend` directory.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.
