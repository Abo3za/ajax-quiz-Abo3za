const getReposButton = document.getElementById("get-repos");
const reposList = document.getElementById("repos-list");

getReposButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;

  const url = `https://api.github.com/users/${username}/repos`;
  const ulElement = document.getElementById("repos-list");

  const response = await fetch(url);
  const data = await response.json();

  data.forEach((repo) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.href = repo.html_url;
    aElement.innerText = item.full_name;

    liElement.appendChild(aElement)
    liElement.innerText = repo.full_name;
    ulElement.appendChild(liElement);
  });
});
