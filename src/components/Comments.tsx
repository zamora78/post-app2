import { useState, useEffect, useContext } from "react";
import { IComment } from "../interfaces/Interfaces";
import { useListComments } from "../hooks/FetchData";
import { DataContext } from "../context/PostContext";

const ShowComments = () => {
  const Posts = useContext(DataContext);
};
