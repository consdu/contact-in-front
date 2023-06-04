import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .not-found {
    &__details {
      font-size: 1.5rem;
      margin-top: -50px;
      text-align: center;
    }

    &__title {
      padding-block: 20px;
      font-family: ${(props) => props.theme.fonts.secondary};

      & span {
        font-weight: 700;
      }
    }

    &__back-home {
      color: ${(props) => props.theme.colors.gray100};
      background-color: ${(props) => props.theme.colors.primary600};
      margin-top: 50px;
      padding: 10px 20px;
      border-radius: 4px;
    }
  }
`;

export default NotFoundPageStyled;
