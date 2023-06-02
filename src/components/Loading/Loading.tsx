import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loader" aria-label="loading animation"></div>
    </LoadingStyled>
  );
};

export default Loading;
