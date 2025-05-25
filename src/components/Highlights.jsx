import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="easy and quick"
              para="Get acess to the book you want in just a few clicks."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ books"
              para="Library has a vast collection of books across various genres."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on popular books at a fraction of the cost."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
