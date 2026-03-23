import React, { useState } from "react";
import {
  FaLeaf,
  FaBook,
  FaChalkboardTeacher,
  FaUserFriends,
  FaFaucet,
  FaTheaterMasks,
  FaParking,
  FaUtensils,
  FaBed,
  FaLaptop,
  FaFlask,
  FaDesktop,
} from "react-icons/fa";

// Details component
const Details = ({ details }) => {
  const detailsStyle = {
    position: "absolute",
    top: "60px",
    left: "0",
    width: "200px",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    zIndex: "1"
  };

  return <div style={detailsStyle}>{details}</div>;
};

const icons = [
  { title: "Clean / holistic",
    details: "Clean & holistic environment", 
    icon: FaLeaf },
  { title: "Co-ciricul",
    details: "Supplementry co-curricular activities", 
    icon: FaBook },
  { title: "Dedicated teacher", 
    details: "Supportive teachers and staff", 
    icon: FaChalkboardTeacher },
  { title: "NCC/scouts & guides", 
    details: "Residential camp for NCC and Scouts & Guide", 
    icon: FaUserFriends },
  { title: "Drinking water", 
    details: "RO drinking water facility", 
    icon: FaFaucet },
  { title: "Auditorium", 
    details: "Personal Amphitheatre", 
    icon: FaTheaterMasks },
  { title: "Parking", 
    details: "Parking space for HS Students", 
    icon: FaParking },
  { title: "Canteen", 
    details: "Hygenic school canteen", 
    icon: FaUtensils },
  { title: "Hostel", 
    details: "Hostel facility for girls", 
    icon: FaBed },
  { title: "Smart classes", 
    details: "Digital classrooms", 
    icon: FaLaptop },
  { title: "Science labs", 
    details: "Dedicated science labs", 
    icon: FaFlask },
  { title: "Comp labs", 
    details: "Two upgraded computer labs", 
    icon: FaDesktop },
];

const CircleIcon = ({ title, details, Icon }) => {
  const [hover, setHover] = useState(false);

  const circleStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",
    margin: "5px",
    fontSize: "1.5em",
  };

  const iconStyle = {
    fontSize: "inherit",
  };

  return (
    <div
      style={circleStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon style={iconStyle} />
      {hover && <Details details={details} />}
    </div>
  );
};

const Items = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    padding: "10px",
  };

  return (
    <div style={containerStyle}>
      {icons.map((icon, index) => (
        <CircleIcon key={index} title={icon.title} details={icon.details} Icon={icon.icon} />
      ))}
    </div>
  );
};

export default Items;
