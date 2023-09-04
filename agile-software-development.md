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

The principle of _"responding to change over following a plan"_ is one of the corner stones of the agile software development. In the old days (and unfortunately, these days too), when a customer ordered a software, the first thing to was to do an exhaustive documentation of all the customer's requirements for the software. During this _requirements specification phase_ all use cases that describe user interactions that the software must provide to the user needed to be carefully documented. Only after the requirement specification was fully completed, the actual development of the software (the coding), could start. During the development phase, the requirements couldn't change. It could easily take years before the users could get their hands on any kind of working software.

The problem with this so called [Big design up front](https://en.wikipedia.org/wiki/Big_design_up_front) approach is that, _requirements tend to change_ during the development phase. If the development of a software takes even a year, that's forever in the current, constantly changing business environment. Also, it is _practically impossible for the customer to come up with all the requirements_ for the software before actual users can try out some kind of a prototype and give feedback.

Agile software development takes a different, an _iterative approach_. In this approach, software is developed in short, typically one or two week long iterations. Before each iteration, customer only needs to specify requirements that the software should fulfill after the iteration is complete. During the iteration, the software development team turns these customer's requirements into technical development tasks and implements these task in a self-organized manner. The outcome of each iteration is working software that users can actually use and give feedback. This feedback can be used to constitute requirements for the next iteration. This feedback loop is in the heart beat of the agile software development process.

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
> 1. What is a sprint?
> 2. Which events occur during the sprint and at what point of the sprint do each of them occur?
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

_Requirement specification_ is a phase in the software development process 

{: .important-title }
> Exercise 5: Defining good user stories
>
> What's wrong with the following user stories?
> 
> 1. "As a content creator I want to submit a form that sends a HTTP request to the /api/blog-posts API endpoint on the server, which inserts a new row to the database, so that I can publish a new blog post on my blog"
> 2. "As a content creator I want to be able to write a blog post with text, images, videos and interactive code samples so that I can create rich content for my readers"
> 3. "As a content creator I want my blog's layout to have a modern look so that I my readers can enjoy cool blog posts"

{: .important-title }
> Exercise 6: Improving a user story
>
> The product owner came up with the following user story during the sprint planning:
>
> "Lorem ipsum"
>
> How does the following user story violate the INVEST criteria? How would improve the user story?
>
> Hint: big user stories can be split into smaller ones.

{: .important-title }
> Exercise 7: Coming up with user stories
>
> During the course, each team will develop a project described by the product owner in the [project description](/project-description).
>
> Come up with at least five well defined user stories based on the project description. Use the INVEST criteria to explain, why your user stories are well defined.
>
> Hint: pay attention to the size of the user story. Split big user stories into smaller ones.