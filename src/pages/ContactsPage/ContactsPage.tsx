import ContactList from "../../components/ContactList/ContactList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector } from "../../store";

const ContactsPage = (): React.ReactElement => {
  const contacts = useAppSelector((state) => state.contacts.contactsData);

  return (
    <ContainerStyled>
      <main>
        <ContactList contacts={contacts} />
      </main>
    </ContainerStyled>
  );
};

export default ContactsPage;
