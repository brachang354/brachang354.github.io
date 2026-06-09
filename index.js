const createNewElement = function (data) {
  const { setup, punchline } = data;

  const jokeContainer = document.createElement("div");
  const jokeSetup = document.createElement("p");
  const jokePunchline = document.createElement("p");

  jokeSetup.textContent = setup;
  jokePunchline.textContent = punchline;

  jokeContainer.append(jokeSetup);
  jokeContainer.append(jokePunchline);
  return jokeContainer;
};

const fetchData = async function () {
  const url = "https://official-joke-api.appspot.com/random_joke";

  const joke = document.querySelector(".joke");

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const elem = createNewElement(data);
      joke.append(elem);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData();
