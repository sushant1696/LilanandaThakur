import React, { useEffect, useState } from 'react';

const MultipleFuctionCall = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response1 = await fetch('https://jsonplaceholder.typicode.com/users');
      const data1 = await response1.json();
      setData1(data1);

      const response2 = await fetch('https://jsonplaceholder.typicode.com/users');
      const data2 = await response2.json();
      setData2(data2);

      const response3 = await fetch('https://jsonplaceholder.typicode.com/users');
      const data3 = await response3.json();
      setData3(data3);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
debugger
  return (
    
    <div>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <div>
          <h2>Data from API 1:</h2>
          <ul>
            {data1.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

          <h2>Data from API 2:</h2>
          <ul>
            {data2.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

          <h2>Data from API 3:</h2>
          <ul>
            {data3.map((item) => (
              <li key={item.id}>{item.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultipleFuctionCall;