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
import { useState } from "react";
import { ContactStructure } from "../../types";
import Button from "../Button/Button";

interface ContactFormProps {
  buttonText: string;
  onFormSubmit: (formData: Partial<ContactStructure>) => void;
  contact?: ContactStructure;
}

const ContactForm = ({
  buttonText,
  onFormSubmit,
  contact,
}: ContactFormProps): React.ReactElement => {
  const [formData, setFormData] = useState<ContactStructure>(
    contact ?? {
      name: "",
      surname: "",
      phoneNumber: {
        mobile: "",
      },
      email: "",
      address: "",
      birthday: "2000-01-01",
      avatar: "",
      socials: {
        twitter: "",
        instagram: "",
        linkedin: "",
      },
    }
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      phoneNumber: {
        mobile: event.target.value,
      },
    }));
  };

  const handleSocialsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      socials: {
        ...previousFormData.socials,
        [event.target.id]: event.target.value,
      },
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  const isButtonDisabled =
    formData.name.length < 1 ||
    formData.surname.length < 1 ||
    formData.address.length < 1 ||
    formData.avatar.length < 1 ||
    formData.phoneNumber.mobile.length < 1 ||
    formData.email.length < 1;

  return (
    <ContactFormStyled onSubmit={handleFormSubmit}>
      <div className="contact-form__group">
        <label htmlFor="name">Name</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoPerson />
          </span>
          <input
            type="text"
            id="name"
            placeholder="Insert a name"
            value={formData.name}
            pattern="^[A-Za-z\s]+$"
            title="E.g. John Albert"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="surname">Surname</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoPeopleSharp />
          </span>
          <input
            type="text"
            id="surname"
            placeholder="Insert a surname"
            value={formData.surname}
            pattern="^[A-Za-z\s]+$"
            title="E.g. Doe Smith"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="phoneNumber">Phone number</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoCall />
          </span>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Insert a phone number"
            pattern="[+]{1}[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}"
            value={formData.phoneNumber.mobile}
            title="E.g. +34 123 456 789"
            onChange={handlePhoneNumberChange}
          />
          <small>Format: +34 123 456 789</small>
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
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="address">Address</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoLocationSharp />
          </span>
          <input
            type="text"
            id="address"
            placeholder="Insert an address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="birthday">Date of birth</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoGift />
          </span>
          <input
            type="date"
            id="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="avatar">Image</label>
        <div className="input-wrapper">
          <span className="contact-form__group-icon">
            <IoImage />
          </span>
          <input
            type="url"
            id="avatar"
            placeholder="Link an image"
            value={formData.avatar}
            onChange={handleInputChange}
          />
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
            placeholder="Twitter profile name"
            value={formData.socials.twitter}
            onChange={handleSocialsChange}
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
            placeholder="Instagram profile name"
            value={formData.socials.instagram}
            onChange={handleSocialsChange}
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
            placeholder="Linkedin profile name"
            value={formData.socials.linkedin}
            onChange={handleSocialsChange}
          />
        </div>
      </div>
      <Button
        text={buttonText}
        isButtonDisabled={isButtonDisabled}
        type="submit"
      />
    </ContactFormStyled>
  );
};

export default ContactForm;
