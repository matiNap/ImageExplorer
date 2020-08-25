import React from "react";
interface Props {
  value: number;
  label: string;
}

export default ({ value, label }: Props) => {
  return (
    <div className="profile-stat-column">
      <p className="profile-stat-number">{value}</p>
      <p className="profile-stat-label">{label}</p>
    </div>
  );
};
