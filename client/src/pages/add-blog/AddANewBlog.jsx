import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";

const AddANewBlog = () => {
  const { formData, setFormdata } = useContext(GlobalContext);
  console.log(formData);
  async function handleSaveBlogToDatabase(params) {
    const response = await axios.post("http://localhost:5000/api/blogs/add", {
      title: formData.title,
      description: formData.description,
    });
    const result = await response.data;
    console.log(result);
  }
  return (
    <div className="wrapper">
      <h1>Add A Blog</h1>;
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
        <button onClick={handleSaveBlogToDatabase}>Add New Blog</button>
      </div>
    </div>
  );
};

export default AddANewBlog;
