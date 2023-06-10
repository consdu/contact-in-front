import ContainerStyled from "../../components/shared/ContainerStyled";
import ContactDetailsPageStyled from "./ContactDetailsPageStyled";
import {
  IoCall,
  IoAtSharp,
  IoLocationSharp,
  IoGift,
  IoPencilSharp,
} from "react-icons/io5";
const ContactDetailsPage = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <main>
        <ContactDetailsPageStyled>
          <article className="contact">
            <header className="contact__header">
              <img
                src="https://media.discordapp.net/attachments/1080858531940544657/1115243355769671770/male-01_60X60.webp"
                alt="Avatar of person x"
                className="contact__avatar"
              />
              <h2 className="contact__fullname">Louise Bourn</h2>
              <button className="contact__update-button">
                <IoPencilSharp />
              </button>
            </header>
            <address>
              <ul className="contact__details">
                <li className="contact__detail">
                  <span className="contact__detail-icon">
                    <IoCall />
                  </span>
                  <a href="tel:+34667339785">667 339 785</a>
                </li>
                <li className="contact__detail">
                  <span className="contact__detail-icon">
                    <IoAtSharp />
                  </span>
                  <a href="mailto:john@doe.com">john@doe.com</a>
                </li>
                <li className="contact__detail">
                  <span className="contact__detail-icon">
                    <IoLocationSharp />
                  </span>
                  <span>12 Maple St, Chicago, IL</span>
                </li>
                <li className="contact__detail">
                  <span className="contact__detail-icon">
                    <IoGift />
                  </span>
                  <time dateTime="1990-09-23">23rd September</time>
                </li>
              </ul>
            </address>
          </article>
        </ContactDetailsPageStyled>
      </main>
    </ContainerStyled>
  );
};

export default ContactDetailsPage;
