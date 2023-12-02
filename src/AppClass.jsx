import { Component } from "react";
import "./App.css";
import ElephantImage from "./images/elephant.jpeg";

export default class ImageGallery extends Component {
  imageData = () => {
    let data = [
      { id: 1, img: ElephantImage },
      { id: 2, img: ElephantImage },
      { id: 3, img: ElephantImage },
      { id: 4, img: ElephantImage }
    ];
    return data;
  };

  render() {
    const imgData = this.imageData();
    return (
      <>
        <h1>Elephant Gallery</h1>
        <div className="image-container">
          {imgData.map((item) => (
            <img src={item.img} key={item.id} className="gallery-img" alt="" />
          ))}
        </div>
      </>
    );
  }
}
