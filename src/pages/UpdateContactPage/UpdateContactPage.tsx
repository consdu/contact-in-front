import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { paths } from "../../constants";
import useContacts from "../../hooks/useContacts/useContacts";
import { useAppSelector } from "../../store";
import { ContactStructure } from "../../types";
import AddContactPageStyled from "../shared/FormPageStyled";

const UpdateContactPage = (): React.ReactElement => {
  const selectedContact = useAppSelector(
    (state) => state.contacts.selectedContact
  ) as ContactStructure;
  const { updateContact } = useContacts();
  const navigate = useNavigate();

  const formContact: ContactStructure = {
    ...selectedContact,
    birthday: selectedContact?.birthday.slice(0, 10),
  };

  const handleFormSubmit = async (contactData: Partial<ContactStructure>) => {
    const status = await updateContact(contactData);

    if (status === 200) {
      navigate(paths.contacts);
      window.scroll(0, 0);
    }
  };
  return (
    <AddContactPageStyled>
      <header className="header">
        <h2 className="header__title">
          update <span>contact</span>
        </h2>
      </header>
      <main>
        <ContainerStyled>
          <ContactForm
            buttonText="Update"
            contact={formContact}
            onFormSubmit={handleFormSubmit}
          />
        </ContainerStyled>
      </main>
    </AddContactPageStyled>
  );
};

export default UpdateContactPage;
