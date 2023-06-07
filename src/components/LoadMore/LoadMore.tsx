import LoadMoreStyled from "./LoadMoreStyled";

interface LoadMoreProps {
  handleButtonClick: () => void;
}

const LoadMore = ({ handleButtonClick }: LoadMoreProps) => {
  return (
    <LoadMoreStyled onClick={handleButtonClick}>Load more...</LoadMoreStyled>
  );
};

export default LoadMore;
