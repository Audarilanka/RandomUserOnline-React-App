import React from "react";

export default function NameListItem(props) {
  return (
    <div>
      <ul>
        <li className="list-group-item shadow-sm">
          <div className="row align-items-center">
            <div className="col-2">
              <img
                src={props.avatar}
                alt={props.name}
                className="border border-dark rounded-circle shadow-sm"
              />
            </div>
            <div className="col-10">
              <h5>{props.name} </h5>
              <p>Location: {props.location} </p>
              <p>
                Email: {props.email} | Gender: {props.gender} | Age:{" "}
                {props.birthday}
              </p>

              <p>
                <small>Phone: {props.phone} </small>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
