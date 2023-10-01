---
layout: page
title: Project description
permalink: /project-description
nav_order: 5
---

# Project description

At week three, the Scrum Team will start working on a project in Sprint 1. Students are the Developers of the Scrum Team and the teacher is the Product Owner. Each team will be working on the same project idea, so the high level requirements for the project are the same. The project is implemented step by step during the three two week Sprints. Each Sprint will have a small set of requirements that need to implemented during the Sprint.

## Cool Reads

The Product Owner has a great project idea and is in desprate need of a talented developer team. Here's how the Product Owner describes the project that he has named "Cool Reads":

> I constantly find interesting things to read online. For example an interesting blog post, an useful programming tutorial, or a news article. I would like to have an application where I can gather and organize these reading recommendations and share them with others. I use the web browser a lot, so it would make sense that the application is a web application.
>
> The user of the application should be able to add a reading recommendation using some kind of a form. A reading recommendation should have a title, for example "The 2020 Scrum Guide", a link, for example "https://scrumguides.org/scrum-guide.html" and a short description, for example "All you need to know about Scrum". User should have a separate page where added reading recommendations are listed with all the information.
>
> To organize the reading recommendations, it would be very helpful If a user could add different kind of categories, for example "Programming tutorials" and "News articles about cats". While adding a reading recommendation, the user could select a category for it among the added categories.
>
> When I have tons of reading recommendations it can get hard to find cool things to read. It would nice to be able search reading recommendations by their title. Also, it should be possible for the user to list reading recommendations in a certain category.
>
> User should be able to register and sign in to manage their personal reading recommendations. Once signed in, the user should be able to delete and edit their reading recommendations.
>
> -- The Product Owner of "Cool Reads"

{: .note }
> At the end of the course, the final application doesn't have to have all the features described by the Product Owner.

## Technical requirements

Although the high level requirements are the same, the team will decide on the technical implementation. The only technical limitations are the following:

- Backend must be implemented with Java using the Spring Boot framework.
- If there's a frontend implementation, it must be done using React.

The team can decide how "frontend heavy" the technical implementation is. If there's not much frontend experience in the team the following implementation is recommended:

- Backend renders pages with Thymeleaf
- Backend handles transitions between pages
- Backend has some API endpoints that return JSON data
- Some individual features on pages are implemented with React and they use these JSON API endpoints

The [example project]({{site.example_project_link}}) will be used as the project starting point. It demonstrates the basic concepts and will get you started more quickly.