import React from "react";
// import GOLD from "./GOLD.png";
import { useNavigate } from "react-router-dom";
export const Cards = () => {
  const data = [
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
    {
      h1: "Weekly",
      mob_Data: "1GB",
      mints: 500,
      price: 170,
      pic: "PIC.png",
    },
    {
      h1: "Monthly",
      mob_Data: "10GB",
      mints: 900,
      price: 870,
      pic: "PIC.png",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div class="wrapper">
        {data.map((Element) => {
          return (
            <div class="golde">
              <div class="basic">
                <h3>{Element.h1}</h3>
                <p>
                  <b>{Element.mob_Data}</b> Data
                </p>
                <p>
                  <b>{Element.mints}</b> Jazz Mins
                </p>
                <p>
                  <b>200</b> Other Network Mins
                </p>
                <p>
                  <b>3000</b> SMS
                </p>
              </div>
              <div class="rs">
                <h3>Rs.{Element.price}</h3>
              </div>
              <div>
                <button class="btn-pkg" onClick={() => navigate("/")}>
                  Add to Cart
                </button>
                <br />
                <img class="pkg-img" src={Element.pic} alt="hi" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
