---
layout: page
title: Project description
permalink: /project-description
nav_order: 8
nav_exclude: true
search_exclude: true
---

# Project description

At week three, the Scrum Team will start working on a project in Sprint 1. Students are the Developers of the Scrum Team and the teacher is the Product Owner. The team consists of 4-5 students. Each team will be working on the same project idea, so the high level requirements for the project are the same. The project is implemented step by step during the three two week Sprints. Each Sprint will have a small set of requirements that should implemented during the Sprint.

## Quiznator

The Product Owner has a great project idea and is in desprate need of a talented developer team. Here's how the Product Owner describes the project that he has named Quizzer:

> My teacher colleagues at Haaga Helia need an application where they can add different kinds of quizzes for their students. The application should have a dashboard for the teachers where they can manage quizzes and a dashboard for the students where they can take different quizzes. Both students and teachers use the web browser a lot, so it would make sense that the application is a web application.
>
> A teacher should be able to add a quiz using a form. A quiz should have a name, for example, "The capital cities of Europe" and a description, for example, "Learn the capital cities of the European countries" and a published status indicating whether the students can take the quiz or not. The teacher should have a separate page where added quizzes are listed with all their information. It should also be possible to edit the information of a quiz and delete it.
>
> Once a quiz is added, the teacher should be able to add questions for the quiz using a form. A question should have a question content, for example, "What's the capital of Finland?" and a correct answer, for example, "Helsinki". It should also be possible to delete questions.
>
> The teacher should be able to register and sign in to manage their personal quizzes. Only signed-in teachers should be able to add a quiz. Once signed in, the teacher should only be able to edit and delete their own quizzes.
>
> The student should be able to see a list of published quizzes and take the quizzes by answering the questions of a quiz. After answering a question, the student should get feedback on whether their answer was correct or not. There should also be a page where the results of a quiz are visualized. For example, the page could have pie charts visualizing the number of correct and wrong answers for each question. The results page should be accessible for both students and teachers.
>
> -- The Product Owner of Quizzer

## Technical requirements

Although the high level requirements are the same, the team will decide on the technical implementation. The only technical limitations are the following:

- Backend must be implemented with Java using the Spring Boot framework.
- Frontend must be implemented with React

We will start by implementing backend features for the teachers during [Sprint 1](/sprint-1). Starting from [Sprint 2](/sprint-2) we will be implementing frontend features for the students. The [example project]({{site.example_project_link}}) will be used as the project starting point. It demonstrates the basic concepts and will get you started more quickly.