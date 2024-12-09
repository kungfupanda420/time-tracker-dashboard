import Tracker from "./Tracker";

const Trackers = ({ data, timeCategory }) => {
  return (
    <>
      {data.map((trackerData, index) => (
        <Tracker key={index} data={trackerData} timeCategory={timeCategory} />
      ))}
    </>
  );
};

export default Trackers;
