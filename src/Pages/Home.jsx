import React from "react";
import About from "../Components/About";
import Featured from "../Components/Featured";
import Testimonial from "../Components/Testimonial";

export default function Home() {
  return (
    <main className="mainpage">
      <Featured />
      <About />
      <Testimonial />
    </main>
  );
}
