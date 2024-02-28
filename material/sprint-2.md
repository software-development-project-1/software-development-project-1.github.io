---
layout: page
title: Sprint 2
permalink: /sprint-2
nav_order: 7
---

{% include toc.html %}

# Sprint 2

For the Sprint 2 we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Retrospective, Estimation, REST APIs and communication between frontend and backend.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_2_deadline}}. We will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-28. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

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
> The Scrum Master should create a new session in Flinga as instructed above. Name the session "Retrospective 1". Once the session is created, other team members should join the session with the "Join link". Setup the session board and organize the Retrospective event as instructed above.
>
> Once you have completed the Retrospective write down the issues and actions to the repository's `documentation/retrospectives/sprint-1.md` file and push the changes to GitHub.

{: .important-title }

> Exercise 2
>
> Choose a new Scrum Master among the team members for the second Sprint.

## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of a branch into the main branch.

![Git branches](/assets/git-branch.svg){: width="500" }

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story. Commonly, the main branch should only contain _working code_ and _deployment ready features_. This means that the latest working version of our application can be found in the main branch at all times. We should be able to deploy this application for our users at any moment without issues. The Git workflow where feature development is isolated into a feature-specific branch is referred to as [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). This workflow is a very common workflow in the industry.

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. First, pull the latest changes from GitHub using the `git pull` command. Then, create the branch:

```bash
git branch <name-of-my-branch>
```

{: .note }

> Typically, the branch name describes the feature developed in the branch or some other purpose of the branch, for example `delete-quiz` or `filter-quizzes-by-published-status`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. The current branch is also displayed in brackets in the Git Bash after the path to the current folder.

We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

{: .highlight }

> We usually want to create new branch of the main branch. This means that before creating a new branch with the `git branch <name-of-the-branch>` command, switch to the main branch by running the `git checkout main` command. If you are uncertain which is the current branch, check it with the `git branch` command.

Next, make some small change for the project, for example by changing a button text or color in a Thymeleaf template or changing a variable name in a method. If there's some small code or user interface improvement you have in mind, this is the time to do it. Once you have made the change, check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Feel free to do multiple commits if needed.

Then let's switch back to the main branch with the `git checkout main` command. If we check for the changes we made in the other branch, we see that they are no longer present. That's because the commits we made _only exist in our other branch_.

Let's switch back to our branch with the `git checkout` command. Then, push the changes to GitHub with the `git push` command. We get the following error message:

```bash
fatal: The current branch kaltsoon has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin kaltsoon

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

The error means that the current branch is not in GitHub yet, just on our local computer. Let's run the command that Git suggests:

```bash
git push --set-upstream origin <name-of-my-branch>
```

Now, let's check that our branch is pushed to GitHub. Open the repository in GitHub and click the branch selector which says "main" above the file tree view in the "Code" tab. [These](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository) instructions have more details, if you have trouble. We should see our branch there. Click the branch and check that the changes are visible in GitHub.

{: .important-title }

> Exercise 3
>
> _Each team member_ should do the steps mentioned above to create their own branch named by their GitHub username and push it to GitHub.

We can also pull remote branches from GitHub to our local computer. Check the list of branches in GitHub and pick _some other team member's branch_. Then, to pull the remote branches from GitHub using the `git pull` command. Finally, switch to the team member's branch:

```bash
git checkout <name-of-other-team-member-branch>
```

### Merging branches and pull requests

Once we are happy with the changes we have made in the branch, we should _merge_ it into the main branch. This basically means applying all the commits we have made for the branch to the main branch. For this we could use the `git merge` command:

```bash
git checkout main
git merge <name-of-my-branch>
git push
```

But, GitHub supports a better way to merge branches using [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). Pull requests are "requests" to merge a branch to another branch (commonly the main branch). The benefit over using the `git merge` command is that pull requests provide a way to perform _quality assurance_, for example through _code reviews_. In a code review other team members inspect the chanhes introduced by the pull request and give constructive feedback. This feedback is used to improve the code quality and fix bugs and other implementation flaws.

![Pull request](/assets/pull-request-cartoon.jpg){: width="500" }

{: .important-title }

> Exercise 4
>
> 1. Create a pull request for your branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) instructions. The pull request title should describe the changes, for example "Change the submit button color in the add quiz form". The description provides additional details.
> 2. Take a look at some other team member's pull request and conduct a code review by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) instructions. Pull the branch from GitHub to your local computer and take a look at the changes. If everything looks good, approve the changes with a short comment, such as "Looks good to me". Otherwise, request changes.
> 3. Once you have received an approving review from a team member for your pull request, merge it into the main branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) instructions. If the branch has conflicts with the main branch, check the section below
> 4. Switch back to main branch with the `git checkout main` command and pull the changes from GitHub with the `git pull` command. You should now see the changes made in your branch in the main branch as well

### Resolving conflicts in branches

If the pull request can't be automatically merged due to conflicts, we'll need to solve them manually. First, switch to the main branch and pull the latest changes:

```bash
git checkout main
git pull
```

Then, switch to your branch and merge the main branch to it:

```bash
git checkout <name-of-my-branch>
git merge main
```

Finally, resolve the conflicts and add, commit and push the changes to GitHub. Now, we should be able to merge the pull request in GitHub.

## 🏃‍♂️ Sprint 2 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 1.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 2 goals in the Sprint Planning event:

> "It's great that we now have the basic functionality for managing quizzes! What we now need is a way for the teacher to add questions to quizzes and student to take the published quizzes.
>
> The teacher should be able to add questions to a quiz. For example the "The capital cities of Europe" quiz could have a question "What is the capital of Finland?". A question has a question text, for example "What is the capital of Finland?", a correct answer, for example "Helsinki" and a difficulty level. The difficulty level is either "Easy", "Normal" or "Hard". The default difficulty level is "Normal". 
>
> There should be a page with a form for adding a question to a quiz. The teacher should not be able to add a question with a blank question text or correct answer, or without a difficulty level. Added questions of a quiz should be listed on a separate page. There should be a link to both these pages in the quiz edit page.
>
> Once a question has been added to a quiz, the teacher should be able to delete it. The question list should have a "Delete" button next to each question. The teacher should also be able to filter the question list based on the difficulty level. Similarly as with the quiz list, there could be for example "All", "Easy", "Normal" and "Hard" tabs at the top of the list.
>
> Once we have this basic set of features for the teachers, we can start working on the student dashboard application. The student dashboard should have a page that lists the published quizzes with the quiz name, description and the date when it was added. These quizzes should be listed from newest to oldest.
>
> Each quiz name on the quiz list should be a link to a separate page where the quiz name, description and the questions are displayed. There should also be some kind of navigation menu from which the student can navigate to the quiz list page.
>
> In the quiz page the student should be able to take a published quiz by answering the questions. The questions should be listed and the student should be able to type in and submit their answer for each question. When the student submits their answer, there should be some kind of feedback which tells the student if their answer was correct or not. For example, "That is correct, good job!", or "That is not correct, the correct answer is "Helsinki"". The casing or leading or trailing whitespace of the answer should not be considered when checking if the student's answer is correct or not. For example, "helsinki" answer is correct when the correct answer is "Helsinki"."
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

The planning of the tasks for the last three user stories will be covered after the [REST APIs](#rest-apis) and [Communication between frontend and backend](#communication-between-frontend-and-backend) sections.

{: .important-title }

> Exercise 5
>
> Create a new milestone for the second Sprint. Set the milestone title as "Sprint 2".

{: .important-title }

> Exercise 6
>
> Make sure that all task related issues that have been completed during the Sprint 1 are _closed_ and their _status is "Done"_ in the Backlog project. Do the same with the user story related issues _accepted by the Product Owner_ during the Sprint Review event.
>
> If you didn't manage to implement all user stories during the previous Sprint, set the milestone of the unfinished user story and task issues as "Sprint 2".

{: .important-title }

> Exercise 7
>
> Create an issue for each _user story_. Add the "user story" label for each issue. Set the milestone as "Sprint 2". Add the issues to the Backlog project and move them to the "Sprint Backlog" column.

{: .important-title }

> Exercise 8
>
> Implement _at least one_ user story in a separate feature branch. Name the branch based on the feature, for example `delete-question`. Remember to _switch to the main branch before creating a new branch_ by using the `git checkout main` command. Use the `git branch` command if you are unsure what the current branch is.
>
> Once the implementation is ready, open a pull request. At least one other team member should conduct a code review for the pull request and either approve it or request changes. Once the pull request has been approved, merge it to the main branch. Finally, switch back to the main branch and pull the changes from GitHub.
>
> Note that _task is not completed until it has been merged to the main branch_. Move the issues that are waiting for a review to the "In review" column in the Backlog project and ask a team member to review your pull request.

{: .important-title }

> Exercise 9
>
> Plan the tasks for the first user story, "{{site.sprint_2_user_story_1}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-1-1.png)
>
> ![](/assets/sprint-2-user-story-1-2.png)
>
> Tips for the tasks:
>
> - [Thymeleaf radio button fields](https://www.thymeleaf.org/doc/tutorials/2.1/thymeleafspring.html#radio-button-fields)
> - Make sure that you can delete a quiz that has questions. Before deleting a quiz, the quiz's questions need to be deleted. [Cascading](https://www.baeldung.com/jpa-cascade-types) can be used to achieve this automatically

{: .important-title }

> Exercise 10
>
> Plan the tasks for the second user story, "{{site.sprint_2_user_story_2}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-2-1.png)
>
> ![](/assets/sprint-2-user-story-2-2.png)

{: .important-title }

> Exercise 11
>
> Plan the tasks for the third user story, "{{site.sprint_2_user_story_3}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-3.png)

{: .important-title }

> Exercise 12
>
> Plan the tasks for the fourth user story, "{{site.sprint_2_user_story_4}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-4.png)
>
> Tips for the tasks:
>
> - Similarly as in the quiz list published status filtering, a [request parameter](https://www.baeldung.com/spring-request-param) can be used to pass the difficulty level to the controller method
> - Implement an appropriate JPA repository [query method](https://docs.spring.io/spring-data/commons/reference/repositories/query-methods-details.html) for finding questions by quiz id _and_ difficulty level

{: .important-title }

> Exercise 13
>
> Implement an [entity relationship diagram](https://www.lucidchart.com/pages/er-diagrams) and write a description of the application's data model, which documents the application's entities, their relationships and the relationship types (one-to-one, one-to-many, or many-to-many). Add the diagram and the description to a `data-model.md` file in the `documentation` folder. The description should explain the purpose of each entity and their relationship to other entities. Add a link to the file to "Documentation" section in the `README.md` file.
>
> GitHub supports [Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/) syntax for diagrams in Markdown files. Using Mermaid syntax makes it easier to maintain diagrams. Take a look at Mermaid's [Entity Relationship Diagrams](https://mermaid.js.org/syntax/entityRelationshipDiagram.html) documentation for more information.
>
> Create an issue for the task. The "documentation" label is suitable for documentation-related issues.
>
> _Keep this documentation (like all other documentation) up-to-date_ when you add new entities for the application.

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

    @Column(nullable = false)
    private String content;

    public Message(String content) {
        this.content = content;
    }
}
```

Wow, that eliminates a lot of boilerplate code! Lombok has many other useful annotations as well, such as the [@Builder](https://projectlombok.org/features/Builder) annotation. Check the [documentation](https://projectlombok.org/features/) for more.

## REST APIs

So far the user has interacted with our web application in the following manner:

1. The user opens a page at certain path, for example `/`, in a web browser.
2. The web browser sends a request to the server (the backend) for the resource of that path.
3. On the server, the request is delegated to the controller method responsible for handling requests for the path.
4. The controller method retrieves the required data from the database and based on the data creates an HTML page.
5. The HTML page is sent as a response and the browser displays the page for the user.

So, the representation of our application's data is an HTML page. To provide other applications, such as JavaScript frontend applications, a better access to our data we need to represent it in a format that is easier to consume, such as the JSON format.

Instead of sending a response as an HTML page, we can serialize Java objects into text-based JSON format and send it as a response. Let's have a look at the [MessageRestController](https://github.com/software-development-project-1/example-project/blob/main/src/main/java/fi/haagahelia/quizzer/controller/MessageRestController.java) controller class in the example project:

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
}
```

The `@RestController` annotation on the `MessageRestController` class specifies that each method of the controller class produces a JSON response body. Instead of returning the name of the Thymeleaf template, we can directly return Java objects. For example the `getAllMessages` method returns a list of `Message` objects. If we open the page <http://localhost:8080/api/messages> in a web browser we should see this list.

By using JSON as the data representation format we can separate the _client_ (the user interface application) from the server. This allows as to implement many different kinds of client applications with different programming languages. This separation of server and client is one of the corner stones of the _the REST architectural style_.

_REST_, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called _RESTful systems_, are characterized by how they are stateless and separate the concerns of client and server.

In a RESTful system, the requests must contain a path to a _resource_ that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on. For example, the path `/users/29/messages` is a resource for messages of a user with a specific id. These paths are also referred to as _endpoints_.

The request should also contain the _HTTP method_, that determines the operation itself. The `GET` method is used for endpoints that retrieve data, and _never manipulate it_. The `POST`, `PUT` and `DELETE` methods on the other hand are used for endpoints that manipulate data. The `POST` method is commonly used for endpoints that create database entries, the `PUT` method for endpoints that update and the `DELETE` method for endpoints that delete them.

The resource path has certain naming conventions. The path starts with the resource _collection_ name in plural, for examples "users". The collection name is followed by resource specifiers, for example the id of the resource. Here's example of RESTful API paths for the "users" collection:

| HTTP method | Path          | Request mapping | Description                          |
| ----------- | ----------- | ------------- | ------------------------------------ |
| `GET`       | `/users`      | `@GetMapping("/users")` | List all users                       |
| `GET`       | `/users/{id}` | `@GetMapping("/users/{id}")` | Get the user with the provided id    |
| `POST`      | `/users`      | `@PostMapping("/users")` | Create a user                        |
| `PUT`       | `/users/{id}` | `@PutMapping("/users/{id}")` | Update the user with the provided id |
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
})
```

### Controlling the request and response body format with DTO classes

To have full control over the format of the request and response body we can use [DTO](https://www.baeldung.com/java-dto-pattern) classes. Especially with the request body annotated by the `@RequestBody` annotation, we should _always_ use a DTO class object instead of an entity class object. This is because using an entity class object might accidently allow users to update undesired attributes of an entity as described [here](https://rules.sonarsource.com/java/tag/spring/RSPEC-4684/).

For example, in the `createMessage` method the request body format is defined by the [CreateMessageDto](https://github.com/software-development-project-1/example-project/blob/main/src/main/java/fi/haagahelia/quizzer/dto/CreateMessageDto.java) class:

```java
public class CreateMessageDto {
    @NotBlank(message = "Content is required")
    private String content;

    // constructors, getters and setters
}
```

This corresponds to the following JSON format for the request body:

```json
{ "content": "Hello world!" }
```

### HTTP status codes and REST API error handling

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

### Omitting attributes from the JSON response body

By default _all the attributes_ are present in the JSON response body. We can omit attributes from the JSON response body by using the [@JsonIgnore](https://www.baeldung.com/jackson-ignore-properties-on-serialization) annotation on an attribute. We usually want to omit attributes that hold private information, for example user's password hash, or attributes that can potentially contain lots of data, for example, the `@OneToMany` annotated attributes. We can, for example omit the `questions` attribute of the `Quiz` entity class in the following way:

```java
@JsonIgnore
@OneToMany(mappedBy = "quiz")
private List<Question> questions;
```

To have more control over the attributes in the JSON response, [DTO](https://www.baeldung.com/java-dto-pattern) classes can be used instead of returning the entity classes directly from the controller methods.

## Designing the REST API endpoints for the user stories

Next, let's consider what kind of REST API endpoints we need for the last three user stories. Implement the following four endpoints _by following the REST API naming conventions for the endpoint path names_.

{: .important-title }

> Exercise 14
>
> To classify frontend-related and backend-related issues, create two new [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels): "frontend" and "backend". Add the "frontend" label for issues that are related to the frontend implementation and the "backend" label for issues that are related to the backend implementation.

{: .highlight}

> Omit the `@OneToMany` attributes from the JSON response in every entity by using the [@JsonIgnore](https://www.baeldung.com/jackson-ignore-properties-on-serialization) annotation on the attributes.

{: .note }

> GET method endpoints are easy to test with a web browser by just visiting the endpoint URL. POST method endpoints can be tested with tools such as [Postman](https://www.postman.com/).

{: .important-title }

> Exercise 15
>
> Implement a REST API endpoint for _getting all (published) quizzes_ in newest to oldest order.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.

{: .important-title }

> Exercise 16
>
> Implement a REST API endpoint for _getting a quiz by id_. If there is no quiz with the provided id, return a `404 Not Found` status as a response. If the quiz is not published, return a `403 Forbidden` status as a response.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.

{: .important-title }

> Exercise 17
>
> Implement a REST API endpoint for _getting the questions of a quiz_. Implement similar error handling as with the previous endpoint.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.

{: .important-title }

> Exercise 18
>
> Implement a REST API endpoint for _creating an answer_ for a quiz's question. Information about the answer's text, correctness (is the answer correct or not based on the question's correct answer) and the question reference should be stored in the database. If the user is trying to answer a quiz which is not published, return a `403 Forbidden` status as a response. If the user is trying to answer a question which does not exist, return a `404 Not Found` status as a response. If the answer is invalid (for example blank answer text), return a `400 Bad Request` status as a response.
>
> Define the request body format with a [DTO](https://www.baeldung.com/java-dto-pattern) class. The frontend can send a JSON request body for example in the following format:
>
> ```json
> {
>   "answerText": "helsinki",
>   "questionId": 1
> }
> ```
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.

{: .note }

> The GET method endpoint error responses will be displayed as a HTML error page in a web browser. To see what the JSON error response looks like, use Postman to send the request.

## Communication between frontend and backend

With REST APIs we can _separate_ the client application from the server application. In web applications these client applications are commonly called _frontend applications_.

The example project has a simple React frontend application in the `frontend` folder, which uses the [Vite](https://vitejs.dev/) build tool. We will be using this application as an example and as the starting point for the student dashboard application.

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

In the example project, the logic of fetching and creating messages is extracted into `getAllMessages` and `createMessage` functions, which can be found in the `frontend/src/services/message.js` file:

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

The `MessageList` component in the `frontend/src/components/MessageList.jsx` calls the `getAllMessages` function to display the message list:

{% raw %}

```jsx
import { useEffect, useState } from "react";

// ...

import { getAllMessages, createMessage } from "../services/message";

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");

  function fetchMessages() {
    getAllMessages().then((messages) => {
      setMessages(messages);
    });
  }

  function handleSubmitMessage(event) {
    event.preventDefault();

    createMessage({ content }).then(() => {
      setContent("");
      fetchMessages();
    });
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  // ...
}
```

{% endraw %}

Explore the code in the `frontend` folder. Install the dependencies by running the `npm install` command in the `frontend` folder. Then, start the Vite development server by runing the `npm run dev` command. Once the development server has started, the application is accessible at <http://localhost:5713>.

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

> The last three user stories are related to the student dashboard application and they should be implemented as a frontend application which uses REST API endpoints implemented in the backend. Use the React application in the `frontend` folder as the starting point for your implementation.
>
> Install the dependencies by running the `npm install` command in the `frontend` folder. Then, start the Vite development server by runing the `npm run dev` command. Once the development server has started, the application is accessible at <http://localhost:5713>.

{: .highlight}

> Use the `@CrossOrigin` annnotation on the REST controller classes to allow cross-origin requests from the frontend application.

{: .important-title }

> Exercise 19
>
> Plan the tasks for the fifth user story, "{{site.sprint_2_user_story_5}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-5.png)

{: .important-title }

> Exercise 20
>
> Plan the tasks for the sixth user story, "{{site.sprint_2_user_story_6}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-6-1.png)
>
> ![](/assets/sprint-2-user-story-6-2.png)

{: .important-title }

> Exercise 21
>
> Plan the tasks for the seventh user story, "{{site.sprint_2_user_story_7}}". Read the Product Owner’s Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 2". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-2-user-story-7-1.png)
>
> ![](/assets/sprint-2-user-story-7-2.png)
>
> Tips for the tasks:
>
> - The feedback notification can be implemented for example with the Material UI [Snackbar](https://mui.com/material-ui/react-snackbar/) component or with a library such as [notistack](https://notistack.com/)

{: .important-title }

> Exercise 22
>
> Add instructions on _how to start the frontend application_ to the "Usage guide" section in the `README.md` file. Don't forget important details, such as in which folder the commands should be run in an how to install the frontend dependencies.
>
> For the sake of clarity, you can add separate subheadings for backend's and frontend's usage guide:
>
> ```md
> ## Usage guide
>
> ### Backend
>
> The backend usage guide goes here.
>
> ### Frontend
>
> The frontend usage guide goes here.
> ```
>
> You can test how good your user guide is by cloning a new copy of the repository and executing the steps precisely as they are in the usage guide without making any assumptions.

{: .important-title }

> Exercise 23
>
> Add a description of the project's _overall architecture_ and _implementation technologies_ to the project description in the `README.md` file. Mention the following things:
>
> 1. The project's overall architecture consists of three components: the backend, the database and the frontend. Mention these components and briefly explain the purpose of each component
> 2. Implement a [flow chart](https://mermaid.js.org/syntax/flowchart.html) which visualizes how the components communicate with each other. Does for example the frontend communicate with the database directly?
> 3. Which programming language, frameworks and major libraries are used in the _backend implementation_?
> 4. Which database platforms are used in different environments (development and production environment)?
> 5. Which programming language, frameworks and major libraries are used in the _frontend implementation_?

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

Let's have a look at the documentation for the `/api/messages/{id}` endpoint under the section named by the REST controller class. We see all relevant information about the endpoint: the path, path parameters, and an example of the response. We can send a test request by clicking the "Try it out" button on the right. This is handy while we are exploring an API that we aren't familiar with.

We can provide more details about the endpoints by using specific annotations for the controller classes and methods. For example, we can provide a better name and a description for the message API using the `@Tag` annotation:

```java
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
@Tag(name = "Message", description = "Operations for accessing and managing messages")
public class MessageRestController {
    // ...
}
```

Now, if we open <http://localhost:8080/swagger-ui/index.html> again, we should see the new name and the description for the message API.

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

{: .important-title }

> Exercise 24
>
> Generate a Swagger documentation for the project as described above. Add proper name and description for all REST controller classes using the `@Tag` annotation. For each REST controller method add a proper summary and description using the `@Operation` annotation.
>
> Test each REST API endpoint by opening the endpoint's documentation and cliking the "Try it out" button. Remember to also test that the error responses work properly. For example send a request to the endpoint wich returns the questions of a quiz with an `id` path parameter value of a non-existing quiz.
>
> Add a link to the Swagger documentation in the production environment (in Render) to the "Documentation" section in the `README.md` file. The link format is <http://name-of-the-web-service.onrender.com/swagger-ui/index.html>. Deploy the backend application to Render and make sure that the Swagger documentation is accessible.

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

We managed to deploy the backend during the previous Sprint, but we still haven't deployed the frontend. We can deploy the frontend to Render with the following steps:

1. In the `frontend` folder, add a `.env` [environment variable](https://vitejs.dev/guide/env-and-mode) file for the _development environment_. The `.env` file should contain a `VITE_BACKEND_URL` environment variable for the backend's _development environment URL_:

   ```
   VITE_BACKEND_URL=http://localhost:8080
   ```

   Make sure that every `fetch` function call has the environment variable as the URL prefix. For example:

   ```js
   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/messages`).then((response) => {
     // ...
   });
   ```

1. Add a `.env.production` environment variable file for the _production environment_. The `.env.production` file should contain a `VITE_BACKEND_URL` environment variable for the backend's _production environment URL_. For example:

   ```
   VITE_BACKEND_URL=https://name-of-the-backend-service.onrender.com
   ```

   Finally, _push the changes to GitHub_

1. On the Render dashboard, click the "New" button and choose "Static Site"
1. From the repository list, find you project's repository and click the "Connect" button
1. Come up with the name for the service. Set "Root Directory" as `frontend`, "Build Command" as `npm run build` and "Publish Directory" as `dist`
1. Click the "Advanced" button and set "Auto-Deploy" as "No"
1. Click the "Create Static Site" button to create the service
1. On the service's page, click "Redirects/Rewrites" from the navigation on the left. Set the "Source" as `/*`, "Destination" as `/index.html` and "Action" as "Rewrite". Finally, click the "Save Changes" button. This configuration will make the frontend routing work

{: .important-title }

> Exercise 25
>
> Deploy the frontend application to a production environment. Add the production environment URL of the frontend application (the web service URL in the Render dashboard) to the "Usage guide" section in the `README.md` file.

## Sprint Review

We have all kinds of cool stuff to show for the Product Owner at the end of this Sprint. Prepare for the upcoming [Sprint Review](/sprint-1#print-review) event, similarly as in the previous Sprint.

{: .important-title }

> Exercise 26
>
> Once you have implemented the user stories of the Sprint, remove the excessive backend-related files, such as Java class files and Thymeleaf template files that were in the original example project and are not relevant to your project. Also, remove the excessive frontend-related files from the `frontend` folder.

{: .important-title }

> Exercise 27
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint2". The release title should be "Sprint 2". Give a brief description for the release that describes the features implemented during the Sprint.

{: .important-title }

> Exercise 28
>
> The Scrum Master should prepare the Sprint Review demonstration at the beginning of the next Sprint. The Scrum Master should make sure that they have a working version of the application either deployed to Render (preferred) or on their computer and is able to show how the new features work in the user's perspective. If possible, demonstrate the features in the production environment.
>
> As in the previous Sprint Review, prepare some _sensible_ test data for the Sprint Review.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 2 deadline on {{site.sprint_2_deadline}}.
