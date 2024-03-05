---
layout: page
title: Sprint 1
permalink: /sprint-1
nav_order: 6
---

{% include toc.html %}

# Sprint 1

This week we'll start working on the project described by the Product Owner in the [project description](/project-description). As we have learned, in Scrum the project advances in short iterations called _Sprints_. Each of our three Sprints last two weeks. This week is the start of the Sprint 1.

{: .highlight }

> Starting from this week, you will be working with your team. That means that, you will be working on the exercises together. You also need to work on the exercises outside the weekly sessions. If you don't know your team members, you can find their names on [Moodle]({{site.moodle_link}}).

## Sprint assesment

All of this Sprint's exercises are submitted to [this Moodle submission]({{site.sprint_1_moodle_submission_link}}). The submission should only contain the link to your team's GitHub repository created in exercise 2. _Each team member_ has to submit the GitHub repository link. The submission deadline is on {{site.sprint_1_deadline}}, so we will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-24. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

## Sprint Planning

At the beginning of each Sprint, the _Sprint Planning_ event is organized. During this event the whole Scrum Team participates in planning the requirements for the Sprint. As we have learned, these requirements are commonly documented as _user stories_, which are a short, simple description of a feature told from the perspective of the person who desires the new feature in the software. These user stories are added to a _Product Backlog_, which sort of an prioritized todo-list of user stories for the project.

The idea of Sprint Planning is not to make long term plans, for example what project should look like after three months. Because _requirements tend to change_, we should only do planning for the near future, usually just for the upcoming Sprint. That's why Sprint Planning event commonly only takes at most a few hours.

The Product Owner's responsibility during the event is to _prioritize_ the user stories on the Product Backlog so that the Developers know what to focus on during the upcoming Sprint. Developers discuss which of the highest priority user stories they are able to implemented during the upcoming Sprint. The chosen user stories for the Sprint are divided into more technical _tasks_. These tasks are added to a _Sprint Backlog_, which sort of an Developers' todo-list for the Sprint.

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

> "Sounds good to me, Mary. What about the form submission? I think we need a controller method for that as well. We should add a new blog entry to the database based on the submitted name and description. For this we could use the H2 database and Hibernate. We need a JPA entity and JPA repository class class for the blog.
>
> -- Jane, one of the Developers

While discussing the technical details, the Developers document a todo-list of tasks with a short description. Developers also consider the order of the tasks:

> Add a Blog JPA entity class and a BlogRepository JPA repository class

> Add a Thymeleaf template for the blog creation form containing fields for name and description

> Add a BlogController controller class and methods for rendering and handling the submission of the blog creation form

These tasks are added to the _Sprint Backlog_.

## Scrum backlogs

The "Scrum Artifacts" section of the [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes the _artifacts_ used in Scrum. Artifacts are information that the Scrum Team and stakeholders use to detail the product being developed, actions to produce it, and the actions performed during the project. These artifacts increase the _transparency_ of the process. Two of the most important artifacts are the _Product Backlog_ and _Sprint Backlog_.

### Product backlog

The _Product Backlog_ is a _prioritized_ list of requirements for the developed software. Commonly these requirements are documented as user stories. On top of new features, Product Backlog items can also be for example bug fixes. The Product Backlog is altered constantly during the Sprints, mostly during the Sprint Planning event. For example, new user stories are added, old ones are edited or their priority is changed.

The Product Owner's responsibility is to prioritize the user stories in the Product Backlog, but the whole Scrum Team participates in the definition of the user stories. The Product Owner should also make sure that the user stories implemented during a Sprint match the stakeholder's requirements. Once a user story is implemented during a Sprint and the implementation is accepted by the Product Owner, the user story can be removed from the Product Backlog.

A good Product Backlog has the [DEEP](https://www.romanpichler.com/blog/make-the-product-backlog-deep/) characteristics:

- _Detailed appropriately_: the high-priority user stories (at the top of the Product Backlog) are described in a more detail than the low-priority user stories. This is because the high-priority user stories are the ones that will be implemented soon, maybe during the upcoming Sprint. That is why it is important that these user stories fulfill the INVEST criteria and are ready for the implementation.
- _Estimated_: the user stories in the Product Backlog should be estimated. That is, the Developers have considered the efforts required to implement each user story and they have communicated it with the Product Owner. Having a rough estimate for the user stories helps the Product Owner in the priorization.
- _Emergent_: the Product Backlog evolves constantly: old user stories are completed, new user stories emerge and priorization changes
- _Prioritized_: all user stories are in a prioritized order in the Product Backlog. The user stories at the top of the Product Backlog are the ones that Product Owner considers to produce most value for the stakeholders.

{: .note }

> Product Backlog can be thought as the todo-list of user stories for the project. Like in a todo-list, the user stories are in the order that they should be completed. That is, most important user stories are on the top of the list.

### Sprint backlog

During Sprint Planning event, the Developers decide the amount of user stories they manage to implemented during the upcoming Sprint. The selected user stories are chosen from the top (highest priority) of the Product Backlog. The chosen user stories are split into technical _tasks_. These tasks are added to a _Sprint Backlog_.

![Sprint Backlog](/assets/product-backlog-sprint-backlog.png){: width="400" }

{: .note }

> Deciding the amount of user stories for the Sprint can be quite tricky at first. It is hard to _estimate_ the amount of effort it takes to implement a certain user story. But, the estimation gets easier in time.

The Sprint Backlog should represent the work needed to be done during the Sprint and the progress of that work. That is, the following points should be seen from the Sprint Backlog:

- Which user story is each task related to?
- Which team member is assignment to each task, i.e. who is working on the task?
- What's the progress of each task? For example, has somebody started working or the task, or is the task done?

This information is constantly kept up-to-date during the Sprint. For example, if a certain task is completed, it should be seen from the Sprint Backlog.

{: .note }

> Sprint Backlog can be thought as the todo-list of tasks for the current Sprint. Each task is commonly related to a certain user story.

### Backlog platforms

Sprint Backlog is commonly organized as taskboard that has columns for different progress states. These states can be for example "Not started" (nobody has started working on the task), "In progress" (somebody is currently working on this task), and "Done" (the task is completed). The tasks themselves are cards assigned to one of these states depending on their progress. The tasks are moved from one state to another until they are done.

![Sprint Backlog](/assets/sprint-backlog-example.png){: width="600" }

Taskboards are either physical taskboards, for example whiteboards in an office, or virtual taskboards. These days, it is quite common that a virtual taskboard are used as Product Backlogs and Sprint Backlogs. [Jira](https://www.atlassian.com/software/jira) and [GitHub projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) are perhaps the most widely used taskboard platforms in the industry. During this course we will be using _GitHub projects_ because it integrates very well with our GitHub workflow. But, before we can start using GitHub projects, we need to create a repository for our project.

## GitHub organizations

When a software development teams is working on project together, the project can have multiple repositories and different team members might only have access to certain repositories. To have more control over the repository access, the repositories aren't personal repositories created by certain team member. Instead the repositories belong to certain _organization_ and team members can be invited to join that organization.

Similarly as a repository, an organization can be added on GitHub by cliking the plus icon on the top-right corner of the page.

![GitHub organization](/assets/github-organization.png)

Once the organization is created, a team member can be invited by clicking the "People" tab on the navigation bar and then clicking the green "Invite member" button.

![GitHub organization invite](/assets/organization-invite.png)

{: .important-title }

> Exercise 1
>
> _One of the team members_ should create a GitHub organization for the project. Once the organization is created, invite other team members to the organization. When sending the invitation on the "Role in the organization" step, choose role "Owner" for each member of the team.

## Forking a GitHub repository

Instead of starting a repository from scratch, we can create a copy an existing repository and use that as a starting point for our project. In GitHub terminology this is called _forking a repository_ and the copied repository is called a _fork_.

To get started faster, start your project by forking the [example project repository]({{site.example_project_link}}). The repository has a simple Java Spring Boot application initialized with [Spring Initializr](https://start.spring.io/). It has some code samples of Thymeleaf templates, controllers, JPA entities and JPA repositories.

A repository can be forked by cliking the "Fork" button on right side of the repository's name.

![GitHub fork repository](/assets/fork-repository.png)

{: .important-title }

> Exercise 2
>
> _One of the team members_ should fork the [example project repository]({{site.example_project_link}}). Choose the "Owner" as the organization you created previously and give the repository a descriptive name and a description. The forked repository will become your project's repository where you start working on the project.

{: .important-title }

> Exercise 3
>
> Each team member should _clone_ the project's GitHub repository for their local computer with the `git clone` command. Remember to clone the repository you created in the previous exercise, _not_ the example project repository. _Remember to use the HTTPS address_ of the GitHub repository with the command. See the [Git instructions](/git#githubs-workflow) if you have trouble.
>
> Once you have cloned the repository, open the code in an editor such as Eclipse or Visual Studio Code. In Eclipse you can open the project folder from "File > Open Project from Filesystem". The project requires _Java version 17_.
>
> Explore the code and start the Spring Boot application. Once started, the application should be open at <http://localhost:8080>.

{: .important-title }

> Exercise 4
>
> Once each team member has the repository on their local computer, do the following:
>
> 1. _Each team member_ opens the cloned repository folder with an editor.
> 2. _Each team member_ opens the cloned repository folder in Git Bash. Right-click the repository folder in the File Explorer and choose "Git Bash Here".
> 3. _One of the team members_ locally edits the contents of the `README.md` file in the repository folder. If you aren't able to edit the file with Eclipse, use for example Visual Studio Code instead. Push changes to the remote GitHub repository using `git add`, `git commit` and `git push` commands. See the [Git instructions](/git#starting-a-git-project) if you have trouble.
> 4. _Each team member_ checks that the changes are visible in GitHub.
> 5. Once changes have been pushed to GitHub, _each team member_ pulls the changes from GitHub using the `git pull` command. If you see `CONFLICT` in the command output, see the [Git instructions](/git#merge-conflicts) to figure out how to solve conflicts.
> 6. Once everybody sees the changes on their local `README.md` file, repeat the the steps from step 3. for each team member until everyone has pushed some changes to the GitHub repository.

## GitHub Projects

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) is a platform for managing taskboards. We will be using it for managing the user stories and tasks in our Product Backlog and Sprint Backlog.

Taskboards in GitHub Projects are called _projects_. Let's create a project for our backlogs. Open your repository in GitHub and click the "Projects" tab. Then, click the green "New project" button on the right. Click the arrow next to the button, if the button label is different. This should open a dialog. From the left side of the dialog, choose "Board". This determines what the project will look like and you can change it later. Name the project "Backlog". Finally, click the "Create" button to create the project.

We now have a project with the default columns: "Todo", "In progress" and "Done". The column will determine the status of the backlog items. We can edit the column names by clicking the three dots at the top-right corner of the column. We can add a new column by pressing the "+" button on the right side of the last column. Let's change the columns so that they are the following from left to right:

- "Product Backlog". This column is for the _Product Backlog_ items. That is, items that are requirements for the project but aren't currently worked on. The items should be listed in the _priority_ order (the "P" of DEEP Product Backlog) defined by the Product Owner.
- "Sprint Backlog". This column is for the _Sprint Backlog_ items. That is, user stories and tasks that are chosen for the current Sprint. Top-priority items are chosen from the "Product Backlog" column and moved to this column during the Sprint Planning event.
- "In progress". This column is for the items that some team member is currently working on.
- "In review". This column is for items that require other Developer's or Product Owner's acceptance before they can be moved to the "Done" column.
- "Done". This column is for the items that have been completed.

Finally, let's make sure that our project is public. Click the project's name and the project's settings should open. Scroll down to "Danger zone" section and choose "Visibility" as "Public" from the dropdown menu.

The project will be empty for now, but we will add some user stories and tasks for the project after the Sprint Planning event.

{: .important-title }

> Exercise 5
>
> Create the "Backlog" project as instructed above. Make sure that the project is public.

## 🏃‍♂️ Sprint 1 planning

Here's how the Product Owner is describing the Sprint 1 goals in the Sprint Planning event:

> "To get started with the project, we need to implement a basic set of features for the teacher dashboard application so that the teachers can manage quizzes.
>
> When the teacher opens the application on a web browser, there should be page where the added quizzes are listed. There should also be a link that says "Add a quiz" which takes the teacher to another page, where they can add a quiz using a form.
>
> A quiz has a name, for example "The capital cities of Europe", a description, for example "Learn the capital cities of the European countries" and a published status. A quiz is either published or not. Each of these values should have field in the form. The published status could be for example a checkbox. The user should not be able to add a quiz with a blank name or description. The quiz should not be published by default.
>
> The teacher should be able to edit the information of a quiz if, for example they want to publish the quiz or change its name or description. The quiz list should have an "Edit" link next to each quiz. The link should take the teacher to an edit form, where they can edit all the information of the quiz.
>
> The teacher should also be able to get rid of quizzes they don't need. Next to the "Edit" link, there should be a "Delete" button in the quiz list. When the user clicks the button, the quiz should be deleted.
>
> To quickly see which quizzes are published and which are not, there should be some way for the teacher to filter the quiz list based on the published status. There could be for example "All", "Published", and "Not published" tabs at the top of the list.
>
> The quiz list should display the date when the quiz was added. This way, the teacher would know how old the quiz is. Also, the quizzes should be listed from newest to oldest. This way, the teacher can find the latest quizzes quickly at the top of the list."
>
> -- The Product Owner

After some discussion the Scrum Team planned the following user stories:

1. {{site.sprint_1_user_story_1}}
2. {{site.sprint_1_user_story_2}}
3. {{site.sprint_1_user_story_3}}
4. {{site.sprint_1_user_story_4}}
5. {{site.sprint_1_user_story_5}}
6. {{site.sprint_1_user_story_6}}
7. {{site.sprint_1_user_story_7}}

The order of the user stories represent the priotity provided by the Product Owner. That is, this should be the order of the user stories in the Product Backlog. The Developers should also implement the user stories in this order.

These are the user stories, that you will be working on as a team during this Sprint. The next step of the Sprint Planning event is to split these user stories into codings tasks.

{: .important-title }

> Exercise 6
>
> Choose the [Scrum Master](https://scrumguides.org/scrum-guide.html#scrum-master) among the team members for the first Sprint. The Scrum Master should facilitate the team's meetings and make sure that the backlogs are up-to-date.

## GitHub issues

[GitHub issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) are used to track ideas, feedback, tasks, or bugs for work on GitHub. Open source projects commonly use issues for feature suggestions and bug reports (something is not working as inteded). [Here](https://github.com/facebook/react/issues) is an example of issues in the React library's repository. We will use issues to organize the user stories, tasks and bug reports in our project.

Before we start creating issues, let's add some [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) so that we can categorize our issues. Open your repository in GitHub and click the "Issues" tab. Then, on the right, click the "Labels" button. So that we can separate the user story issues from other issues, let's add a "user story" label by clicking the "New label" button.

{: .highlight }

> If you don't see the "Issues" tab in the repository, follow [this guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues) to enable the issues. In our case the "Issues" checkbox should be checked.

{: .important-title }

> Exercise 7
>
> Create the "user story" label to classify user story related issues.

Next, we need to specify the Sprint the issue is worked on. We can use Sprint-specific [milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones) to group the issues based on a Sprint. Let's create a milestone for the first Sprint. First, click the "Issues" tab to open the issues page. Then, click the "Milestones" button next to the "Labels" button. On the Milestones page, click the "Create a new Milestone" button. Set the milestone title as "Sprint 1". You can also specify a due date and a description if you want. Finally, click the "Create milestone" button to create the milestone.

{: .important-title }

> Exercise 8
>
> Create the "Sprint 1" milestone to group the issues of the first Sprint.

Now that we have the "user story" label and the "Sprint 1" milestone, let's create an issue for each user story. Click the "Issues" tab and click the green "New issue" button on the right. Set the issue title as "{{site.sprint_1_user_story_1}}". With the description we can provide additional details if we can't fit everything in the title. On the right, click "Labels" and choose the "user story" label which indicates that this issue is a user story. Then, click "Projects" and choose the "Backlog" project. This will add the issue to the Backlog project. To specify the issue's Sprint, click "Milestone" and choose "Sprint 1". Finally, click the "Submit a new issue" button to create the issue.

Next, let's open the "Projects" tab and open the Backlog project. We should see that the issue we created is now in the project. We can move the issue to a column by dragging the issue card. This will change the status of the issue. Let's move the issue we created to the "Sprint Backlog" column, which indicates that this user story is in the current Sprint.

By default we can't see the labels or the milestone on the issue cards. We can click on the arrow button next to "View 1" below the project name and click "Fields" under "Configuration". There, check "Labels" and "Milestone". Finally, click the green "Save" button to save the configuration.

{: .important-title }

> Exercise 9
>
> Create an issue for each _user story_. Add the "user story" label for each issue. Set the milestone as "Sprint 1". Add the issues to the Backlog project and move them to the "Sprint Backlog" column.

{: .highlight }

> The tasks that you come up with during the Sprint Planning event _should not be set in stone_. These tasks are there to get you started with implementing the user stories. You might come up with new tasks or notice that the current tasks need alterations during the actual implementation. In such case, do the necessary changes for the Sprint Backlog.

{: .highlight }

> Use all the knowledge in your team and _plan the tasks together_.

{: .important-title }

> Exercise 10
>
> Read through the [User stories and tasks](#user-stories-and-tasks) section. Then, plan the tasks for the first user story, "{{site.sprint_1_user_story_1}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Consider the following things in the tasks:
> 
> - What kind of data requirements does the user story have?
> - What kind of user interface requirements does the user story have?
> - What kind of controller requirements does the user story have?
> 
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-user-story-1.png)
>
> Tips for the tasks:
>
> - [Thymeleaf checkbox fields](https://www.thymeleaf.org/doc/tutorials/2.1/thymeleafspring.html#checkbox-fields)

{: .important-title }

> Exercise 11
>
> Plan the tasks for the second user story, "{{site.sprint_1_user_story_2}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-user-story-2.png)
>
> Tips for the tasks:
>
> - This page should be visible on the root path (the `/` path) of the application. Change the `@GetMapping` of the `listMessages` method in the `MessageController` class, for example to `@GetMapping("/messages")`

{: .important-title }

> Exercise 12
>
> Plan the tasks for the third user story, "{{site.sprint_1_user_story_3}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-user-story-3-1.png)
>
> ![](/assets/sprint-1-user-story-3-2.png)

{: .important-title }

> Exercise 13
>
> Plan the tasks for the fourth user story, "{{site.sprint_1_user_story_4}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-user-story-4.png)

{: .important-title }

> Exercise 14
>
> Discuss how you will divide the the tasks of the _first four user stories_ among the team members. For example, each team member could be responsible for the tasks of a single user story. Then, add an _assignee_ for each issue. This can be done by opening the issue and clicking "Assignees" on the right. Then, choose your GitHub account from the dropdown menu. Issue can also have more than one assignee if multiple team members work on the same issue together.

{: .highlight }

> When you complete a task, you should _close_ the task related issue. This can be done by clicking the issue title in the Backlog project and clicking the "Close issue" button. Also, move the issue to the "Done" column in the Backlog project.

{: .highlight }

> Don't close the _user story related issues_ before the Sprint Review event. The Product Owner needs to accept the user stories before they are completed. Once all user story related tasks are completed, move the user story related issue to the "In review" column.

{: .highlight }

> While working on the tasks, keep the Sprint Backlog up-to-date:
>
> - When you start working on a task, assign it to you and move it to the "In progress" column in the project
> - When you complete a task, move it to the "Done" column in the project. Also remember to _close_ the task related issue
> - When all user story related tasks are completed, move the user story related issue to the "In review" column to wait for the Product Owner's review in the Sprint Review event
>
> Use the Sprint Backlog to track the Sprint progress. Always start a team meeting by looking at the Sprint Backlog.

{: .note }

> You can easily find the issues assigned to you by opening the "Issues" tab and choosing your GitHub account from the "Assignee" dropdown menu.

## Tips for the teamwork

Here's a few tips before you start implementing the tasks:

- Use the full potential of your team and _work together_. Plan the tasks together, implement the tasks together and support each other
- _Push_ code to the GitHub repository often. Once you have some _working_ code, use `git add`, `git commit`, `git push` commands to push the code to GitHub
- _Pull_ the code from the GitHub repository often. Run the `git pull` command to get the latest changes to your local computer
- While pulling the code from the GitHub repository, you'll probably face _merge conflicts_. You can spot a merge conflict from the `git pull` command ouput: `CONFLICT (content): Merge conflict in ...`. If you have trouble solving the merge conficts, see the [Git instructions](/git#merge-conflicts)
- Take a look at the [example project]({{site.example_project_link}}) for examples

## Thymeleaf page layouts

If we start the example project application and visit the [message list page](http://localhost:8080) at and the [add message page](http://localhost:8080/messages/add), we see that the pages share a common structure. They both have the navigation bar at the top of the page. If we dig deeper into the HTML structure, there's also common `link` and `script` elements. We could simply copy-paste the navigation bar HTML to both pages, but once we implement more pages and want to update the navigation bar, things start to get out of hand. Instead, we can have a common _layout_ for the application that each page can share. This can be achieved using the [Thymeleaf Layout Dialect](https://ultraq.github.io/thymeleaf-layout-dialect/) which has been configured for the project in the [ThymeleafConfig](https://github.com/software-development-project-1/example-project/blob/main/src/main/java/fi/haagahelia/quizzer/config/ThymeleafConfig.java) class.

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
    <title>Quizzer</title>
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
      <ul class="mb-3">
        <li th:each="message: ${messages}" th:text="${message.content}"></li>
      </ul>
      <a class="btn btn-primary" href="/messages/add">Add a message</a>
    </div>
  </body>
</html>
```

The `layout:decorate="~{layout.html}"` on the `html` element specifies that this template is using the `layout.html` file as the layout file. The `div` element that has the `layout:fragment="content"` attribute has the content that will be displayed on the corresponding layout fragment on the `layout.html` file.

## The README file

The `README.md` file we worked with previously has a special meaning in software development projects. When a software developer starts exploring a project, the first thing they should do is to look for the README file. This file should have all the relevant information about the project, for example:

- What's the project about?
- How to use the project?
- How to develop the project?
- Who are the project contributors?

In GitHub, the README files commonly have the `.md` extension. These are [Markdown](https://www.markdownguide.org/) files. Markdown is markup language similar to HTML and you can use it to add formatting elements to plaintext text documents. Compared to HTML, Markdown syntax is much simpler and that's why it is an excellent choise for formatting text documents.

[This guide](https://www.markdownguide.org/basic-syntax) demonstrates the Markdown syntax compared to HTML. As an example, [here's](https://github.com/facebook/react/blob/main/README.md) what the React project's `README.md` file looks like and [here's](https://github.com/facebook/react/blob/main/README.md?plain=1) what the Markdown markup looks like. You can use the [Markdown Live Preview](https://markdownlivepreview.com/) to try out different kind of Markdown markup.

{: .important-title }

> Exercise 15
>
> Open the `README.md` file for editing for example in GitHub or in Visual Studio Code. You might not be able to edit the file in Eclipse. Replace the current contents of the repository's `README.md` file with the following information using Markdown:
>
> 1. At the beginning of the file add the project name "Quizzer" as a [heading](https://www.markdownguide.org/basic-syntax#headings).
> 2. Below the heading add a short (a few sentences) description of the project as [paragraphs](https://www.markdownguide.org/basic-syntax#paragraphs-1). Check [the project description](/project-description) for some inspiration.
> 3. Below the description, add a subheading "Team members" and below that add a [list](https://markdownguide.offshoot.io/basic-syntax/#unordered-lists) of each team member's name.
> 4. Each team member's name should be a [link](https://www.markdownguide.org/basic-syntax#links) to their GitHub profile page. The GitHub profile link is in format https://github.com/GITHUB_USERNAME, for example <https://github.com/Kaltsoon>
> 5. Below the "Team members" section, add a subheading "Documentation" and below that add a [list](https://markdownguide.offshoot.io/basic-syntax/#unordered-lists) that has at the moment just one "Backlog" link. The link should point to the Backlog project (open the backlog's project in GitHub and copy the URL from the web browser's address bar)
>
> Push the `README.md` file changes to GitHub and see that the file formatting looks correct in GitHub.

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

{: .important-title }

> Exercise 16
>
> Organize a Daily Scrum event at least once a week during each Sprint.

{: .important-title }

> Exercise 17
>
> Plan the tasks for the fifth user story, "{{site.sprint_1_user_story_5}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-user-story-5-1.png)
>
> ![](/assets/sprint-1-user-story-5-2.png)
>
> ![](/assets/sprint-1-user-story-5-3.png)
>
> Tips for the tasks:
>
> - [Derived Query Methods in Spring Data JPA Repositories](https://www.baeldung.com/spring-data-derived-queries)
> - Filters are a good use-case for [request parameters](https://www.baeldung.com/spring-request-param). Request parameters can be accessed in a controller method with the `@RequestParam` annotation in the following way:
>
>   ```java
>   @GetMapping("/")
>   public String listQuizzes(@RequestParam(required = false) Boolean published, /* ... */) {
>       model.addAttribute("publishedFilter", published);
>   
>       if (published == null) {
>         // all quizzes requested
>       } else {
>         // quizzes by a published status requested
>       }
>   }
>   ```
>
> - In the Thymeleaf template the request parameter can be added to a link in the following way:
>
>   ```html
>   <a
>     href="/?published=true"
>     class="nav-link"
>     th:classappend="${publishedFilter == true}? active"
>   >
>     Published
>   </a>
>   ```

{: .important-title }

> Exercise 18
>
> Plan the tasks for the sixth user story, "{{site.sprint_1_user_story_6}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-user-story-6.png)
>
> Tips for the tasks:
>
> - [Hibernate CreationTimestamp annotation](https://www.baeldung.com/hibernate-creationtimestamp-updatetimestamp)
> - [Instant](https://www.baeldung.com/java-instant-vs-localdatetime) object can be formatted in a Thymeleaf template with the [#temporals.format](https://www.thymeleaf.org/doc/tutorials/3.1/usingthymeleaf.html#temporals-java.time) utility

{: .important-title }

> Exercise 19
>
> Plan the tasks for the seventh user story, "{{site.sprint_1_user_story_7}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> Tips for the tasks:
>
> - [Sorting Query Results with Spring Data](https://www.baeldung.com/spring-data-sorting)

## Developer guide documentation

Now that we have implemented some features for our application that the users can use it is time to describe _how_ to use the application. The _developer guide_ is perhaps one of the most important pieces of documentation for the application. It will describe our fellow developers how to technically use the application. This means for example, how to start the application, how to package the application, and how to run tests.

The developer guide shouldn't make too many assumptions, for example, that the reader of the documentation happens to know that the `application.properties` file needs alterations before the application can be started. If something needs to be done, even a simple thing, _mention it_. It is helpful not only for others but also for yourself. We should also describe the _system requirements_ for the application. For example, the required Java version. The example project uses Spring Boot version 3, which requires Java version 17 or higher.

Because developers use different IDEs, it is easier to describe how the application can be used using a command-line interface (such as Git Bash). On the command-line, we can use the Maven command `mvn` or the alias `./mvnw` to run different Maven commands. Using `./mvnw` (the [Maven wrapper](https://www.baeldung.com/maven-wrapper)) is a bit more convenient because it doesn't require Maven to be installed.

Here's a simple developer guide on how to start the example project's backend application:

1. Start the application by running the `./mvnw spring-boot:run` command on the command-line in the repository folder
2. Once the application has started, visit <http://localhost:8080> in a web browser to use the application

{: .highlight }

> If you have trouble starting the application with the `./mvnw spring-boot:run` command, see if [this](problems-and-solutions#warning-java_home-environment-variable-is-not-set) solves the problem.

The description should be so clear that your fellow student who knows nothing about the project beforehand would be able to start the application.

{: .important-title }

> Exercise 20
>
> Write a developer guide on _how to start the backend application_ to the `README.md` file. Add it under a "Developer guide" subheading. Also, mention the required Java version for the project. For the sake of readability code and command text is commonly highlighted (like in the example above). [Here's](https://markdownguide.offshoot.io/basic-syntax/#code) how that is done in Markdown. 
>
> You can assume that the reader of the `README.md` file is a software developer who knows how to use a command-line interface, the basic Git commands and install the required Java version. _Make sure that instructions on the developer guide work_ by cloning a new version of the repository and executing the steps on the developer guide one by one.
>
> Create an issue for the task. The "documentation" label is suitable for documentation-related issues.

## JAR

A JAR (Java Archive) is a package file format typically used to aggregate many Java class files and associated metadata and resources (such as CSS files, JavaScript files and other assets) into one file to distribute application software or libraries on the Java platform. If a user wants to use our application, instead of providing them with the entire source code, we can just provide a JAR file containing everything needed to run our application.

We can generate a JAR file for the application with the following command:

```bash
./mvnw package
```

{: .highlight }

> If you have trouble generating the JAR file with the `./mvnw package` command, see if [this](problems-and-solutions#warning-java_home-environment-variable-is-not-set) solves the problem.

The command will generate the JAR file under the `target` folder. Inside the folder there should be a file `quizzer-0.0.1-SNAPSHOT.jar`. If the application is currently running, for example in Eclipse, stop it. Then, run `java -jar target/quizzer-0.0.1-SNAPSHOT.jar` to run the application with the JAR file. Open the application in <http://localhost:8080> and see that it is working.

{: .important-title }

> Exercise 21
>
> Generate a JAR file for the application and run the application using the JAR file.

{: .note }

> When you change the application's code, you need to re-generate the JAR file with the `./mvnw package` command to have a JAR file for the latest version of the application.

## Deployment

So far we have been using and developing our application in an isolated environment on our own computer. This environment used during the development of the application is referred to as the _development environment_. In the software development lifecycle the _deployment phase_ is the phase in which the implemented software is distributed to the users. For example, a web application is published online so that users can access it with their web browsers. This environment is referred to as the _production environment_.

The deployment phase is crucial because unless users can use the application, it has no real value for the stakeholders. That is why in the agile software development process, deployment is done frequently, even on daily basis. In Scrum, the deployment should occur at least at the end of each Sprint. There are many platforms for deploying web applications, such as [Heroku](https://www.heroku.com/) and [Render](https://render.com/). During the course, we will learn how to deploy our application to Render.

Let's have a look, how we can deploy our application to Render so that the users can start using it. First, [sign in](https://dashboard.render.com/) to Render using your GitHub account. Then, we will need to set up a _production database_ for our application. The H2 database is convenient in the development environment but not suitable for the production environment. We can create a [PostgreSQL](https://www.postgresql.org/) database instance in Render dashboard by clicking the "New" button on the navigation bar and choosing "PostgreSQL". Name the PostgreSQL instance "quizzer-database" and the database "quizzer". Then, scroll to the bottom and click the "Create database" button.

Once the PostgreSQL instance has been created, open its information in the Render dashboard. In the PostgreSQL instance's page, scroll to "Connections" section. Copy the values for "Username", "Password" and "Internal Database URL" and paste the values temporary to an editor. We will need these values soon.

Next, let's add "instructions" for Render on how to start our application to our project. Render supports deploying [Docker](https://www.docker.com/) containers which are isolated environments for running all kinds of applications. A Docker image is a set of instructions used to run containers. These instructions are defined with a [Dockerfile](https://docs.docker.com/engine/reference/builder/). Add the following `Dockerfile` file (the file name is just `Dockerfile` without a file extension) to the root folder of the project (same folder that has the `pom.xml` file):

```dockerfile
FROM maven:3.8.7-openjdk-18-slim AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /target/quizzer-0.0.1-SNAPSHOT.jar quizzer.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","quizzer.jar"]
```

The `Dockerfile` has some familiar commands. Basically we just generate a JAR file for the project and start the application using the JAR file.

Because we use PostgreSQL as the production database, we will need to specific production environment configuration. Add a file `application-production.properties` to the `src/main/resources` folder (same folder that has the `application.properties` file) with the following content:

```
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.datasource.url=${POSTGRES_URL}
spring.datasource.username=${POSTGRES_USERNAME}
spring.datasource.password=${POSTGRES_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
```

The values inside `${...}` are [environment variables](https://en.wikipedia.org/wiki/Environment_variable). We will define them in Render soon.

The PostgreSQL database requires a suitable driver for the application. Let's add the PostgreSQL driver dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

Push these changes to GitHub.

Finally, for the application itself, we need to create a web service. Complete the following steps to create a web service in the Render dashboard:

1. Click the "New" button on the navigation bar and choose "Web Service"
2. Choose "Build and deploy from a Git repository" and click the "Next" button
3. In the create web service page, click "Configure accounts" in the "Github" section on the right. Choose your GitHub organization from the list, choose "All repositories" and click the "Install" button
4. Back in the create web service page, choose your project repository in the "Connect a repository" section by clicking the "Connect" button next to the repository's name
5. Come up with a name for the web service that isn't already in use. The name will be visible in the application's URL so try to come up with a sensible name
6. Choose "Docker" as the runtime in the dropdown menu
7. Click the "Advanced" button at the bottom of the page. In the advanced options section, click the "Add environment variable" button to add three environment variables (key, value):

   - `POSTGRES_URL`: the _internal URL in correct format_ of the PostgreSQL instance. The URL format is `jdbc:postgresql://<url>`. Basically, you can take everything _after_ the "@" symbol in the internal URL you copied previously and the environment variable value is `jdbc:postgresql://<everything-after-the-@-symbol>`
   - `POSTGRES_USERNAME`: the _username_ of the PostgreSQL instance
   - `POSTGRES_PASSWORD`: the _password_ of the PostgreSQL instance
   - `SPRING_PROFILES_ACTIVE`: set as `production`

   ![Render environment variables](/assets/render-environment-variables.png)

8. Set "Auto-Deploy" as "No" from the dropdown menu
9. Click the "Create Web service" button at the bottom of the page

Open the created web service in the Render dashboard. The deployment of the application should have started and it will take some time to finish. You can always deploy the application by clicking the "Manual Deploy" button and choosing "Deploy latest commit". Once the deployment is complete the application will be accessible to everyone in the URL that is displayed under the web service's name.

{: .highlight }

> It might take a while for the application to open in the web browser.

{: .important-title }

> Exercise 22
>
> Deploy the backend application to a production environment. Add the production environment URL of the backend application (the web service URL in the Render dashboard) to the "Developer guide" section in the `README.md` file.

## GitHub release

Once the GitHub repository's main branch has a working version of the application with the desired features at the end of the Sprint, we should _release_ it for the users. [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) is a way to "freeze" the source code of a project at certain point of the commit history and to provide users a working version of the application.

Usually a new version of an application is released at the end of each Sprint. When we create a new release at the end of each Sprint, we will create a _release history_ for the project. Users can easily browse and download the source code of different versions of the application by going through the release history.

Each release should at least include the name for the release and a short description describing the changes introduced in the release. For libraries the release name is commonly the version number of the release, for example "18.2.0". We create a release for each Sprint, so we can name our releases based on the Sprint number, for example "Sprint 1".

As an example, [here](https://github.com/facebook/react/releases) are the releases for the React library.

{: .important-title }

> Exercise 23
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint1". The release title should be "Sprint 1". Give a brief description for the release that describes the features implemented during the Sprint.

## Sprint Review

At the end of each Sprint, there's the [Sprint Review](https://scrumguides.org/scrum-guide.html#sprint-review) event. During the Sprint Review, the Developers demonstrate the outcome of the Sprint for the Product Owner. This means that the Developers should demonstrate how the implemented user stories work _in the user's perspective_. So, instead of showing the code, Developers should show how the user can use the new features of the application.

Sprint Review has a huge impact on the transparency of the process. Seeing how the application actually works also brings forth many new ideas for the upcoming Sprint Planning event.

{: .important-title }

> Exercise 24
>
> The Scrum Master should prepare the Sprint Review demonstration at the beginning of the next Sprint. The Scrum Master should make sure that they have a working version of the application either deployed to Render (preferred) or on their computer and they are able to show how the new features work _in the user's perspective_. If possible, demonstrate the features in the production environment.
>
> Prepare some _sensible_ test data (no [lorem ipsum](https://www.lipsum.com/), "asd", or "foobar") for the Sprint Review. This means that you should add a few sensible quizzes using the application so that you can easily demonstrate the user stories.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 1 deadline on {{site.sprint_1_deadline}}.
