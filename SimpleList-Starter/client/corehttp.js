// Constructor to create an XHR object
class coreHTTP {

  /* <<< HTTP GET request >>> */
  async get(url) {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const responseData = await response.json();
      return (responseData);
    } else {
      return (Promise.reject(response.status));
    }
  }
  
  /* <<< HTTP POST request >>> */
  async post(url, requestData) {
    const reqOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestData)};
    const response = await fetch(url, reqOptions);
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return (Promise.reject(response.status));
    }
  }
  
  /* <<< HTTP PUT request >>> */
  async put(url, requestData) {
    const reqOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestData)};
    const response = await fetch(url, reqOptions);
    if (response.ok) {
      const responseData = await response.json();
      return (responseData);
    } else {
      return (Promise.reject(response.status));
    }
  }

  async delete(url) {
    const reqOptions = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}};
      const response = await fetch(url, reqOptions);
      if (response.ok) {
        return ({});
      } else {
        return (Promise.reject(response.status));
      }
  }
}
