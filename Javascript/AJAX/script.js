async function getDataWithXHR() {
  try {
      const data = await makeRequestWithXHR();
      updatePage("XHR", data);
  } catch (error) {
      console.error("XHR failed:", error);
  }
}

function makeRequestWithXHR() {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const resource = "https://jsonplaceholder.typicode.com/todos/1";

      xhr.open("GET", resource, true);

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) { // Request is complete
              if (xhr.status === 200) { // Success
                let resp = JSON.parse(xhr.response);
                resolve(resp);
              } else {
                reject(new Error(`HTTP error! status: ${response.status}`));
              }
          }
      };

      xhr.send();
  });
}

// Define an async function that fetches data from a JSON API
async function getDataWithFetch() {
  try {
    const resource = "https://jsonplaceholder.typicode.com/todos/1";
    const options = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"},
    };
    // Use fetch API to fetch data from a URL
    const response = await fetch(resource, options);

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Output the fetched data
    updatePage("Fetch", data);

  } catch (error) {
    // If an error occurs, log it to the console
    console.error("Fetch failed:", error);
  }
}

function updatePage(requestType, data) {
  document.querySelector("#output").innerHTML = `
  <h2>Retrieved Data with ${requestType}</h2>
  <p>ID: ${data.id}</p>
  <p>Title: ${data.title}</p>
  <p>Completed: ${data.completed}</p>
`;
}

// Attach the getData function to button click
document.querySelector("#getXHR").addEventListener("click", getDataWithXHR);
document.querySelector("#getFetch").addEventListener("click", getDataWithFetch);