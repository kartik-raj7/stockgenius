import { Col, Dropdown, Row, Typography } from "antd";
import React from "react";
import style from "../styles/navbar.module.scss";
import CustomButton from "../utils/ui/CustomButton";
import { IoIosMenu } from "react-icons/io";
import { isMobileOnly } from "react-device-detect";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const items = [
    {
      label: <Link to="/myprofile">My Profile</Link>,
      key: '0',
    },
    {
      label: <Link to="/services">Ideas</Link>,
      key: '1',
    },
  ];
  return (
    <Row className={style.navbarstyle}>
      <Col xs={12} md={10} lg={12} className={style.logocontainer}>
      <Link to="/home" className={style.logocontainer}>
        <img src="/stocks.gif" className={style.logostyle} />
        <Typography className={style.companyname}>Stock Genius</Typography>
        </Link>
      </Col>
      {!isMobileOnly ? (
        <>
          <Col md={14} lg={12} className={style.navbaroptions}>
            <Col
              span={6}
              md={6}
              lg={4}
              className={style.navlinks}
            >
              <Link to="/myportfolio" style={{
                borderBottom:
                  location.pathname == "/aboutus" ? "2px solid #c4f0ab" : "",
                  color: "white"
              }}>
                Portfolio
              </Link>
            </Col>

            <Col
              span={6}
              md={8}
              lg={4}
              className={style.navlinks}
            >
              <Link to="/ideas" style={{
                borderBottom:
                  location.pathname == "/services" ? "2px solid #c4f0ab" : "",
                  color: "white"
              }}>Ideas</Link>
            </Col>
            <Col span={10} md={9} lg={8} style={{display: "flex",justifyContent:" center"}}>
              <CustomButton />
            </Col>
          </Col>
        </>
      ) : (
        <>
          <Col span={11} className={style.navbaroptionsmobile}>
          <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
    style={{backgroundColor:'#c4f0ab'}}
  >
            <IoIosMenu />
            </Dropdown>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Navbar;
