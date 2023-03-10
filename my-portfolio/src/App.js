import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* Home */}
      {/* About */}
      {/* Portfolio */}
      {/* Contact */}
      <section>
        <h1>Portfolio</h1>
        <Project
          title="Project Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor turpis vitae tellus maximus, ut hendrerit justo vestibulum. Nam eget augue vestibulum, eleifend nulla id, aliquam enim. Praesent a felis in eros facilisis dignissim ac non eros. Nullam pharetra consequat odio, eu consequat massa lacinia ut. Sed eget gravida nunc. In hac habitasse platea dictumst. Maecenas eget est tortor. Aliquam a libero nec felis bibendum consequat. Etiam aliquet elit vitae lectus efficitur laoreet. Praesent eget magna sed augue dapibus volutpat. Donec a justo leo."
          link="https://example.com"
          imgSrc="https://via.placeholder.com/500x300"
          imgAlt="Project Image"
        />
        <Project
          title="Project Title 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor turpis vitae tellus maximus, ut hendrerit justo vestibulum. Nam eget augue vestibulum, eleifend nulla id, aliquam enim. Praesent a felis in eros facilisis dignissim ac non eros. Nullam pharetra consequat odio, eu consequat massa lacinia ut. Sed eget gravida nunc. In hac habitasse platea dictumst. Maecenas eget est tortor. Aliquam a libero nec felis bibendum consequat. Etiam aliquet elit vitae lectus efficitur laoreet. Praesent eget magna sed augue dapibus volutpat. Donec a justo leo."
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

