---
layout: page
title: "Version control: Git and GitHub"
permalink: /git
nav_order: 4
---

{% include toc.html %}

# Version control: Git and GitHub

{: .note }

> This material is based on the execellent course material of University of Helsinki's [Computing tools for CS studies](https://tkt-lapio.github.io/en/) course.

## Submitting this week's exercises

All of this week's exercises (exercises 1-12) are submitted to [this Moodle submission]({{site.week_2_moodle_submission_link}}). The submission should only contain the link to your GitHub repository created in exercise 6. The submission deadline is on {{site.week_2_deadline}}.

## Version control

This part of the course handles version control. Version control refers to a service used for storing code. There are two primary reasons for using it: Version control allows storing backups of both the current and older versions of a program. In addition, code and projects can easily be shared with others, which makes collaboration easy.

Version control tools allow marking a specific state of a project as so that one can return to it later. Thus, if something goes wrong in the development of new features, one can return to an older and functional version of the project. Version control stores all the marked states. Therefore all the developers can follow the evolution of the program, like who has done what and when. This also makes finding bugs, or errors in the program, a lot easier.

Contrary to what many people think, programming is mostly done in groups. With version control tools it is possible to use and develop others' code, even without ever meeting in person. People can give verbal feedback, such as report issues, as well as make concrete suggestions for improvement by providing code to the project. All developers are kept up to date about the state of the project, which makes cooperation smoother.

Visual Studio has summarized reasons for using version control on their [website](https://www.visualstudio.com/learn/what-is-version-control/?rr=https%3A%2F%2Fwww.google.fi%2F). Bitbucket [has also written](https://www.atlassian.com/git/tutorials/what-is-version-control) a longer text about version control.

There are several different version control tools available, but this part will focus on using Git and GitHub, especially in the context of programming projects.

## About Git

{: .highlight }

> The material has steps that you need to perform outside the exercises as well. So, _don't just skip to exercises_. Read through the material carefully and perform the instructed steps.

Git was initiated by Linus Torvalds, who is most likely more famous for being the primary developer of the Linux kernel, which is the "heart" of many operating systems, such as Google's [Android](<https://en.wikipedia.org/wiki/Android_(operating_system)>). Torvalds started developing Git for his own needs when coding the Linux kernel. He needed a tool for storing different versions of his own code and sharing it with other people.

GitHub is a service which was created later on, used for storing and publishing projects. There are several sites similiar to GitHub, such as [GitLab](https://about.gitlab.com/).

Git and GitHub are used in solo as well as collaborative projects in the industry. It's usage isn't limited only to code, and many people like to for example backup their course material using Git. Nevertheless, this part focuses on sharing code with GitHub, and some of the common problems faced in the process. Git will certainly be useful in your studies, and especially if you choose the software developer career.

{: .important-title }

> Exercise 1
>
> Start by creating a GitHub account at <https://github.com/>. Programmers often use GitHub as a sort of code protfolio, so make sure to choose a username which you don't mind adding to your CV.

{: .important-title }

> Exercise 2
>
> Before we can start, we need to install Git. Here's the instructions for different operating systems:
>
> - On _Windows_, install [Git for Windows](https://gitforwindows.org/)
> - On _macOS_ and _Linux_, read the [Git installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Now, depending on your operating system do one of the following:

- On _Windows_ Git is used through the Git Bash application. Open the Git Bash application.
- On _macOS_ Git is used through the [Terminal](https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) application. Open the Terminal application.

In front of you is a so called _command line interface_ (CLI). A command line interface is a simple user interface: it accepts a textual command as input and prints the command output below. Type in the following command and press the enter key to execute it:

```
git
```

The command should print basic introductions on how to use the `git` command.

{: .important-title }

> Exercise 2
>
> Let's configure Git a bit.
>
> Link your name and email address to Git so that all the changes you make to different projects are properly associated with you. This can be done by running the following commands with your own personal details:
>
> ```
> git config --global user.name "My Name"
> git config --global user.email email@address.com
> git config --global init.defaultBranch main
> ```
>
> Use the same email address as you used with your GitHub account.
>
> Run the commands _one command (one line) at a time_. Write the command and press enter to execute it.
>
> If you don't want your email to be public, GitHub offers a specific <a href="https://help.github.com/en/articles/setting-your-commit-email-address">noreply email</a>.

## Starting a Git project

A project is simply a folder containing some files. These files can for example have code in them. You can turn a folder into a Git project by running the command `git init` inside it. This will allow running git commands inside the folder. The initialization command will create a subfolder called `.git`. This folder stores all sorts of information about the project in the folder it is located in.

### Commits

Information is stored to Git with _commits_. A commit is a bundle of changes which have been made into files inside the project. In practice these changes are often adding or removing text from a file, for example.

You can think of a commit as a step towards a finished project. Every commit adds some changes to the previous commit. For example, when developing a program, it would be natural to add a new feature in a new commit.

Let's go through how a commit is created. First, the changes one wants to include in the commit are added to the _staging_ state. When all the desired changes are in staging, the commit is wrapped together, sealing all the changes together.

The command `git status` will turn out to be very useful in the process of creating commits, as it gives information avout the current state of the project and all the files inside it.

Let's create a Git project folder. Create an empty folder named `git-practice` for example on your Desktop or any other location. Next, depending on your operating system do the following:

- On _Windows_, open the folder in Git Bash by right-clicking the folder name and choosing "Git Bash Here".
- On _macOS_, open the folder in Terminal by right clicking the folder name and choosing "New Terminal at Folder"

Now, initialize the folder as a Git project with the `git init` command.

{: .note }

> Copying or pasting text into Git Bash won't work with keyboard shortcuts. Instead, you can right-click on the Git Bash window and click "Paste" or "Copy".

Open the Git project folder in an editor such as Visual Studio Code and add an a empty file called `git_practice.txt` inside. When a new file is added to a fresh Git project, running the `git status` command will print the following:

```bash
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git_practice.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Next we'll take a closer look on the output of `git status`.

### The different states of changes

Changes can be added to the next commit by running `git add`. The command requires one argument, that is the path to the file containing the changes one wishes to move to staging and consequently include in the next commit. Before a file has been added to Git, it is under `Untracked files`. This also means that the changes inside that file will not be added to the next commit.

Now let's add the changes in the file we created earlier by running `git add git_practice.txt`. Then, let's add some text into the file and save. After that, we'll run `git status`:

```bash
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   git_practice.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   git_practice.txt
```

Next we'll add one more file to the project, called `empty.txt`. We'll then run `git status` again, which outputs the following:

```bash
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   git_practice.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   git_practice.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        empty.txt
```

Now let's break down the output.

The first title is called `Changes to be committed.` The changes under this title will be added to the next commit.

`Changes not staged for commit` refers to the changes which Git is aware of, which will **not** be added to the next commit.

Finally `Untracked files` contains all the files which are unknown to Git, meaning that the changes inside them are not being followed. For example, Git cannot distinguish what sort of changes have been done to the untracked files. In consequence, the changes are not being added to the next commit.

You probably noticed that the file `git_practice.txt` is in the output twice. This is because Git tracks _changes_. The first change added to Git was where the file `git_practice.txt` was created. Only after adding the change to Git was some text insterted into the file. Thus only the change where the file `git_practice.txt` was created will be added to the next commit, and not the change when some text was added inside it. The interpretation of the output of `git status` is made easier with some colors. The changes which will be added to the next commit are displayed in green, and next to the filename is written what was done to the file (for example `new file`, `modified`, `deleted`).

Changes can also be cancelled with Git. Adding some text to `git_practice.txt` could be cancelled by running `git restore git_practice.txt`. The file will be empty after running the command because the command cancelled the change which added some text into `git_practice.txt`. In conclusion, the command `git restore` enables cancelling changes in tracked files.

By running `git add -p` one can choose change by change, which ones to add to the next commit (letter "y" means add, "n" means don't add). Type in the letter ("y" or "n") and press the Enter key. The command only takes into consideration changes in files which are being tracked, i.e. _have already been added to Git once_. Thus new files cannot be added to Git with `git add -p`. Running `git add file` will add all the changes in the file. It is also possible to add entire folders to Git using the same command. Another quite handy shorthand is the `git add .`, which will add all files to the next commit.

{: .warning }

> If you think there is a possibility that you will want to share a project with other people some day, don't add anything secret to Git. Even if you remove the secret content in the next commit, the delicate information stays in the project's history, and can be found from GitHub easily.

A good habit to form is to constantly check which changes will be added to the next commit with `git status`. This might save you a lot of trouble later on.

{: .note }

> You can navigate trough the command history by pressing the up (↑) and down (↓) arrow keys on the keyboard. Pressing the up arrow key goes to previous command. This is handy when you perform the same command multiple times. Instead of writing the same command again and again, just press the up arrow key and press enter to execute the command.

### Creating a commit

After choosing which changes will be included in the next commit, you can finally create the commit with the command `git commit`. Every commit has a message attached to it, describing the changes included in the commit. The message is added upon creating the commit by running: `git commit -m "a descriptive message"`, where your descriptive message specifies what has changed since the last commit. If you leave out the flag `-m` and the message, a text editor will open, where you can write a longer, detailed description below the title message. The commit is then created by saving and exiting the text editor.

Git uses a command line text editor for commit messages by default. Let's use a bit more user-friendly editor, [Visual Studio Code](https://code.visualstudio.com/). If you haven't installed it yet, start with that. Once installed, we can use Visual Studio Code as the Git text editor by running the following command:

```bash
git config --global core.editor "code --wait"
```

However, it is usually more convinient to commit changes using the `git commit -m "the commit message"` command instead of using the `git commit` command and saving and exiting the text editor.

[Here](https://github.com/erlang/otp/wiki/writing-good-commit-messages) are some quick instructions about writing a good commit message.

![Git process](/assets/git-process.webp){: width="500" }

We'll continue where the previous example left off. Let's add all the changes we made to the next commit, except the creation of the file `empty.txt`. Before running `git commit`, the output of `git status` is:

```bash
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   git_practice.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        empty.txt
```

Then we'll run `git commit -m "Add new file"`

Now the output of `git status` is:

```bash
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        empty.txt

nothing added to commit but untracked files present (use "git add" to track)
```

The changes which were committed are no longer visible in the output. However, they are not lost, they have just been moved to the commit. You can view the commits of a project with the command `git log`:

```
Author: Kalle Ilves <kalle.ilves@haaga-helia.fi>
Date:   Wed Sep 6 12:51:07 2023 +0300

    Add new file
```

The command `git log` outputs the author of the commit, the time of its creation and its title. Every commit has a unique id, formed with [SHA-1](https://en.wikipedia.org/wiki/SHA-1). In the output of `git log` the id can be seen as a long string next to the word "commit", which is `51bf544c786a671c28f70713b6cb33d87cc38` in this case.

{: .note }

> The process of creating a commit might seem unintuitive at first. The following analogy might help: Picture the commit as a package. You are sitting on the floor, with all the changes layed out in front of you as wooden blocks. The staging state, denoted with the title <code>Changes to be committed</code> is a piece of wrapping paper, which is spread out in front of you. With the command <code>git add</code> you can move the wooden blocks representing changes on top of the wrapping paper, and with <code>git commit</code> you tie the wrapper aroung the changes to create a commit.

### Branches

At the top of of the output of `git status`, you can see the following text: `On branch main`. Branches allow separating some commits from others. This means that a new branch can be developed independently from an old branch. It is customary for projects to have a main branch, usually called literally `main` or alternatively `master`, containing the version currently in use.

Traditionally git has used the term master to refer to the main or default branch. During years 2020 and 2021 many platforms, such as GitHub and Gitlab, transitioned into using main as the default name for this branch. Git itself followed suit in 2021 and recent versions of git create a branch named main by default.

Branches are usually used for testing out new features without breaking a working version of the program. Since branches don't affect each other states, the new branch can be played with without worrying about other ones. When the changes made to the new branch are deemed ready, the branch can be merged to the main branch, and thus the new features will be published. For now it suffices to understand that we will only use the main branch in the exercises.

{: .important-title}

> Exercise 3
>
> 1. Open the `git-practice` folder we turned it into a Git project earlier both in an editor (for example Visual Studio Code) and in Git Bash.
> 2. Create a file called <code>story.txt</code> in your project. Add a lot of text inside.
> 3. Add another file called <code>shopping_list.txt</code> to the project, and write down what you need from the store (or just many rows of text).
> 4. Create a subfolder called <code>school</code> into the project, and create a file called <code>school_file.txt</code> inside. You will need these files in the future exercises.
> 5. After doing all the changes described above, create a total of three commits: one, where you add the story, a second on where you add the shopping list, and a third one where you add the school folder. Make sure that each commit message is truly descriptive.
> 6. Using the command <code>git log</code>, check that you have properly created three commits.
> 7. Add something new to the shopping list, and create another commit. Use the command <code>git add -p</code>.
> 8. Make sure you can see all the commits in the output of <code>git log</code>.

{: .important-title}

> Exercise 4
>
> 1. Find out how you can remove changes from the state where they are being added to the next commit (under <code>Changes to be committed</code>), and move them under the headline <code>Changes not staged for commit</code>? Hint: <code>git status</code> will help.
> 2. Add some new products to the shopping list, and add them to the next commit (so that they are under <code>Changes to be committed</code>). **Don't create the commit yet.**
> 3. Then remove the changes from the next commit.
> 4. Then remove the changes, using Git, so that when you open the shopping list, the new products are not there.

## Sharing code via GitHub

Next we'll learn how GitHub can be used alongside Git for sharing and publishing code.

### Creating a remote repository

In order to share a project through GitHub, a _repository_ (or simply a repo) has to be created for it, and it has to be linked to a local Git project. After a remote repository has been added to a project, information can be shared between them. In consequence, two concurrent versions of the project will exist: the remote in GitHub and a local version on a specific computer.

This shows how GitHub functions as a backup storage. When the state of a project is updated to its remote in GitHub, it can be accessed from anywhere with internet. Thus the project can be continued even if its local version is destroyed or damaged.

You can create a repository to GitHub by pressing the button on the upper right corner:

![Creating a new repository](/assets/new-repo.png)

A window will open where you can add the repository a name and a description. A repository can be public or private: a public repository can be accessed by anyone, whereas a private repository can only be seen by people chosen by the owner.

You can also create a _README_, a _license_ and a _.gitignore_ file when creating a repository. The point of a README file is to display useful information about the project. A good README contains, for example, a short description of the project, installing instructions and a link to the documentation. A license refers to a document stating the responsabilities and rights of the creator and the users of the project. The `.gitignore` file allows automatically ignoring some files when creating a commit, and it is often quite useful. You can read more about it
[here](https://www.atlassian.com/git/tutorials/saving-changes/gitignore).

{: .highlight }

> When you wish to add a pre-existing project to GitHub, it is not a good idea to let GitHub create files such as a README automatically. This will lead to problems, because GiHub contains files initially which are not found in the local project. You'll learn more about these kinds of situations later in this part.

The button `Create repository` adds the project to your personal account. When you navigate to the empty project, you can see some useful instructions about adding a new project to tour profile. You can find all your projects from your profile, or navigate to them directly with `https://www.github.com/username/projectname`.

### Adding a remote

A remote can be linked to a local project with the command `git remote add`.

The command takes the name and the address of the remote repository as arguments. GitHub offers two options for the repository address protocol: SSH and HTTPS. _We'll choose the HTTPS address_ for the remote project:

![HTTPS address in GitHub](/assets/https-clone.png)

A new repository called "origin" is added using an HTTPS connection by running the command `git remote add origin <https-address-of-the-repository>`. An HTTPS address would be almost identical to the URL in your browser. A remote can be called practically anything besides "origin", but it is a good and a common choice. It is possible to add several remotes, when properly naming them becomes important.

{: .important-title }

> Exercise 5
>
> When we start making changes to a remote repository on GitHub, we need to authenticate. So that we don't need to input our GitHub credentials every time we access the remote repository, let's configure the Git's [Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage):
>
> - On _Windows_, run `git config --global credential.helper manager` in Git Bash.
> - On _macOS_, run `git config --global credential.helper osxkeychain` in the Terminal

{: .important-title }

> Exercise 6
>
> Create a remote repository in GitHub for the project you created locally as instructed above. **Don't let GitHub create a README, license or a .gitignore file when creating the repository**. Doing so will cause problems later. Also, make sure that _the repository is public_ (the "Public" option is selected).
>
> Add the repository as a remote to your local project using the `git remote add` command as instructed above. **Remember to use the HTTPS address when you copy the repository address in GitHub**. Note that the paste keyboard shortcut does not work on Git Bash. You need to right click the Git Bash window and choose "Paste".

### Publishing

After a project has been added to a repository in GitHub, commits can be published by _pushing_ them to the remote repository.

Changes can be pushed to a specific branch in the remote repository as follows: `git push remotename branchname`. In this part we will only use the main branch. If you add the flag `-u` after the command `push`, next time you do not need to specify the name of the remote and the branch to push changes to the same place. Using the flag `-u` is recommended.

Let's push the changes we made to the file `git_practice.txt` by running `git push -u origin main`, since we named the remote `origin` and we are using the main branch. Next we'll navigate to the project site on GitHub. There we will find the file `git_practice.txt`.

{: .note}

> Running `git push` will ask for your GitHub username and password. Once you have submitted those successfully, return to Git Bash.

{: .important-title }

> Exercise 7
>
> 1. Push the three commits you made earlier to the main branch of the remote repository.
> 2. Check on GitHub that you can find all the changes in the remote.

### Fetching code from GitHub

There now exists two versions of the project: one locally, and one in the remote at GitHub. Let's see what happens, when these two versions don't stay properly synced.

We'll start by making changes to the project via GitHub. You can edit files via GitHub by clicking on their name and then clicking on the pen icon on the right side of the page.

![Pen icon at GitHub](/assets/edit.png)

Next we'll add a new line of text to `git_practice.txt`, and create a commit of the change by clicking the green "Commit changes..." on top right corner and then inside the dialog click the green "Commit changes" button.

Now, if you take a look at the repository's files on your local computer, you can't see these changes locally. We'll run the following commands:

```bash
git fetch
git status
```

The command `git fetch` fetches the newest state of the project from GitHub, but doesn't change the local version. **If you find that `git status` doesn't show up-to-date information about the state of the remote, you should run `git fetch` first.**

We still can't see the new line of text locally. However, if you pushed with the flag `-u`, Git will notice that the remote repository contains some changes it doesn't see locally: `Your branch is behind 'origin/main'`is printed at the top of the status output.

You can get the new changes to the local version by running `git pull`. If you used the flag `-u` with `push` earlier, there is no need to specify a remote or a branch. We'll run `git pull`, which results in an output along the lines of the following:

```bash
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com
 * branch            main     -> FETCH_HEAD
   8793615..c661629  main     -> origin/main
Updating 8793615..c661629
Fast-forward
 git_practice.txt | 1 +
 1 file changed, 1 insertion(+)
```

Now you can find the new line of text in the file you changed via GitHub.

{: .important-title }

> Exercise 8
>
> Create a new file to the `school` subfolder via GitHub, and fetch it to your local version. You can add file in GitHub by click the `school` folder name on GitHub and cliking "Add a file" on top right corner. Then commit changes similarly as while editing the file.

In practice the situation handled above corresponds to working on a collaborative project, where someone else has added commits to the project and pushed them to GitHub. Other developers should then fetch the new changes with the command `git pull`.

## Stash

Next we'll find out what happens, if GitHub contains some information not found in the local version, and vice versa.

Let's change the first row of `git_practice.txt` via GitHub. This will create a new commit to the remote version. Then let's add a new line at the end of the same file in the local version, **but without creating a new commit of the new change**.

Now if we try to fetch the latest changes with the command `git pull` we'll get:

```bash
From github.com:
 * branch            main     -> FETCH_HEAD
Updating 061ca96..6920cd0
error: Your local changes to the following files would be overwritten by merge:
	git_practice.txt
Please, commit your changes or stash them before you can merge.
Aborting
```

Pulling the new commit from the remote does not work, because the local verison holds changes to the same file as the remote repository, and the local changes have not been wrapped into a commit.

In situations like this one can put the local changes aside to the _stash_. This is done with the command `git stash`. When the command is run, the local changes in files tracked by Git will by hidden, but not lost completely. In order to also stash changes in untracked files, add the flag `-u`. Changes can be returned from the stash by running `git stash pop`.

{: .important-title }

> Exercise 9
>
> 1. Make changes to some files which you have already added to Git once (i.e. they are not under the headline <code>untracked</code> in the output of <code>git status</code>).
> 2. Stash the changes you just made using Git.
> 3. Open the files you changed and check if you can still see the changes
> 4. Edit the <i>first</i> sentence of the file <code>story.txt</code> in GitHub and create a commit.
> 5. Then edit the <i>last</i> sentence of the same file locally, but <strong>don't create a commit</strong>.
> 6. Fetch the changes you made to <code>story.txt</code> in the remote repository to the local version. Use the stash.
> 7. After you have successfully fetched the changes to the local version, create a commit of the changes you made to the last sentence of <code>story.txt</code>.
> 8. Push the end result to GitHub.
> 9. Make sure you can see both the changes you made to the first sentence and the ones to the last sentence in the remote version.
>
> If you see "CONFLICT" outputted to the terminal when popping changes from the stash, the section "Merge Conflicts" will help.

## Merge

We'll continue working with two parallel states, as they are probably the biggest stumbling block for new users of Git.

In the previous example, the remote and local versions had different states, because both contained infromation which the other did not have. Because local changes hadn't been committed, they could be put aside to the stash. What would have happened if the local changes had been committed, i.e. the remote repository and the local project had commits which the other one doesn't have?

The situation can be solved by _merging_ together the commit in the remote version and the commit in the local version. Merging simply means combining parallel states. If the two states do not conflict, meaning that they do not contain changes overriding each other, Git can merge them automatically. A new commit, called a merge commit, is created in the process.

Actually, merging is built into the command `git pull`. In other words, it suffices to run `git pull` in order to combine the state of the remote to the state of the local version. In order to finish the automatic merge, the merge commit has to be given a message. Thus when you run `git pull`, a text editor will open, where Git has added a suggestion for the commit message. You can edit this message as you please, and create the commit by saving the message and exiting the editor, which concludes the merge.

Let's test merging in practice. We'll start by creating two non-conflicting commits by creating two new files, one in the remote repository and the other in the local version. After creating the two commits, running `git status` will output:

```
On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commit each, respectively.
  (use "git pull" to merge the remote branch into yours)
nothing to commit, working directory clean
```

Notice how Git is kind enough to notify us of the two parallel, differing states, and it even advices us on how to proceed.

{: .note }

> Remember that if <code>git status</code> doesn't display the newest state of the remote, you shoud run <code>git fetch</code> first.

Pushing the new commits will not work, as the command `git push` will output the following:

```
To git@github.com:user/repo.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'git@github.com:user/repo.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

However, Git gives instructions on what to do next. We'll fetch the new state of the remote and combine it with the local version by running `git pull`. When a text editor opens, we'll give the merge commit a message, save it, and exit. The following will be printed out to the terminal:

```
From github.com:user/repo
 * branch            main     -> FETCH_HEAD
Merge made by the 'recursive' strategy.
 new_file.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 new_file.txt
```

Now according to the output of `git status` we have created two commits, (`ahead by 2 commits`). The first one is the commit we created locally, which added one new file to the project, and the other one is the merge conflict. Pushing the two commits to GitHub should not result in any errors.

{: .important-title }

> Exercise 10
>
> 1. Create two non-conflicting commits, one directly to the remote repository, and another to the local version. For example, edit the first line of your shopping list via GitHub, and the last line on the local version.
> 2. Try pushing the local commit to the remote repository and observe the error message.
> 3. Pull the commit from the remote repository to your local version and write "my first merge" as the commit message. If you see "CONFLICT" printed out while pulling, read the next section "Merge Conflicts".
> 4. Finally, push all the changes to GitHub.

## Merge Conflicts

When several people are working on the same project, it is not uncommon for two developers to make changes to the same lines in some file. When merging the two changes together, how does Git know which of the changes to discard and which one to keep? Well, it doesn't, and so when mutually exclusive changes are found when merging, the automatic merge will fail. The conflict between two commits (or branches) is called a _merge conflict_. In these cases, someone has to hand pick the changes which will be kept in the project. This is called resolving a merge conflict.

Next we'll create a merge conflict. We'll start by writing "Greetings from GitHub" to a line in the `git_practice.txt` file via GitHub, and finish off by creating a commit. Then we'll edit the _exact_ same line locally by replacing it with "Greetings from my computer", and wrap the change up to another commit.

Now when we try to combine the newest states from the remote and local versions together with `git pull`, we get the following error message:

```bash
Auto-merging ...
CONFLICT (content): Merge conflict in git_practice.txt
Automatic merge failed; fix conflicts and then commit the result.
```

This means that we have successfully created a merge conflict. The line starting with `CONFLICT` tells us where the overlapping changes can be found. Let's open the file in question, `git_practice.txt`. We see the following:

```bash
<<<<<< HEAD
Greetings from my computer
======
Greetings from GitHub
>>>>>> baaf2c96cw031e11138d42c1a35065b9bf8b4400b
```

The mutually exclusive changes are separated with the symbols <, > and =. The word "HEAD" refers to the current commit (or the latest commit of the current branch in the local version), and the long letter and number combination is the id of the conflicting commit, coming in from the remote version. Advanced editors such as Visual Studio Code enable resolving conflicts with just a simple click, but otherwise the only option is to simply remove the lines one doesn't wish to keep in the project.

Notably, we'll remove the lines starting with <, > and =. In addition, we could for example combine the two greetings into one. In essence, the person resolving the conflict decides what remains in the file where the conflict is located.

In this case, we'll combine the greetings into a more concise one:

```
Greetings from my computer and from GitHub
```

Now running `git status` will output a message reminding us that we are currently resolving a merge conflict:

```
On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commit each, respectively.
 (use "git pull" to merge the remote branch into yours)
You have unmerged paths.
 (fix conflicts and run "git commit")

Unmerged paths:
 (use "git add <file>..." to mark resolution)

	both modified:   git_practice.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Let's add the resolved file to Git with `git add` (note that the flag -p would not work in this particular case). Running `git status` will then yield:

```
On branch main
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:

	modified:   git_practice.txt
```

Finally, we'll wrap up resolving the conflicts by, you guessed it, creating a new commit. The finishing touch is to push the result to GitHub, so that other developers can use the newest version.

Merge conflicts are enfuriating, but rather common when collaborating with others. The easiest way to avoid them is by making sure to always start developing on the newest version from the remote, i.e. by pulling before starting development. However, sometimes they cannot be avoided, in which case one must patiently go through the conflicting files.

Merge conflicts can also occur when taking changes out of the stash, if the hidden changes overlap with new ones.

{: .important-title}

> Exercise 11
>
> Create a merge conflict in your project and resolve it. Make sure to push the end result to GitHub.

## Commit history

All the commits added to a Git project add up to its _commit history_. Commit history is like a chain of commits, formed when commits are created on top of each other.

Storing a project's commit history is one of the greatest benefits of using version control. It allows returning back in time to a working version of the program, or observing how certaing files and features have changed over time.

### Examining commit history

GitHub provides arguably the easiest tool to examine a project's commit history. We'll start revisiting our project's commits from there.

Let's navigate to our project's front page. Above the file list on right corner, there's a link that says the number of commits in the repository. Here the link says "4 commits". Clicking this link allows us to view the old commits.

![Commits in GitHub](/assets/commits.png)

When you click the link, you'll see a list of all the commits which have been added to the project. There are three buttons on the right side of this view.

![Viewing a commit](/assets/browse-commit.png)

The button at the center of those three shows the beginning of a given commit's id. Pressing the button shows all the changes made in that particular commit. The additions are shown in green, and removed lines in red.

![Viewing changes](/assets/show-commit-en.png)

Then by pressing "Browse files", or the rightmost button with `<>` written on it from the previous view, you can browse the state of the project after a specific commit. A commit only contains a set of changes, but Git still enables revisiting the whole project after a given commit. You can return back to the latest commit of the main branch by pressing the button the "tree" icon on the left, and by choosing "main".

![Change back to main](/assets/back-to-main.png)

Of course, the same procedure can be repeated on the command line. You can browse the state of the project after a specific commit by running `git checkout commit_id`. You should check the id using `git log` for example. Similarly, you can move back to a specific branch by running `git checkout branch_name`, most commonly `git checkout main`. The changes made in a specific commit can be viewed with `git show commit_id`.

{: .important-title }

> Exercise 12
>
> 1. Create a new file to you project called <code>secret.txt</code>, and write something inside such as "this is a very important secret".
> 2. Create a new commit of the new file and the contents added to it.
> 3. Then remove the file <code>secret.txt</code>, and create a new commit of the deletition.
> 4. Push the changes to GitHub.
> 5. Navigate to the project page on GitHub. You shouldn't see the secret on the front page. Find the secret from your commit history. Find the secret also using the command line.

{: .warning}

> Remember, don't push anything secret to the remote repository: no passwords, personal API keys, your student number, or anything you wouldn't want to share with the whole Internet.

## The End

As a novice programmer it is easy to lose and even break code with version control. However, learning how to use one is definitely one of the most vital skills required in the working life. Though the system in use may not be Git, the same principles often apply.

If you run into a strange error message, don't be afraid to ask for help. Avoid running commands blindly. Keeping a close eye on the output of `git status` will get you a long way. Also remember to make commits a sensible size, push them to the remote repository regularly, and communicate with your team mates. The best way to learn how to use Git is to just do it, so don't give up and remove the project upon the first error message. Remember, that you can always just clone the repository to your computer again.

Hungry for more? You can read about Git from the following sources:

- <a href="https://git-scm.com/book/en/v2">https://git-scm.com/book/en/v2</a>
  - Pro Git Book is rather heavy, but a comprehensive guide to using Git. It might be best to use as a reference for specific problems. Reading it from cover to cover might be unnecessarily cumbersome.
- <a href="http://ohshitgit.com/">http://ohshitgit.com/</a>
  - A fun way of getting help to most common Git problems.
  - Some commands include overwriting Git history, which was not covered in this part. This might cause more problems than it helps. However, the site may be helpful in desperate times. Especially the first command `git reflog` can get you out of many complicated situations.
- <a href="https://try.github.io/">https://try.github.io/</a>
  - A tutorial by GitHub, starting from the basics. Handles some things which are not covered here, like `git diff`.
- If you've already gotten to know Git, you might be interested in learning more about its history. Storing commit history, demonstrated in the exercise "A Secret", also enables overwriting history. Although this can be useful for covering up mistakes, rewriting history can be dangerous in collaborative projects, since it can make other people's versions invalid. There is a tutorial on the subject by [Atlassan](https://www.atlassian.com/git/tutorials/rewriting-history). They also have other [advanced tutorials](https://www.atlassian.com/git/tutorials/advanced-overview).
