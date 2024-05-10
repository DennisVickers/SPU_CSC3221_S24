// Function to set local storage
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// Function to get local storage
function getLocalStorage(key) {
  return localStorage.getItem(key);
}

// Function to remove local storage
function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

// Example usage
setLocalStorage('user', 'John Doe'); // Stores 'user' with the value 'John Doe'
console.log(getLocalStorage('user')); // Retrieves the value of 'user' from local storage
removeLocalStorage('user'); // Removes 'user' from local storage
