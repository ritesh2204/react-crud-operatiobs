import axios from "axios";

const host = "http://13.232.242.50:33138";

class RestClient {
  static get(url, cb) {
    axios
      .get(host + url)
      .then(function(response) {
        console.log(response);
        cb(null, response.data);
      })
      .catch(function(error) {
        console.log(error);
        cb(error, null);
      });
  }

  static post(url, body, token, cb) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    };

    axios
      .post(host + url, body, {
        headers: headers
      })
      .then(function(response) {
        console.log(response);
        cb(null, response.data);
      })
      .catch(function(error) {
        console.log(error);
        cb(error, null);
      });
  }
}

export default RestClient;
