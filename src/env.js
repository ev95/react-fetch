import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com";
export const urls = {
  posts: "/posts",
  comments: "/comments",
  albums: "/albums",
  photos: "/photos",
  todos: "/todos",
  users: "/users",
};

export const axios_instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
