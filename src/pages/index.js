import * as React from "react";
import "../styles/main.scss";
import FloatingImage from "../components/floating-image";
import { Link } from "gatsby";
// data

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Boswell & Associates</title>

        <div className="container">
          <h1 className="cyberpunk glitched">Boswell & Associates</h1>
          <section className="cyberpunk black">
            <p>In order to access Boswell & Associates, please allow access to device microphone, camera and memory.</p>

            <Link to="/home">
              <button className="cyberpunk2077 green">
                Yes
              </button>
            </Link>


            <Link to="/home">
              <button className="cyberpunk2077 red">
                No
              </button>
            </Link>
          </section>
          <FloatingImage image="This works"></FloatingImage>
        </div>
    </main>
  );
};

export default IndexPage;
