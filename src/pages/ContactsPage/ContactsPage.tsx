import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector } from "../../store";
import useContacts from "../../hooks/useContacts/useContacts";
import { loadContactsActionCreator } from "../../store/contacts/contactsSlice";
import Loading from "../../components/Loading/Loading";

const ContactsPage = (): React.ReactElement => {
  const contacts = useAppSelector((state) => state.contacts.contactsData);
  const limit = useAppSelector((state) => state.contacts.limit);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();
  const { getContacts } = useContacts();

  useEffect(() => {
    isLogged &&
      (async () => {
        const contacts = await getContacts(limit);
        if (contacts) {
          dispatch(loadContactsActionCreator(contacts));
        }
      })();
  }, [dispatch, getContacts, isLogged, limit]);

  return (
    <main>
      {isLoading && <Loading />}
      <ContainerStyled>
        <ContactList contacts={contacts} />
      </ContainerStyled>
    </main>
  );
};

export default ContactsPage;
