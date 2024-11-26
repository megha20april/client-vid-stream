import React, { useState } from "react";

// NOTE: Uploading.... State and when finished transcoding , it will be updated to "Uploaded"

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescp] = useState("");

  // Handles file selection and sets the state
  // without this i won't have access to the file
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage("Please select a file.");
      setMessageColor("red");
      return;
    }

    // through this FormData object, we're implicitly setting the content type to multipart/form-data
    const formData = new FormData();
    formData.append("vids", selectedFile);
    formData.append("title", title);
    formData.append("description", description);

    // try {
    //   const response = await fetch("http://localhost:4000/upload", {
    //     method: "POST",
    //     body: formData, // Send the FormData object in the body
    //   });

    //   if (response.ok) {
    //     setMessage("File uploaded successfully!");
    //     setMessageColor("green");
    //   } else {
    //     setMessage("File upload failed. Please try again.");
    //     setMessageColor("red");
    //   }
    // } catch (error) {
    //   setMessage("An error occurred. Please try again.");
    //   setMessageColor("red");
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description: </label>
        <input
          type="textarea"
          name="description"
          id="description"
          onChange={(e) => setDescp(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
      {/* Message displayed below the upload button */}
      {message && (
        <p style={{ color: messageColor, marginTop: "10px" }}>{message}</p>
      )}
    </div>
  );
}

export default Upload;
