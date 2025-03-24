import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [image, setImage] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug)
        .then((post) => {
          if (post && post.$id) {
            setPost(post);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    if (post && post.$id) {
      // Using slug instead of $id for consistency with your service method
      appwriteService.deletePost(slug).then((status) => {
        if (status.success) {
          // Make sure to use the same property name as in your data model
          appwriteService.deleteFile(post.featuredimages);
          navigate("/");
        }
      }).catch((error) => {
        console.error("Error deleting post:", error);
      });
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      // Check if post exists and has featuredimages before fetching
      if (post && post.featuredimages) {
        try {
          const url = await appwriteService.getFilePreview(post.featuredimages);
          setImage(url);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
    };
    
    fetchImage();
  }, [post]); // Add post as a dependency since we're using post.featuredimages

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={image ? image : ""}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}