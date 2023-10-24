import { useEffect, useState } from "react";

const FetchAPI = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">Fetch API</h1>
      {data ? (
        <div>
          <h1 className="text-xl font-semibold">
            {`Name: ${data?.firstName} ${data?.lastName}`}
          </h1>
          <h2 className="text-gray-700">{`Age: ${data?.age}`}</h2>
        </div>
      ) : (
        <div className="text-gray-700">Loading</div>
      )}
    </div>
  );
};

export default FetchAPI;
