import React, { useState, useEffect } from "react";
import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && (
        <LoadingStyled>
          <div className="loader" aria-label="loading animation"></div>
        </LoadingStyled>
      )}
    </>
  );
};

export default Loading;
