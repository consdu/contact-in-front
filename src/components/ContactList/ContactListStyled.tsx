import styled from "styled-components";

const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  padding-top: 50px;
  padding-bottom: 120px;
`;

export default ContactListStyled;
