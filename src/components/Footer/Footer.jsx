import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer d-flex direction-column align-center">
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          ❤️
        </span>{" "}
        by Sumit Bhasagi
      </p>
      <div className="d-flex gap align-center padding-all-8">
        <a
          href="https://github.com/SumitBhasagi"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/github-logo.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://x.com/SumitBhasagi"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid"
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-bhasagi-7782b0291/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};
