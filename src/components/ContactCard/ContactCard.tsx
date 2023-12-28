import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ContactStructure } from "@/types";
import ContactCardStyled from "./ContactCardStyled";

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
      <Link to={`id/${id}`} className="contact-card__info">
        <h2 className="contact-card__name">{`${name} ${surname}`}</h2>
        <span>{phoneNumber.mobile}</span>
      </Link>
      <button
        className="contact-card__delete-button"
        onClick={() => onDeleteClick(id as string)}
        aria-label="delete contact"
      >
        <IoCloseCircleOutline />
      </button>
    </ContactCardStyled>
  );
};

export default ContactCard;
