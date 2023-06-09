import styled from "styled-components";

const ContactCardStyled = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.medium};
  border-radius: 10px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.gray200};
  box-shadow: 1px 1px 8px 1px ${(props) => props.theme.colors.gray200};

  .contact-card {
    &__info {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__avatar {
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }

    &__name {
      font-weight: 700;
      overflow: hidden;
      max-width: 12ch;
      text-overflow: ellipsis;
    }

    &__delete-button {
      color: ${(props) => props.theme.colors.gray950};
      padding: 0;
      height: 48px;
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      position: absolute;
      top: 25%;
      right: 0;
    }
  }
`;

export default ContactCardStyled;
