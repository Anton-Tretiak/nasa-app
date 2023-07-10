import React, { useEffect, useState } from 'react';
import './App.scss';

import { getData } from '../../API/api';
import { NeoData } from '../../Types/NeoData';

import { NeoList } from '../NeoList/NeoList';

export const App: React.FC = () => {
  const [neoList, setNeoList] = useState<NeoData[]>([]);
  const [highestHazardElements, setHighestHazardElements] = useState<NeoData[]>([]);

  const addNEOElement = (newElements: NeoData[]) => {
    setNeoList((prevList) => {
      const updatedList = [...prevList, ...newElements];

      if (updatedList.length > 6) {
        updatedList.shift();
      }

      return updatedList;
    });

    const sortedByHazardCount = [...neoList, ...newElements].sort((a, b) => {
      const aHazardCount = a.is_potentially_hazardous_asteroid ? 1 : 0;
      const bHazardCount = b.is_potentially_hazardous_asteroid ? 1 : 0;

      return bHazardCount - aHazardCount;
    });
    const topTwoHazardElements = sortedByHazardCount.slice(0, 2);

    setHighestHazardElements(topTwoHazardElements);
  };

  const fetchData = async () => {
    const startDate = getFormattedDate(new Date());
    const endDate = getFormattedDate(new Date());

    try {
      const data = await getData(startDate, endDate);
      const neoElements = data.near_earth_objects[startDate];

      addNEOElement(neoElements);
    } catch (error) {
      console.error('Error fetching NEO data:', error);
    }
  };

  useEffect(() => {
    void fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='App'>
      <NeoList neoList={neoList} highestHazardElements={highestHazardElements} />
    </div>
  )
}
