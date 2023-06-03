import { ContactStructure } from "../../types";
import ContactCard from "../ContactCard/ContactCard";
import ContactListStyled from "./ContactListStyled";

interface ContactListProps {
  contacts: ContactStructure[];
}

const ContactList = ({ contacts }: ContactListProps): React.ReactElement => {
  return (
    <ContactListStyled>
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id}>
            <ContactCard contact={contact} onDeleteClick={(id) => id} />
          </li>
        ))}
    </ContactListStyled>
  );
};

export default ContactList;
