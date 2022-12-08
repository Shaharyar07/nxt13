"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateNotes = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const SubmitForm = async (e: any) => {
    e.preventDefault();
    console.log("====================================");
    console.log(title, content);
    console.log("====================================");
    const response = await fetch(
      "http://127.0.0.1:8090/api/collections/blog/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );
    setTitle("");
    setContent("");
    router.refresh();
  };
  return (
    <div>
      <h1>Create Notes</h1>
      <form onSubmit={SubmitForm}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='content'>Content</label>
        <input
          type='text'
          name='content'
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateNotes;
