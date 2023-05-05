const ShowCount = ({ counter }) => {
  return (
    <>
      <h3 id="show-count" className={counter >= 10 && "danger"}>
        {counter}
      </h3>
      {counter >= 10 && <p>You pressed too many times!</p>}
    </>
  );
};

export default ShowCount;
