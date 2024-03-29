import { HashLink } from "react-router-hash-link";

import About from "./About";

export default function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <HashLink
        to="#about"
        smooth
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
      >
        About Inside Home
      </HashLink>

      <section style={{ marginBottom: "500px" }}>My github repository</section>
      <About isHome />
    </div>
  );
}
