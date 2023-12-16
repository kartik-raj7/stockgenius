import { Typography, Row, Col, Image, Space } from 'antd';
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Element } from 'react-scroll';
import style from '../styles/footer.module.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <Element id="footer">
        <div className={style.footer}>
          <Row className={style.footersub}>
              {/* <div style={{width:'100%'}}>
              <ScheduleAnAppointment transparent={'transparent'} marginTop={'0'}/>
              </div> */}
            <Col style={{width:'90%'}}
            >
              <Row style={{width:'100%'}}>
                <Col xs={24} md={8}>
                  <Space direction="vertical">
                    <Row align="middle" gutter={8}>
                      <Image src="/stocks.gif" height={50} width={50} />
                      <Typography className={style.logo}>
                        Stock Genius
                      </Typography>
                    </Row>
                    <Typography.Text className={style.text}>
                      Simplifying Investments for You
                    </Typography.Text>
                  </Space>
                </Col>
                <Col xs={24} md={8} className={style.quicklinksfooter}>
                  <Space direction="vertical" size={8}>
                    <Space direction="vertical" className={style.listItem}>
                      <Link to="/aboutus">
                        <Typography.Text className={style.footernavlinks}>About Us</Typography.Text>
                      </Link>
                      <Link to="/services">
                        <Typography.Text className={style.footernavlinks}>Services</Typography.Text>
                      </Link>
                      <Link href="/plans">
                        <Typography.Text className={style.footernavlinks}>Plans</Typography.Text>
                      </Link>
                    </Space>
                    <Space direction="vertical" className={style.listItem}>
                      <Link href="/terms-and-conditions">
                        <Typography.Text className={style.footernavlinks}>
                          Terms & Conditions
                        </Typography.Text>
                      </Link>
                      <Link href="/privacy-policy">
                        <Typography.Text className={style.footernavlinks}>Privacy Policy</Typography.Text>
                      </Link>
                    </Space>
                  </Space>
                </Col>
                <Col xs={24} md={8}>
                  <Space direction="vertical" className={style.listItem}>
                    <div className={style.mail}>
                      <Typography.Text className={style.textmail}>
                        <GrMail style={{ fontSize: '2rem', paddingRight: '9px' }} />
                        <span />
                        Mail to us :-
                      </Typography.Text>
                      <Link to={`mailto:${'fuelup.yourpresence@gmail.com'}`}>
                      <Typography.Text
                        component="a"
                        className={style.text}
                        style={{ textDecoration: 'none' }}
                      >
                        stockgenius@gmail.com
                      </Typography.Text>
                      </Link>
                    </div>
                    <Space direction="horizontal" className={style.socialbox}>
                      <Link href="/">
                        <CiLinkedin className={style.socials} />
                      </Link>
                      <Link href="/">
                        <CiTwitter className={style.socials} />
                      </Link>
                      <Link href="/">
                        <CiInstagram className={style.socials} />
                      </Link>
                      <Link href="/">
                        <FaWhatsapp className={style.socials} />
                      </Link>
                    </Space>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Element>
    );
  };
  
  export default Footer;
  