import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";

function SubmitForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitRequest = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/cards", {
        title,
        description,
      })
      .then((res) => {
        console.log(res);
        toast.success("Request SuccessFully");
        navigate("/");
      })
      .catch((e) => {
        toast.error("Please Fill all Fields!");
        console.log(e);
      });
  };
  return (
    <div className="main-container">
      <form onSubmit={onSubmitRequest} className="form-container">
        <h2>Help Request Form</h2>
        <div className="input-container">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            placeholder="Enter your title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="title">Description :</label>
          <input
            type="text"
            placeholder="Enter your description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default SubmitForm;
