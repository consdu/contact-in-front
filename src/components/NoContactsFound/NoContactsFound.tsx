import { IoPersonSharp } from "react-icons/io5";
import NoContactsFoundStyled from "./NoContactsFoundStyled";

const NoContactsFound = () => {
  return (
    <NoContactsFoundStyled className="not-found">
      <h2 className="not-found__message">
        no contacts <b>found</b>
      </h2>
      <span className="not-found__icon">
        <IoPersonSharp />
      </span>
    </NoContactsFoundStyled>
  );
};

export default NoContactsFound;
