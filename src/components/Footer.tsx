import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center mt-8 py-4 text-gray-300">
      <div className="container mx-auto">
        <p>
          <a
            href="mailto:jozef.javorsky.dodo@gmail.com"
            className="text-blue-400 hover:underline"
          >
            jozef.javorsky.dodo@gmail.com&nbsp;
          </a>{" "}
          |&nbsp;
          <a
            href="https://github.com/jozef-javorsky-dodo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            &nbsp;GitHub&nbsp;
          </a>{" "}
          |&nbsp;
          <a
            href="https://g.dev/jozef-javorsky-dodo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            &nbsp;Google Dev&nbsp;
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
