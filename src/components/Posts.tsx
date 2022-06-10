import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/PostContext";
import ShowDetails from "./PostDetails";

const RenderPosts = () => {
  const [dataGlobal, setDataGlobal]: any = useContext(DataContext);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
    setDataGlobal({ ...dataGlobal, posts: posts });
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold text-2xl text-slate-700 ">
        {posts &&
          posts.map((item: any) => {
            return (
              <div className="post-container" key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })}
        <ShowDetails />
      </h1>
    </div>
  );
};

export default RenderPosts;
