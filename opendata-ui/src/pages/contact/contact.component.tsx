import ButtonComponent from "packages/RButton/button.component";
import DividerComponent from "packages/RDivider/divider.components";
import FormGroupComponent from "packages/RFormgroup/formgroup.component";
import { ToastContainer, toast } from "react-toastify";
import SocialComponent from "packages/RSocial/social.component";
import location from "../../assets/images/location.svg";
import phone from "../../assets/images/phone.svg";
import letter from "../../assets/images/letter.svg";
import "./contact.component.scss";
import InputComponent from "packages/RInput/input.component";
import TextAreaComponent from "packages/RTextarea/textarea.component";
import { useEffect, useMemo, useState } from "react";
import { ContactForms, getContact } from "./store/action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/types/store.types";
import { generateGuid } from "core/helpers/common-functions/common-functions";
import Skeleton from "react-loading-skeleton";

const ContactComponent = () => {
  const dispatch = useDispatch();
  const { contact } = useSelector((state: RootState) => state.contactR);
  const data = contact.item;
  const [error, setError] = useState("");
  const [contactData, setContactData] = useState({
    email: "",
    text: "",
  });
  const { email, text } = contactData;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !text) {
      setError("Please provide input");
      toast.error("Please provide input");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      dispatch(ContactForms(contactData));
      setContactData({
        email: "",
        text: "",
      });
    }
  };

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const content = useMemo(() => {
    return data ?
      data?.map((d: any) => (
        <div key={generateGuid()} className="contact_content_item">
          <img src={d.contactPhoto} alt="" />
          <div className="contact_info">
            <span>{d.contact[0]}</span>
            <span>{d.contact[1]}</span>
          </div>
        </div>))
      : <Skeleton count={5} height={30} className=" my-8" />
  }, [data])

  return (
    <section className="contact_section">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="contact">
              <div className="contact_content">
                <h3>Əlaqə məlumatları</h3>
                {content}
                <div className="contact_content_item">
                  <span></span>
                </div>
              </div>
              <DividerComponent className="contact_divider" />
              <SocialComponent /* className="contact-social" */ />
            </div>
          </div>
          <div className="col-9">
            <div className="form-container">
              <h3>Bizə yazın</h3>
              <form onSubmit={handleSubmit}>
                <FormGroupComponent>
                  <InputComponent
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-input"
                    onChange={handleChange}
                    error={error}
                  />
                </FormGroupComponent>
                <FormGroupComponent>
                  <TextAreaComponent
                    value={text}
                    name="text"
                    placeholder="Mesajın mətni"
                    className="textarea"
                    onChange={handleChange}
                    error={error}
                  />
                </FormGroupComponent>
                <div className="form-btn flex-end flex">
                  <ButtonComponent
                    type="submit"
                    classNames="primary-btn btn--rounded-circle"
                  >
                    Göndər
                  </ButtonComponent>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
