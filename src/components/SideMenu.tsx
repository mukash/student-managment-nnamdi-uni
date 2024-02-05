import React, { useState } from "react";
import { Nav, Image, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  PersonFill,
  Headset,
  BoxArrowRight,
  CircleFill,
  MortarboardFill
} from "react-bootstrap-icons";
// import { SideMenuLogoWhite } from "../constants/svg";
import LocalStorageComponent from "../components/LocalStorageComponents";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useLogin();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [hoverOnRegular, setHoverOnRegular] = useState<boolean>(false);
  const [hoverOnCEP, setHoverOnCEP] = useState<boolean>(false);
  const [hoverOnDiploama, setHoverOnDiploama] = useState<boolean>(false);
  const [hoverOnGraduates, setHoverOnGraduates] =
    useState<boolean>(false);
  const [hoverOnLogout, setHoverOnLogout] = useState<boolean>(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <>
     {/* Hamburger icon for mobile */}
     <div className="hamburger-icon" onClick={toggleSideMenu}>
      <span className={`hamburger-bar ${showSideMenu ? "open" : ""}`}></span>
      <span className={`hamburger-bar ${showSideMenu ? "open" : ""}`}></span>
      <span className={`hamburger-bar ${showSideMenu ? "open" : ""}`}></span>
    </div>
    <Nav className={`col-md-2 sidemenu flex-column ${showSideMenu ? "show" : ""}`}>
        <Link to="/regular" className="sidemenu-logo-wrapper">
          <Image
            src="https://i0.wp.com/unizik.edu.ng/wp-content/uploads/2021/03/UNIZIK_Main_Logo_.png?fit=300%2C80&ssl=1"
            alt="Omni Service Logo"
            className="omni-sidemenu"
          />
        </Link>
        <Nav.Item
          onMouseEnter={() => setHoverOnRegular(true)}
          onMouseLeave={() => setHoverOnRegular(false)}
          className={
            splitLocation[1] === "regular"
              ? "sidemenu-item active"
              : "sidemenu-item"
          }
        >
          <CircleFill
            color={
              splitLocation[1] === "regular" || hoverOnRegular
                ? "#ffffff"
                : "#949494"
            }
            size={25}
            className="side-menu-icons"
          />
          <Link
            to="/regular"
            className={
              splitLocation[1] === "regular" || hoverOnRegular
                ? "sidemenu-links active-font"
                : "sidemenu-links"
            }
          >
            Regular
          </Link>
        </Nav.Item>

        <Nav.Item
          onMouseEnter={() => setHoverOnCEP(true)}
          onMouseLeave={() => setHoverOnCEP(false)}
          className={
            splitLocation[1] === "cep"
              ? "sidemenu-item active"
              : "sidemenu-item"
          }
        >
          <CircleFill
            color={
              splitLocation[1] === "cep" || hoverOnCEP
                ? "#ffffff"
                : "#949494"
            }
            size={25}
            className="side-menu-icons"
          />
          <Link
            to="/cep"
            className={
              splitLocation[1] === "cep" || hoverOnCEP
                ? "sidemenu-links active-font"
                : "sidemenu-links"
            }
          >
            CEP
          </Link>
        </Nav.Item>

        <Nav.Item
          onMouseEnter={() => setHoverOnDiploama(true)}
          onMouseLeave={() => setHoverOnDiploama(false)}
          className={
            splitLocation[1] === "diploma" 
              ? "sidemenu-item active"
              : "sidemenu-item"
          }
        >
          <CircleFill
            color={
              splitLocation[1] === "diploma" ||
              hoverOnDiploama
                ? "#ffffff"
                : "#949494"
            }
            size={25}
            className="side-menu-icons"
          />
          <Link
            to="/diploma"
            className={
              splitLocation[1] === "diploma" ||
              hoverOnDiploama
                ? "sidemenu-links active-font"
                : "sidemenu-links"
            }
          >
            Diploma
          </Link>
        </Nav.Item>

        <Nav.Item
          onMouseEnter={() => setHoverOnGraduates(true)}
          onMouseLeave={() => setHoverOnGraduates(false)}
          className={
            splitLocation[1] === "graduates"
              ? "sidemenu-item active"
              : "sidemenu-item"
          }
        >
          <CircleFill
            color={
              splitLocation[1] === "graduates" || hoverOnGraduates
                ? "#ffffff"
                : "#949494"
            }
            size={25}
            className="side-menu-icons"
          />

          <Link
            to="/graduates"
            className={
              splitLocation[1] === "graduates" || hoverOnGraduates
                ? "sidemenu-links active-font"
                : "sidemenu-links"
            }
          >
            Graduates
          </Link>
        </Nav.Item>

        <Nav.Item
          onMouseEnter={() => setHoverOnLogout(true)}
          onMouseLeave={() => setHoverOnLogout(false)}
          className="sidemenu-item"
        >
          <BoxArrowRight
            color={hoverOnLogout ? "#ffffff" : "#949494"}
            size={25}
            className="side-menu-icons"
          />
          <Button
            onClick={async () => {
              const res = await signOut();
              if (res) {
                LocalStorageComponent.deleteAll();
                navigate("/login");
              }
            }}
            className={
              hoverOnLogout
                ? "sidemenu-links  active-font logout-btn"
                : "sidemenu-links logout-btn"
            }
          >
            Logout
          </Button>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SideMenu;
