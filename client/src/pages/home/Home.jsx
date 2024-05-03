import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import "./styles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;
    console.log(result);
    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  function handleEdit(getCurrentBlogItem) {
    console.log(getCurrentBlogItem);
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  async function handleDeleteBlog(getCurrentId) {
    const response = axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = (await response).data;
    if (result?.message) {
      fetchListOfBlogs();
    }
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);
  return (
    <div className="wrapper">
      <h3>Blog List</h3>
      {pending ? (
        <h1>Loading Blogs ! Please wait.</h1>
      ) : (
        <div className="blogList">
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem._id}>
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <FaEdit size={30} onClick={() => handleEdit(blogItem)} />
                <FaTrash
                  size={30}
                  color="red"
                  onClick={() => handleDeleteBlog(blogItem._id)}
                />
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
