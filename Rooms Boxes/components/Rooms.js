import React from "react";
import Box from "./Box";

class Rooms extends React.Component {
  state = {
    rooms: [
      {
        id: 1
      },
      {
        id: 2,
        room: {
          now: false
        }
      },
      {
        id: 3,
        room: {
          now: false
        }
      },
      {
        id: 4,
        room: {
          now: false
        }
      }
    ]
  };
  updateAllRooms = (room_id, status) => {
    if (room_id > 2) {
    }
  };
  render() {
    return (
      <div className="main_contain">
        {this.state.rooms.map((room, key) => (
          <Box
            room={room}
            id={room.id}
            key={key}
            updateAllRooms={this.updateAllRooms}
          />
        ))}
        <button type="submit">Submit</button>
        <style jsx>
          {`
            .main_contain {
              display: grid;
              grid-template-columns: 20% 20% 20% 20%;
              grid-template-rows: 200px 50px;
            }
            button {
              outline: none;
              margin: 4% 10% 4% 10%;
              padding: 0;
              border: 1px solid grey;
              box-shadow: 0 1px 3px 0 rgba(30, 30, 30, 0.9);
              background-color: gainsboro;
            }
            button:active {
              transform: translateZ(-10px);
              background-color: darkgrey;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Rooms;
