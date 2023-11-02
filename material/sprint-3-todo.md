---
layout: page
title: Sprint 3
permalink: /sprint-3-todo
nav_order: 8
nav_exclude: true
---

{% include toc.html %}

# Sprint 3

For the final Sprint of the course, the Sprint 3, we have a new set of requirements from the Product Owner. On top of working on new user stories, we will be covering topics related to Git branches, authentication and testing.

## Sprint assesment

This Sprint doesn't have a Moodle submission. It is enough that everything mentioned in the exercises is pushed to the project's GitHub repository before the Sprint deadline on {{site.sprint_3_deadline}}. We will be working on the exercises for a bit over a week.

The Sprint assesment is done based on the exercises 1-13. The group can earn up to 10 points from this Sprint. This is the final Sprint of the course and the group's project points will be composed of the points from this Sprint and the two previous Sprints. That is, the maximum number of project points is 30.

During this Sprint, each group member will do a [peer review](#peer-review) in which they asses themselves and other group members. The results of the peer review will heavily impact the personal points of a group member. Each group member can earn up to 10 personal points.

{: .highlight }

> At the end of this Sprint, the group has to write the [final report](#the-final-report) together and each group member needs to do the [peer review](#peer-review). Missing final report will decrease the project points by 5 points and the peer review is required for a passing grade. If the peer review is done after the Sprint deadline, the personal points will decrease by 5 points.

## Retrospective

Organize a similar Mad, Sad, Glad retrospective in Flinga for the Sprint 2 as we did at the end of the [Sprint 1](/sprint-2#retrospective).

{: .important-title }

> Exercise 1
>
> _One of the group members_ should create a new session in Flinga as instructed above. Name the session "Retrospective 2". Once the session is created, other group members should join the session with the "Join link". Setup the session board and organize the Retrospective event.
>
> Did similar issues arise as in Sprint 1 retrospective? If so, try to come up with different actions as before or ask the teacher for tips on how to solve these issues.
>
> Once you have completed the Retrospective write down the issues and actions to the repository's `retrospectives/sprint-2.md` file and push the changes to GitHub.

## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of branch to the main branch.

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story. Commonly, the main branch should only contain _working code_, which produces _deployment ready features_. This means that the _latest working version_ of our application can be found in the main branch at all times. We should be able to deploy this application for our users at any moment without issues.

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. For example, I would create the following branch:

```bash
git branch kaltsoon
```

{: .note }

> Typically, the branch name describes the feature develop in the branch or some other purpose of the branch, for example `filter-recommendations-by-category`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

Next, create a Markdown file to the `documentation` folder which is named after you GitHub username (for example `kaltsoon.md`). Add some text to the file and save it. Check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Then let's switch back to the main branch with the `git checkout main` command. If we check the contents of `documentation` folder, we don't see our file there. That's because these changes _only exist in our other branch_.

Let's switch back to our branch with the `git checkout` command. Change the contents of your file in the `documentation` folder and create one more commit. Then, push the changes to GitHub with the `git push` command. We get the following error message:

```bash
fatal: The current branch kalle has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin kalle

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

The error means that the current branch is not in GitHub yet, just on our local computer. Let's run the command that Git suggests:

```bash
git push --set-upstream origin kalle
```

Now, let's check that our branch is pushed to GitHub. Open the repository in GitHub and click the branch selector which says "main" below the repository name. We should see our branch there. Click the branch and check that the file exists in the `documentation` folder.

{: .important-title }

> Exercise 2
>
> _Each group member_ should do the steps mentioned above to create their own branch named by their GitHub username and push it to GitHub.

We can also pull remote (in GitHub) branches for our local computer and make changes to them. Check the list of branches on GitHub and pick _some other group member's branch_. Once you have picked a branch, switch to main branch first:

```bash
git checkout main
```

Then, create a branch that _has the same name_ as the one you picked from GitHub:

```bash
git branch <name-of-other-team-member-branch>
```

Once created, switch to the created branch:

```bash
git checkout <name-of-other-team-member-branch>
```

Now, we can pull the branch changes from GitHub with the `git pull` command:

```bash
git pull
```

<!-- TODO: tuleeko virhe? -->

Once we have pulled the changes from GitHub, let's change the contents of the group member's file in the `documentation` folder and push these changes to GitHub similarly as we did before. Once you have pushed the changes, check that changes are visible in GitHub like you did with your own branch.

{: .important-title }

> Exercise 3
>
> Pull _some other group member's_ branch from GitHub and make some changes for _their file_ in `documentation` folder. Push these changes to GitHub.

Once we have happy with the changes we have made in the branch, we should _merge_ it with the main branch. This basically means applying all the commits we have made for the branch to the main branch. For this we can use the `git merge` command.

Let's switch to the our branch first and see if there is any changes in GitHub:

```bash
git checkout <name-of-my-branch>
```

We can pull changes from GitHub with the `git pull` command:

```bash
git pull
```

Once we have the changes on our local computer, let's switch to the main branch:

```bash
git checkout main
```

Now, to merge our branch with the main branch we can do the following:

```bash
git merge <name-of-my-branch>
```

This creates a _merge commit_ for the main branch containing all the changes done in the other branch. Let's push the changes to GitHub:

```bash
git push
```

Now if we open the repository in GitHub, we should see that the main branch has our file in the `documentation` folder.

{: .highlight }

> Merge commits can cause _merge conflicts_. If you have trouble solving the merge conficts, see the [Git instructions](/git#merge-conflicts).

{: .important-title }

> Exercise 4
>
> Pull changes for _your branch_ from GitHub with the `git pull` command. Then, merge _your branch_ with the main branch. Check in GitHub that you changes are visible in the main branch.

{: .highlight }

> Once everyone is done with these exercises, remove each group member's file from the `documentation` folder in the main branch and push the changes to GitHub.

If you want to learn more about branches and how they are used in the software development workflow, read the [Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) tutorial by Atlassian.

## Sprint 3 planning

{: .highlight}

> If you weren't able to implement all the user stories during the previous Sprint, start by finishing those before starting to implement the user stories for this Sprint.

The Product Owner was delighted to see how the project has advancend during Sprint 2.

The Sprint Review gave the Product Owner many new ideas on how to improve the application. Here's how the Product Owner is describing the Sprint 3 goals in the Sprint Planning event:

> "The basic features for adding and organizing the reading recommendations work great! What we now need, is the possibility for the user to manage their own personl reading recommendations. This means that user should be able to register an account with an username and password. After registering, the user should be able to sign in using the username and password provided during the registration.
>
> An anonymous user, that is an user who has not signed in, should be able to see the reading recommendation list. They shouldn not be able to add a reading recommendation or a category.

> Signed in user should only be able to edit reading recommendations that they have added themselves. They should also be able to delete their own reading recommendations."
>
> -- The Product Owner

1. As an anonymous user I want to register an account so that I can manage my personal reading recommendations
2. As a signed in user I want to assosicate the added reading recommendation with my account so that I can manage my personal reading recommendations
3. As a signed in user I want to delete my own reading recommendations so that I can get rid of useless reading recommendations

> Exercise 5
>
> Create a Sprint Backlog board for the third Spring in Trello. Name the Sprint Backlog board "Sprint 3 backlog". Add similar lists for the board as in the Sprint 2 backlog.

{: .important-title }

> Exercise 6
>
> Come up with tasks for the first user story, "As an anonymous user I want to register an account so that I can manage my personal reading recommendations". Read the Product Owner's Sprint Planning description regarding the user story again and split it into small coding tasks. Take a look at the exercise 12 to get an idea what the implementation could look like.

{: .important-title }

> Exercise 7
>
> 1. Add these three user stories to the "Product Backlog" board as cards in Trello. The user stories should be initially in the "In sprint" list of the board.
> 2. Add the tasks to the "Sprint 3 Backlog" board as cards in Trello. The tasks should be initially in the "To do" list of the board.

## Testing

When we implement a new feature for the application we need to make sure that it works as intended. That is, we _test_ the implementation of a feature against the requirements. During the development of a feature we are constantly performing _manual testing_ for the implementation, meaning that we use the application ourselfs and see that we can perform certain actions successfully.

Manual testing is important, but we can't perform it _at scale_. When our application becomes more complex, each change to code can potentially break any part of the application. Testing each feature manually after each change to code would be tome time-consuming. That's why we implement _automated tests_: programs that test our code. We can usually execute hundreds of automated tests within just a minute. Martin Fowler explains the purpose of different kind of automated tests in his article [TestPyramid](https://martinfowler.com/bliki/TestPyramid.html).

Automated tests are implemented with programming language specific _testing frameworks_, such as Java's [JUnit](https://junit.org/junit5/) and JavaScript's [Vitest](https://vitest.dev/). During this Sprint we will implement some tests for our backend using JUnit. But first, let's discuss how to write code that is _easy to test_.

## Service classes

At the moment probably most of our application's _business logic_ is within controller methods. These methods usually read the user input from the request, do some database operations and send a response. Let's consider the following example that adds a message for an authenticated user:

```java
@Controller
public class MessageController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/messages/add")
    public ModelAndView addMessage(@ModelAttribute AddMessageDto message, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findOneByUsername(userDetails.getUsername());
        Message newMessage = new Message(message.getContent(), user);
        messageRepository.save(newMessage);

        return new ModelAndView("redirect:/");
    }

    // ...
}
```

Testing controller methods is a bit tricky because they operate on HTTP requests and responses. To make the business logic of "adding a message for an authenticated user" reusable and easier to test, we can create a service class `MessageService` with method `createMessage`:

```java
@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    public Message createMessage(AddMessageDto message, UserDetails userDetails) {
        User user = userRepository.findOneByUsername(userDetails.getUsername());
        Message newMessage = new Message(message.getContent(), user);

        return messageRepository.save(newMessage);
    }
}
```

We can use the `MessageService` class in the controller method to simplify the code:

```java
@Controller
public class MessageController {
    @Autowired
    private MessageService messageService;

    @PostMapping("/messages/add")
    public ModelAndView addMessage(@ModelAttribute AddMessageDto message, @AuthenticationPrincipal UserDetails userDetails) {
        messageService.createMessage(message, userDetails);

        return new ModelAndView("redirect:/");
    }

    // ...
}
```

Now that we have extracted the logic into the `createMessage` method, we can use it in other methods as well. Also, the logic is now easier to test as we will soon see.

{: .note }

> A common architecture for a Java application is that controllers use services and services use repositories. This architecture is referred to as the [Three-tier architecture](https://www.ibm.com/topics/three-tier-architecture).

These code snippets are from the [authentication-example](https://github.com/software-development-project-1/authentication-example) repository. We'll have a closer look at it soon.

{: .important-title }

> Exercise 8
>
> Create a new package `fi.haagahelia.coolreads.service` for the project's service classes. You can do this in Eclipse by right-clicking the `src/main/java` folder and choosing New > Package. Implement a `ReadingRecommendationService` class within the package with the following method:
>
> ```java
> @Service
> public class ReadingRecommendationService {
>   @Autowired
>   ReadingRecommendationRepository recommendationRepository;
>
>   public ReadingRecommendation createRecommendation(AddReadingRecommendationDto recommendation) {
>       // Save the reading recommendation to the database and return the saved ReadingRecommendation object
>   }
> }
> ```
>
> It is fine that the names of your classes differ from these. Replace the names of the classes based on the classes on your project. You can also change the method parameters if they aren't suitable.
>
> Then, extract the current controller method's code into the `createRecommendation` method and call it in the controller method:
>
> ```java
> @Controller
> public class ReadingRecommendationController {
>   @Autowired
>   private ReadingRecommendationService recommendationService;
>
>    // ...
>
>   @PostMapping("/recommendations/add")
>   public ModelAndView addRecommendation(@ModelAttribute AddReadingRecommendationDto recommendation) {
>       recommendationService.createRecommendation(recommendation);
>
>       return new ModelAndView("redirect:/");
>   }
> }
> ```
>
> This change in code should not change how the application works in the user's perspective. Make sure that adding a reading recommendation works as before.

## Configuration for tests

Because our tests will alter the database we should consider _using a different database for tests_. This is a common practice because we don't want the tests to alter (for example delete) any data we are using during the development.

The database related configuration is in the `src/main/resources/application.properties` configuration file:

```
spring.datasource.url=jdbc:h2:file:~/cool-reads;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
```

The _database is stored in a file_ located in `~/cool-reads`. We can use a different, _in-memory database_ for the tests. For this we have a separate `src/test/resources/application.properties` configuration file (note the `test` folder in the path):

```
spring.datasource.url=jdbc:h2:mem:cool-reads-test;DB_CLOSE_ON_EXIT=FALSE;AUTO_RECONNECT=TRUE
```

The configuration in the `src/test/resources/application.properties` file will be used while we are running the tests, which makes it suitable for test-specific configuration.

## Testing service classes

```java
@SpringBootTest
class MessageServiceTest {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private MessageService messageService;

    private UserDetails userDetails;

    @BeforeEach
    void setUp() throws Exception {
        messageRepository.deleteAll();
        userRepository.deleteAll();

        String passwordHash = passwordEncoder.encode("password123");
        User user = new User("tester", passwordHash, "USER");
        userRepository.save(user);

        this.userDetails = new org.springframework.security.core.userdetails.User(user.getUsername(),
            user.getPasswordHash(), AuthorityUtils.createAuthorityList(user.getRole()));
    }

    // The tests methods go here...
}
```

{: .important-title }

> Exercise 9
>
> Add a `ReadingRecommendationServiceTest` test class and implement the following test methods for the `createRecommendation` method:
>
> ```java
> @SpringBootTest
> class ReadingRecommendationServiceTest {
>   @Autowired
>   private ReadingRecommendationService recommendationService;
>
>   @Autowired
>   private ReadingRecommendationRepository recommendationRepository;
>
>   @Test
>   void createRecommendationSetsAttributesCorrectly() {
>       // Arrange: initialize a AddReadingRecommendationDto object with other attributes, except the category (the recommendation is uncategorized)
>
>       // Act: call the recommendationRepository.createRecommendation method with the initialized object
>
>      // Assert: retrieve all the recommendations from the database using the recommendationRepository.findAll() method. Then, the attributes of the first (and the only) object on the list should match the attributes of the AddReadingRecommendationDto object
>   }
>
>   @Test
>   void createRecommendationSetsCategoryAsNullWhenCategoryIsNotProvided() {
>       // Arrange: initialize a AddReadingRecommendationDto object with other attributes, except the category (the recommendation is uncategorized)
>
>       // Act: call the recommendationRepository.createRecommendation method with the initialized object
>
>       // Assert: retrieve all the recommendations from the database using the recommendationRepository.findAll() method. Then, the category attribute of the first (and the only) object on the list should be null
>   }
>
>   @Test
>   void createRecommendationSetsCategoryCorrectlyWhenCategoryIsProvided() {
>       // Arrange: initialize a Category object and save it to the database by calling the category.save() method. Then, initialize a AddReadingRecommendationDto object with with a category matching the initialized Category object and the other attributes
>
>       // Act: call the recommendationRepository.createRecommendation method with the initialized object
>
>       // Assert: retrieve all the recommendations from the database using the recommendationRepository.findAll() method. Then, the category attribute of the first (and the only) object on the list should match the initialized Category object (you can for example check that the name attribute of the objects is the same)
>   }
> }
> ```
>
> Replace the arrange, act and assert comments with the actual test implementation.

## Test coverage

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

{: .important-title }

> Exercise 10
>
> Jacoco

## Authentication

{: .important-title }

> Exercise 11
>
> Spring Security

{: .important-title }

> Exercise 12
>
> Implement the tasks of the first user story, "As an anonymous user I want to register an account so that I can manage my personal reading recommendations".
>
> The implementation should look roughly something like this:
>
> ![](/assets/sprint-2-user-story-2.png)

{: .important-title }

> Exercise 13
>
> Implement the tasks of the second user story, "As a signed in user I want to assosicate the added reading recommendation with my account so that I can manage my personal reading recommendations".
>
> Make sure that the buttons for adding a reading recommendation or category is not visible if the user is not signed in. Also, the "Edit" button should only be visible in the reading recommendation list if the user has added the reading recommendation.
>
> Tips for implementing the tasks:
>
> - See how `Message` entity is associated with the `User` entity in the authentication-example project.
> - [Spring Security with Thymeleaf](https://www.baeldung.com/spring-security-thymeleaf)
> - Take a look at the [messagelist](https://github.com/software-development-project-1/authentication-example/blob/main/src/main/resources/templates/messagelist.html) Thymeleaf template file of the authentication-example project

{: .important-title }

> Exercise 14
>
> Implement the tasks of the third user story, "As a signed in user I want to delete my own reading recommendations so that I can get rid of useless reading recommendations".

{: .important-title }

> Exercise 15
>
> Once you have implemented the user stories of the Sprint and the main branch has a working version of the application, create create a GitHub release for the project. Create a new tag called "sprint3". The release title should be "Sprint 3". Give a brief description for the release that describes the features implemented during the Sprint.
> [Generate a JAR file](/sprint-2#jar) for the application like we did in the previous Sprint and add the JAR file to the release.

## Peer review

{: .important-title }

> Exercise 16
>
> Peer review

## Final report

Add a file `final-report.md` to the `documentation` folder. In that file, write _the final report_ for the course, which answers the following questions:

- What challenges did you face during each Sprint? Describe both technical and project management related challenges. You can use the Sprint Retrospective notes in the `retrospectives` folder.
- Where you able to overcome these challenges? If so, how?
- In which areas did you succeed as a group?
- In which areas there was room for improvement?
- What did you learn during the course? What would you have wanted to learn more about? What felt irrellevant?

The final report should also include the name of each group member.

Add a link to the `final-report.md` file in Github to the `README.md` file under the "Documentation" subheading.

{: .important-title }

> Exercise 17
>
> Write the final report for the course as instructed above.
