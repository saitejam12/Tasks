import React from "react";
import Count from "./Count";
import CheckBox from "./CheckBox";

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      check: props.check,
      previousRoom: props.room.prev,
      nextRoom: props.room.next,
      selectStat: true
    };
    console.log(this.state);
  }
  updateRoom = check => {
    this.setState({
      check: check,
      selectStat: !check
    });

    this.props.updateAllRooms(this.state.id);
  };

  render() {
    return (
      <div className="container">
        <CheckBox
          id={this.state.id}
          check={this.state.check}
          updateRoom={this.updateRoom}
        />
        <Count
          id={this.state.id}
          check={this.state.check}
          status={this.state.selectStat}
        />
        <style jsx>
          {`
            .container {
              display: block;
              width: 80%;
              height: 87%;
              margin: 10px;
              background-color: ${this.state.check || this.state.id == 1
                ? "gainsboro"
                : "darkgray"};
              border-radius: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Box;
