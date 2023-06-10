import styled from "styled-components";

const ContactDetailsPageStyled = styled.section`
  padding-top: 40px;

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
    }

    &__fullname {
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: 600;
      margin-bottom: 20px;
    }

    &__update-button {
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

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
      }
    }
  }
`;

export default ContactDetailsPageStyled;
