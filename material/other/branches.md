## Git branches

So far, we have only created commits for the _main branch_ of our repository. _Git branches_ allows us to _diverge from the main branch commit history_ by creating a new branch. We can add commits for our branch without effecting the main branch commit history and at some point we _merge_ the commits of a branch into the main branch.

![Git branches](/assets/git-branch.svg){: width="500" }

Branches are commonly used to isolate work-in-progress code from the main branch. This can be for example the development of certain user story or task. The Git workflow where feature development is isolated into a feature-specific branch is referred to as [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

A new branch can be created with the `git branch <name-of-the-branch>` (replace the `<name-of-the-branch>` with name of the branch) command in Git Bash. Let's create a branch and _name it our GitHub username with lowercase letters_. First, pull the latest changes from GitHub using the `git pull` command. Then, create the branch:

```bash
git branch <name-of-my-branch>
```

{: .note }

> Typically, the branch name describes the feature developed in the branch or some other purpose of the branch, for example `delete-quiz` or `add-question`.

Now, let's check the repository's branches with the `git branch` command. We should see that our branch is added to the list. We can also see that there's an astrisk symbol (\*) before the main branch. This means that we are currently on the main branch. The current branch is also displayed in brackets in the Git Bash after the path to the current folder.

We can switch branches using the `git checkout <name-of-the-branch>` command. Switch to the branch you just created:

```bash
git checkout <name-of-my-branch>
```

{: .highlight }

> We usually want to create new branch of the main branch. This means that before creating a new branch with the `git branch <name-of-the-branch>` command, switch to the main branch by running the `git checkout main` command. If you are uncertain which is the current branch, check it with the `git branch` command.

Next, make some small change for the project, for example by changing a button text or color in the user interface or changing a variable name in a method. Once you have made the change, check the status with `git status` command, add the changes with the `git add` command and create a commit with the `git commit` command. Feel free to do multiple commits if needed.

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

Now, let's check that our branch is pushed to GitHub. Open the repository in GitHub and click the branch selector which says "main" above the file tree view in the "Code" tab. [These](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository) instructions have more details, if you have trouble. We should see our branch there. Click the branch and check that the changes are visible in GitHub.

{: .important-title }

> Exercise 25
>
> Perform the steps above to create your own branch named by your GitHub username and push it to GitHub.

### Merging branches and pull requests

Once we are happy with the changes we have made in the branch, we can _merge_ it into the main branch. This basically means applying all the commits we have made for the branch to the main branch. For this we could use the [git merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge) command. However, GitHub supports a better way to merge branches using [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Pull requests are "requests" to merge a branch to another branch (commonly the main branch). The benefit over using the `git merge` command is that pull requests provide a way to perform _quality assurance_, for example through _code reviews_. In a code review other team members inspect the chanhes introduced by the pull request and give constructive feedback. This feedback is used to improve the code quality and fix bugs and other implementation flaws.

![Pull request](/assets/pull-request-cartoon.jpg){: width="500" }

{: .important-title }

> Exercise 26
>
> 1. Create a pull request for your branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) instructions. The pull request title should describe the changes, for example "Change the submit button color in the add quiz form". The description provides additional details
> 2. Merge your branch into the main branch by following [these](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) instructions. If the branch has conflicts with the main branch, check the section below
> 3. Switch back to the main branch with the `git checkout main` command and pull the changes from GitHub with the `git pull` command. Make sure that you can see the changes made in your branch in the main branch as well

{: .important-title }

### Resolving conflicts in branches

If the pull request can't be automatically merged due to conflicts, we'll need to solve them manually. First, switch to the main branch and pull the latest changes:

```bash
git checkout main
git pull
```

Then, switch to your branch and merge the main branch to it:

```bash
git checkout <name-of-my-branch>
git merge main
```

Finally, resolve the conflicts and add, commit and push the changes to GitHub. Now, we should be able to merge the pull request in GitHub.

### Separate branch for the production code

A quite common practice is to separate the development and production code with separate branches. Having a separate branch for the production code enables great features, such as quality assurance and automated deployments. We can deploy the application by simply merging the main branch to the production branch using a pull request.

{: .important-title }

> Exercise 27
>
> 1. Create a `production` branch of the main branch. Then, push the branch to GitHub using the `git push origin -u production` command
> 2. Open the backend web service in the Render Dashboard and go to the "Settings" page. In the "Build & Deploy" section, set the "Branch" as "production" and "Auto-Deploy" as "Yes"
> 3. Switch back to the main branch and make some small change in the code and push the changes to GitHub. Then, open a pull request. Set the _base_ branch as the `production` branch and the _compare_ branch as the `main` branch
> 4. Merge the pull request and check that the deployment works automatically

{: .note }

> When you want to deploy the application to the production environment, open a pull request as described above. _Don't wait until the end of the Sprint for the deployment_. Once you have a meaningful set of features implement, deploy the application and _test that the new features work in the production environment_.
