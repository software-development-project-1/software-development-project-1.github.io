---
layout: page
title: Project description
permalink: /project-description
nav_order: 10
---

# Project description

At week three, the Scrum Team will start working on a project in Sprint 1. Students are the Developers of the Scrum Team and the teacher is the Product Owner. The team consists of 4-5 students. Each team will be working on the same project idea, so the high level requirements for the project are the same. The project is implemented step by step during the three two week Sprints. Each Sprint will have a small set of requirements that should implemented during the Sprint.

## Quizzer

The Product Owner has a great project idea and is in desperate need of a talented developer team. Here's how the Product Owner describes the project that he has named "Quizzer":

> _"My teacher colleagues at Haaga Helia need an application where they can add different kinds of quizzes for their students. Quizzes have multiple choice questions related to the topic of the quiz. By answering the questions of a quiz the students can learn about course-related topics. The teachers need a teacher dashboard application where they can manage quizzes. The students need a separate student dashboard application where they can take quizzes added by the teachers. Both students and teachers use the web browser a lot, so it would make sense that both applications are web applications._
>
> _A teacher should be able to add a quiz in the teacher dashboard. A quiz has a name, for example, "The Scrum framework" and a description, for example, "Learn about the roles, events and artifacts of the Scrum framework" a Haaga-Helia course code, for example "SOF005AS3AE" and a published status indicating whether the students can take the quiz or not. The teacher should be able to see a list of added quizzes and be able to edit the information of a quiz and delete it._
>
> _Once a quiz is added, the teacher should be able to add multiple choice questions for the quiz. A question has a question content, for example, "What is the purpose of the Retrospective event?" and a difficulty level, which is either "Easy", "Normal" or "Hard". The teacher should be able to see a list of questions of a quiz and be able to delete a question._
>
> _Questions have multiple answer options, for example, "Planning the requirements for the upcoming Sprint", "Finding ways to improve the process" and "Tracking the progress of the Sprint". An answer option has an answer option content, for example "Finding ways to improve the process" and a correctness status indicating whether the answer option is correct or not. The teacher should be able to add an answer option for a question, see a list of answer options of a question and be able to delete an answer option._
>
> _To categorize quizzes, the teacher should be able to add different categories, such as "Agile" and "Databases" and choose the category of a quiz. A category has a name, for example, "Agile" and a description, for example "Quizzes related to the Agile principles and project management frameworks". The teacher should be able to see a list of added categories and be able to delete a category._
>
> _The student should be able to see a list of published quizzes and take the quizzes by answering the questions of a quiz in the student dashboard. After answering a question, the student should get feedback on whether their answer was correct or not._
>
> _There should also be a page where the results of a quiz are displayed. The page should display the total number of answers, the correct answer percentage and the number of correct and wrong answers for each question._
>
> _So that the students can share their thoughts about a quiz, the student should be able to review a quiz. There should be a page where the student can write a review and see other students' reviews for a quiz. It should also be possible for the student to edit and delete reviews."_
>
> -- The Product Owner of Quizzer

{: .note }
>
> The Product Owner will provide a more detailed description of requirements for each Sprint.

## Technical requirements

Although the high level requirements are the same, the team will decide on the technical implementation. The only technical limitations are the following:

- Backend must be implemented with Java using the Spring Boot framework
- Frontend must be implemented with React

To fulfill the Product Owner's requirements, two applications are implemented during the project. We will start by implementing backend features for the teachers during [Sprint 1](/sprint-1). Starting from [Sprint 2](/sprint-2) we will be implementing frontend features for the students.
