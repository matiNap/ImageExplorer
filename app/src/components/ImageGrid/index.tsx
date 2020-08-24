import React from "react";
import { Image } from "../../types";
import "./style.css";
import { CircularProgress } from "@material-ui/core";

interface Props {
  loadImages: () => void;
  images: Image[] | null;
  loading: boolean;
}

interface RefObject<T> {
  current: T | null;
}

export default class ImageGrid extends React.Component<Props> {
  observer: RefObject<IntersectionObserver>;
  constructor(props) {
    super(props);
    this.observer = { current: null };
  }
  componentDidMount() {
    this.props.loadImages();
  }

  renderColumn = (images: Image[]) => {
    return images.map((data, index) => {
      const { urls } = data;
      return (
        <figure
          className="cell-container"
          key={`data.id${index}`}
          ref={images.length / 2 === index ? this.callObserver : null}
        >
          <img src={urls.regular} alt={"test"} className="cell-image" />
        </figure>
      );
    });
  };

  callObserver = (node) => {
    const { loading } = this.props;
    if (loading) return;
    if (this.observer.current) this.observer.current.disconnect();
    this.observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) this.props.loadImages();
    });

    if (node) this.observer.current.observe(node);
  };

  render() {
    const { images, loading } = this.props;

    if (images) {
      const maxIndex = images.length - 1;
      let col1 = [...images].splice(0, (1 / 3) * maxIndex);
      let col2 = [...images].splice(
        Math.floor((1 / 3) * maxIndex) + 1,
        (2 / 3) * maxIndex
      );
      let col3 = [...images].splice(
        Math.floor((2 / 3) * maxIndex) + 1,
        maxIndex
      );

      return (
        <div className="imager-grid-container">
          <div className="image-grid">
            <div className="image-grid-column">{this.renderColumn(col1)}</div>
            <div className="image-grid-column">{this.renderColumn(col2)}</div>
            <div className="image-grid-column">{this.renderColumn(col3)}</div>
            {true && (
              <div className="image-grid-loading-container">
                <CircularProgress color="primary" size={25} />
              </div>
            )}
          </div>
        </div>
      );
    } else
      return (
        <div className="image-grid-progress">
          <CircularProgress color="primary" size={50} />
        </div>
      );
  }
}
