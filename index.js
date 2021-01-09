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

