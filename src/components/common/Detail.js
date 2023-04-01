import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";
import starWarService from "../../starWarDataService/starWarService";
import { getPageTite } from "../../utils/titlize";

import StarWarItemDetails from "../starShipsItemDetails";
import { ErrorFrame } from "./errorFrame";

const Detail = () => {
  const { state } = useLocation();
  const [nextItem, setNextItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [failedLoading, setFailedLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const itemObj = await starWarService.fetchPilot(state.nextDetailUrl);
        setNextItem(itemObj);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setFailedLoading(true);
        setLoading(false);
      }
    })();
  }, [state.nextDetailUrl]);

  return (
    <>
      <span id="back-link">
        <Link to="/" underline="hover">
          Back to home page
        </Link>
      </span>
      <h1>{`${getPageTite(state.nextDetailUrl)}`}</h1>
      <div className="item-details">
        <AccordionDetails>
          {loading ? (
            "Loading..."
          ) : failedLoading ? (
            <ErrorFrame message="Ooops! Failed to fetch the Detail..." />
          ) : (
            <StarWarItemDetails listObject={nextItem} />
          )}
        </AccordionDetails>
      </div>
    </>
  );
};

export default Detail;
