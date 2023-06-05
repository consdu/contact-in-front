import { useAppDispatch } from "../../store";
import { deleteContactActionCreator } from "../../store/contacts/contactsSlice";
import { ContactStructure } from "../../types";
import ContactCard from "../ContactCard/ContactCard";
import ContactListStyled from "./ContactListStyled";

interface ContactListProps {
  contacts: ContactStructure[];
}

const ContactList = ({ contacts }: ContactListProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = (id: string) => {
    dispatch(deleteContactActionCreator(id));
  };

  return (
    <ContactListStyled>
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id}>
            <ContactCard contact={contact} onDeleteClick={handleDeleteClick} />
          </li>
        ))}
    </ContactListStyled>
  );
};

export default ContactList;
