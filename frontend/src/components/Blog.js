import React, { useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState } from "react";
import axios from "axios";

const Blog = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [blogData, setBlogData] = useState([])

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => {
      getData()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Blog;