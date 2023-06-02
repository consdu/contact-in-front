import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector } from "../../store";
import useContacts from "../../hooks/useContacts/useContacts";
import { loadContactsActionCreator } from "../../store/contacts/contactsSlice";

const ContactsPage = (): React.ReactElement => {
  const contacts = useAppSelector((state) => state.contacts.contactsData);
  const dispatch = useDispatch();
  const { getContacts } = useContacts();

  useEffect(() => {
    (async () => {
      const contacts = await getContacts();
      dispatch(loadContactsActionCreator(contacts));
    })();
  }, [dispatch, getContacts]);

  return (
    <ContainerStyled>
      <main>
        <ContactList contacts={contacts} />
      </main>
    </ContainerStyled>
  );
};

export default ContactsPage;
