import ContactForm from "../../components/ContactForm/ContactForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import AddContactPageStyled from "./AddContactPageStyled";

const AddContactPage = () => {
  return (
    <AddContactPageStyled>
      <header className="header">
        <h2 className="header__title">
          new <span>contact</span>
        </h2>
      </header>
      <main>
        <ContainerStyled>
          <ContactForm buttonText="create" onFormSubmit={() => undefined} />
        </ContainerStyled>
      </main>
    </AddContactPageStyled>
  );
};

export default AddContactPage;
