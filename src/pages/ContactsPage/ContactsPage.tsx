import { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector, useAppDispatch } from "../../store";
import useContacts from "../../hooks/useContacts/useContacts";
import {
  clearLimitActionCreator,
  loadContactsActionCreator,
  loadMoreContactsActionCreator,
  resetLimitActionCreator,
} from "../../store/contacts/contactsSlice";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import NoContactsFound from "../../components/NoContactsFound/NoContactsFound";
import LoadMore from "../../components/LoadMore/LoadMore";
import ContactsPageStyled from "./ContactsPageStyled";

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

          const firstAvatar = contacts[0].avatar;

          const preloadLink = await document.createElement("link");
          preloadLink.rel = "preload";
          preloadLink.as = "image";
          preloadLink.href = firstAvatar;

          const head = document.head;
          const firstChild = head.firstChild;
          head.insertBefore(preloadLink, firstChild);
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

  const handleLoadMoreClick = () => {
    dispatch(loadMoreContactsActionCreator());
  };

  return (
    <ContactsPageStyled>
      {isLoading && <Loading />}
      <ContainerStyled>
        <Search onSearchInputChange={handleSearchInputChange} />
        {contacts.length === 0 && <NoContactsFound />}
        {contacts.length > 1 && <ContactList contacts={contacts} />}
        {contacts.length > 1 && (
          <LoadMore handleButtonClick={handleLoadMoreClick} />
        )}
      </ContainerStyled>
    </ContactsPageStyled>
  );
};

export default ContactsPage;
