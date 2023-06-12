import styled from "styled-components";

const ContactDetailsPageStyled = styled.section`
  padding-top: 40px;
  padding-bottom: 150px;

  .contact {
    &__header {
      text-align: center;
      color: ${(props) => props.theme.colors.gray950};
      position: relative;
    }

    &__avatar {
      border-radius: 50%;
      width: 80px;
      aspect-ratio: 1;
      margin-bottom: 10px;
      object-fit: cover;
      object-position: center;
    }

    &__fullname {
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: 600;
      margin-bottom: 20px;
    }

    &__update-button {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      font-size: 1.8rem;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: ${(props) => props.theme.radius.normal};
      background-color: ${(props) => props.theme.colors.primary200};
    }

    &__details {
      color: ${(props) => props.theme.colors.gray900};
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &__detail {
      font-style: normal;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: ${(props) => props.theme.colors.primary200};
      border-radius: ${(props) => props.theme.radius.normal};
      padding: 10px 15px;
      overflow: hidden;

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
      }
    }

    &__socials {
      font-size: 2rem;
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
    }
  }

  @media screen and (min-width: 370px) {
    padding-top: 60px;

    .contact {
      &__socials {
        font-size: 2.5rem;
        margin-top: 50px;
      }

      &__details {
        padding-top: 20px;
      }
    }
  }

  @media screen and (min-width: 800px) {
    padding-top: 80px;

    .contact {
      &__socials {
        margin-top: 90px;
      }
    }
  }
`;

export default ContactDetailsPageStyled;
