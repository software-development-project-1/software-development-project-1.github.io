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

> Starting from this week, you will be working with your team. That means that, you will be working on the exercises together. You also need to work on the exercises outside the weekly sessions. If you don't know your team members, you can find their names on [Moodle]({{site.project_teams_moodle_link}}).

## Sprint assesment

All of this Sprint's exercises are submitted to [this Moodle submission]({{site.sprint_1_moodle_submission_link}}). The submission should only contain the link to your team's GitHub repository created in exercise 2. _Each team member_ has to submit the GitHub repository link. The submission deadline is on {{site.sprint_1_deadline}}, so we will be working on the exercises for the next two weeks.

The Sprint assesment is done based on the exercises 1-20. The team can earn up to 10 points from this Sprint. The assesment is done at the end of the Sprint during the Sprint Review event.

## Sprint Planning

At the beginning of each Sprint, the _Sprint Planning_ event is organized. During this event the whole Scrum Team participates in planning the requirements for the sprint. As we have learned, these requirements are documented as _user stories_, which are a short, simple description of a feature told from the perspective of the person who desires the new feature in the software. These user stories are added to a _Product Backlog_, which sort of an prioritized todo-list of user stories for the project.

The idea of Sprint Planning is not to make long term plans, for example what project should look like after three months. Because _requirements tend to change_, we should only do planning for the near future, usually just for the upcoming Sprint. That's why Sprint Planning event commonly only takes at most a few hours.

The Product Owner's responsibility during the event is to _prioritize_ the user stories on the Product Backlog so that the Developers know what to focus on during the upcoming Sprint. Developers discuss which of the highest priority user stories they are able to implemented during the upcoming Sprint. The chosen user stories for the Sprint are divided into more technical _tasks_. These tasks are added to a _Sprint Backlog_, which sort of an Developers' todo-list for the Sprint. Each Sprint has a _separate Sprint Backlog_.

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

The _Product Backlog_ is a _prioritized_ list of requirements for the developed software. Commonly these requirements are documented as user stories. The Product Backlog is altered constantly during the Sprints, mostly during the Sprint Planning event. For example, new user stories are added, old ones are edited or their priority is changed.

The Product Owner's responsibility is to prioritize the user stories in the Product Backlog, but the whole Scrum Team participates in the definition of the user stories. The Product Owner should also make sure that the user stories implemented during a Sprint match the stakeholder's requirements. Once a user story is implemented during a Sprint and the implementation is accepted by the Product Owner, the user story can be removed from the Product Backlog.

A good Product Backlog has the [DEEP](https://www.romanpichler.com/blog/make-the-product-backlog-deep/) characteristics:

- _Detailed appropriately_: the high-priority user stories (at the top of the Product Backlog) are described in a more detail than the low-priority user stories. This is because the high-priority user stories are the ones that will be implemented soon, maybe during the upcoming Sprint. That is why it is important that these user stories fulfill the INVEST criteria and are ready for the implementation.
- _Estimated_: the user stories in the Product Backlog should be estimated. That is, the Developers have considered the efforts required to implement each user story and they have communicated it with the Product Owner. Having a rough estimate for the user stories helps the Product Owner in the priorization.
- _Emergent_: the Product Backlog evolves constantly: old user stories are completed, new user stories emerge and priorization changes
- _Prioritized_: all user stories are in a prioritized order in the Product Backlog. The user stories at the top of the Product Backlog are the ones that Product Owner considers to produce most value for the stakeholders.

We aren't estimating the user stories during the first Sprint. That's because estimation is especially hard at the beginning of the project. We will discuss more about estimation during the second Sprint.

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

> Sprint Backlog can be thought as the todo-list of tasks for the current Sprint. Each task is related to a certain user story on the Product Backlog.

Each Sprint has _its own_ Sprint Backlog. That means that a new Sprint Backlog is created at the beginning of each Sprint.

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

To get started faster, start your project by forking the [example-project repository]({{site.example_project_link}}). The repository has a simple Java Spring Boot application initialized with [Spring Initializr](https://start.spring.io/). It has some code samples of Thymeleaf templates, controllers, JPA entities and JPA repositories.

A repository can be forked by cliking the "Fork" button on right side of the repository's name.

![GitHub fork repository](/assets/fork-repository.png)

{: .important-title }

> Exercise 2
>
> _One of the team members_ should fork the [example-project repository]({{site.example_project_link}}). Choose the "Owner" as the organization you created previously and give the repository a descriptive name, such as "cool-reads" and a description. The forked repository will become your project's repository where you start working on the project.

{: .important-title }

> Exercise 3
>
> Each team member should _clone_ the project's GitHub repository for their local computer with the `git clone` command. Remember to clone the repository you created in the previous exercise, _not_ the example-project repository. _Remember to use the HTTPS address_ of the GitHub repository with the command. See the [Git instructions](/git#githubs-workflow) if you have trouble.
>
> Once you have cloned the repository, open the code in an editor such as Eclipse or Visual Studio Code. In Eclipse you can open the project folder from "File > Open Project from Filesystem". The project requires _Java version 17_.
>
> Explore the code and start the Spring Boot application. Once started, the application should be open at <http://localhost:8080>.

{: .important-title }

> Exercise 4
>
> Once each team member has the repository on their local computer, do the following:
>
> 1. _Each team member_ opens the cloned repository folder in Eclipse or in some other editor.
> 2. _Each team member_ opens the cloned repository folder in Git Bash. Right-click the repository folder in the File Explorer and choose "Git Bash Here".
> 3. _One of the team members_ locally edits the contents of the `README.md` file in the repository folder. Push changes to the remote GitHub repository using `git add`, `git commit` and `git push` commands. See the [Git instructions](/git#starting-a-git-project) if you have trouble.
> 4. _Each team member_ checks that the changes are visible in GitHub.
> 5. Once changes have been pushed to GitHub, _each team member_ pulls the changes from GitHub using the `git pull` command. If you see `CONFLICT` in the command output, see the [Git instructions](/git#merge-conflicts) to figure out how to solve conflicts.
> 6. Once everybody sees the changes on their local `README.md` file, repeat the the steps from step 3. for each team member until everyone has pushed some changes to the GitHub repository.
>
> If you didn't manage to cause a [merge conflict](/git#merge-conflicts), let's cause one:
>
> 7. _One of the team members_ change a specific line in the `README.md` file and pushes the changes to GitHub.
> 8. _Other team member_ changes _the same line_ in the `README.md` file and _creates a commit for the changes, but does push the changes to GitHub_. After creating the commit, the team member will pull changes from GitHub using the `git pull` command. Solve the merge conflict by following the [Git instructions](/git#merge-conflicts) and push the changes to GitHub.
>
> Repeat the steps 7 and 8 for each team member so that everyone can solve one merge conflict.

## GitHub Projects

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) is a platform for managing taskboards. We will be using it for managing the user stories in our Product Backlog and the tasks in our Sprint Backlogs.

Taskboards in GitHub Projects are called _projects_. Let's create a project for our Product Backlog for the user stories of our project. Open your repository in GitHub and click the "Projects" tab. Then, click the green "New project" button on the right. Click the arrow next to the button, if the button label is different. This should open a dialog. From the left side of the dialog, choose "Board". This determines what the project will look like and you can change it later. Name the project "Product Backlog". Finally, click the "Create" button to create the project.

We now have a project with the default columns: "Todo", "In progress" and "Done". The column will determine the status of the user story. Let's change the column labels by clicking the three dots at the top-right corner of the column. Name the columns in the following manner from left to right:

- "Backlog" for the user stories that are not on any Sprint yet
- "In sprint" for the user stories that are chosen for the current Sprint
- "Done" for the user stories that have been completed

Now, let's make sure that our project is public. Click the project's name and the project's settings should open. Scroll down to "Danger zone" section and choose "Visibility" as "Public" from the dropdown menu.

The project will be empty for now, but we will add some user stories for the project after the Sprint Planning event.

{: .important-title }

> Exercise 5
>
> Create the "Product Backlog" project for the project as instructed above. Make sure that the project is public.

Each Sprint should have a separate Sprint Backlog for the Sprint's tasks. Let's create a project for the Sprint 1 Backlog. Create a project similarly as with the Product Backlog project. Name the project "Sprint 1 Backlog". We can use the default "Todo", "In progress" and "Done" columns for the project. Make sure that project is pulic as we did with the Sprint Backlog project. The project will be empty for now, but we will add some tasks for the project after the Sprint Planning event.

{: .important-title }

> Exercise 6
>
> Create the "Sprint 1 Backlog" project for the project as instructed above. Make sure that the project is public.

## The README file

The `README.md` file we worked with in the previous exercise has a special meaning in software development projects. When a software developer starts exploring a project, the first thing they should do is to look for the README file. This file should have all the relevant information about the project, for example:

- What's the project about?
- How to use the project?
- How to develop the project?
- Who are the project contributors?

In GitHub, the README files commonly have the `.md` extension. These are [Markdown](https://www.markdownguide.org/) files. Markdown is markup language similar to HTML and you can use it to add formatting elements to plaintext text documents. Compared to HTML, Markdown syntax is much simpler and that's why it is an excellent choise for formatting text documents.

[This guide](https://www.markdownguide.org/basic-syntax) demonstrates the Markdown syntax compared to HTML. As an example, [here's](https://github.com/facebook/react/blob/main/README.md) what the React project's `README.md` file looks like and [here's](https://github.com/facebook/react/blob/main/README.md?plain=1) what the Markdown markup looks like. You can use the [Markdown Live Preview](https://markdownlivepreview.com/) to try out different kind of Markdown markup.

{: .important-title }

> Exercise 7
>
> Replace the current contents of the repository's `README.md` file with the following information using Markdown:
>
> 1. At the beginning of the file add the project name "Cool Reads" as a [heading](https://www.markdownguide.org/basic-syntax#headings).
> 2. Below the heading add a short (a few sentences) description of the project as [paragraphs](https://www.markdownguide.org/basic-syntax#paragraphs-1). Check [the project description](/project-description) for some inspiration.
> 3. Below the description, add a subheading "Team members" and below that add a [list](https://www.markdownguide.org/basic-syntax#lists-1) of each team member's name.
> 4. Each team member's name should be a [link](https://www.markdownguide.org/basic-syntax#links) to their GitHub profile page. The GitHub profile link is in format https://github.com/GITHUB_USERNAME, for example <https://github.com/Kaltsoon>
> 5. Below the "Team members" section, add a subheading "Backlogs" and below that add a [list](https://www.markdownguide.org/basic-syntax#lists-1) that has links "Product Backlog" and "Sprint 1 Backlog". The link should point to the backlog's project (open the backlog's project in GitHub and cope the URL from the web browser's address bar)
>
> Push the `README.md` file changes to GitHub and see that the file formatting looks correct in GitHub.

## Sprint 1 planning

Here's how the Product Owner is describing the Sprint 1 goals in the Sprint Planning event:

> "Let's start from the basics. We need a simple web application which allows the user to add a reading recommendation and list the added reading recommendations. In addition, to be able to manage the added reading recommendations, the user should also be able to edit and delete reading recommendations.
>
> When the user opens the application on a web browser, there should be page where the added reading recommendations are listed. There should also be a link that says "Add a reading recommendation" which takes the user to another page, where they can add a reading recommendation using a form.
>
> For now, it is enough that a reading recommendation has a title, for example "The 2020 Scrum Guide", a link, for example "https://scrumguides.org/scrum-guide.html" and a short description, for example "All you need to know about Scrum". Each of these should have field on the form and they should be displayed on the list. The user should not be able to add a reading recommendation with a blank title, link or description. Also, the link should be a valid link.
>
> It would be convinient that the user could edit the added reading recommendation if, for example they made a typo in the title or the description. The reading recommendation list should have an "Edit" link next to each reading recommendation. The link should take the user to an edit form, where they can edit all the added information.
>
> The user should also be able to get rid of reading recommendations they don't need. Next to the "Edit" link, there should be a "Delete" button in the reading recommendation list. When the user clicks the button, the reading recommendation should be deleted."
>
> -- The Product Owner

After some discussion the Scrum Team came up with the following user stories:

1. As a user I want to add a reading recommendation so that I can gather a collection of recommendations
2. As a user I want to list the added reading recommendations so that I can find interesting things to read
3. As a user I want to be able to edit a reading recommendation so that I can change its information
4. As a user I want to be able to delete a reading recommendation so that I can get rid of recommendations I don't need

The order of the user stories represent the priotity provided by the Product Owner. That is, this should be the order of the user stories in the Product Backlog. The Developers should also implement the user stories in this order.

For the _first user story_, the Developers came up with the following tasks:

1. Add a ReadingRecommendation JPA entity class with id, title, link and description attributes, and a ReadingRecommendationRepository JPA repository class
2. Add Thymeleaf template for the reading recommendation submission form containing fields for title, link and description
3. Add ReadingRecommendationController controller class and a method for rendering the reading recommendation submission form
4. Add a method for the ReadingRecommendationController class that saves the reading recommendation to the database
5. Add validation for reading recommendation title, link and description

For the _second user story_, the Developers came up with the following tasks:

1. Add Thymeleaf template for listing the added reading recommendations with title, link and description
2. Add a method for rendering the reading recommendation list for the ReadingRecommendationController class
3. Add a link to the reading recommendation list page to the navigation bar

These are the user stories, that you will be working on as a team during this Sprint. The tasks described above are suggestions, feel free to alter them or add new tasks.

{: .highlight }

> The tasks that you come up with during the Sprint Planning event _should not be set in stone_. These tasks are there to get you started with implementing the user stories. You might come up with new tasks or notice that the current tasks need alterations during the actual implementation. In such case, do the necessary changes for the Sprint Backlog.

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

> Exercise 8
>
> Decide how you will communicate outside the weekly sessions. Choose a communication platform, such as Teams, Telegram or Discord. Also schedule at least one weekly time slot when you work on the exercises together outside the weekly sessions. If possible, meet physically on the campus or some other location.

{: .important-title }

> Exercise 9
>
> Come up with tasks for the third user story, "As a user I want to be able to edit a reading recommendation so that I can change its information". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 16 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 10
>
> Come up with tasks for the fourth user story, "As a user I want to be able to delete a reading recommendation so that I can get rid of recommendations I don't need". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 17 to get an idea what the implementation could look like.

## GitHub issues

[GitHub issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) are used to track ideas, feedback, tasks, or bugs for work on GitHub. Open source projects commonly use issues for feature suggestions and bug reports (something is not working as inteded). [Here](https://github.com/facebook/react/issues) is an example of issues in the React library's repository. We will use issues to organize the user stories, tasks and bug reports in our project.

Before we start creating issues, let's add some [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) so that we can better organize our issues. Open your repository in GitHub and click the "Issues" tab. On the right, click the "Labels" button. Let's add the following labels by clicking the "New label" button:

- "user story" label indicates that the issue is a user story
- "task" label indicates that the issue is a task

Then, let's create a label for each user story so that we can better organize the tasks. Create a label with a short description of each user story, for example "add recommendation" and "list recommendations".

{: .important-title }

> Exercise 11
>
> Create the "user story", "task" labels and a label for each user story as described above.

Now that we have the labels, let's create an issue for each user story. Click the "Issues" tab and click the green "New issue" button on the right. Set the issue title as "As a user I want to add a reading recommendation so that I can gather a collection of recommendations". With the description we can provide additional details if we can't fit everything in the title. On the right, click "Labels" and choose labels "user story" and "add recommendation", which indicate that this issue is related to a certain user story. Then, click "Projects" on the right and choose "Product Backlog". This will add the issue to the Product Backlog project. Finally, click the "Submit a new issue" button to create the issue.

{: .note }
> You can easily find the issues related to certain user story by opening the "Issues" tab and choosing the user story label from the "Label" dropdown menu. 

Let's open the "Projects" tab and open the Sprint Backlog project. We should see that the issue we created is now in the project. We can move the issue to a column by dragging the issue card. This will change the status of the issue. Let's move the issue we created to the "In Sprint" column, which indicates that this user story is in the current Sprint.

By default we can't see the labels on the issue cards. We can click on the arrow button next to "View 1" below the project name and click "Fields" under "Configuration". There, check "Labels" and finally click the green "Save" button to save the configuration.

{: .important-title }

> Exercise 12
>
> Create an issue for each _user story_. Add a label "user story" and the user story's label for each issue. Add the issues to the Product Backlog project and move them to the "In Sprint" column. Make sure that the user stories are _prioritized_ (the "P" of DEEP). That is, they are listed in the project in the order that the Product Owner described in the Sprint Planning.

{: .important-title }

{: .important-title }

> Exercise 13
>
> Create an issue for each _task_. If the task description is long, use a short version of the description as the issue title and add the full description as the issue description. Add a label "task" and the task related user story's label for each issue. Add the issues to the Sprint 1 Backlog project and move them to the "Todo" column.

Once you start working on task, _assign_ the task related issue to you. This can be done by opening the issue and clicking "Assignees" on the right. Then, choose your GitHub account from the dropdown menu. Issue can also have more than one assignee if multiple team members work on the same task together.

{: .note }
> You can easily find the issues assigned to you by opening the "Issues" tab and choosing your GitHub account from the "Assignee" dropdown menu. 

When you complete a task, you should _close_ the task related issue. This can be done by opening the issue and clicking the "Close issue" button at the bottom of the page.

{: .highlight }

> While working on the tasks, keep the Sprint Backlog up-to-date:
>
> - When you start working on a task, mark it assigned to you and move it to the "In progress" state in the project
> - When you complete a task, move it to the "Done" state in the project. Also remember to _close_ the task related issue
>
> Use the Sprint Backlog to track the Sprint progress. Always start a team meeting by looking at the Sprint Backlog.

{: .highlight }

> Don't close the user story related issues before the Sprint Review. The Product Owner needs to accept the user stories before they are completed.


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

> Exercise 14
>
> Implement the tasks of the first user story, "As a user I want to add a reading recommendation so that I can build a collection of reading recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-1.png)
>
> Add some simple validation for the form fields:
>
> - The title should not be blank
> - The link should not not be blank and it should start with "http://" or "https://"
> - The description should not be blank
>
> See this [guide](https://spring.io/guides/gs/validating-form-input/) to learn about form validation. The link can be validated with a regular expression using the [@Pattern](https://www.codeproject.com/Questions/5324493/Jakarta-regex-validation) annotation.
>
> Alter the `layout.html` file mentioned above to change the navigation bar content.

{: .important-title }

> Exercise 15
>
> Implement the tasks of the second user story, "As a user I want to list the added reading recommendations so that I can easily find interesting things to read".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-2.png)
>
> This page should be visible on the root path (the `/` path) of the application. Change the `@GetMapping` of the `listMessages` method in the `MessageController` class, for example to `@GetMapping("/messages")`.

{: .important-title }

> Exercise 16
>
> Implement the tasks of the third user story, "As a user I want to be able to edit a reading recommendation so that I can change its information".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-3-1.png)
>
> ![](/assets/sprint-1-user-story-3-2.png)
>
> Add similar validation for the form as in the first user story.

{: .important-title }

> Exercise 17
>
> Implement the tasks of the fourth user story, "As a user I want to be able to delete a reading recommendation so that I can get rid of recommendations I don’t need".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-1-user-story-4.png)

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

> Exercise 18
>
> Write a usage guide on _how to start your application_ to the `README.md` file. Add it under a "Usage guide" subheading. Also, mention the required JDK version for the project.

## GitHub release

Once the GitHub repository's main branch has a working version of the application with the desired features at the end of the sprint, we should _release_ it for the users. [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) is a way to "freeze" the source code of a project at certain point of the commit history and to provide users a working version of the application.

Usually a new version of an application is released at the end of each Sprint. When we create a new release at the end of each Sprint, we will create a _release history_ for the project. Users can easily browse and download the source code of different versions of the application by going through the release history.

Each release should at least include the name for the release and a short description describing the changes introduced in the release. For libraries the release name is commonly the version number of the release, for example "18.2.0". We create a release for each Sprint, so we can name our releases based on the Sprint number, for example "Sprint 1".

As an example, [here](https://github.com/facebook/react/releases) are the releases for the React library.

{: .important-title }

> Exercise 19
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create a GitHub release for the project as instructed in the [GitHub's documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Create a new tag called "sprint1". The release title should be "Sprint 1". Give a brief description for the release that describes the features implemented during the Sprint.

## Sprint Review

At the end of each Sprint, there's the [Sprint Review](https://scrumguides.org/scrum-guide.html#sprint-review) event. During the Sprint Review, the Developers demonstrate the outcome of the Sprint for the Product Owner. This means that the Developers should demonstrate how the implemented user stories work _in the user's perspective_. So, instead of showing the code, Developers should show how the user can use the new features of the application.

Sprint Review has a huge impact on the transparency of the process. Seeing how the application actually works also brings forth many new ideas for the upcoming Sprint Planning event.

{: .important-title }

> Exercise 20
>
> Decide which team member gives the Sprint Review demonstration at the beginning of the next Sprint. This team member should make sure that they have a working version of the application on their computer and is able to show how the new features work in the user's perspective.
>
> You can use the source code of the release you created earlier to get the working version of the application. Click the "Releases" link in GitHub and choose "Source code" under the "Assets" heading.

{: .warning }

> Make sure that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint 1 deadline on {{site.sprint_1_deadline}}.
