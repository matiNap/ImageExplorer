import React, { useState } from "react";
import Header from "../components/Header";
import Drawer from "../components/Drawer";

export default (HigerComponent: React.ComponentType<any>) => {
  return (props) => {
    const [hidden, setHidden] = useState(true);
    return (
      <div>
        <Header {...{ setHidden }} />
        <Drawer {...{ setHidden, hidden }} />
        <HigerComponent {...props} />
      </div>
    );
  };
};
