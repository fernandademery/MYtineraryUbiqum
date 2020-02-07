import React, { useState } from "react";
import { Button, Input } from "antd";
//import { useSelector } from "react-redux";

export default function Comments(props) {
  const { TextArea } = Input;

  const [Comment, setComment] = useState("");

  const handleChange = e => {
    setComment(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    //function from actions
  };

  return (
    <div>
      <h2> Comments</h2>
      <br />
      <p>replies</p>
      <hr />
      {/* Comment List */}
      {console.log(props.CommentLists)}
      <form style={{ dislay: "flex" }} onSubmit={onSubmit}>
        <TextArea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleChange}
          value={Comment}
          placeholder="Write your comment here"
        />
        <br />
        <Button onClick={onSubmit} style={{ width: "100px", height: "40px" }}>
          Submit
        </Button>
      </form>{" "}
    </div>
  );
}
