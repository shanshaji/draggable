import React, { Component } from "react";

class Draggable extends Component {
  constructor() {
    super();
    this.state = {
      x: window.innerWidth - 100,
      y: window.innerHeight - 100,
      dragging: false
    };
  }

  getDragImage() {
    let img = new Image();
    img.src = "";
    return img;
  }

  onPanStart = e => {
    if (e.type === "dragstart") {
      e.dataTransfer.setDragImage(this.getDragImage(), 0, 0);
    }
    this.setState({ dragging: true });
  };

  onPan = e => {
    if (e.clientX <= 0 || e.clientY <= 0) return false;
    this.setState({ x: e.clientX });
    this.setState({ y: e.clientY });
  };

  onPanEnd = e => {
    this.setState({ dragging: false });
  };

  render() {
    const { x, y, dragging } = this.state;
    const { children } = this.props;
    return (
      <div
        draggable={true}
        style={{
          display: "inline-block",
          position: "relative",
          zIndex: 99999,
          WebkitTransform: `translate3d(${x - 32}px, ${y - 32}px, 0)`,
          transform: `translate3d(${x - 32}px, ${y - 32}px, 0)`,
          MsTransform: `translate3d(${x - 32}px, ${y - 32}px, 0)`,
          MozTransform: `translate3d(${x - 32}px, ${y - 32}px, 0)`
        }}
        onDragStart={this.onPanStart}
        onTouchStart={this.onPanStart}
        onDrag={this.onPan}
        onTouchMove={this.onPan}
        onDragEnd={this.onPanEnd}
        onTouchEnd={this.onPanEnd}
      >
        {children}
      </div>
    );
  }
}
export default Draggable;
