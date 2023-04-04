import { useLocation } from "react-router-dom";

const Bestsellers = () => {
  const location = useLocation();

  return (
    <div className="bestsellers">
      <div>{location.state?.searchTerm}</div>
      <div className="title">New York Times Bestsellers</div>
      <div className="photos-tiles"></div>
    </div>
  );
};

export default Bestsellers;
