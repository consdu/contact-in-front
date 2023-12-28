import { useEffect, useMemo } from "react";
import _debounce from "debounce";
import ContactList from "../../components/ContactList/ContactList";
import Loading from "../../components/Loading/Loading";
import LoadMore from "../../components/LoadMore/LoadMore";
import NoContactsFound from "../../components/NoContactsFound/NoContactsFound";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContainerStyled from "../../components/shared/ContainerStyled";
import useContacts from "../../hooks/useContacts/useContacts";
import { useAppSelector, useAppDispatch } from "../../store";
import {
  clearLimitActionCreator,
  loadContactsActionCreator,
  loadMoreContactsActionCreator,
  resetLimitActionCreator,
  resetSelectedContactActionCreator,
} from "../../store/contacts/contactsSlice";
import ContactsPageStyled from "./ContactsPageStyled";

const ContactsPage = (): React.ReactElement => {
  const contacts = useAppSelector((state) => state.contacts.contactsData);
  const limit = useAppSelector((state) => state.contacts.limit);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const totalContactsCount = useAppSelector(
    (state) => state.contacts.totalCount
  );
  const dispatch = useAppDispatch();
  const { getContacts, searchContacts } = useContacts();

  useEffect(() => {
    dispatch(resetSelectedContactActionCreator());
  });

  useEffect(() => {
    isLogged &&
      (async () => {
        const contacts = await getContacts(limit);

        if (contacts?.length) {
          dispatch(loadContactsActionCreator(contacts));

          const firstAvatar = contacts[0].avatar;

          const preloadLink = document.createElement("link");
          preloadLink.rel = "preload";
          preloadLink.as = "image";
          preloadLink.href = firstAvatar;

          const head = document.head;
          const firstChild = head.firstChild;
          head.insertBefore(preloadLink, firstChild);
        }
      })();
  }, [dispatch, getContacts, isLogged, limit]);

  const handleSearchInputChange = useMemo(
    () =>
      _debounce(async (searchTerm: string) => {
        if (searchTerm.length === 0) {
          dispatch(resetLimitActionCreator());
          return;
        }

        const contacts = await searchContacts(searchTerm);
        if (contacts) {
          dispatch(clearLimitActionCreator());
          dispatch(loadContactsActionCreator(contacts));
        }
      }, 250),
    [dispatch, searchContacts]
  );

  const handleLoadMoreClick = () => {
    dispatch(loadMoreContactsActionCreator());
  };

  return (
    <ContactsPageStyled>
      {isLoading && <Loading />}
      <ContainerStyled>
        <SearchBar onSearchInputChange={handleSearchInputChange} />
        {contacts.length === 0 && !isLoading && <NoContactsFound />}
        {contacts.length >= 1 && <ContactList contacts={contacts} />}
        {contacts.length < totalContactsCount && limit !== 0 && (
          <LoadMore handleButtonClick={handleLoadMoreClick} />
        )}
      </ContainerStyled>
    </ContactsPageStyled>
  );
};

export default ContactsPage;
