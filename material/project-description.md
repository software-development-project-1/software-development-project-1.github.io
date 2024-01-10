---
layout: page
title: Project description
permalink: /project-description
nav_order: 5
---

# Project description

At week three, the Scrum Team will start working on a project in Sprint 1. Students are the Developers of the Scrum Team and the teacher is the Product Owner. The team consists of 4-5 students. Each team will be working on the same project idea, so the high level requirements for the project are the same. The project is implemented step by step during the three two week Sprints. Each Sprint will have a small set of requirements that should implemented during the Sprint.

## Quizzer

The Product Owner has a great project idea and is in desperate need of a talented developer team. Here's how the Product Owner describes the project that he has named "Quizzer":

> My teacher colleagues at Haaga Helia need an application where they can add different kinds of quizzes for their students. Quizzes have questions related to the topic of the quiz. By answering the questions of a quiz the students can learn about course-related topics. The teachers need a teacher dashboard application where they can manage quizzes. The students need a separate student dashboard application where they can take different quizzes. Both students and teachers use the web browser a lot, so it would make sense that both applications are web applications.
>
> A teacher should be able to add a quiz using a form in the teacher dashboard. A quiz should have a name, for example, "The capital cities of Europe" and a description, for example, "Learn the capital cities of the European countries" and a published status indicating whether the students can take the quiz or not. The teacher should have a separate page where added quizzes are listed with all their information. The teacher should be able to filter the list based on the quiz's published status. For example, the teacher should be able to list only the published quizzes. It should also be possible for the teacher to edit the information of a quiz and delete it.
>
> Once a quiz is added, the teacher should be able to add questions for the quiz using a form. A question should have a question content, for example, "What is the capital of Finland?" and a correct answer, for example, "Helsinki". It should also be possible to delete questions from a quiz.
>
> The teacher should be able to register and sign in to manage their personal quizzes. Only signed-in teachers should be able to add a quiz. Once signed in, the teacher should only be able to edit and delete their own quizzes.
>
> The student should be able to see a list of published quizzes and take the quizzes by answering the questions of a quiz in the student dashboard. After answering a question, the student should get feedback on whether their answer was correct or not. There should also be a page where the results of a quiz are displayed. The page should display the total number of answers, the correct answer percentage and the number of correct and wrong answers for each question. The results page should be accessible for both students and teachers.
>
> -- The Product Owner of Quizzer

## Technical requirements

Although the high level requirements are the same, the team will decide on the technical implementation. The only technical limitations are the following:

- Backend must be implemented with Java using the Spring Boot framework
- Frontend must be implemented with React

We will start by implementing backend features for the teachers during [Sprint 1](/sprint-1). Starting from [Sprint 2](/sprint-2) we will be implementing frontend features for the students. The [example project]({{site.example_project_link}}) will be used as the project starting point. It demonstrates the basic concepts and will get you started more quickly.
