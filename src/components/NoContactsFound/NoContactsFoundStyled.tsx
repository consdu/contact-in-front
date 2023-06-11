import styled from "styled-components";

const NoContactsFoundStyled = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;

  .not-found {
    &__message {
      padding-bottom: 40px;
    }

    &__icon {
      padding-top: 15px;
      padding-inline: 15px;
      font-size: 5rem;
      background-color: ${(props) => props.theme.colors.gray200};
      color: ${(props) => props.theme.colors.gray700};
      border-radius: 50%;
    }
  }
`;

export default NoContactsFoundStyled;
