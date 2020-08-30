import React from "react";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
// https://www.davidhu.io/react-spinners/
// https://github.com/davidhu2000/react-spinners
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ExampleLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default ExampleLoader;