---
layout: page
title: Git branches
permalink: /git-branches
nav_exclude: true
---

## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of a branch into the main branch.

![Git branches](/assets/git-branch.svg){: width="500" }

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story. Commonly, the main branch should only contain _working code_ and _deployment ready features_. This means that the latest working version of our application can be found in the main branch at all times. We should be able to deploy this application for our users at any moment without issues. The Git workflow where feature development is isolated into feature-specific branch is referred to as [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). This workflow is a very common workflow in the industry.

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. First, pull the latest changes from GitHub using the `git pull` command. Then, create the branch:

```bash
git branch <name-of-my-branch>
```

{: .note }

> Typically, the branch name describes the feature develop in the branch or some other purpose of the branch, for example `delete-quiz` or `filter-quizzes-by-published-status`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. The current branch is also displayed in brackets in the Git Bash after the path to the current folder.

We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

{: .highlight }

> We usually want to create new branch of the main branch. This means that before creating a new branch with the `git branch <name-of-the-branch>` command, switch to the main branch by running the `git checkout main` command. If you are uncertain which is the current branch, check it with the `git branch` command.

Next, make some small change for the project, for example by changing a button text or color in a Thymeleaf template or changing a variable name in a method. If there's some small code or user interface improvement you have in mind, this is the time to do it. Once you have made the change, check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Feel free to do multiple commits if needed.

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

Now, let's check that our branch is pushed to GitHub. Open the repository in GitHub and click the branch selector which says "main" below the repository name. We should see our branch there. Click the branch and check that the changes are visible in GitHub.

{: .important-title }

> Exercise 1
>
> _Each team member_ should do the steps mentioned above to create their own branch named by their GitHub username and push it to GitHub.

We can also pull remote branches from GitHub to our local computer. Check the list of branches in GitHub and pick _some other team member's branch_. Then, to pull the remote branches from GitHub using the `git pull` command. Finally, switch to the team member's branch:

```bash
git checkout <name-of-other-team-member-branch>
```

### Merging branches and pull requests

Once we are happy with the changes we have made in the branch, we should _merge_ it into the main branch. This basically means applying all the commits we have made for the branch to the main branch. For this we could use the `git merge` command:

```bash
git checkout main
git merge <name-of-my-branch>
git push
```

But, GitHub supports a better way to merge branches using [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). Pull requests are "requests" to merge a branch on to another branch (commonly the main branch). The benefit over using the `git merge` command is that pull requests provide a way to perform _quality assurance_, for example through _code reviews_.

{: .important-title }

> Exercise 2
>
> 1. Create a pull request for your branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) instructions.
> 2. Take a look at some other team member's pull request and conduct a code review. Check the changes introduced by the pull request in GitHub. You can see the changes in the "Files changed" tab in the pull request. Also pull the branch from GitHub to your local computer and take a look at the changes. If everything looks good, add a comment, such as "Looks good to me", for the pull request in GitHub
> 3. Once you have received a comment from a team member for your pull request, merge it into the main branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) instructions. If the branch has conflicts with the main branch, check the section below
> 4. Switch back to main branch with the `git checkout main` command and pull the changes from GitHub with the `git pull` command. You should now see the changes made in your branch in the main branch as well

### Resolving conflicts in branches

If the pull request can't be automatically merged due to conflicts, we'll need to solve them manually. First, switch to the main branch and pull the latest changes:

```bash
git checkout main
git pull
```

Then, switch to your branch and merge the main branch into it:

```bash
git checkout <name-of-my-branch>
git merge main
```

Finally, resolve the conflicts and add, commit and push the changes to GitHub. Now, we should be able to merge the pull request in GitHub.
