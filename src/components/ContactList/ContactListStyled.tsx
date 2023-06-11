import styled from "styled-components";

const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.large};
  padding-top: 50px;
  padding-bottom: 40px;
`;

export default ContactListStyled;
