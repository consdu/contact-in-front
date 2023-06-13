import styled from "styled-components";

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 150px;

  small {
    position: absolute;
    bottom: -18px;
    right: 0;
    font-size: 12px;
  }

  .input-wrapper {
    display: flex;
    width: 100%;

    &:focus-within {
      outline: 2px solid ${(props) => props.theme.colors.primary600};
      border-radius: ${(props) => props.theme.radius.normal};
      -webkit-border-radius: ${(props) => props.theme.radius.normal};
    }
  }

  .contact-form {
    &__group {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.gray700};

      & input {
        background-color: ${(props) => props.theme.colors.gray200};
        width: 100%;
        height: 100%;
        outline: none;
        padding: 15px 10px;
        border-top-right-radius: ${(props) => props.theme.radius.normal};
        border-bottom-right-radius: ${(props) => props.theme.radius.normal};

        &:focus:invalid {
          color: #e23414;
        }

        &::placeholder {
          color: ${(props) => props.theme.colors.gray700};
        }

        &[type="date"] {
          position: relative;
          text-align: left;
          color: ${(props) => props.theme.colors.gray700};
        }

        &[type="date"]::-webkit-calendar-picker-indicator {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          padding: 0;
          color: transparent;
          background: transparent;
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
    }
  }
`;

export default ContactFormStyled;
