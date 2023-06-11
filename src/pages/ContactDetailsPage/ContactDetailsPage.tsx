import {
  IoCall,
  IoAtSharp,
  IoLocationSharp,
  IoGift,
  IoPencilSharp,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { ContactStructure } from "../../types";
import ContactDetailsPageStyled from "./ContactDetailsPageStyled";
import useContacts from "../../hooks/useContacts/useContacts";
import {
  loadSelectedContactActionCreator,
  resetLimitActionCreator,
} from "../../store/contacts/contactsSlice";
import { monthNames } from "../../constants";
import NoContactsFound from "../../components/NoContactsFound/NoContactsFound";

const ContactDetailsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const selectedContact = useAppSelector(
    (state) => state.contacts.selectedContact
  );
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { contactId } = useParams();
  const { getContact } = useContacts();

  useEffect(() => {
    dispatch(resetLimitActionCreator());

    isLogged &&
      (async () => {
        const contact = await getContact(contactId as string);

        if (contact !== 404) {
          dispatch(
            loadSelectedContactActionCreator(contact as ContactStructure)
          );
        }
      })();
  }, [contactId, dispatch, getContact, isLogged]);

  if (selectedContact) {
    const {
      avatar,
      name,
      surname,
      phoneNumber,
      email,
      address,
      birthday,
      socials,
    } = selectedContact;

    const birthdayDate = new Date(birthday);

    return (
      <ContainerStyled>
        <main>
          <ContactDetailsPageStyled>
            <article className="contact">
              <header className="contact__header">
                <img
                  src={`${avatar}`}
                  alt={`Avatar of ${name} ${surname}`}
                  width={80}
                  height={80}
                  className="contact__avatar"
                />
                <h2 className="contact__fullname">{`${name} ${surname}`}</h2>
                <button
                  className="contact__update-button"
                  aria-label="update contact"
                >
                  <IoPencilSharp />
                </button>
              </header>
              <address>
                <ul className="contact__details">
                  <li className="contact__detail">
                    <span className="contact__detail-icon">
                      <IoCall />
                    </span>
                    <a href={`tel:${phoneNumber.mobile}`}>
                      {phoneNumber.mobile}
                    </a>
                  </li>
                  <li className="contact__detail">
                    <span className="contact__detail-icon">
                      <IoAtSharp />
                    </span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                  <li className="contact__detail">
                    <span className="contact__detail-icon">
                      <IoLocationSharp />
                    </span>
                    <span>{address}</span>
                  </li>
                  <li className="contact__detail">
                    <span className="contact__detail-icon">
                      <IoGift />
                    </span>
                    <time dateTime={birthdayDate.toISOString().slice(0, 10)}>
                      {`${birthdayDate.getDate()} of ${
                        monthNames[birthdayDate.getMonth()]
                      }`}
                    </time>
                  </li>
                </ul>
                <footer className="contact__socials">
                  {socials.twitter && (
                    <a
                      href={`https://twitter.com/${socials.twitter}`}
                      aria-label="twitter profile"
                    >
                      <IoLogoTwitter />
                    </a>
                  )}
                  {socials.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${socials.linkedin}`}
                      aria-label="linkedin profile"
                    >
                      <IoLogoLinkedin />
                    </a>
                  )}
                  {socials.instagram && (
                    <a
                      href={`https://instagram.com/${socials.instagram}`}
                      aria-label="instagram profile"
                    >
                      <IoLogoInstagram />
                    </a>
                  )}
                </footer>
              </address>
            </article>
          </ContactDetailsPageStyled>
        </main>
      </ContainerStyled>
    );
  } else {
    return <NoContactsFound />;
  }
};

export default ContactDetailsPage;
