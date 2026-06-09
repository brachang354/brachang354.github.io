const fetchData = async function () {
  const url = "https://official-joke-api.appspot.com/random_joke";

  const joke = document.querySelector(".joke");

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData();
