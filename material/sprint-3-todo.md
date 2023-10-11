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

The Sprint assesment is done based on the exercises 1-17. The group can earn up to 10 points from this Sprint. This is the final Sprint of the course and the group's project points will be composed of the points from this Sprint and the two previous Sprints. That is, the maximum number of project points is 30.

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

Branches are commonly used to isolate work-in-progress code from the main branch. The main branch should only contain _working code_, which produces _deployment ready features_. This means that the _latest working version_ of our application can be found in the main branch at all times. We should be able to deploy this application for our users at any moment without issues.

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it based on our first name without whitespaces_. For example, I would create the following branch:

```bash
git branch kalle
```

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. We can switch branches wit the `git checkout <name-of-the-branch>`. Switch to the branch you just created:

```bash
git checkout kalle
```

Next, create a Markdown file to the `documentation` folder which is named after you first name (for example `kalle.md`). Add some text to the file and save it. Check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Then let's switch back to the main branch with the `git checkout main` command. If we check the contents of `documentation` folder, we don't see our file there. That's because these changes _only exist in our other branch_.

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
> Do the steps mentioned above to create your own branch and push it to GitHub.

We can also pull remote (in GitHub) branches for our local computer and make changes to them. Check the list of branches on GitHub and pick _some other group member's branch_.Once you have picked a branch, switch to main branch first:

```bash
git checkout main
```

Then, create a branch that _has the same name_ as the one you picked from GitHub:

```bash
git branch <branch>
```

Once created, switch to the created branch:

```bash
git checkout <branch>
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
git checkout kalle
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
git merge kalle
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

## Sprint 3 planning

1. As an anonymous user I want to register an account so that I can manage my personal reading recommendations
2. As a signed in user I want to assosicate the added reading recommendation with my account so that I can manage my personal reading recommendations
3. As a signed in user I want to delete my own reading recommendations so that I can get rid of useless reading recommendations

## Authentication

{: .important-title }

> Exercise 4
>
> User story 1

{: .important-title }

> Exercise 5
>
> Spring Security

{: .important-title }

> Exercise 7
>
> User story 2

{: .important-title }

> Exercise 8
>
> User story 3

{: .important-title }

> Exercise 9
>
> User story 4

## Testing

{: .important-title }

> Exercise 10
>
> Create reading recommendation test

{: .important-title }

> Exercise 11
>
> Register account test

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

> Exercise 12
>
> Jacoco

## Peer review

{: .important-title }

> Exercise 13
>
> Peer review

## The final report

- Kerrataan jokaisen sprintin aikana kohdatut ongelmat (prosessiin-, projektityöskentelyyn- ja teknisiin asioihin liittyvät)
- Mikä sujui projektissa hyvin, mitä pitäisi parantaa seuraavaa kertaa varten
- Mitä asioita opitte, mitä asioita olisitte halunneet oppia, mikä tuntui turhalta
- Raportti palautetaan lisäämällä raporttiin linkki projektin GitHubin README:hen
- Raportista tulee ilmetä jokaisen projektiin osallistuneen nimi

{: .important-title }

> Exercise 14
>
> Final report
