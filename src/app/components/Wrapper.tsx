import styles from "../styles/wrapper.module.scss";

import React from "react";
// import Nav from "./Nav";
// import Home from "./Home";
import Panel from "./Panel";
import Main from "./Main";

// import { Main } from "next/document";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Panel></Panel>
      <Main></Main>
    </div>
  );
};

export default Wrapper;
