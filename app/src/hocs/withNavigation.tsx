import React, { useState } from "react";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";

export default (HigerComponent: React.ComponentType<any>) => {
  return (props) => {
    const [hidden, setHidden] = useState(true);
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header {...{ setHidden }} />
        <Drawer {...{ setHidden, hidden }} />
        <HigerComponent {...props} />
        <Footer />
      </div>
    );
  };
};
