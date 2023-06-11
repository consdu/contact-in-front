import ContactForm from "../../components/ContactForm/ContactForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector } from "../../store";
import { ContactStructure } from "../../types";
import AddContactPageStyled from "../AddContactPage/AddContactPageStyled";

const UpdateContactPage = (): React.ReactElement => {
  const contact = useAppSelector(
    (state) => state.contacts.selectedContact
  ) as ContactStructure;

  const formContact = {
    ...contact,
    birthday: contact?.birthday.slice(0, 10),
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
            contact={formContact as ContactStructure}
            onFormSubmit={() => undefined}
          />
        </ContainerStyled>
      </main>
    </AddContactPageStyled>
  );
};

export default UpdateContactPage;
