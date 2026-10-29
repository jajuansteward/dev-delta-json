console.log('loading script file?');


async function loadOptions() {

  const response = await fetch("data/data.json");

  if (!response.ok) {
    throw new Error("Could not load local JSON");
  }

  const data = await response.json();
  


  console.log(data);

  const favorite = document.querySelector("#favorite");
  let newOption;
  data.forEach((choice) => {
     newOption(choice.name, choice.id);
    favorite.appendChild(newOption);
  });
  const savedProfile =
  JSON.parse(sessionStorage.getItem("sessionProfile"));

renderProfile(savedProfile);
}

try {
  profileOutput.textContent = "Building your profile...";

  const apiData =  await.getApiData();
} catch (error) {
  console.error("Could not fetch API data:", error);
}
const sessionProfile = {
      user: {
        name: userData.name,
        comment: userData.comment
      },
      selection: {
        id: userData.favorite.toLowerCase(),
        name: userData.favorite
      },
      api: {
        value: "Random dog image",
        image: apiData.message
      }
    };

loadOptions();