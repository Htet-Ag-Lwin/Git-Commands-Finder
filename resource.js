var gitCommands = [
  {
    keyword: "init",
    fullCommand: "git init",
    usage: "This command turns a directory into an empty Git repository and initialized.",
  },
  {
    keyword: "add all files",
    fullCommand: "git add -A",
    usage: "Adds files in to the staging area for Git.",
  },
  {
    keyword: "add single file",
    fullCommand: "git add &lt;file&gt;",
    usage: "Add targeted file in to the staging area for Git.",
  },
  {
    keyword: "commit",
    fullCommand: "git commit -m &lt;message&gt;",
    usage: "Record the changes made to the files to a local repository.",
  },
  {
    keyword: "status",
    fullCommand: "git status",
    usage: "This command returns the current state of the repository.",
  },
  {
    keyword: "config username",
    fullCommand: "git config --global user.name &lt;user_name&gt;",
    usage:
      "Current is configuration for global username.",
  },
  {
    keyword: "config useremail",
    fullCommand: "git config --global user.email &lt;user_email&gt;",
    usage:
      "Current is configuration for global useremail.",
  },
  {
    keyword: "branch list",
    fullCommand: "git branch",
    usage:
      "To determine what branch the local repository is on.",
  },
  {
    keyword: "create new branch",
    fullCommand: "git branch &lt;branch_name&gt;",
    usage:
      "To create a new branch",
  },
  {
    keyword: "remove a branch",
    fullCommand: "git branch -d &lt;branch_name&gt;",
    usage:
      "To remove a existing branch",
  },
  {
    keyword: "checkout",
    fullCommand: "git checkout &lt;branch_name&gt;",
    usage:
      "To start working in a different branch, use git checkout to switch branches.",
  },
  {
    keyword: "merge",
    fullCommand: "git merge &lt;branch_name&gt;",
    usage:
      "Integrate branches together. Git merge combines the changes from one branch to another branch.",
  },
  // {
  //   keyword: "remote",
  //   fullCommand: "git remote <command>",
  //   usage: "To connect a local repository with a remote repository.",
  // },
  {
    keyword: "clone",
    fullCommand: "git clone &lt;remote_URL&gt;",
    usage:
      "To create a local working copy of an existing remote repository, use git clone to copy and download the repository to a computer.",
  },
  {
    keyword: "pull",
    fullCommand: "git pull &lt;remote_URL/remote_name&gt; &lt;branch_name&gt;",
    usage: "To get the latest version of a repository, run git pull.",
  },
  {
    keyword: "push",
    fullCommand: "git push &lt;remote_URL/remote_name&gt; &lt;branch_name&gt;",
    usage:
      "Sends local commits to the remote repository. git push requires two parameters: the remote repository and the branch that the push is for.",
  },
  // {
  //   keyword: "stash",
  //   fullCommand: "git stash -u",
  //   usage:
  //     "To save changes made when they’re not in a state to commit them to a repository.",
  // },
  {
    keyword: "log",
    fullCommand: "git log",
    usage: "To show the chronological commit history for a repository.",
  },
  {
    keyword: "unstage each tracked file",
    fullCommand: "git restore --staged &lt;file&gt;",
    usage: "Remove each file from tracked stage.",
  },
  {
    keyword: "unstage all tracked files",
    fullCommand: "git reset",
    usage: "Remove all files or directories from tracked stage.",
  },
  {
    keyword: "remove last commit",
    fullCommand: "git reset --soft HEAD^",
    usage: "Remove last commit safely.",
  },
];