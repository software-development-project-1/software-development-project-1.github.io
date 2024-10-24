---
layout: page
title: Sprint 1
permalink: /sprint-1-todo
nav_order: 6
nav_exclude: true
---

{% include toc.html %}

# Sprint 1

This week we'll start working on the project described by the Product Owner in the [project description](/project-description). As we have learned, in Scrum the project advances in short iterations called _Sprints_. Each of our three Sprints last two weeks. This week is the start of the Sprint 1.

{: .highlight }

> Starting from this week, you will be working with your team. That means that, you will be working on all the Sprint requirements together. Be prepared to work on the requirements outside the weekly sessions as well. If you don't know your team members, you can find their names on [Moodle]({{site.moodle_link}}) (check the "Project teams" tab).

This Sprint doesn't have a Moodle submission. It is enough that you have pushed your work to the project's GitHub repository before the Sprint deadline on {{site.sprint_1_deadline}}, so we will be working on the Sprint requirements for the next two weeks. The Sprint ends with the Sprint Review event in which the team will share their progress with the Product Owner.

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

> "That's right, John. To render the page we'll need a controller class for the backend. The controller class should have a method that renders the template of the page. Maybe the class name could be for example BlogController. What do you guys think?"
>
> -- Mary, one of the Developers

> "Sounds good to me, Mary. What about the form submission? I think we need a controller method for that as well. We should add a new blog entry to the database based on the submitted name and description. For this we could use the H2 database and Hibernate. We need a JPA entity and JPA repository class class for the blog.
>
> -- Jane, one of the Developers

While discussing the technical details, the Developers document a todo-list of tasks with a short description. Developers also consider the order of the tasks:

> Add a Blog JPA entity class and a BlogRepository JPA repository class

> Add a template for the blog creation form containing fields for name and description

> Add a BlogController controller class and methods for rendering and handling the submission of the blog creation form

These tasks are added to the _Sprint Backlog_.

## Scrum backlogs

The "Scrum Artifacts" section of the [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes the _artifacts_ used in Scrum. Artifacts are information that the Scrum Team and stakeholders use to detail the product being developed, actions to produce it, and the actions performed during the project. These artifacts increase the _transparency_ of the process. Two of the most important artifacts are the _Product Backlog_ and _Sprint Backlog_.

### Product backlog

The _Product Backlog_ is a _prioritized_ list of requirements for the developed software. Commonly these requirements are documented as user stories. On top of new features, Product Backlog items can also be for example bug fixes or other technical tasks. The Product Backlog is altered constantly during the Sprints, mostly during the Sprint Planning event. For example, new user stories are added, old ones are edited or their priority is changed.

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

Taskboards are either physical taskboards, for example whiteboards in an office, or virtual taskboards. These days, it is quite common that a virtual taskboard are used as Product Backlogs and Sprint Backlogs. [Jira](https://www.atlassian.com/software/jira) and [GitHub projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) are perhaps the most widely used taskboard platforms in the industry. During this course we will be using _GitHub projects_ because it integrates very well with our GitHub workflow.

## GitHub Projects

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) is a platform for managing taskboards. We will be using it for managing the user stories and tasks in our Product Backlog and Sprint Backlog.

Taskboards in GitHub Projects are called _projects_. Let's create a project for our backlogs. Open your repository in GitHub and click the "Projects" tab. Then, click the green "New project" button on the right. Click the arrow next to the button, if the button label is different. This should open a dialog. From the left side of the dialog, choose "Board". This determines what the project will look like and you can change it later. Name the project "Backlog". Finally, click the "Create" button to create the project.

We now have a project with the default columns: "Todo", "In progress" and "Done". The column will determine the status of the backlog items. We can edit the column names by clicking the three dots at the top-right corner of the column. We can add a new column by pressing the "+" button on the right side of the last column. Let's change the columns so that they are the following from left to right:

- "Product Backlog". This column is for the _Product Backlog_ items. That is, items that are requirements for the project but aren't currently worked on. The items should be listed in the _priority_ order (the "P" of DEEP Product Backlog) defined by the Product Owner.
- "Sprint Backlog". This column is for the _Sprint Backlog_ items. That is, user stories and tasks that are chosen for the current Sprint. Top-priority items are chosen from the "Product Backlog" column and moved to this column during the Sprint Planning event.
- "In progress". This column is for the items that some team member is currently working on.
- "Done". This column is for the items that have been completed.

Finally, let's make sure that our project is public. Click the project's name and the project's settings should open. Scroll down to "Danger zone" section and choose "Visibility" as "Public" from the dropdown menu.

The project will be empty for now, but we will add some user stories and tasks for the project after the Sprint Planning event.

{: .note }

> There are as many different backlog implementations as there are software development teams. The presented backlog implementation isn't the industry standard or the only correct one but perhaps a fairly good starting point. Scrum emphasizes constant process improvement and the backlog implementation should be constantly improved to better suit your team's needs.

{: .important-title }

> Exercise 1
>
> Create the "Backlog" project as instructed above. Make sure that the project is public.

## 🏃‍♂️ Sprint 1 planning

Here's how the Product Owner is describing the Sprint 1 goals in the Sprint Planning event:

> "To get started with the project, we need to implement a basic set of features for the teacher dashboard application so that the teachers can manage quizzes and their questions and answer options.
>
> The teacher should be able to add a quiz using a form. A quiz has a name, for example "The capital cities of Europe", a description, for example "Learn the capital cities of the European countries" and a published status. A quiz is either published or not. Each of these values should have a field in the form.
>
> The front page of the application should have a list of added quizzes. The list should display the information provided by the teacher while adding the quiz and the date when the quiz was added. The page should also have a link that takes the teacher to the page where they can add a quiz.
>
> The teacher should be able to edit the information of a quiz if, for example they want to publish the quiz or change its name or description. The quiz list should have a link next to each quiz which takes the teacher to an edit form, where they can edit all the information of the quiz. The teacher should also be able to get rid of quizzes they don't need. There should be a delete button next to each quiz in the quiz list. When the user clicks the button, the quiz should be deleted.
>
> The teacher should be able to add questions to a quiz. For example, the "The capital cities of Europe" quiz could have a question "What is the capital of Finland?". A question has a question text, for example "What is the capital of Finland?" and a difficulty level. The difficulty level is either "Easy", "Normal" or "Hard". The default difficulty level is "Normal".
>
> The questions of a quiz should be listed on a separate page. Once a question has been added to a quiz, the teacher should be able to delete it.
>
> The teacher should be able to add answer options to a question. For example, the "What is the capital of Finland?" question could have answer options "Turku", "Helsinki" and "Tampere". An answer option has an answer option text, for example "Turku", and a correctness status. Answer is either correct or not. For example, the "Turku" answer option would not be correct.
>
> The answer options of a question should be listed on a separate page. Once an answer option has been added to a question, the teacher should be able to delete it."
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
8. {{site.sprint_1_user_story_8}}
9. {{site.sprint_1_user_story_9}}
10. {{site.sprint_1_user_story_10}}

The order of the user stories represent the priotity provided by the Product Owner. That is, this should be the order of the user stories in the Product Backlog. The Developers should also implement the user stories in this order.

These are the user stories, that you will be working on as a team during this Sprint. The next step of the Sprint Planning event is to split these user stories into codings tasks.

{: .important-title }

> Exercise 2
>
> Choose the [Scrum Master](https://scrumguides.org/scrum-guide.html#scrum-master) among the team members for the first Sprint. The Scrum Master should help other team members with following the Scrum process, for example by facilitating the team's meetings and making sure that the backlogs are kept up-to-date.

## GitHub issues

[GitHub issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) are used to track ideas, feedback, tasks, or bugs for work on GitHub. Open source projects commonly use issues for feature suggestions and bug reports (something is not working as inteded). [Here](https://github.com/facebook/react/issues) is an example of issues in the React library's repository. We will use issues to organize the user stories, tasks and bug reports in our project.

Before we start creating issues, let's add some [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) so that we can categorize our issues. Open your repository in GitHub and click the "Issues" tab. Then, on the right, click the "Labels" button. So that we can separate the user story issues from other issues, let's add a "user story" label by clicking the "New label" button.

{: .highlight }

> If you don't see the "Issues" tab in the repository, follow [this guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues) to enable the issues. In our case the "Issues" checkbox should be checked.

{: .important-title }

> Exercise 3
>
> Create the "user story" label to classify user story related issues.

Next, we need to specify the Sprint the issue is worked on. We can use Sprint-specific [milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones) to group the issues based on a Sprint. Let's create a milestone for the first Sprint. First, click the "Issues" tab to open the issues page. Then, click the "Milestones" button next to the "Labels" button. On the Milestones page, click the "Create a new Milestone" button. Set the milestone title as "Sprint 1". You can also specify a due date and a description if you want. Finally, click the "Create milestone" button to create the milestone.

{: .important-title }

> Exercise 4
>
> Create the "Sprint 1" milestone to group the issues of the first Sprint.

Now that we have the "user story" label and the "Sprint 1" milestone, let's create an issue for each user story. Click the "Issues" tab and click the green "New issue" button on the right. Set the issue title as "{{site.sprint_1_user_story_1}}". With the description we can provide additional details if we can't fit everything in the title. On the right, click "Labels" and choose the "user story" label which indicates that this issue is a user story. Then, click "Projects" and choose the "Backlog" project. This will add the issue to the Backlog project. To specify the issue's Sprint, click "Milestone" and choose "Sprint 1". Finally, click the "Submit a new issue" button to create the issue.

Next, let's open the "Projects" tab and open the Backlog project. We should see that the issue we created is now in the project. We can move the issue to a column by dragging the issue card. This will change the status of the issue. Let's move the issue we created to the "Sprint Backlog" column, which indicates that this user story is in the current Sprint.

By default we can't see the labels or the milestone on the issue cards. We can click on the arrow button next to "View 1" below the project name and click "Fields" under "Configuration". There, check "Labels" and "Milestone". Finally, click the green "Save" button to save the configuration.

{: .important-title }

> Exercise 5
>
> Create an issue for each _user story_. Add the "user story" label for each issue. Set the milestone as "Sprint 1". Add the issues to the Backlog project and move them to the "Sprint Backlog" column.

## Database setup

The [H2 database](https://www.h2database.com/html/main.html) is a good choice for the development environment database. We will setup a more suitable production environment database later. Make sure that your project has the [required dependencies](https://www.baeldung.com/spring-boot-h2-database) for the H2 database. You can use the following database configuration:

```
spring.datasource.url=jdbc:h2:file:~/quizzer;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
spring.datasource.username=admin
spring.datasource.password=password
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
```

This configuration is for an embedded database. Embedded database is stored to a file defined in the `spring.datasource.url` property, so the data won't vanish once the application is shut down. This configuration will save the database to a `~/quizzer.mv.db` file. If you want to reset the database and remove all the data, simply delete the file by running the `rm ~/quizzer.mv.db` command on the command-line.

{: .important-title }

> Exercise 6
>
> Setup the H2 database for the project. Start the Sprint planning by discussing the database schema. What kind of entities and attributes should be added and what are their relationships?

## Tips for the teamwork

Here's a few tips before you start implementing the tasks:

- Use the full potential of your team and _work together_. Plan the tasks together, implement the tasks together and support each other
- Maintain active communication regarding the Sprint progress. Keeping the Sprint Backlog up-to-date is important but also share your progress and problems actively with your team members face-to-face or via Teams or other communication platform
- _Push_ code to the GitHub repository often. Once you have some _working_ code, use `git add`, `git commit`, `git push` commands to push the code to GitHub
- _Pull_ the code from the GitHub repository often. Run the `git pull` command to get the latest changes to your local computer
- While pulling the code from the GitHub repository, you'll probably face _merge conflicts_. You can spot a merge conflict from the `git pull` command ouput: `CONFLICT (content): Merge conflict in ...`. If you have trouble solving the merge conficts, see the [Git instructions](/git#merge-conflicts)

{: .highlight }

> The tasks that you come up with during the Sprint Planning event _should not be set in stone_. These tasks are there to get you started with implementing the user stories. You might come up with new tasks or notice that the current tasks need alterations during the actual implementation. In such case, do the necessary changes for the Sprint Backlog.

{: .highlight }

> Use all the knowledge in your team and _plan the tasks together_.

{: .important-title }

> Exercise 7
>
> Read through the [User stories and tasks](#user-stories-and-tasks) section. Then, plan the tasks for the first user story, "{{site.sprint_1_user_story_1}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Consider for example the following things in the tasks:
>
> - What kind of data requirements does the user story have?
> - What kind of user interface requirements does the user story have?
> - What kind of controller requirements does the user story have?
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-1-add-quiz.png)

{: .important-title }

> Exercise 8
>
> Plan the tasks for the second user story, "{{site.sprint_1_user_story_2}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-2-list-quizzes.png)

{: .important-title }

> Exercise 9
>
> Plan the tasks for the third user story, "{{site.sprint_1_user_story_3}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-3-1-edit-quiz.png)
>
> ![](/assets/sprint-1-us-3-2-edit-quiz.png)

{: .important-title }

> Exercise 10
>
> Plan the tasks for the fourth user story, "{{site.sprint_1_user_story_4}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-4-delete-quiz.png)

{: .important-title }

> Exercise 11
>
> Now that there's some work to be done, discuss how you will divide the tasks among the team members. Then, add an _assignee_ for each issue. This can be done by opening the issue and clicking "Assignees" on the right. Then, choose your GitHub account from the dropdown menu. Issue can also have more than one assignee if multiple team members work on the same issue together.

{: .highlight }

> While working on the tasks, keep the Sprint Backlog up-to-date:
>
> - When you start working on a task, assign it to you and move it to the "In progress" column in the project
> - When you complete a task, move it to the "Done" column in the project. Also remember to _close_ the task related issue. This can be done by clicking the issue title in the Backlog project and clicking the "Close issue" button
> - When all user story related tasks are completed, move the user story issue to the "Done" column
>
> Use the Sprint Backlog to track the Sprint progress. Always start a team meeting by looking at the Sprint Backlog.

{: .note }

> You can easily find the issues assigned to you by opening the "Issues" tab and choosing your GitHub account from the "Assignee" dropdown menu.

## The README file

The `README.md` file we worked with previously has a special meaning in software development projects. When a software developer starts exploring a project, the first thing they should do is to look for the README file. This file should have all the relevant information about the project, for example:

- What's the project about?
- How to use the project?
- How to develop the project?
- Who are the project contributors?

In GitHub, the README files commonly have the `.md` extension. These are [Markdown](https://www.markdownguide.org/) files. Markdown is markup language similar to HTML and you can use it to add formatting elements to plaintext text documents. Compared to HTML, Markdown syntax is much simpler and that's why it is an excellent choise for formatting text documents.

[This guide](https://www.markdownguide.org/basic-syntax) demonstrates the Markdown syntax compared to HTML. As an example, [here's](https://github.com/facebook/react/blob/main/README.md) what the React project's `README.md` file looks like and [here's](https://github.com/facebook/react/blob/main/README.md?plain=1) what the Markdown markup looks like. You can use the [Markdown Live Preview](https://markdownlivepreview.com/) to try out different kind of Markdown markup.

{: .important-title }

> Exercise 12
>
> Open the `README.md` file for editing for example in GitHub or in Visual Studio Code. You might not be able to edit the file in Eclipse. Replace the current contents of the repository's `README.md` file with the following information using Markdown:
>
> 1. At the beginning of the file add the project name "Quizzer" as a [heading](https://www.markdownguide.org/basic-syntax#headings).
> 2. Below the heading add a short (a few sentences) description of the project as [paragraphs](https://www.markdownguide.org/basic-syntax#paragraphs-1). Check [the project description](/project-description) for some inspiration.
> 3. Below the description, add a subheading "Team members" and below that add a [list](https://markdownguide.offshoot.io/basic-syntax/#unordered-lists) of each team member's name.
> 4. Each team member's name should be a [link](https://www.markdownguide.org/basic-syntax#links) to their GitHub profile page. The GitHub profile link is in format https://github.com/GITHUB_USERNAME, for example <https://github.com/Kaltsoon>
> 5. Below the "Team members" section, add a subheading "Backlog" and below that add a link to the Backlog project created previously (open the Backlog project in GitHub and copy the URL from the web browser's address bar).
>
> Push the `README.md` file changes to GitHub and see that the file formatting looks correct in GitHub.

## Daily Scrum

The Daily Scrum is a 15-minute event, commonly held on daily basis. The purpose of the Daily Scrum is for the Scrum Team to inspect and adapt its progress. During the event each team member typically answers the following three questions:

1. What did you do previously?
2. What will you do next?
3. Are there any obstacles in your way?

For example this could be a one team member's statement during the Daily Scrum:

> "Yesterday I started implementing the task for the blog listing template. I'll continue working on that today. I had some trouble while trying to iterate a list in the template. I don't remember the syntax. Could anyone have a look at it with me after the Daily Scrum?"
>
> -- Jane, one of the Developers

The Sprint Backlog should be open during the event so that the whole Scrum Team is up-to-date with Sprint Backlog updates and the Sprint progress.

A funny fact: it is common that during the Daily Scrum the whole Scrum Team is standing. This is why the Daily Scrum is often called the "daily stand-up". The reason is very practical: the event tends to be shorter because standing for a long period of time can become tedious.

{: .important-title }

> Exercise 13
>
> Organize a Daily Scrum event at least once a week during each Sprint.

{: .important-title }

> Exercise 14
>
> Plan the tasks for the fifth user story, "{{site.sprint_1_user_story_5}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-5-2-add-question.png)

{: .important-title }

> Exercise 15
>
> Plan the tasks for the sixth user story, "{{site.sprint_1_user_story_6}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-6-1-list-questions.png)
>
> ![](/assets/sprint-1-us-6-2-list-questions.png)

{: .important-title }

> Exercise 16
>
> Plan the tasks for the seventh user story, "{{site.sprint_1_user_story_7}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.

{: .important-title }

> Exercise 17
>
> Plan the tasks for the eight user story, "{{site.sprint_1_user_story_8}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-9-2-add-answer-option.png)

{: .important-title }

> Exercise 18
>
> Plan the tasks for the ninth user story, "{{site.sprint_1_user_story_9}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.
>
> The Scrum Team's UI Designer's vision is that the implementation could look something like this:
>
> ![](/assets/sprint-1-us-10-1-list-answer-options.png)
>
> ![](/assets/sprint-1-us-10-2-list-answer-options.png)

{: .important-title }

> Exercise 19
>
> Plan the tasks for the tenth user story, "{{site.sprint_1_user_story_10}}". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks.
>
> Create an issue for each task. Set the milestone as "Sprint 1". Add the issues to the Backlog project's "Sprint Backlog" column.

{: .important-title }

> Exercise 20
>
> We'll start working on the student dashboard frontend application in the next Sprint. Initialize a frontend application for the student dashboard application for example using [Vite](https://vitejs.dev/). You don't need a separate repository for the frontend application, you can initialize it in folder within the current repository.

## Developer guide documentation

Now that we have implemented some features for our application that the users can use it is time to describe _how_ to use the application. The _developer guide_ is perhaps one of the most important pieces of documentation for the application. It will describe our fellow developers how to technically use the application. This means for example, how to start the application, how to package the application, and how to run the tests.

The developer guide shouldn't make too many assumptions, for example, that the reader of the documentation happens to know that the `application.properties` file needs alterations before the application can be started. If something needs to be done, even a simple thing, _mention it_. It is helpful not only for others but also for yourself. We should also describe the _system requirements_ for the application. For example, the required Java version. You can find it in the `pom.xml` file in the `java.version` property.

Because developers use different IDEs, it is easier to describe how the application can be used using a command-line interface (such as Git Bash). On the command-line, we can use the Maven command `mvn` or the alias `./mvnw` to run different Maven commands. Using `./mvnw` (the [Maven wrapper](https://www.baeldung.com/maven-wrapper)) is a bit more convenient because it doesn't require Maven to be installed.

Here's an example of step by step instructions on how to start a Spring Boot application on the command-line:

1. Start the application by running the `./mvnw spring-boot:run` command on the command-line in the repository folder
2. Once the application has started, visit <http://localhost:8080> in a web browser to use the application

{: .highlight }

> If you have trouble starting the application with the `./mvnw spring-boot:run` command, see if [this](problems-and-solutions#warning-java_home-environment-variable-is-not-set) solves the problem.

The description should be so clear that your fellow student who knows nothing about the project beforehand would be able to start the application.

{: .important-title }

> Exercise 21
>
> Write a developer guide documentation on _how to start the backend application_ on the command-line to the `README.md` file. Also, mention the required Java version for the project. Add it under a "Developer guide" subheading. For the sake of readability, code and command text is commonly highlighted (like in the example above). [Here's](https://markdownguide.offshoot.io/basic-syntax/#code) how that is done in Markdown.
>
> You can assume that the reader of the `README.md` file is a software developer who knows how to use a command-line interface, the basic Git commands and install the required Java version. _Make sure that instructions on the developer guide work_ by cloning a new version of the repository and executing the steps on the developer guide one by one.

## Deployment

So far we have been using and developing our application in an isolated environment on our own computer. This environment used during the development of the application is referred to as the _development environment_. In the software development lifecycle the _deployment phase_ is the phase in which the implemented software is distributed to the users. For example, a web application is published online so that users can access it with their web browsers. This environment is referred to as the _production environment_.

The deployment phase is crucial because unless users can use the application, it has no real value for the stakeholders. That is why in the agile software development process, deployment is done frequently, even on daily basis. In Scrum, the deployment should occur at least at the end of each Sprint. There are many platforms for deploying web applications, such as [Heroku](https://www.heroku.com/) and [Render](https://render.com/). During the course, we will learn how to deploy our application to Render.

Let's have a look, how we can deploy our application to Render so that the users can start using it. First, [sign in](https://dashboard.render.com/) to Render using your GitHub account. Then, we will need to set up a _production database_ for our application. The H2 database is convenient in the development environment but not suitable for the production environment. We can create a [PostgreSQL](https://www.postgresql.org/) database instance in Render dashboard by clicking the "New" button on the navigation bar and choosing "PostgreSQL". Name the PostgreSQL instance "quizzer-database" and the database "quizzer". Then, scroll to the bottom and click the "Create database" button.

Once the PostgreSQL instance has been created, open its information in the Render dashboard. In the PostgreSQL instance's page, scroll to "Connections" section. Copy the values for "Username", "Password" and "Internal Database URL" and paste the values temporary to an editor. We will need these values soon.

Render supports deploying [Docker](https://www.docker.com/) containers which are isolated environments for running all kinds of applications. A Docker image is a set of instructions used to run containers. These instructions are defined with a [Dockerfile](https://docs.docker.com/engine/reference/builder/). Add the following `Dockerfile` file (the file name is just `Dockerfile` without a file extension) to the root folder of the project (same folder that has the `pom.xml` file):

```dockerfile
FROM maven:3.8.7-openjdk-18-slim AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /target/quizzer-0.0.1-SNAPSHOT.jar quizzer.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","quizzer.jar"]
```

In the `Dockerfile` we generate a [JAR file](https://en.wikipedia.org/wiki/JAR_(file_format)) for the project and start the application using the JAR file. The name of the JAR file is specified by the `artifactId` and the `version` properties in the `pom.xml` file. Set the values of these properties as the following so that the JAR file's name matches the one in the `Dockerfile`:

```xml
<artifactId>quizzer</artifactId>
<version>0.0.1-SNAPSHOT</version>
```

Because we use PostgreSQL as the production database, we will need to specific production environment configuration. Add a file `application-production.properties` to the `src/main/resources` folder (same folder that has the `application.properties` file) with the following content:

```
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.datasource.url=${POSTGRES_URL}
spring.datasource.username=${POSTGRES_USERNAME}
spring.datasource.password=${POSTGRES_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
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

Now that we have the database-related changes in order, push these changes to GitHub before heading further.

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
> Deploy the backend application to a production environment. Add the production environment URL of the backend application (the web service URL in the Render dashboard) to the project description section in the `README.md` file.

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
> Prepare some _sensible_ test data (no [lorem ipsum](https://www.lipsum.com/), "asd", or "foobar") for the Sprint Review. This means that you should add at lest one quiz with questions and answer options using the application so that you can easily demonstrate the user stories.

## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of a branch into the main branch.

![Git branches](/assets/git-branch.svg){: width="500" }

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story or task. The Git workflow where feature development is isolated into a feature-specific branch is referred to as [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. First, pull the latest changes from GitHub using the `git pull` command. Then, create the branch:

```bash
git branch <name-of-my-branch>
```

{: .note }

> Typically, the branch name describes the feature developed in the branch or some other purpose of the branch, for example `delete-quiz` or `add-question`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. The current branch is also displayed in brackets in the Git Bash after the path to the current folder.

We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

{: .highlight }

> We usually want to create new branch of the main branch. This means that before creating a new branch with the `git branch <name-of-the-branch>` command, switch to the main branch by running the `git checkout main` command. If you are uncertain which is the current branch, check it with the `git branch` command.

Next, make some small change for the project, for example by changing a button text or color in the user interface or changing a variable name in a method. If there's some small code or user interface improvement you have in mind, this is the time to do it. Once you have made the change, check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Feel free to do multiple commits if needed.

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

> Exercise 25
>
> Perform the steps above to create your own branch named by your GitHub username and push it to GitHub.

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

> Exercise 26
>
> 1. Create a pull request for your branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) instructions. The pull request title should describe the changes, for example "Change the submit button color in the add quiz form". The description provides additional details
> 2. Merge your branch into the main branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) instructions. If the branch has conflicts with the main branch, check the section below
> 3. Switch back to the main branch with the `git checkout main` command and pull the changes from GitHub with the `git pull` command. Make sure that you can see the changes made in your branch in the main branch as well

{: .important-title }

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

### Separate branch for the production code

A quite common practice is to separate the development and production code with separate branches. One such workflow is described in [this](https://nvie.com/posts/a-successful-git-branching-model/) article. We can do a bit simplified version of this workflow, by having the main branch for the development code an a production branch for the production code. Having a separate branch for the production code enables great features, such as quality assurance and automated deployments. We can deploy the application by simply merging the main branch to the production branch using a pull request.

{: .important-title }

> Exercise 27
>
> 1. Create a `production` branch of the main branch. Then, push the branch to GitHub using the `git push origin -u production` command
> 2. Open the backend web service in the Render Dashboard and go to the "Settings" page. In the "Build & Deploy" section, set the "Branch" as "production" and "Auto-Deploy" as "Yes"
> 3. Switch back to the main branch and make some small change in the code and push the changes to GitHub. Then, open a pull request. Set the _base_ branch as the `production` branch and the _compare_ branch as the `main` branch.
> 4. Merge the pull request and check that the deployment works automatically

{: .note }

> When you want to deploy the application to the production environment, open a pull request as described above. _Don't wait until the end of the Sprint for the deployment_. Once you have a meaningful set of features implement, deploy the application and _test that the new features work in the production environment_.

{: .highlight }

> Make sure that you have pushed your work to the project's GitHub repository before the Sprint 1 deadline on {{site.sprint_1_deadline}}.

## ⭐ Bonus: improving the project

Here are some additional resources you can use to improve your project and learn about new topics if you have time:

- [Validating Form Input](https://spring.io/guides/gs/validating-form-input)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
