import React, { useState, useEffect } from "react";

import NameListItem from "./NameListItem";

export default function NameList() {
  const [loadDate, setLoadData] = useState(new Date());
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: { title: "mr", first: "brad", last: "gibson" },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
      },
      email: "brad.gibson@example.com",
      gender: "male",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
      phone: "011-962-7516",
      picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    },
    {
      id: 2,
      name: {
        title: "ms",
        first: "غزل",
        last: "سهيلي راد",
      },
      location: {
        street: "9278 new road",
        city: "زاهدان",
        state: "ربایجان",
        postcode: "927",
      },
      email: "gzl.shylyrd@example.com",
      gender: "female",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 25 },
      phone: "011-982-7515",
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
      },
    },
    {
      id: 3,
      name: {
        title: "mr",
        first: "Mikkel",
        last: "Larsen",
      },
      location: {
        street: "4717",
        city: "Beder",
        state: "Nordjylland",
        postcode: "9027",
      },
      email: "mikkel.larsen@example.com",
      gender: "male",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 30 },
      phone: "011-032-7586",
      picture: { medium: "https://randomuser.me/api/portraits/med/men/0.jpg" },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList((nameList) => [...nameList, responseData.results[0]]);
      });
  }, [loadDate]);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={
            aName.name.title + " " + aName.name.first + " " + aName.name.last
          }
          location={
            aName.location.city +
            "," +
            aName.location.street +
            "," +
            aName.location.state +
            "," +
            aName.location.postcode
          }
          email={aName.email}
          gender={aName.gender}
          birthday={aName.dob.age}
          phone={aName.phone}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date());
    // const newUser = {
    //   id: new Date(),
    //   name: {
    //     title: "mr",
    //     first: "black",
    //     last: "gibson",
    //   },
    //   location: {
    //     street: "9278 new road",
    //     city: "kilcoole",
    //     state: "waterford",
    //     postcode: "93027",
    //   },
    //   email: "brad.gibson@example.com",
    //   gender: "male",
    //   dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
    //   phone: "011-962-7516",
    //   picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    // };

    // setNameList((nameList) => nameList.concat(newUser));
  };

  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>
          Add User
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}
