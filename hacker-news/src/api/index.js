import axios from "axios";

const client = axios.create({
  baseURL: "https://api.hnpwa.com/v0",
});

function fetchNewsList() {
  return client.get("/news/1.json");
}

function fetchJobsList() {
  return client.get("/jobs/1.json");
}

function fetchAskList() {
  return client.get("/ask/1.json");
}

function fetchUserInfo(id) {
  return client.get(`/user/${id}.json`);
}

export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo };
