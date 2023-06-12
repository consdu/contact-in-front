import styled from "styled-components";

const AddContactPageStyled = styled.div`
  .header {
    padding-top: ${(props) => props.theme.spacing.medium};

    &__title {
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.fonts.secondary};
      text-align: center;

      & span {
        font-weight: 700;
      }
    }
  }
`;

export default AddContactPageStyled;
