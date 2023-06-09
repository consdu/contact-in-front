import { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector, useAppDispatch } from "../../store";
import useContacts from "../../hooks/useContacts/useContacts";
import {
  clearLimitActionCreator,
  loadContactsActionCreator,
  resetLimitActionCreator,
} from "../../store/contacts/contactsSlice";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";

const ContactsPage = (): React.ReactElement => {
  const contacts = useAppSelector((state) => state.contacts.contactsData);
  const limit = useAppSelector((state) => state.contacts.limit);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const dispatch = useAppDispatch();
  const { getContacts, searchContacts } = useContacts();

  useEffect(() => {
    isLogged &&
      (async () => {
        const contacts = await getContacts(limit);
        if (contacts) {
          dispatch(loadContactsActionCreator(contacts));
        }
      })();
  }, [dispatch, getContacts, isLogged, limit]);

  const handleSearchInputChange = async (searchTerm: string) => {
    if (searchTerm.length === 0) {
      dispatch(resetLimitActionCreator());
      return;
    }

    const contacts = await searchContacts(searchTerm);
    if (contacts) {
      dispatch(clearLimitActionCreator());
      dispatch(loadContactsActionCreator(contacts));
    }
  };

  return (
    <main>
      {isLoading && <Loading />}
      <ContainerStyled>
        <Search onSearchInputChange={handleSearchInputChange} />
        <ContactList contacts={contacts} />
      </ContainerStyled>
    </main>
  );
};

export default ContactsPage;
