import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useListPostDetail } from "../hooks/FetchData";
import { useListComments } from "../hooks/FetchData";
import { DataContext } from "../context/PostContext";

const ShowDetails = () => {
  const [data, setData]: any = useContext(DataContext);

  console.log("Data-contexto: ", data);

  return (
    <div className="details-container">
      {/* {data &&
        data.map((item: any) => {
          return (
            <div>
              <p>{item.body}</p>
            </div>
          );
        })} */}
    </div>
  );
};
export default ShowDetails;
