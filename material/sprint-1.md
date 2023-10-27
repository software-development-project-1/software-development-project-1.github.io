---
layout: page
title: Sprint 1
permalink: /sprint-1
nav_order: 6
---

{% include toc.html %}

# Sprint 1

This week we'll start working on the project described by the Product Owner in the [project description](/project-description). As we have learned, in Scrum the project advances in short iterations called _Sprints_. Each of our three sprints last two weeks. This week is the start of the Sprint 1.

{: .highlight }

> Starting from this week, you will be working with your team. That means that, you will be working on the exercises together. You also need to work on the exercises outside the weekly sessions. If you don't know your team members, you can find their names on [Moodle]({{site.moodle_link}}).

## Sprint assesment

All of this Sprint's exercises are submitted to [this Moodle submission]({{site.sprint_1_moodle_submission_link}}). The submission should only contain the link to your team's GitHub repository created in exercise 7. _Each team member_ has to submit the GitHub repository link. The submission deadline is on {{site.sprint_1_deadline}}, so we will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-18. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

## Sprint Planning

At the beginning of each Sprint, the _Sprint Planning_ event is organized. During this event the whole Scrum Team partcipates in planning the requirements for the sprint. As we have learned, these requirements are documented as _user stories_, which are a short, simple description of a feature told from the perspective of the person who desires the new feature in the software. These user stories are added to a _Product Backlog_, which sort of an prioritized todo-list of user stories for the project.

The idea of Sprint Planning is not to make long term plans, for example what project should look like after three months. Because _requirements tend to change_, we should only do planning for the near future, usually just for the upcoming Sprint. That's why Sprint Planning event commonly only takes at most a few hours.

The Product Owner's responsibility during the event is to _prioritize_ the user stories on the Product Backlog so that the Developers know what to focus on during the upcoming Sprint. Developers discuss which of the highest priority user stories they are able to implemented during the upcoming Sprint. The chosen user stories for the Sprint are divided in to more technical _tasks_. These tasks are added to a _Sprint Backlog_, which sort of an Developers' todo-list for the Sprint. Each Sprint has a _separate Sprint Backlog_.

## User stories and tasks

User story should be described from the perspective of the user and should not contain technical details about the implementation. This way, the non-technical Product Owner and the Developers speak the same language.

Still, the Developers need to make technical planning to know how to actually implement the features described by the user stories. During Sprint Planning event each user story chosen for the Sprint are split into multiple technical _tasks_. User story's tasks are basically technical descriptions of what needs to be done to implement the feature described by the user story. Tasks are just for the Developers, so not even a tiny technical detail should be omitted.

For example, let's consider the following user story:

> As a content creator I want to create a new blog so that I can start writing blog posts.

During Sprint Planning Developers discuss the technical steps required to implement the described feature:

> "We'll need a page with a form that has text fields for the blog's name and description. Also, there needs to be a button to submit the form."
>
> -- John, one of the Developers

> "That's right, John. To render the page we'll need a controller class for the backend. The controller class should have a method that renders a Thymeleaf template of the page. Maybe the class name could be for example BlogController. What do you guys think?"
>
> -- Mary, one of the Developers

> "Sounds good to me, Mary. What about the form submission? I think we need a controller method for that as well. We should add a new blog entry to the database based on the submitted name and description. For this we could use the H2 database and Hibernate. We need a JPA entity and repository class class for the blog.
>
> -- Jane, one of the Developers

While discussing the technical details, the Developers document a todo-list of tasks with a short description. Developers also consider the order of the tasks:

> Task 1: Add Thymeleaf template for the blog submission form containing fields for name and description

> Task 2: Add BlogController controller class and a method for rendering the blog submission form

> Task 3: Add H2 and Hibernate dependencies for the project

> Task 4: Add Blog JPA entity class and BlogRepository JPA repository class

> Task 5: Add a method for the BlogController that adds the blog to database

These tasks are added to the Sprint specific, _Sprint Backlog_.

## Scrum backlogs

The "Scrum Artifacts" section of the [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes the _artifacts_ used in Scrum. Artifacts are information that the Scrum Team and stakeholders use to detail the product being developed, actions to produce it, and the actions performed during the project. These artifacts increase the _transparency_ of the process. Two of the most important artifacts are the _Product Backlog_ and _Sprint Backlog_.

### Product backlog

The _Product Backlog_ is a prioritized list of requirements for the developed software. Commonly these requirements are documented as user stories. The Product Backlog is altered constantly during the Sprints, mostly during the Sprint Planning event. For example, new user stories are added, old ones are edited or their priority is changed. Once a user story is implemented during the Sprint and the implementation is accepted by the Product Owner, the user story can be removed from the Product Backlog.

{: .note }

> Product Backlog can be thought as the todo-list of user stories for the project. Like in a todo-list, the user stories are in the order that they should be completed. That is, most important user stories are on the top of the list.

### Sprint backlog

During Sprint Planning event, the Developers decide the amount of user stories they manage to implemented during the upcoming Sprint. The selected user stories are chosen from the top (highest priority) of the Product Backlog. The chosen user stories are split into technical _tasks_. These tasks are added to a _Sprint Backlog_.

![Sprint Backlog](/assets/product-backlog-sprint-backlog.png){: width="400" }

{: .note }

> Deciding the amount of user stories for the Sprint can be quite tricky at first. It is hard to _estimate_ the amount of time it takes to implement a certain user story. But, the estimation gets easier in time.

The Sprint Backlog should represent the work needed to be done during the Sprint and the progress of that work. That is, the following points should be seen from the Sprint Backlog:

- Which user story is each task related to?
- Which team member is assignment to each task, i.e. who is working on the task?
- What's the progress of each task? For example, has somebody started working or the task, or is the task done?

This information is constantly kept up-to-date during the Sprint. For example, if a certain task is completed, it should be seen from the Sprint Backlog.

{: .note }

> Sprint Backlog can be thought as the todo-list of tasks for the current Sprint. Each task is related to a certain user story on the Product Backlog.

Each Sprint has _its own_ Sprint Backlog. That means that a new Sprint Backlog is created at the beginning of each Sprint.

### Backlog platforms

Sprint Backlog is commonly organized as taskboard that has columns for different progress states. These states can be for example "Not started" (nobody has started working on the task), "In progress" (somebody is currently working on this task), and "Done" (the task is completed). The tasks themselves are cards assigned to one of these states depending on their progress. The tasks are moved from one state to another until they are done.

![Sprint Backlog](/assets/sprint-backlog-example.png){: width="600" }

Taskboards are either physical taskboards, for example whiteboards in an office, or virtual taskboards. These days, it is quite common that a virtual taskboard are used as Product Backlogs and Sprint Backlogs. During this we will be using virtual taskboard platform, called [Trello](https://trello.com).

## Managing backlogs in Trello

[Trello](https://trello.com) is an online platform for managing virtual taskboards. We will be using Trello to manage our project's Product Backlog and Sprint Backlogs.

{: .important-title }

> Exercise 1
>
> Create a [Trello](https://trello.com) account.

We can create a new Trello _board_ by clicking the "Create" button in the navigation bar and choosing "Create Board" from the menu. Boards have _lists_ that can hold _cards_. We can add a new list by opening a board and clicking the "Add a list" button on the board. We can change the order of the lists by dragging them around the board. We can add a card for a list by clicking the "Add a card" button on a list. Once added, we can move the cards around the board by dragging them.

We can create separate boards for Product Backlog and Sprint Backlogs in Trello. Cards can be used as user stories and tasks. Lists can be used to determine states for user stories and tasks, such as "Not started", "In progress" and "Done" used in an example above.

Check the [Learn Trello board basics](https://trello.com/guide/trello-101) guide to learn more about boards.

{: .important-title }

> Exercise 2
>
> _One of the team members_ should create a [workspace](https://support.atlassian.com/trello/docs/what-are-trello-workspaces/) for the project in Trello. Once logged in, a workspace can be added by clicking the "Create" button in the navigation bar and choosing "Create Workspace" from the menu. Once the workspace is created, invite other team members to the workspace. Also make sure to invite the teacher ({{site.teacher_email}}) to the workspace.

{: .important-title }

> Exercise 3
>
> Create a Product Backlog board in Trello. Make sure to choose created workspace as the board's workspace from the dropdown menu. Name Product Backlog board "Product backlog". The Product Backlog board should have these three lists from left to right:
>
> - "Backlog" for the user stories that are not on any Sprint yet
> - "In sprint" for the user stories that are chosen for the current Sprint
> - "Done" for the user stories that have been completed

{: .important-title }

> Exercise 4
>
> Create a Sprint Backlog board for the first Sprint in Trello. Name the Sprint Backlog board "Sprint 1 backlog". The Sprint Backlog board should have these three lists from left to right:
>
> - "To do" for tasks that haven't been started yet
> - "In progress" for tasks that somebody is working on
> - "Done" for the tasks that have been completed

{: .important-title }

> Exercise 5
>
> Decide how you will communicate outside the weekly sessions. Choose a communication platform, such as Teams, Telegram or Discord. Also schedule at least one weekly time slot when you work on the exercises together outside the weekly sessions. If possible, meet physically on the campus or some other location.

## GitHub's workflow

Sites like GitHub make collaboraton in development projects a lot easier. No one notices problems more efficiently than the actual users, and GitHub creates a platform for reporting those complications. Any user can create an _issue_ to a public project in GitHub, where one can report any problems with regards to using the software. Common issue subjects are error messages in edge cases, problems in installing, or missing features.

If one knows the solution to a problem, they can even suggest their own improvements to the project. However, this requires having access to the source code of the project. A public project can be copied to a local computer with the command `git clone`. The command takes the address of the remote repository, which can be acquired from the upper right corner of the project page, as an argument.

![Cloning address](/assets/git-clone.png)

Note that this is actually the same address you used before when adding a remote repository with the command `git remote add`. The owner of a project will not know who has cloned their project.

In the future, when you start a new Git project, you have two options for linking the local project to a repostory in GitHub. One option is to start by running `git init` inside a folder, create a repository to it in GitHub, and link them together. Another possibility is to create the remote first and simply clone the empty project to your local machine.

### GitHub organizations

When a software development teams is working on project together, the project can have multiple repositories and different team members might only have access to certain repositories. To have more control over the repository access, the repositories aren't personal repositories created by certain team member. Instead the repositories belong to certain _organization_ and team members can be invited to join that organization.

Similarly as a repository, an organization can be added on GitHub by cliking the plus icon on the top-right corner of the page.

![GitHub organization](/assets/github-organization.png)

Once the organization is created, a team member can be invited by clicking the "People" tab on the navigation bar and then clicking the green "Invite member" button.

![GitHub organization invite](/assets/organization-invite.png)

{: .important-title }

> Exercise 6
>
> _One of the team members_ should create a GitHub organization for the project. Once the organization is created, invite other team members to the organization. When sending the invitation on the "Role in the organization" step, choose role "Owner" for each member of the team.

### Forking a repository

Instead of starting a repository from scratch, we can create a copy an existing repository and use that as a starting point for our project. In GitHub terminology this is called _forking a repository_ and the copied repository is called a _fork_.

To get started faster, start your project by forking the [example-project repository]({{site.example_project_link}}). The repository has a simple Java Spring Boot application initialized with [Spring Initializr](https://start.spring.io/). It has some code samples of Thymeleaf templates, controllers, JPA entities and JPA repositories.

A repository can be forked by cliking the "Fork" button on right side of the repository's name.

![GitHub fork repository](/assets/fork-repository.png)

{: .important-title }

> Exercise 7
>
> _One of the team members_ should fork the [example-project repository]({{site.example_project_link}}). Choose the "Owner" as the organization you created previously and give the repository a descriptive name, such as "cool-reads" and a description. The forked repository will become your project's repository where you start working on the project.

{: .important-title }

> Exercise 8
>
> Each team member should _clone_ the project's GitHub repository for their local computer with the `git clone` command. Remember to clone the repository you created in the previous exercise, _not_ the example-project repository. _Remember to use the HTTPS address_ of the GitHub repository with the command.
>
> Once you have cloned the repository, open the code in an editor such as Eclipse or Visual Studio Code. In Eclipse you can open the project folder from "File > Open Project from Filesystem". The project requires _Java version 17_.
>
> Explore the code and start the Spring Boot application. Once started, the application should be open at <http://localhost:8080>.

{: .important-title }

> Exercise 9
>
> Once each team member has the repository on their local computer, do the following:
>
> 1. _Each team member_ opens the cloned repository folder in Eclipse or in some other editor.
> 2. _Each team member_ opens the cloned repository folder in Git Bash. Right-click the repository folder in the File Explorer and choose "Git Bash Here". See previous week's [Git instructions](/git) if you have trouble.
> 3. _One of the team members_ locally edits the contents of the `README.md` file in the repository folder. Push changes to the remote GitHub repository using `git add`, `git commit` and `git push` commands.
> 4. _Each team member_ checks that the changes are visible in GitHub.
> 5. Once changes have been pushed to GitHub, _each team member_ pulls the changes from GitHub using the `git pull` command.
> 6. Once everybody sees the changes on their local `README.md` file, repeat the the steps from step 3. for each team member until everyone has pushed some changes to the GitHub repository.

### The README file

The `README.md` file we worked with in the previous exercise has a special meaning in software development projects. When a software developer starts exploring a project, the first thing they should do is to look for the README file. This file should have all the relevant information about the project, for example:

- What's the project about?
- How to use the project?
- How to develop the project?
- Who are the project contributors?

In GitHub, the README files commonly have the `.md` extension. These are [Markdown](https://www.markdownguide.org/) files. Markdown is markup language similar to HTML and you can use it to add formatting elements to plaintext text documents. Compared to HTML, Markdown syntax is much simpler and that's why it is an excellent choise for formatting text documents.

[This guide](https://www.markdownguide.org/basic-syntax) demonstrates the Markdown syntax compared to HTML. As an example, [here's](https://github.com/facebook/react/blob/main/README.md) what the React project's `README.md` file looks like and [here's](https://github.com/facebook/react/blob/main/README.md?plain=1) what the Markdown markup looks like. You can use the [Markdown Live Preview](https://markdownlivepreview.com/) to try out different kind of Markdown markup.

{: .important-title }

> Exercise 10
>
> Replace the current contents of the repository's `README.md` file with the following information using Markdown:
>
> 1. At the beginning of the file add the project name "Cool Reads" as a [heading](https://www.markdownguide.org/basic-syntax#headings).
> 2. Below the heading add a short (a few sentences) description of the project as [paragraphs](https://www.markdownguide.org/basic-syntax#paragraphs-1). Check [the project description](/project-description) for some inspiration.
> 3. Below the description, add a subheading "Team members" and below that add a [list](https://www.markdownguide.org/basic-syntax#lists-1) of each team member's name.
> 4. Each team member's name should be a [link](https://www.markdownguide.org/basic-syntax#links) to their GitHub profile page. The GitHub profile link is in format https://github.com/GITHUB_USERNAME, for example <https://github.com/Kaltsoon>
>
> Push the `README.md` file changes to GitHub and see that the file formatting looks correct in GitHub.

## Sprint 1 planning

Here's how the Product Owner is describing the Sprint 1 goals in the Sprint Planning event:

> "Let's start from the basics. We need a simple web application which allows user to add a reading recommendation and list the added reading recommendations.
>
> When the user opens the application on browser, there should be page where the added reading recommendations are listed. There should also be a link that says "Add a reading recommendation" which takes the user to another page, where they can add a reading recommendation using a form.
>
> For now, it is enough that the reading recommendation has a title, for example "The 2020 Scrum Guide", a link, for example "https://scrumguides.org/scrum-guide.html" and a short description, for example "All you need to know about Scrum". Each of these should have field on the form and they should be displayed on the list.
>
> It would be convinient that the user could edit the added reading recommendation if, for example they made a typo in the title or description. The reading recommendation list should have an "Edit" button next to each reading recommendation. When user clicks the button, it should take user to an edit form, where the user can edit all the added information."
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As an user I want to add a reading recommendation so that I can build a collection of recommendations
2. As an user I want to list the added reading recommendations so that I can find interesting things to read
3. As an user I want to be able to edit a reading recommendation so that I can change its information

For the _first user story_, the Developers came up with the following tasks:

1. Add a ReadingRecommendation JPA entity class with id, title, link and description attributes, and a ReadingRecommendationRepository JPA repository class
2. Add Thymeleaf template for the reading recommendation submission form containing fields for title, link and description
3. Add ReadingRecommendationController controller class and a method for rendering the reading recommendation submission form
4. Add a method for the ReadingRecommendationController class that saves the reading recommendation to the database

For the _second user story_, the Developers came up with the following tasks:

1. Add Thymeleaf template for listing the added reading recommendations with title, link and description
2. Add a method for rendering the reading recommendation list for the ReadingRecommendationController class

These are the user stories, that you will be working on as a team during this Sprint. The tasks described above are suggestions, feel free to alter them or add new tasks.

### Tips for implementing the tasks

- It is recommended to implement the user stories in the described order. During this Sprint it is easier to do most of the tasks together because they are so tightly connected.
- _Push_ code to the GitHub repository often. Once you have some _working_ code, use `git add`, `git commit`, `git push` commands to push the code to GitHub.
- _Pull_ the code from the GitHub repository often. Run the `git pull` command to get the latest changes to your local computer.
- While pulling the code from the GitHub repository, you'll probably face _merge conflicts_. You can spot a merge conflict from the `git pull` command ouput: `CONFLICT (content): Merge conflict in ...`. If you have trouble solving the merge conficts, see the [Git instructions](/git#merge-conflicts).
- See how the mentioned things are done in the [example project]({{site.example_project_link}}).
- The example project is using [Bootstrap](https://getbootstrap.com/) frontend toolkit. You can use it to make your application look nice. [Forms](https://getbootstrap.com/docs/5.3/forms/form-control/), [buttons](https://getbootstrap.com/docs/5.3/components/buttons/) and [tables](https://getbootstrap.com/docs/5.3/content/tables/) are useful guides for the user stories in this Sprint.
- [Controllers](https://www.baeldung.com/spring-controllers)
- [Using Thymeleaf in Spring](https://www.baeldung.com/thymeleaf-in-spring-mvc)
- [JPA Entities](https://www.baeldung.com/jpa-entities)
- [JPA Repositories](https://www.baeldung.com/spring-data-repositories)

{: .important-title }

> Exercise 11
>
> Come up with tasks for the third user story, "As an user I want to be able to edit a reading recommendation so that I can change its information". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 15 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 12
>
> 1. Add these three user stories to the "Product Backlog" board as cards in Trello. The user stories should be initially in the "In sprint" list of the board.
> 2. Add the tasks to the "Sprint 1 Backlog" board as cards in Trello. The tasks should be initially in the "To do" list of the board.
> 3. Once you start working on task, assign the task to you. This can be done by first clicking on the card, then clicking the "Members" button below the "Add to card" and choosing your Trello account. A task can also have multiple members. The important thing is that each task that is not in the "To do" state should have at least one member assigned to it.

{: .highlight }

> While working on the tasks, keep the Sprint Backlog up-to-date:
>
> - When you start working on a task, mark it assigned to you and move it to the "In progress" state
> - When you complete a task, move it to the "Done" state
>
> Use the Sprint Backlog to track the Sprint progress. Always start a team meeting by looking at the Sprint Backlog.

{: .note }

> "What's the progress of user story X?". This is a common question that the Sprint backlog should answer with a quick glance. We should be able to quickly see what's the state of each task of a user story and who is working on each task. One way to specify the user story of a task is to use user story specific prefix in the task description.
>
> First, add an unique index number prefix for each user story on the Product backlog, for example "1. As an user I want to add a reading recommendation so that I can build a collection of recommendations". Then, add an unique index number prefix in format "USER_STORY_INDEX.TASK_INDEX." for each task on the Sprint backlog, for example "1.1. Add a ReadingRecommendation JPA entity class with id, title, link and description attributes, and a ReadingRecommendationRepository JPA repository class".

## Thymeleaf page layouts

If we start the example project application and visit the [message list page](http://localhost:8080) at and the [add message page](http://localhost:8080/messages/add), we see that the pages share a common structure. They both have the navigation bar at the top of the page. If we dig deeper into the HTML structure, there's also common `link` and `script` elements. We could simply copy-paste the navigation bar HTML to both pages, but once we implement more pages and want to update the navigation bar, things start to get out of hand. Instead, we can have a common _layout_ for the application that each page can share. This can be achieved using the [Thymeleaf Layout Dialect](https://ultraq.github.io/thymeleaf-layout-dialect/).

If we take a look at the example project's `layout.html` file in the `src/main/resources/templates` folder we'll see that the file has a common structure for each page:

```html
<!DOCTYPE html>
<html
  lang="en"
  xmlns:th="http://www.thymeleaf.org"
  xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
>
  <head>
    <meta charset="utf-8" />
    <title>Cool Reads</title>
    <!-- ... -->
  </head>
  <body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <!-- ... -->
    </nav>
    <div class="container my-3" layout:fragment="content"></div>
  </body>
</html>
```

The `<div class="container my-3" layout:fragment="content"></div>` element is a _layout fragment_ called "content". It will contain the page-specific content. The layout can have multiple fragments, which could come in handy if we have for example a footer that has page-specific content.

Let's have a look at the `messagelist.html` file that is using this layout:

```html
<!DOCTYPE html>
<html
  xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
  layout:decorate="~{layout.html}"
>
  <body>
    <div layout:fragment="content">
      <h1>Messages</h1>

      <ul>
        <li th:each="message: ${messages}" th:text="${message.content}"></li>
      </ul>

      <a class="btn btn-primary" href="/messages/add">Add a message </a>
    </div>
  </body>
</html>
```

The `layout:decorate="~{layout.html}"` on the `html` element specifies that this template is using the `layout.html` file as the layout file. The `div` element that has the `layout:fragment="content"` attribute has the content that will be displayed on the corresponding layout fragment on the `layout.html` file.

{: .important-title }

> Exercise 13
>
> Implement the tasks of the first user story, "As an user I want to add a reading recommendation so that I can build a collection of reading recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-1.png)
>
> Alter the `layout.html` file mentioned above to change the navigation bar content.

{: .important-title }

> Exercise 14
>
> Implement the tasks of the second user story, "As an user I want to list the added reading recommendations so that I can easily find interesting things to read".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-2.png)
>
> This page should be visible on the root path (the `/` path) of the application. Change the `@GetMapping` of the `listMessages` method in the `MessageController` class, for example to `@GetMapping("/messages")`.

{: .important-title }

> Exercise 15
>
> Implement the tasks of the third user story, "As an user I want to be able to edit a reading recommendation so that I can change its information".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-3-1.png)
>
> ![](/assets/sprint-1-user-story-3-2.png)

{: .note }

> The visual aspect of the application is not as important as the functionality. The most important things is that the user has some kind of functionality for the features described in the user stories.

## Daily Scrum

The Daily Scrum is a 15-minute event, commonly held on daily basis. The purpose of the Daily Scrum is for the Scrum Team to inspect and adapt its progress. During the event each team member typically answers the following three questions:

1. What did you do previously?
2. What will you do next?
3. Are there any obstacles in your way?

For example this could be a one team member's statement during the Daily Scrum:

> "Yesterday I started implementing the task for the blog listing Thymeleaf template. I'll continue working on that today. I had some trouble while trying to iterate a List in the Thymeleaf template. I don't remember the syntax. Could anyone have a look at it with me after the Daily Scrum?"
>
> -- Jane, one of the Developers

The Sprint Backlog should be open during the event so that the whole Scrum Team is up-to-date with Sprint Backlog updates and the Sprint progress.

A funny fact: it is common that during the Daily Scrum the whole Scrum Team is standing. This is why the Daily Scrum is often called the "daily stand-up". The reason is very practical: the event tends to be shorter because standing for a long period of time can become tedious.

{: .note }

> You don't need to have a Daily Scrum event on a daily basis. Just start each team meeting (including the weekly sessions) with a Daily Scrum.

## Usage guide documentation

Now that we have implemented some features for our application that the users can use it is time to describe _how_ to use the application. The _usage guide_ is perhaps one of the most important pieces of documentation for the application. It will describe our fellow developers how to technically use the application. This means for example, how to start the application, how to package the application, and how to run tests.

The usage guide shouldn't make too many assumptions, for example, that the reader of the documentation happens to know that the `application.properties` file needs alterations before the application can be started. If something needs to be done, even a simple thing, _mention it_. It is helpful not only for others but also for yourself. We should also describe the _system requirements_ for the application. For example, the required JDK version. The example project uses Spring Boot version 3, which requires JDK version 19 or higher.

Because developers use different IDEs, it is easier to describe how the application can be used using a command-line interface (such as Git Bash). On the command-line, we can use the Maven command `mvn` or the alias `./mvnw` to run different Maven commands. Using `./mvnw` (the [Maven wrapper](https://www.baeldung.com/maven-wrapper)) is a bit more convenient because it doesn't require Maven to be installed.

Here's a simple usage guide on how to start the example project application:

1. Start the application by running `./mvnw spring-boot:run` on the command-line
2. Once the application has started, visit <http://localhost:8080> in a browser to use the application

The description should be so clear that your fellow student who knows nothing about the project beforehand would be able to start the application.

{: .important-title }

> Exercise 16
>
> Write a usage guide on _how to start your application_ to the `README.md` file. Add it under a "Usage guide" subheading. Also, mention the required JDK version for the project.

## GitHub release

Once the GitHub repository's main branch has a working version of the application with the desired features at the end of the sprint, we should _release_ it for the users. [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) is a way to "freeze" the source code of a project at certain point of the commit history and to provide users a working version of the application.

Usually a new version of an application is released at the end of each Sprint. When we create a new release at the end of each Sprint, we will create a _release history_ for the project. Users can easily browse and download the source code of different versions of the application by going through the release history.

{: .important-title }

> Exercise 17
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint1". The release title should be "Sprint 1". Give a brief description for the release that describes the features implemented during the Sprint.

## Sprint Review

At the end of each Sprint, there's the [Sprint Review](https://scrumguides.org/scrum-guide.html#sprint-review) event. During the Sprint Review, the Developers demonstrate the outcome of the Sprint for the Product Owner. This means that the Developers should demonstrate how the implemented user stories work _in the user's perspective_. So, instead of showing the code, Developers should show how the user can use the new features of the application.

Sprint Review has a huge impact on the transparency of the process. Seeing how the application actually works also brings forth many new ideas for the upcoming Sprint Planning event.

{: .important-title }

> Exercise 18
>
> Decide which team member gives the Sprint Review demonstration at the beginning of the next Sprint. This team member should make sure that they have a working version of the application on their computer and is able to show how the new features work in the user's perspective.
>
> You can use the source code of the release you created earlier to get the working version of the application. Click the "Releases" link in GitHub and choose "Source code" under the "Assets" heading.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 1 deadline on {{site.sprint_1_deadline}}.
