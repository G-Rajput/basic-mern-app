import mongoose from "mongoose";
import Blog from "../modal/Blog";

//fetch list of blogs
//add a new blog
//delete a blog
//update a blog

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};
