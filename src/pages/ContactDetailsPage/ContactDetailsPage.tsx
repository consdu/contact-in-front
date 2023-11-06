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
import { useNavigate, useParams } from "react-router-dom";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { ContactStructure } from "../../types";
import ContactDetailsPageStyled from "./ContactDetailsPageStyled";
import useContacts from "../../hooks/useContacts/useContacts";
import {
  loadSelectedContactActionCreator,
  resetLimitActionCreator,
} from "../../store/contacts/contactsSlice";
import { paths } from "../../constants";

const ContactDetailsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    avatar,
    name,
    surname,
    phoneNumber,
    email,
    address,
    birthday,
    socials,
  } = useAppSelector((state) => state.contacts.selectedContact);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { contactId } = useParams();
  const { getContact } = useContacts();

  const birthdayDate = new Date(birthday);

  useEffect(() => {
    dispatch(resetLimitActionCreator());

    isLogged &&
      (async () => {
        const contact = await getContact(contactId as string);

        if (contact !== 404) {
          dispatch(
            loadSelectedContactActionCreator(contact as ContactStructure)
          );
        } else {
          navigate(paths.contacts);
        }
      })();
  }, [contactId, dispatch, getContact, isLogged, navigate]);

  return (
    <ContainerStyled>
      <main>
        <ContactDetailsPageStyled>
          {name && (
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
                  onClick={() => navigate("/update-contact")}
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
                    <time dateTime={birthdayDate.toLocaleString().slice(0, 10)}>
                      {birthdayDate.toLocaleDateString("en-UK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
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
          )}
        </ContactDetailsPageStyled>
      </main>
    </ContainerStyled>
  );
};

export default ContactDetailsPage;
