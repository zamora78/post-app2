import { useState, useEffect } from "react";
import { IPost } from "../interfaces/Interfaces";

export const useListPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return posts;
};

export const useListPostDetail = (id: string) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return post;
};

export const useListComments = (id: string) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((comments) => setComments(comments));
  }, []);
  return useListComments;
};
