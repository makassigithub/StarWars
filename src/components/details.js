import { useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { DataContext } from "../App";

import StarWarItemDetails from "./common/starWarsItemDetails";

const Detail = () => {
  const { state } = useLocation();
  const { detailObject, fetchDetailObject } = useContext(DataContext);

  useEffect(() => {
    fetchDetailObject(state.nextDetailUrl);
  }, [state.nextDetailUrl]);

  return (
    <>
      <span id="back-link">
        <Link to="/" underline="hover">
          Back to Star ships
        </Link>
      </span>
      {<h1>{`${detailObject.Name || detailObject.Title || `Loading...`}`}</h1>}
      <div className="item-details">
        <StarWarItemDetails listObject={detailObject} />
      </div>
    </>
  );
};

export default Detail;
