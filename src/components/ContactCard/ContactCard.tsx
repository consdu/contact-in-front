import { ContactStructure } from "../../types";
import ContactCardStyled from "./ContactCardStyled";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ContactCardProps {
  contact: ContactStructure;
  onDeleteClick: (id: string) => void;
}

const ContactCard = ({
  contact,
  onDeleteClick,
}: ContactCardProps): React.ReactElement => {
  const { name, surname, avatar, phoneNumber, id } = contact;
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
        <span>{phoneNumber.mobile}</span>
      </div>
      <button
        className="contact-card__delete-button"
        onClick={() => onDeleteClick(id)}
        aria-label="delete contact"
      >
        <IoCloseCircleOutline />
      </button>
    </ContactCardStyled>
  );
};

export default ContactCard;
