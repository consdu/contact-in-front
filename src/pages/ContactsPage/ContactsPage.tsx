import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector } from "../../store";
import useContacts from "../../hooks/useContacts/useContacts";
import {
  clearLimitActionCreator,
  loadContactsActionCreator,
  resetLimitActionCreator,
} from "../../store/contacts/contactsSlice";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import { debounce } from "debounce";

const ContactsPage = (): React.ReactElement => {
  const contacts = useAppSelector((state) => state.contacts.contactsData);
  const limit = useAppSelector((state) => state.contacts.limit);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();
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

  const handleSearchInputChange = debounce(async (searchTerm: string) => {
    if (searchTerm.length === 0) {
      dispatch(resetLimitActionCreator());
      return;
    }

    const contacts = await searchContacts(searchTerm);
    if (contacts) {
      dispatch(clearLimitActionCreator());
      dispatch(loadContactsActionCreator(contacts));
    }
  }, 200);

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
