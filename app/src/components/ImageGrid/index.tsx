import React, { useMemo, useEffect } from "react";
import { Image } from "../../types";
import "./style.css";
import { CircularProgress } from "@material-ui/core";

interface Props {
  loadImages: () => void;
  images: Image[] | null;
}

const renderColumn = (images: Image[]) => {
  return images.map((data) => {
    const { urls } = data;
    return (
      <figure className="cell-container" key={data.id}>
        <img src={urls.regular} alt={"test"} className="cell-image" />
      </figure>
    );
  });
};

export default class ImageGrid extends React.Component<Props> {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images } = this.props;

    if (images) {
      let arr = [...images];
      const maxIndex = images.length - 1;
      let col1 = arr.splice(0, (1 / 3) * maxIndex);
      let col2 = arr.splice((1 / 3) * maxIndex + 1, (2 / 3) * maxIndex);
      let col3 = arr.splice((2 / 3) * maxIndex + 1, maxIndex);

      return <div className="image-grid">{renderColumn(images)}</div>;
    } else
      return (
        <div className="image-grid-progress">
          <CircularProgress color="primary" size={50} />
        </div>
      );
  }
}
