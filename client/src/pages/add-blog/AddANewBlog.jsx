import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";

const AddANewBlog = () => {
  const { formData, setFormdata, isEdit, setIsEdit } =
    useContext(GlobalContext);
  console.log(formData);
  const navigate = useNavigate();
  const location = useLocation();
  async function handleSaveBlogToDatabase(params) {
    const response = isEdit
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:5000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });
    const result = await response.data;
    console.log(result);

    if (result) {
      setFormdata({
        title: "",
        description: "",
      });
      navigate("/");
      setIsEdit(false);
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setIsEdit(true);
      setFormdata({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    }
  }, [location]);
  return (
    <div className="wrapper">
      <h3>{isEdit ? "Edit A Blog" : "Add A Blog"}</h3>
      <div className="formWrapper">
        <input
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormdata({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormdata({
              ...formData,
              description: event.target.value,
            })
          }
        />
        <button onClick={handleSaveBlogToDatabase}>
          {isEdit ? "Edit Blog" : "Add New Blog"}
        </button>
      </div>
    </div>
  );
};

export default AddANewBlog;
