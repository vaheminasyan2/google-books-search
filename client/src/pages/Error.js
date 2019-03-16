import React from "react";
import Main from "../components/Main/main";
import Row from "../components/Row/row";
import Title from "../components/Title/title";

const textStyle = {
  left: "25%",
  right: "25%",
  width: "50%",
  position: "relative",
};

function Error() {
  return (
    <div>
      <Title />
      <Main>
        <Row>
          <h1 className="text-center" style={textStyle}>
            404 Page Not Found
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
              </span>
          </h1>
        </Row>
      </Main>
    </div>
  );
}

export default Error;
