import React from "react";
import { Image } from "../../types";
import "./style.css";
import { CircularProgress } from "@material-ui/core";
import ImageCell from "./components/ImageCell";

interface Props {
  loadImages: () => void;
  images: Image[] | null;
  loading: boolean;
  isProfile?: boolean;
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
      return (
        <ImageCell
          key={data.id}
          observerRef={images.length / 2 === index ? this.callObserver : null}
          data={data}
          isProfile={this.props.isProfile}
        />
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
      return (
        <div className="imager-grid-container">
          <div className="image-grid">{this.renderColumn(images)}</div>
          {loading && (
            <div className="image-grid-loading-container">
              <CircularProgress color="primary" size={25} />
            </div>
          )}
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
