import useContacts from "../../hooks/useContacts/useContacts";
import { useAppDispatch } from "../../store";
import {
  loadMoreContactsActionCreator,
  deleteContactActionCreator,
} from "../../store/contacts/contactsSlice";
import { ContactStructure } from "../../types";
import ContactCard from "../ContactCard/ContactCard";
import LoadMore from "../LoadMore/LoadMore";
import NoContactsFound from "../NoContactsFound/NoContactsFound";
import ContactListStyled from "./ContactListStyled";

interface ContactListProps {
  contacts: ContactStructure[];
}

const ContactList = ({ contacts }: ContactListProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteContact } = useContacts();

  const handleDeleteClick = async (id: string) => {
    const status = await deleteContact(id);

    if (status === 200) {
      dispatch(deleteContactActionCreator(id));
    }
  };

  const handleLoadMoreClick = () => {
    dispatch(loadMoreContactsActionCreator());
  };

  return (
    <ContactListStyled>
      {contacts.length === 0 && <NoContactsFound />}
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id}>
            <ContactCard contact={contact} onDeleteClick={handleDeleteClick} />
          </li>
        ))}
      {contacts.length > 1 && (
        <LoadMore handleButtonClick={handleLoadMoreClick} />
      )}
    </ContactListStyled>
  );
};

export default ContactList;
