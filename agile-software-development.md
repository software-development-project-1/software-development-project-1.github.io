---
layout: page
title: Agile software development and Scrum
permalink: /agile-software-development
---

# Agile software development and Scrum

> _able to move quickly and easily_
>
> -- Dictionary definition for the word _agile_

The word _agile_ is often used in many industries to describe the way of working in organizations. The word is commonly used in a positive manner, for example "we are an _agile_ organization", or "we work in a _agile_ manner". But what does this buzzword mean and what does "we work in a _agile_ manner" mean in the context of software development?

In _agile software development_, the development process follows values and principles that have been found leading to successful software development projects. These values and principles has been constituted and written down as the [Manifesto for Agile Software Development](https://agilemanifesto.org/) by famous software development pioneers:

> We are uncovering better ways of developing
> software by doing it and helping others do it.
> Through this work we have come to value:
>
> Individuals and interactions over processes and tools,
>
> Working software over comprehensive documentation,
>
> Customer collaboration over contract negotiation,
>
> Responding to change over following a plan.
>
> That is, while there is value in the items on
> the right, we value the items on the left more.
>
> -- Manifesto for Agile Software Development

## Software development lifecycle

The software development process is divided into different phases:

- In the _requirements phase_, the development team collects requirements from several stakeholders such as customers, internal and external experts, and managers. The requirements cover use cases that describe user interactions that the software must provide. These requirements are written down as the _software requirement specification document_.
- In the _design phase_, the development team analyzes requirements and identify the best solutions to create the software. For example, they may consider integrating pre-existing modules, make technology choices, and identify development tools
- In the _implementation phase_, the development team codes the product. They analyze the requirements to identify smaller coding tasks they can do daily to achieve the final result
- In the _test phase_, the development team combines automation and manual testing to check the software for bugs. Quality analysis includes testing the software for errors and checking if it meets customer requirements
- In the _deployment phase_, the implemented software is distributed for the users. For example, a web application is published online so that users can access it with their browsers. This environment that the users use is commonly referred to as the _production environment_, while the environment that developers use to develop the software is referred to as the _development environment_.
- In the _maintenance phase_, among other tasks, the development team fixes bugs, resolves customer issues, and manages software changes. In addition, the team monitors overall system performance, security, and user experience to identify new ways to improve the existing software

The mentioned phases are commonly performed in the mentioned order and the whole process is often called the _software development lifecycle_.

In the old days (and unfortunately, these days too), each phase was completed before the next phase could begin and there was no overlapping in the phases. This means that, for example, in the requirements phase, all possible requirements for the software needed to be carefully thought out and documented before the design phase could begin. This kind of sequential software development process is called the [Waterfall model](https://en.wikipedia.org/wiki/Waterfall_model).

The software requirement specification document written in the requirements phase was sort of an binding contract, meaning that _the requirements shouldn't change_ after the requirements phase. If some problem with the requirements were spotted during the implementation phase, it was practically impossible to change the requirements. Another problem was that, it could easily take years before the users could get their hands on any kind of working software.

The problem with this so called [Big design up front](https://en.wikipedia.org/wiki/Big_design_up_front) approach is that, _requirements tend to change_ during the implementation phase. If the development of a software takes even a year, that's forever in the current, constantly changing business environment. Also, it is _practically impossible to come up with all the possible requirements_ for the software before actual users can try out some kind of a prototype and give feedback.

Agile software development takes a different, an _iterative approach_. In this approach, software is developed in short, typically one or two week long iterations. Before each iteration, it is only necessary to specify requirements that the software should fulfill after the iteration is complete. During the iteration, the software development team turns these customer's requirements into technical development tasks and implements these task in a self-organized manner. The outcome of each iteration is working software that users can actually use and give feedback. This feedback can be used to constitute requirements for the next iteration. This feedback loop is in the heartbeat of the agile software development process.

Instead completing phases sequentially from start to finnish, the phases are completed in a _cycle_. Each iteration starts with the requirements phase and during the iteration design, implementation, test, deployment and maintenance phases are completed. This cycle repeats in every iteration.

## Scrum

_Scrum_ is an iterative software development process framework that defines practical ways to carry out agile software development principles. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) is the official guide to Scrum.

Before starting working on the exercises, read at least the chapters "Scrum Definition", "Scrum Theory", "Scrum Values", "Scrum Team" and "Scrum Events" from the [Scrum Guide](https://scrumguides.org/scrum-guide.html).

{: .important-title }

> Exercise 1: Scrum Team
>
> Read the "Scrum Team" chapter of the Scrum Guide and answer the following questions in your own words:
>
> 1. What are different roles in a Scrum Team?
> 2. What are the responsibilities of each role?

{: .important-title }

> Exercise 2: Scrum Events
>
> Read the "Scrum Events" chapter of the Scrum Guide and answer the following questions in your own words:
>
> 1. What is a Sprint?
> 2. Which events occur during the Sprint and at what point of the Sprint do each of them occur?
> 3. What's the purpose of each event?

{: .important-title }

> Exercise 3: Transparency in Scrum
>
> Scrum emphasize the importance of _transparency_ of the process. It means that the significant aspects of the process should be visible to those responsible for the outcome. Transparency allows each Scrum Team member to track and understand what's really going on in each sprint.
>
> How does different Scrum Events improve process transparency?

{: .important-title }

> Exercise 4: Scrum and agile principles
>
> "Responding to change over following a plan" is one of the core principles of agile.
>
> How does Scrum carry out this principle in practice?

## Agile requirement specification

In the _requirements phase_ of the software development lifecycle, the stakeholders' requirements for the software are defined and documented. In agile software development, requirements are commonly written as _user stories_. A user story is a short, simple description of a feature told from the perspective of the person who desires the new feature in the software. During each Sprint, the Developers of the Scrum Team implement features to the software based on the user stories.

{: .note }

> The term "stakeholder" refers to the people or groups affected by a software development project. Stakeholders are for example the end users who use the software and the customer funding the project.

For example two separate user stories for a blog application could be the following:

> As a content creator I want to create a new blog so that I can start writing blog posts.

> As a blog reader I want to browse list of blog posts of a blog so that I can find insteresting posts to read.

A user story is usually written from the user's perspective and follows the format:

> As [a user persona], I want [to perform this action] so that [I can accomplish this goal].

The "a user persona" part describes the user role who wants to use the the feature described in the "to perform this action" part. If we can't come up with a specific role we can just call the user persona a "user". The last part of the user story format is the "I can accomplish this goal" part. This provides justification, why this user story is important enough to be implemented.

{: .note }

> User stories are sort of an todo items, like "go to the store", "take out the trash" and "pick up kids from school". They are there so that the Scrum Team remembers what kind of features need to be implemented for the software.

In Scrum, the whole Scrum Team participates in writing the user stories. This is done during the Sprint Planning event at the beginning of the Sprint. Product Owner's responsibility is to decide which user stories gets done first (perhaps during the next Sprint) and which can wait for later. This _priorization_ of the Developments work is among the most important responsibilities of the Product Owner.

## Writing good user stories

The user stories described previously sound like fairly good descriptions of software fetures. What makes a good user story?

Because Product Owner in the Scrum Team is commonly a non-technical person, user stories should not contain technical details of the implementation. For example the following user story is too technical:

> ❌ As a blog reader I want to send a HTTP request to the server to get the list of blog posts in a JSON format so that I can find insteresting posts to read.

A better user story would express the feature in the user's point of view:

> ✅ As a blog reader I want to browse list of blog posts of a blog so that I can find insteresting posts to read.

There are also other common guidelines for a good user story. One popular guideline is the INVEST criteria:

1. _Independent_: user stories should be written so they can be developed and tested independently of other stories. This allows for greater flexibility in the development process and helps to avoid unnecessary dependencies.
2. _Negotiable_: user stories should be written to allow for negotiation between the development team and the customer. This helps ensure that the final product meets the customer's needs.
3. _Valuable_: user stories should provide value to the end user. This value can be in the form of a new feature, an improvement to an existing feature, or a bug fix.
4. _Estimable_: user stories should be written in a way that allows the development team to estimate the amount of effort required to complete them.
5. _Small_: user stories should be small enough to be completed within a single iteration of the development process. This helps ensure that the development process remains focused and efficient.
6. _Testable_: user stories should be written to allow testing to be performed at the end of the development process. This helps ensure the story is complete and meets the customer's requirements.

A common violation of the INVEST criteria is that the user story is too large (violating the _small_ criteria):

> ❌ As a content creator I want to register with an username and password, a profile picture and a profile description so that I can start writing blog posts.

These kind of user stories are tedious for the Developers to implement, because the implementation could take several Sprints. It is better to split these kind of big user stories into multiple smaller user stories:

> ✅ As a content creator I want to register with an username and password so that I can start writing blog posts.

> ✅ As a content creator I want to register with a profile picture so that my readers know what I look like.

> ✅ As a content creator I want to register with a profile description so that my readers know about me.

{: .note }

> If the description of the feature contains words like "and" or "or", it could be that the user story can be splitted into smaller user stories.

Another fairly common violation is that the user story doesn't have a good enough description so that it is _estimable_. For example it is very difficult to estimate how long it would take for the Developers to implement the following user story:

> ❌ As a content creator I want to export blog posts from all kinds of social media platforms so that I don't have to write same blog post twice.

In these kind of cases we should write a more concrete description of the feature:

> ✅ As a content creator I want to export blog posts from Medium so that I don't have to write same blog post twice.

There's still a bit uncertainty of the implementation, for example, how in practice can we export blog posts from Medium. But at least the scope of the user story is narrower.

{: .important-title }

> Exercise 5: Defining good user stories
>
> How does the following user stories violate the INVEST criteria of a good user story?
>
> 1. "As a content creator I want to submit a form that sends a HTTP request to the /api/blog-posts API endpoint on the server, which inserts a new row to the database, so that I can publish a new blog post on my blog"
> 2. "As a content creator I want to be able to write a blog post with text, images, videos and interactive code samples so that I can create rich content for my readers"
> 3. "As a content creator I want my blog's layout to have a modern look so that I my readers can enjoy cool blog posts"

{: .important-title }

> Exercise 6: Improving a user story
>
> The Product Owner came up with the following user story during the Sprint Planning:
>
> "As a content creator I want to be able to write a blog post with text, images, videos and interactive code samples so that I can create rich content for my readers"
>
> How would improve the user story?
>
> Hint: big user stories can be split into smaller ones.

{: .important-title }

> Exercise 7: Coming up with user stories
>
> During the course, each team will develop a project described by the product owner in the [project description](/project-description).
>
> Come up with at least five well written user stories based on the project description. Use the INVEST criteria to explain, why your user stories are well written.
>
> Hint: pay attention to the size of the user story. Split big user stories into smaller ones.
