import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import AddContactPageStyled from "../shared/FormPageStyled";
import useContacts from "../../hooks/useContacts/useContacts";
import { useAppDispatch } from "../../store";
import {
  addContactActionCreator,
  resetLimitActionCreator,
} from "../../store/contacts/contactsSlice";
import { ContactStructure } from "../../types";
import { paths } from "../../constants";
import { useEffect } from "react";

const AddContactPage = () => {
  const { addContact } = useContacts();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetLimitActionCreator());
  });

  const handleFormSubmit = async (contactData: Partial<ContactStructure>) => {
    const contact = await addContact(contactData);

    if (contact) {
      dispatch(addContactActionCreator(contact));
      navigate(paths.contacts);
      window.scroll(0, 0);
    }
  };

  return (
    <AddContactPageStyled>
      <header className="header">
        <h2 className="header__title">
          new <span>contact</span>
        </h2>
      </header>
      <main>
        <ContainerStyled>
          <ContactForm buttonText="create" onFormSubmit={handleFormSubmit} />
        </ContainerStyled>
      </main>
    </AddContactPageStyled>
  );
};

export default AddContactPage;
