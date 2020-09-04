import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default ({ children, onClick }: Props) => {
  return (
    <div className="dropdown-item-container" {...{ onClick }}>
      {children}
    </div>
  );
};
