import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      check: props.check,
      id: props.id
    };
  }
  handleChange = e => {
    this.props.updateRoom(e.target.checked);
  };
  render() {
    return (
      <div className="container">
        {this.state.id != 1 ? (
          <input type="checkbox" name="check" onChange={this.handleChange} />
        ) : (
          ""
        )}
        <p>{`Room ${this.state.id}`}</p>

        <style jsx>
          {`
            .container {
              display: grid;
              grid-template-columns: ${this.state.id != 1 ? "5% 35%" : "50%"};
              grid-template-rows: 20px;
              grid-gap: 2px;
              width: 90%;
              margin: 3%;
              padding: 2%;
            }
            p {
              margin-left: 2px;
              margin-top: 0;
              margin-bottom: 0;
              padding-left: 12%;
              position: relative;
              display: inline;
              font-weight: ${this.state.check && this.state.id != 1
                ? "bold"
                : "none"};
            }
          `}
        </style>
      </div>
    );
  }
}

export default CheckBox;
