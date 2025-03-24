import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredimages }) {//appwrite ka syntax hai $id wala
  const [image,setImage]=useState('')
  useEffect(()=>{
    const fetchImage = async()=>{
      const data = await appwriteService.getFilePreview(featuredimages);
      setImage(data);
    }
    fetchImage();
  },[])
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-400 rounded-4xl p-4 ">
        <div className="w-full justify-center mb-4 ">
          <img
            src={image}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
