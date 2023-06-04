import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  return (
    <main>
      <NotFoundPageStyled className="not-found">
        <div className="not-found__details">
          <span>404</span>
          <h2 className="not-found__title">
            Page <span>Not Found</span>
          </h2>
        </div>
        <img
          src="notFoundImage.svg"
          alt="page not found"
          width={200}
          height="auto"
        />
        <Link to="/contacts" className="not-found__back-home">
          Back home
        </Link>
      </NotFoundPageStyled>
    </main>
  );
};

export default NotFoundPage;
