function showHint() {
  let searchInput = document.getElementById("search").value;
  const displayHint = document.getElementById("displayHint");
  const result = document.getElementById("result");
  const hintVisual = document.getElementById("hint");
  if (searchInput === "") {
    hintVisual.style.display = "none";
    result.style.display = "none";
    return;
  }
  while (displayHint.hasChildNodes()) {
    displayHint.removeChild(displayHint.firstChild);
  }
  for (let index = 0; index < gitCommands.length; index++) {
    const gitCommand = gitCommands[index];
    gitCommand.keyword.search(searchInput);
    if (gitCommand.keyword.search(searchInput) !== -1) {
      const div = document.createElement("div");
      div.innerHTML = gitCommand.fullCommand;
      displayHint.appendChild(div);
      hintVisual.style.display = "initial";
      result.style.display = "none";
      const className = document.createAttribute("class");
      className.value =
        "my-2 p-1 border border-top-0 border-left-0 border-right-0";
      div.setAttributeNode(className);
      div.onclick = function () {
        result.style.display = "initial";
        hintVisual.style.display = "none";
        document.getElementById("command").innerHTML = gitCommand.fullCommand;
        document.getElementById("description").innerHTML = gitCommand.usage;
      };
    }
  }
}

var gitCommands = [
  {
    keyword: "init",
    fullCommand: "git init",
    usage: "This command turns a directory into an empty Git repository.",
  },
  {
    keyword: "add",
    fullCommand: "git add",
    usage: "Adds files in the to the staging area for Git.",
  },
  {
    keyword: "commit",
    fullCommand: "git commit -m 'message'",
    usage: "Record the changes made to the files to a local repository.",
  },
  {
    keyword: "status",
    fullCommand: "git status",
    usage: "This command returns the current state of the repository.",
  },
  {
    keyword: "config",
    fullCommand: "git config",
    usage:
      "With Git, there are many configurations and settings possible. git config is how to assign these settings.",
  },
  {
    keyword: "branch",
    fullCommand: "git branch",
    usage:
      "To determine what branch the local repository is on, add a new branch, or delete a branch.",
  },
  {
    keyword: "checkout",
    fullCommand: "git checkout 'branch name'",
    usage:
      "To start working in a different branch, use git checkout to switch branches.",
  },
  {
    keyword: "merge",
    fullCommand: "git merge <branch name>",
    usage:
      "ntegrate branches together. git merge combines the changes from one branch to another branch.",
  },
  {
    keyword: "remote",
    fullCommand: "git remote <command>",
    usage: "To connect a local repository with a remote repository.",
  },
  {
    keyword: "clone",
    fullCommand: "git clone <remote_URL>",
    usage:
      "To create a local working copy of an existing remote repository, use git clone to copy and download the repository to a computer.",
  },
  {
    keyword: "pull",
    fullCommand: "git pull <branch_name> <remote_URL/remote_name>",
    usage: "To get the latest version of a repository run git pull.",
  },
  {
    keyword: "push",
    fullCommand: "git push —all",
    usage:
      "Sends local commits to the remote repository. git push requires two parameters: the remote repository and the branch that the push is for.",
  },
  {
    keyword: "stash",
    fullCommand: "git stash -u",
    usage:
      "To save changes made when they’re not in a state to commit them to a repository.",
  },
  {
    keyword: "log",
    fullCommand: "git log",
    usage: "To show the chronological commit history for a repository.",
  },
  {
    keyword: "rm",
    fullCommand: "git rm -f",
    usage: "Remove files or directories from the working index (staging area).",
  },
];
