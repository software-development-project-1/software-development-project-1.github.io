---
layout: page
title: Sprint 2
permalink: /sprint-2
nav_order: 7
---

{% include toc.html %}

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, REST APIs and communication between frontend and backend.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_2_deadline}}. We will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-17. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

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

## Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> "It's great that we can now add and list the reading recommendations! But, after adding many recommendations it gets really hard to find the right kind of recommendations from the list.
>
> It would nice if the reading recommendation list would display the date when the recommendations was added. This way, the user would know how old the recommendation is.
>
> To better organize the reading recommendations, it would be useful to be able to add different categories, like "Programming tutorials" or "Video game news". User should be able to add a category using a form. There should also be a page that lists all the added categories.
>
> After adding a category, the user could select a category from a dropdown menu while adding a recommendation. The dropdown menu should also have an "Uncategorized" option to leave the reading recommendation uncategorized.
>
> In the reading recommendation list, the user should be able to filter the recommendations based on the category. For example if user chooses a "Programming tutorials" category from a dropdown menu, only the recommendations in that category will be listed. The dropdown menu should also have an "Any category" option to list all the reading recommendations."
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As an user I want to know the date when a reading recommendation was added so that I know how old it is
2. As an user I want to add a category so that I can organize my recommendations
3. As an user I want to see a list of categories so that I know which categories exist
4. As an user I want to provide a category for a reading recommendation so that I can organize my recommendations
5. As an user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier

For the _first user story_, the Developers came up with the following tasks:

1. Add a createdAt attribute with the CreationTimestamp annotation for the ReadingRecommendation entity
2. Add a "Added on" column which displays the formatted date for the Thymeleaf template

For the _second user story_, the Developers came up with the following tasks:

1. Add a Category JPA entity class with id and name attributes, and a CategoryRepository JPA repository class
2. Add a Thymeleaf template for the category submission form containing a field for the category name
3. Add a CategoryController controller class and a method for rendering the category submission form
4. Add a method for the CategoryController class that saves the reading category to the database

for the _third user story_, the Developers came up with the following tasks:

1. Add a Thymeleaf template for listing the added categories
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
> Come up with tasks for the fourth user story, "As an user I want to provide a category for a reading recommendation so that I can organize my recommendations". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 8 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 4
>
> 1. Add these five user stories to the "Product Backlog" board as cards in Trello. The user stories should be initially in the "In sprint" list of the board.
> 2. Add the tasks of the _first four user stories_ to the "Sprint 2 Backlog" board as cards in Trello. The tasks should be initially in the "To do" list of the board.

{: .note }
At this point it might sense to distribute the workload a bit instead of working on each user story together. For example two members of the team could start working on the first user story and the others on the second one. Decide who will be working on which task and assign at least one team member for each task on the Trello board.

{: .important-title }

> Exercise 5
>
> Implement the tasks of the first user story, "As an user I want to know the date when a reading recommendation was added so that I know how old it is".
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

> Exercise 6
>
> Implement the tasks of the second user story, "As an user I want to add a category so that I can organize my recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-2.png)

{: .important-title }

> Exercise 7
>
> Implement the tasks of the third user story, "As an user I want to see a list of categories so that I know which categories exist".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-3.png)
>
> User should be able to visit the page by clicking a "Categories" link in the navigation bar.

{: .important-title }

> Exercise 8
>
> Implement the tasks of the fourth user story, "As an user I want to provide a category for a reading recommendation so that I can organize my recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-4.png)
>
> The select menu should list the added categories. Addition to the added categories, the user should be able to select the "Uncategorized" option, which means that the recommendations doesn't have a category.
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

In a RESTful system, the requests must contain a path to a _resource_ that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on. For example, the path `/users/29/messages` is a resource for messages of an user with a specific id. These paths are also referred to as _endpoints_.

The request should also contain the _HTTP method_, that determines the operation itself. For example, the `GET` method is used to retrieve data, and _never to manipulate it_. When we open a page on a web browser, a `GET` request is sent. The `POST` method on the other hand is used to manipulate the data, so it can have side-effects such as creating an entry to the database. The `PUT` method is used to update an entry and the `DELETE` method is used to delete it. `POST`, `PUT` or `DELETE` methods are commonly used when user submits a form.

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
>
> Add this task to the "Sprint 2 Backlog" board in Trello and assign a team member for the task. This task is related to fifth user story.

{: .important-title }

> Exercise 10
>
> Create a controller class `CategoryRestController` that has a method `getCategories`. This method should return _all the categories_ in path `/api/categories` in JSON format. You should be able to see the list of categories when opening <http://localhost:8080/api/categories> in a web browser.
>
> Add this task to the "Sprint 2 Backlog" board in Trello and assign a team member for the task. This task is related to fifth user story.

{: .important-title }

> Exercise 11
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

> Exercise 12
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

Next we will implement the list of reading recommendations as a React frontend application. After that we will implement the the fifth user story "As an user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier".

For the _fifth user story_ we can have the following tasks in addition to the REST API tasks mentioned before:

1. Create a React component RecommendationList which lists reading recommendations from /api/recommendations
2. Render the RecommandationList component on the reading recommendation list Thymeleaf template
3. Add the category filter for the RecommendationList component

{: .important-title }

> Exercise 13
>
> Add the tasks of the _fifth user story_ to the "Sprint 2 Backlog" board as cards in Trello.

{: .important-title }

> Exercise 14
>
> Implement a React frontend application to the `frontend/recommendationList` folder which lists the reading recommendation similarly as before. Use the `fetch` function to fetch the recommendations from <http://localhost:8080/api/recommendations>. Take a look at the files in the `frontend/messageList` folder for examples.

{: .important-title }

> Exercise 15
>
> Implement the rest of the tasks of the fifth user story "As an user I want to filter reading recommendations based on the category so that I can find interesting recommendations easier".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-5.png)
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

> Exercise 16
>
> Once you have completed the exercises for this Sprint, remove the excessive Java class files and Thymeleaf template files that were in the original example project and are not relevant to your project. Also, remove the excessive `messageList` folder from the `frontend` folder.

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

> Exercise 17
>
> Use the frontend-maven-plugin in the project as instructed above.

## JAR

A JAR (Java Archive) is a package file format typically used to aggregate many Java class files and associated metadata and resources (such as CSS files, JavaScript files and other assets) into one file to distribute application software or libraries on the Java platform. If an user wants to use our application, instead of providing them with the entire source code, we can just provide a JAR file containing everything needed to run our application.

We can generate a JAR file for the application with the following command:

```bash
./mvnw package
```

The command will generate the JAR file under the `target` folder. Inside the folder there should a file `cool-reads-0.0.1-SNAPSHOT.jar`. 

If the application is currently running, for example in Eclipse, stop it. Then, run `java -jar target/cool-reads-0.0.1-SNAPSHOT.jar` to run the application with the JAR file. Open the application in <http://localhost:8080> and see that it is working.

{: .note }

> When you change the application's code, you need to re-generate the JAR file with the `./mvnw package` command to have a JAR file for the latest version of the application.

## ⭐ Bonus user story

{: .note }

> This user story is optional. If you have implemented all other user stories, feel free to implement this one.

The Product Owner came up with a feature for the application if we run out of work during the Sprint:

> "The category filter on the reading recommendation list is very helpful for finding the right things to read. But it would even more helpful if an user would be able to filter reading recommendations by a title or a description.
>
> There could be a filter field in the reading recommendation list and if either the title or the description of a reading recommendation contains the keyword typed in to the field, the reading recommendation would be listed. If there's no keyword, all the reading recommendations would be listed."
>
> -- The Product Owner

{: .important-title }

> Bonus exercise
>
> Come up with an user story based on the Product Owner's description and add it to the "Product Backlog" board in Trello. Then, split the user story into tasks and add those to the "Sprint 2 Backlog" board in Trello. Finally, implement the tasks.
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

Check the documentation for the [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method to learn how to filter arrays.

## Sprint Review

We have all kinds of cool stuff to show for the Product Owner at the end of this Sprint. Prepare for the upcoming [Sprint Review](/sprint-1#print-review) event, similarly as in the previous Sprint.

{: .important-title }

> Exercise 18
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint2". The release title should be "Sprint 2". Give a brief description for the release that describes the features implemented during the Sprint.
>
> Also generate a _JAR file for the application_ as instructed previously. Add the JAR file to the release by clicking the "Attach binaries by dropping them here or selecting them." section in the release form.

{: .important-title }

> Exercise 19
>
> Decide which team member gives the Sprint Review demonstration at the beginning of the next Sprint. The team member should be someone else as the one who gave it previously. This team member should make sure that they have a working version of the application on their computer and is able to show how the new features work in the user's perspective.
>
> Prepare some _sensible_ test data (no [lorem ipsum](https://www.lipsum.com/)) for the Sprint Review. This means that you should add a few categories and a few reading recommendations using the application so that you can easily demonstrate the user stories.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.
