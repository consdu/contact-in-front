import { ContactStructure } from "../../types";
import ContactCardStyled from "./ContactCardStyled";

interface ContactCardProps {
  contact: ContactStructure;
}

const ContactCard = ({ contact }: ContactCardProps): React.ReactElement => {
  const { name, surname, avatar, phoneNumber } = contact;
  return (
    <ContactCardStyled className="contact-card">
      <img
        src={avatar}
        alt={`Avatar of ${name} ${surname}`}
        className="contact-card__avatar"
        width={60}
        height={60}
      />
      <div className="contact-card__info">
        <h2 className="contact-card__name">{`${name} ${surname}`}</h2>
        <p>{phoneNumber.mobile}</p>
      </div>
    </ContactCardStyled>
  );
};

export default ContactCard;
