import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images &&
            images.map((photo, index) => (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                data-index={index}
                onClick={this.handleClick}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
