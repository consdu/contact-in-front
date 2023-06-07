import styled from "styled-components";

const LoadMoreStyled = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary600};
  color: ${(props) => props.theme.colors.gray50};
  border-radius: ${(props) => props.theme.radius.small};
  padding: 15px;
  margin-top: 20px;
`;

export default LoadMoreStyled;
