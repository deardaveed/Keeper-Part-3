import React, { useState } from "react";

function CreateArea(props) {
  const [noteDetails, setNoteDetails] = useState({ title: "", content: "" });
  // const [noteTitle, setTitle] = useState("");
  // const [noteContent, setContent] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteDetails((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(noteDetails);
    setNoteDetails({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={noteDetails.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={noteDetails.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
