import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div>
      <Header />
      {/* Home */}
      {/* About */}
      {/* Portfolio */}
      {/* Contact */}
      <section className="portfolio-section">
        <h1>Portfolio</h1>
        <Project
          title="Project Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://example.com"
          imgSrc="https://via.placeholder.com/500x300"
          imgAlt="Project Image"
        />
        <Project
          title="Project Title 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://example.com"
          imgSrc="https://via.placeholder.com/500x300"
          imgAlt="Project Image"
        />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;

