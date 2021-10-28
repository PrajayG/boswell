import * as React from "react";
import "../styles/main.scss";
import FloatingImage from "../components/floating-image";

// data

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Boswell & Associates</title>

        <div className="container">
          <h1>Boswell & Associates</h1>

          <FloatingImage image="This works"></FloatingImage>
        </div>
    </main>
  );
};

export default IndexPage;
