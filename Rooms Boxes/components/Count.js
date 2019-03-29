import React from "react";

const Count = props => {
  console.log(props);
  return (
    <div className="input-contain">
      <div>
        <p>Adults</p>
        <p>(18+)</p>
        {props.id !== 1 ? (
          <select value={props.value} disabled={props.status}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        ) : (
          <select value={props.value}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        )}
      </div>
      <div>
        <p>Children</p>
        <p>(0-17)</p>
        {props.id != 1 ? (
          <select value={props.value} disabled={props.status}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        ) : (
          <select value={props.value}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        )}
      </div>
      <style jsx global>
        {`
          .input-contain {
            display: grid;
            grid-template-columns: 50% 50%;

            margin: 3%;
            margin-top: 5%;
            background-color: "white";
            padding: 15% 3% 15% 3%;

            align-content: center;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          p {
            margin: 0;
            line-spacing: 2px;
          }
          select {
            border: 1px solid grey;
            outline: none;
            width: 70%;
          }
        `}
      </style>
    </div>
  );
};
export default Count;
// const Value = () => (
//   <div>
//     <select>
//       <option value="1">1</option>
//       <option value="2">2</option>
//     </select>
//     <style jsx>
//       {`
//         select {
//           border: inset;
//           width: 20px;
//           hetght: 30px;
//           text-align: center;
//         }
//       `}
//     </style>
//   </div>
// );

// const ValueC = props => (
//   <div>
//     <select value={props.value}>
//       <option value="1">1</option>
//       <option value="2">2</option>
//     </select>
//     <style jsx>
//       {`
//         select {
//           border: inset;
//           width: 20px;
//           hetght: 30px;
//           text-align: center;
//         }
//       `}
//     </style>
//   </div>
// );

//ValueC
