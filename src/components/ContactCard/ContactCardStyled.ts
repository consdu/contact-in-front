import styled from "styled-components";

const ContactCardStyled = styled.article`
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
    }

    &__name {
      font-weight: 700;
    }
  }
`;

export default ContactCardStyled;
