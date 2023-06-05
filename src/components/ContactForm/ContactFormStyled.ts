import styled from "styled-components";

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 150px;

  .input-wrapper {
    display: flex;
    width: 100%;
  }

  .contact-form {
    &__group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.gray700};

      & input {
        background-color: ${(props) => props.theme.colors.gray200};
        width: 100%;
        outline: none;
        padding: 15px 10px;
        border-top-right-radius: ${(props) => props.theme.radius.normal};
        border-bottom-right-radius: ${(props) => props.theme.radius.normal};

        &::placeholder {
          color: ${(props) => props.theme.colors.gray700};
        }
      }

      &-icon {
        background-color: ${(props) => props.theme.colors.gray300};
        color: ${(props) => props.theme.colors.gray900};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        padding: 10px;
        border-top-left-radius: ${(props) => props.theme.radius.normal};
        border-bottom-left-radius: ${(props) => props.theme.radius.normal};
      }

      &-submit {
        background-color: ${(props) => props.theme.colors.primary600};
        color: ${(props) => props.theme.colors.gray50};
        border-radius: ${(props) => props.theme.radius.normal};
        width: 100%;
        padding: 15px;
        text-transform: uppercase;
        margin-top: 20px;
      }
    }
  }
`;

export default ContactFormStyled;
