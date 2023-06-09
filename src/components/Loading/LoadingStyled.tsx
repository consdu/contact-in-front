import styled from "styled-components";

const LoadingStyled = styled.div`
  background-color: #ffffff6d;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  .loader:before {
    -webkit-animation: spin 1s infinite linear;
    animation: spin 1s infinite linear;
    border-radius: 10px;
    -webkit-box-shadow: 25px 0px 0 0 #23593f20,
      20.22542px 14.69463px 0 0 #23593f40, 7.72542px 23.77641px 0 0 #23593f60,
      -7.72542px 23.77641px 0 0 #23593f80, -20.22542px 14.69463px 0 0 #23593f;

    box-shadow: 25px 0px 0 0 #23593f20, 20.22542px 14.69463px 0 0 #23593f40,
      7.72542px 23.77641px 0 0 #23593f60, -7.72542px 23.77641px 0 0 #23593f80,
      -20.22542px 14.69463px 0 0 #23593f;
    height: 10px;
    width: 10px;
    display: block;
    content: "";
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyled;
