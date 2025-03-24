import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config.js";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([])
  // useEffect(()=>{},[]);
  useEffect(() => {
    const fetchData = async()=> {
      const data = await appwriteService.getPosts([])
      if(data) {
        setPosts(data.documents);
      }
    }
    fetchData();
  
  },[])
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
