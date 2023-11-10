## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of branch to the main branch.

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story. Commonly, the main branch should only contain _working code_, which produces _deployment ready features_. This means that the _latest working version_ of our application can be found in the main branch at all times. We should be able to deploy this application for our users at any moment without issues.

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. For example, I would create the following branch:

```bash
git branch kaltsoon
```

{: .note }

> Typically, the branch name describes the feature develop in the branch or some other purpose of the branch, for example `filter-recommendations-by-category`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. The current branch is also displayed in brackets in the Git Bash after the path to the current folder.

We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

Next, create a Markdown file to the `documentation` folder which is named after you GitHub username (for example `kaltsoon.md`). Add some text to the file and save it. Check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Then let's switch back to the main branch with the `git checkout main` command. If we check the contents of `documentation` folder, we don't see our file there. That's because these changes _only exist in our other branch_.

Let's switch back to our branch with the `git checkout` command. Change the contents of your file in the `documentation` folder and create one more commit. Then, push the changes to GitHub with the `git push` command. We get the following error message:

```bash
fatal: The current branch kaltsoon has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin kaltsoon

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

The error means that the current branch is not in GitHub yet, just on our local computer. Let's run the command that Git suggests:

```bash
git push --set-upstream origin kaltsoon
```

Now, let's check that our branch is pushed to GitHub. Open the repository in GitHub and click the branch selector which says "main" below the repository name. We should see our branch there. Click the branch and check that the file exists in the `documentation` folder.

{: .important-title }

> Exercise 2
>
> _Each team member_ should do the steps mentioned above to create their own branch named by their GitHub username and push it to GitHub.

We can also pull remote (in GitHub) branches for our local computer and make changes to them. Check the list of branches on GitHub and pick _some other team member's branch_. Once you have picked a branch, switch to main branch first:

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

Once we have pulled the changes from GitHub, let's change the contents of the team member's file in the `documentation` folder and push these changes to GitHub similarly as we did before. Once you have pushed the changes, check that changes are visible in GitHub like you did with your own branch.

{: .important-title }

> Exercise 3
>
> Pull _some other team member's_ branch from GitHub and make some changes for _their file_ in `documentation` folder. Push these changes to GitHub.

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

> Once everyone is done with these exercises, remove each team member's file from the `documentation` folder in the main branch and push the changes to GitHub.

If you want to learn more about branches and how they are used in the software development workflow, read the [Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) tutorial by Atlassian.
