import "./Map.css";

function Map() {
  return (
    <>
      <div className="container maps-container">
        <iframe
          className="google-maps"
          src="https://www.google.com/maps/d/embed?mid=1Ao3f8nOpJQ82HNEgdgb3XRMvwLw&hl=en_US&ehbc=2E312F"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
