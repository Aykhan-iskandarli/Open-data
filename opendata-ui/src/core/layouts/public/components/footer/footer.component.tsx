import React, { useEffect } from "react";
import lightLogo from "assets/images/white-logo.svg";
import "./footer.component.scss";
import location from "assets/images/location.svg";
import phone from "assets/images/phone.svg";
import letter from "assets/images/letter.svg";
import { Link } from "react-router-dom";
import DividerComponent from "packages/RDivider/divider.components";
import FooterSubscription from "../footer-subscription/footer-subscriptio.component";
import youtube from 'assets/images/youtube-f.svg'
import facebook from 'assets/images/facebook-f.svg'
import twitter from 'assets/images/twitter-f.svg'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/types/store.types";
import { getContact } from "pages/contact/store/action";
import { generateGuid } from "core/helpers/common-functions/common-functions";

const FooterComponent = () => {
  const { contact } = useSelector((state: RootState) => state.contactR);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);





  const data = contact.item;
  const footerMenu1 = [
    {
      id: 1,
      name: "Haqqında",
      url: "/",
    },
    {
      id: 2,
      name: "Məlumatlar",
      url: "/",
    },
    {
      id: 3,
      name: "Servislər",
      url: "/",
    },
  ];

  const footerMenu2 = [
    {
      id: 1,
      name: "Mobil tətbiqlər",
      url: "/",
    },
    {
      id: 2,
      name: "FAQ",
      url: "/",
    },
    {
      id: 3,
      name: "Əlaqə",
      url: "/",
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-content">
                <div className="footer-top">
                  <img src={lightLogo} alt="logo-ligth" />
                  {/* <FooterMenu data={footerMenu1} />
                <FooterMenu data={footerMenu2} />  */}
                  <ul className="footer-menu">
                    {footerMenu1.map((list, id) => (
                      <li key={id}>
                        <Link to={list.url}> {list.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-menu">
                    {footerMenu2.map((list, id) => (
                      <li key={id}>
                        <Link to={list.url}> {list.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <FooterSubscription />
                </div>
                <DividerComponent className="footer-divider divider" />
                <div className="footer-middle">
                  <div className="footer-contact">
                  {data &&
                  data?.map((d: any) => (
                    <div key={generateGuid()} className="footer-contact-content">
                      <img  src={d.contactPhoto} alt="" />
                      <div className="footer-number">
                        <span>{d.contact[0]} {d.contact[1]}</span>
                        <span></span>
                      </div>
                    </div>
                  ))}
                    
                  </div>
                  <div className={`social-icons`}>
                    <Link to="/" className="social-icons_item">
                      <img src={youtube} alt="youtube" />
                    </Link>
                    <Link to="/" className="social-icons_item">
                      <img src={facebook} alt="facebook" />
                    </Link>
                    <Link to="/" className="social-icons_item">
                      <img src={twitter} alt="twitter" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-content">
                  <div className="copy-right">
                    <p>Bütün hüquqlar qorunur © 2022 </p>
                  </div>
                  <ul className="copy-right-menu">
                    <li>
                      <Link to="/">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy and Cookies</Link>
                    </li>
                    <li>
                      <Link to="/">Accessability</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
