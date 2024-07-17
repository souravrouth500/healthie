'use client'

import { CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Loading() {
  return (
    <HashLoader
      css={override}
      size={150}
      color={"#303F9F"}
      loading={true}
    />
  );
}

export default Loading;
