import styled from "styled-components";

const SearchStyled = styled.section`
  font-size: 1.2rem;
  margin-top: 20px;

  .search-group {
    &__label {
      display: flex;
      background-color: ${(props) => props.theme.colors.gray200};
      border-radius: ${(props) => props.theme.radius.normal};
    }

    &__control {
      width: 100%;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.gray200};
      border-radius: ${(props) => props.theme.radius.normal};
      outline: none;
    }

    &__icon {
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      padding-right: 5px;
      color: ${(props) => props.theme.colors.gray800};
    }
  }
`;

export default SearchStyled;
