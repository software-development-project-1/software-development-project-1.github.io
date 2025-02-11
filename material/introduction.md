---
layout: page
title: 🔄 Introduction to software development projects
permalink: /introduction
nav_order: 3
---

{% include toc.html %}

# Introduction to software development projects

## Submitting this week's exercises

Submit this week's exercises to Moodle (you'll find the submission in the "Exercise submissions" tab) as a _single PDF file_. The submission deadline is on {{site.week_1_deadline}}.

{: .highlight }

> This week's exercises need to be submitted before the deadline on {{site.week_1_deadline}} to confirm the course participation.

## What makes a software development project?

When there's a need for a software and appropriate funding a software development team is gathered and a software development project starts. Depending of the budget and scope of the project, the timespan of a software development can be anything from a few months to many years.

A software development project affects many people. For example, the software's end users get to use features they desire and the customer gets financial value for the project they are funding. These people or groups of people affected by a software development project are referred to as the software development project's _stakeholders_.

![Stakeholders](/assets/stakeholders.webp)

On top of technical skills, the future of software developer's work will mostly likely consist more and more on understanding the needs of the stakeholders and applying technical solutions to meet those needs. This statement is supported by the fact that based on [recent studies](https://idego-group.com/blog/2022/02/17/problems-in-software-development-developers-survey-results-blog/) most of the problems in software development projects are non-technical.

> _"If you go forward 24 months from now, or some amount of time -- I can't exactly predict where it is -- it's possible that most developers are not coding. It just means that each of us has to get more in tune with what our customers need and what the actual end thing is that we're going to try to go build because that's going to be more and more of what the work is as opposed to sitting down and actually writing code."_
>
> -- Matt Garman, CEO of Amazon Web Services (AWS) in 2024. Source: [Amazon Cloud CEO Predicts a Future Where Most Software Engineers Don't Code -- and AI Does It Instead](https://www.entrepreneur.com/business-news/amazon-web-services-ceo-ai-will-code-for-software-engineers/478800)

A software development team is responsible for the outcome of the project. It is a diverse and self-organized group of people consisting of not only technical people. The team can consist for example a representive of the end users (commonly referred to as a product owner), user-experience (UI) and user-interface (UX) designers, project managers, quality assurance (QA) engineers and sofware developers. The size of team varies, but they commonly consist of fewer than 10 people.

So that a software development team can work together efficiently they need to follow a _common process_ in their day-to-day work referred to as a software development process. Many of the modern software development processes follow so called agile principles which we will cover next.

## Agile principles in software development

> _"able to move quickly and easily."_
>
> -- Dictionary definition for the word _"agile"_

The word _agile_ is often used in many industries to describe the way of working in organizations. The word is commonly used in a positive manner, for example, "we are an _agile_ organization", or "we work in a _agile_ manner". But what does this buzzword mean and what does "we work in a _agile_ manner" mean in the context of software development?

In _agile software development_, the development process follows values and principles that have been found to lead to successful software development projects. These values and principles have been constituted and written down as the [Manifesto for Agile Software Development](https://agilemanifesto.org/) by famous software development pioneers:

> _"We are uncovering better ways of developing
> software by doing it and helping others do it.
> Through this work we have come to value:_
>
> _Individuals and interactions over processes and tools,_
>
> _Working software over comprehensive documentation,_
>
> _Customer collaboration over contract negotiation,_
>
> _Responding to change over following a plan._
>
> _That is, while there is value in the items on
> the right, we value the items on the left more."_
>
> -- Manifesto for Agile Software Development

These principles have been found successful and later on adopted in many other industries as well. Thus, these days many organizations want to integrate the agile values into their work process. However, there is a lot of variation in the concrete implementations and there is no on-size-fits-all solution.

One of the key value is the attitude towards _change_. For example, there is often need to change the software's requirements during the development process. An agile software development process should welcome any kind of change with open arms. This is because _change is inevitable and frequent_ in many business environments.

The Manifesto for Agile Software Development doesn't go into details on how to actually _implement_ these values in practice. That is, how to actually organize the development of a software so that everyone follows the same agile work process? Luckily, there are different agile software development process frameworks, such as _Scrum_ and _SAFe_ which describe a more or less detailed process that follows these values.

{: .note }
> The ["Awesome Agile"](https://github.com/lorabv/awesome-agile/blob/master/README.md) material is a well curated list of useful resources related to Agile software development.

## Software development lifecycle

It requires different phases to be completed so that an idea of what we can do with a software becomes an actual working software which provides the desired features. The software development process is divided into different phases:

- In the _requirements phase_, the development team collects requirements from several stakeholders such as customers, internal and external experts, and managers. The requirements cover use cases that describe user interactions that the software must provide. These requirements are written down as the _software requirement specification document_.
- In the _design phase_, the development team analyzes requirements and identifies the best solutions to create the software. For example, they may consider integrating pre-existing modules, making technology choices, and identifying development tools
- In the _implementation phase_, the development team codes the product. They analyze the requirements to identify smaller coding tasks they can do daily to achieve the final result
- In the _test phase_, the development team combines automation and manual testing to check the software for bugs. Quality analysis includes testing the software for errors and checking if it meets customer requirements
- In the _deployment phase_, the implemented software is distributed to the users. For example, a web application is published online so that users can access it with their web browsers. This environment that the users use is commonly referred to as the _production environment_, while the environment that developers use to develop the software is referred to as the _development environment_.
- In the _maintenance phase_, among other tasks, the development team fixes bugs, resolves customer issues, and manages software changes. In addition, the team monitors overall system performance, security, and user experience to identify new ways to improve the existing software

The mentioned phases are commonly performed in the mentioned order and the whole process is often called the _software development lifecycle_.

In the old days (and unfortunately, these days too), each phase was completed before the next phase could begin and there was no overlapping in the phases. This means that, for example, in the requirements phase, all possible requirements for the software had to be carefully thought out and documented before the design phase could begin. This kind of sequential software development process is called the [Waterfall model](https://en.wikipedia.org/wiki/Waterfall_model).

![Waterfall model software development lifecycle](/assets/waterfall-lifecycle.webp)

The software requirement specification document written in the requirements phase was sort of a binding contract, meaning that _the requirements shouldn't change_ after the requirements phase. If some problems with the requirements were spotted during the implementation phase, it was practically impossible to change the requirements. Another problem was that it could easily take years before the users could get their hands on any kind of working software.

The problem with this so-called [Big design up front](https://en.wikipedia.org/wiki/Big_design_up_front) approach is that _requirements tend to change_ during the implementation phase. If the development of the software takes even a few years, that's forever in the current, constantly changing business environment. Also, it is _practically impossible to come up with all the possible requirements_ for the software before actual users can try out some kind of a prototype and give feedback.

## Agile software development process

Agile software development process follows a fundamentally different, _iterative approach_. Instead of defining all requirements upfront, development occurs in short iterations — typically one or two weeks. Before each iteration, only the necessary requirements for that iteration are specified, allowing for flexibility and continuous improvement.

> _"When to use iterative development? You should use iterative development only on projects that you want to succeed."_
>
> -- Martin Fowler

During the iteration, the software development team turns these customer's requirements into technical development tasks and implements these tasks in a self-organized manner. The outcome of each iteration is working software that users can actually use and give feedback. This feedback can be used to constitute requirements for the next iteration. This feedback loop is the heartbeat of the agile software development process.

Instead of completing software development lifecycle's phases sequentially from start to finish, the phases are completed in a _cycle_. Each iteration starts with the requirements phase and during the iteration design, implementation, test, deployment, and maintenance phases are completed. This cycle repeats in every iteration.

![Agile software development lifecycle](/assets/agile-lifecycle.png){: width="400" }

## Scrum

_Scrum_ is an iterative software development process framework that defines practical ways to carry out agile software development principles. Scrum has been by far the most widely used Agile method in the recent years based on the anual [State of Agile](https://www.scruminc.com/2022-state-agile-report-takeaways/) reports. For example based on the year 2022 report, 87% of respondents used Scrum at the team level.

The [Scrum Guide](https://scrumguides.org/scrum-guide.html) (the Finnish version is [here](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Finnish.pdf)) is the official guide to Scrum. During the course we will use Scrum to manage our software development process. This week we will learn about Scrum in theory and week three onwards we will apply the knowledge with our project.

Before starting working on the exercises, read at least the "Scrum Definition", "Scrum Theory", "Scrum Values", "Scrum Team", "Scrum Events" and "Scrum Artifacts" chapters from the [Scrum Guide](https://scrumguides.org/scrum-guide.html).

![Scrum process](/assets/scrum.png)

{: .important-title }

> Exercise 1
>
> Read the "Scrum Team" chapter of the Scrum Guide and [this](https://www.atlassian.com/agile/scrum/roles) article. Then, answer the following questions in your own words:
>
> 1. What are the different roles in a Scrum Team?
> 2. What are the responsibilities of each role?

{: .important-title }

> Exercise 2
>
> Read the "Scrum Events" chapter of the Scrum Guide and answer the following questions in your own words:
>
> 1. What is a Sprint?
> 2. Which events occur during the Sprint and at what point of the Sprint do each of them occur?
> 3. What's the purpose of each event?

{: .important-title }

> Exercise 3
>
> Read the "Scrum Artifacts" chapter of the Scrum Guide and answer the following questions in your own words:
>
> 1. What is the Product Backlog?
> 2. What is the Sprint Backlog?
> 3. What is the difference between the Product Backlog and the Sprint Backlog?

{: .important-title }

> Exercise 4
>
> Scrum emphasizes the importance of _transparency_ of the process and it is one of the [Three Pillars of Scrum](https://www.atlassian.com/agile/project-management/3-pillars-scrum). What does it mean and how do different Scrum events and artifacts improve the process transparency?

{: .important-title }

> Exercise 5
>
> Transparency enables _inspection_. What does it mean and how is inspection performed in different Scrum events?

{: .important-title }

> Exercise 6
>
> Inspection enables _adaptation_. What does it mean and how is adaptation performed with different artifacts and in different Scrum events?

{: .important-title }

> Exercise 7
>
> "Responding to change over following a plan" is one of the core principles of agile. How does Scrum carry out this principle in practice?

{: .important-title }

> Exercise 8
>
> What is the difference between the development process of Scrum and the [Waterfall model](https://en.wikipedia.org/wiki/Waterfall_model)? What are the benefits of Scrum's approach?

{: .important-title }

> Exercise 9
>
> Are the following statements true or false? Justify your answer.
>
> 1. Only the Product Owner plans the requirements for the upcoming Sprint during the Sprint Planning event
> 2. The Sprint Backlog is an important artifact for the Daily Scrum event
> 3. The Product Owner is at the top of the Scrum Team's hierarchy and they decide what every other team member should do
> 4. Sprint duration of two weeks is better than two months
> 5. The Developer's only responsibility in a Scrum Team is to write code
> 6. The Retrospective event supports adaptation
> 7. It is the Scrum Master's responsibility to help other members in following the Scrum process
> 8. In Scrum all the project's requirements are carefully documented to the Product Backlog at the beginning of the project and they shouldn't change during the project 

## Agile requirement specification

In the _requirements phase_ of the software development lifecycle, the stakeholders' requirements for the software are defined and documented. The software requirements specification document lists sufficient and necessary requirements for the project development. To derive the requirements, the development team needs to have a clear and thorough understanding of the products under development. This is achieved through detailed and continuous communications with the project team and customer throughout the software development process.

Software's requirements are commonly categorized as _functional_ and _non-functional requirements_. Functional requirements are the requirements stated by the user which one can see directly in the final product, unlike the non-functional requirements. For example the following requirements are functional requirements:

> User should be able to register with a username and password

> User should be able to see a list of latest blog posts of their favorite blogs

Non-functional requirements on the other are quality constraints that the system must satisfy. These requirements can't be seen by the user but rather cover for example security and performance aspects of the system. For example the following requirements are non-functional requirements:

> User's password should be stored in the database as a Bcrypt password hash upon registration

> List of latest blog posts of user's favorite blogs should be loaded on average in a less than one second

In agile software development, functional requirements are commonly written as _user stories_. A user story is a short, simple description of a feature told from the perspective of the person who desires the new feature in the software. During each Sprint, the Developers of the Scrum Team implement features for the software based on the user stories.

{: .note }

> [Use cases](https://en.wikipedia.org/wiki/Use_case) are another way of defining requirements, focusing more on _how the system will work_ and not _what the user needs_. However, user stories are commonly considered a more modern and Agile-friendly way of defining requirements.

For example, two separate user stories for a blog application could be the following:

> As a content creator, I want to create a new blog so that I can start writing blog posts for my readers.

> As a blog reader, I want to browse list of blog posts of a blog so that I can find interesting posts to read.

A user story is written from the user's perspective and commonly follows the following format:

> As [a user persona], I want [to perform this action] so that [I can accomplish this goal].

The "a user persona" part describes the user role (for example "content creator", "blog reader" or "admin user") who wants to use the feature described in the "to perform this action" part. If we can't come up with a specific role we can just call the user persona a "user". The last part of the user story format is the "I can accomplish this goal" part. This justifies, why this user story is important enough to be implemented.

{: .note }

> User stories are sort of todo items, like "go to the store", "take out the trash" and "pick up kids from school". They are there so that the Scrum Team remembers what kind of features need to be implemented for the software.

In Scrum, the whole Scrum Team participates in writing the user stories. This is done during the Sprint Planning event at the beginning of the Sprint. The Product Owner's responsibility is to decide which user stories get done first (perhaps during the next Sprint) and which can wait for later. This _priorization_ of the Developers' work is among the most important responsibilities of the Product Owner.

## Writing good user stories

The user stories described previously sound like fairly good descriptions of software features. But what makes a good user story? A good user story describes a _feature that provides value for the end user of the software_. This means, that the user story should be written from the user's point of view and not contain technical details. For example, the following user story is written from the developer's perspective and contains technical implementation details:

> ❌ As a developer, I want to optimize the database by adding a new index to the blog posts table so that the list of blog posts of a blog loads fast.

A better user story would express the feature from the user's point of view:

> ✅ As a blog reader, I want the list of blog posts of a blog load fast so that I can find interesting blog posts to read quickly.

There are also other common guidelines for a good user story. One popular guideline is the _INVEST criteria_:

1. _Independent_: user stories should be written so they can be developed and tested independently of other stories. This allows for greater flexibility in the development process and helps to avoid unnecessary dependencies.
2. _Negotiable_: user stories should be written to allow for negotiation between the development team and the customer. This helps ensure that the final product meets the customer's needs.
3. _Valuable_: user stories should provide value to the end user. This value can be in the form of a new feature, an improvement to an existing feature, or a bug fix.
4. _Estimable_: user stories should be written in a way that allows the development team to estimate the amount of effort required to complete them.
5. _Small_: user stories should be small enough to be completed within a single iteration of the development process. This helps ensure that the development process remains focused and efficient.
6. _Testable_: user stories should be written to allow testing to be performed at the end of the development process. This helps ensure the story is complete and meets the customer's requirements.

A common violation of the INVEST criteria is that the user story is too large (violating the _small_ criteria):

> ❌ As a content creator, I want to register with a username and password, a profile picture, and a profile description so that I can start writing blog posts.

These kinds of user stories are tedious for the Developers to implement because the implementation could take several Sprints. It is better to split these kinds of big user stories into multiple smaller user stories:

> ✅ As a content creator, I want to register with a username and password so that I can start writing blog posts.

> ✅ As a content creator, I want to register with a profile picture so that my readers know what I look like.

> ✅ As a content creator, I want to register with a profile description so that my readers know about me.

{: .note }

> If the description of the feature contains words like "and" or "or", it could be that the user story can be split into smaller user stories.

Another fairly common violation is that the user story doesn't have a good enough description so that it is _estimable_. For example, it is very difficult to estimate how long it would take for the Developers to implement the following user story:

> ❌ As a content creator, I want to export blog posts from all kinds of social media platforms so that I don't have to write the same blog post twice.

In these kinds of cases we should write a more concrete description of the feature:

> ✅ As a content creator, I want to export blog posts from Medium so that I don't have to write the same blog post twice.

There's still a bit uncertainty of about the implementation. For example, how in practice can we export blog posts from Medium? But at least the scope of the user story is narrower. Commonly [spikes](https://www.mountaingoatsoftware.com/blog/spikes) are used to tackle such uncertainty in the user stories.

{: .important-title }

> Exercise 10
>
> What's wrong with the following user stories?
>
> 1. "As a developer, I want to implement the blog editor component using an editor library, so that it is easier to implement new editor features"
> 2. "As a content creator, I want to be able to write a blog post with text, images, videos, and interactive code samples so that I can create rich content for my readers"
> 3. "As a content creator, I want my blog's layout to have a modern look so that I can write visually pleasing blog posts"
> 4. "Write comment for blog post"
>
> Justify your answer based on the INVEST criteria and general guideliness of a good user story.

{: .important-title }

> Exercise 11
>
> The Scrum Team came up with the following user stories during the Sprint Planning:
>
> 1. "As a developer, I want to store the user's email in the user database table's email column, so that I can send notifications about new blog posts"
> 2. "Add blog post to favorites list"
> 3. "As a user, I want to be able to sign in using username and password, Google, Facebook and GitHub so that I can authenticate"
> 4. "As a user, I want to customize my profile in different ways so that I can share information about myself"
>
> How would improve these user stories? Come up with a better version of each user story.

{: .important-title }

> Exercise 12
>
> During the course, each team will develop a project described by the Product Owner in the [project description](/project-description). Come up with at least six user stories based on the project description. Use the "As [a user persona], I want [to perform this action] so that [I can accomplish this goal]" format for the user stories. Start by identifying the user personas, then consider what kind of actions they want to perform and what are the goals of the actions. Keep in mind the guideliness of a good user story.
>
> Hint: pay attention to the size of the user story. Split big user stories into smaller ones.

{: .important-title }

> Exercise 13
>
> The Product Owner needs your help prioritizing the user stories. How would you prioritize the user stories that you came up with in the previous exercise? That is, in which order these user stories should be implemented?
>
> On top of the importance of a user story, consider the dependencies between the different user stories. For example, certain user stories might be impossible to implement before some other user story has been implemented. Can we for example list quizzes before a teacher can add one?
>
> List the user stories in the priority order (top-priority user stories at the top of the list). Briefly justify, why you chose this specific prioritization.

{: .important-title }

> ⭐ Bonus exercise
>
> The project teams will be assembled at the beginning of next week. If you have a preference for who you want to be in a team with, put your names in the same team in [this Flinga board]({{site.teams_flinga_link}}) (click the team's card and edit its content). The maximum size of a team is 5 members.
