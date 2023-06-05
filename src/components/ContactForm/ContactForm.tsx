import {
  IoPerson,
  IoPeopleSharp,
  IoCall,
  IoAtSharp,
  IoLocationSharp,
  IoGift,
  IoImage,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import ContactFormStyled from "./ContactFormStyled";

const ContactForm = () => {
  return (
    <ContactFormStyled>
      <div className="contact-form__group">
        <label htmlFor="name">Name</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoPerson />
          </span>
          <input type="text" id="name" placeholder="Insert a name" />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="surname">Surname</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoPeopleSharp />
          </span>
          <input type="text" id="surname" placeholder="Insert a surname" />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="phone-number">Phone number</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoCall />
          </span>
          <input
            type="text"
            id="phone-number"
            placeholder="Insert a phone number"
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="email">Email</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoAtSharp />
          </span>
          <input
            type="email"
            id="email"
            placeholder="Insert an email address"
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="address">Address</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoLocationSharp />
          </span>
          <input type="text" id="address" placeholder="Insert an address" />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="dob">Date of birth</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoGift />
          </span>
          <input type="date" id="dob" value="2000-01-01" />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="image">Image</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoImage />
          </span>
          <input type="text" id="image" placeholder="Link an image" />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="twitter">Twitter</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoLogoTwitter />
          </span>
          <input
            type="text"
            id="twitter"
            placeholder="Link to twitter profile"
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="instagram">Instagram</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoLogoInstagram />
          </span>
          <input
            type="text"
            id="instagram"
            placeholder="Link to instagram profile"
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="linkedin">Linkedin</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoLogoLinkedin />
          </span>
          <input
            type="text"
            id="linkedin"
            placeholder="Link to linkedin profile"
          />
        </div>
      </div>
      <button type="submit" className="contact-form__group-submit">
        create
      </button>
    </ContactFormStyled>
  );
};

export default ContactForm;
