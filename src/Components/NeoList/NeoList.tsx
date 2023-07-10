import React from 'react';

import { NeoData } from '../../Types/NeoData';

import { NeoItem } from '../NeoItem/NeoItem';

type Props = {
  neoList: NeoData[];
  highestHazardElements: NeoData[];
}

export const NeoList: React.FC<Props> = ({ neoList, highestHazardElements }) => {
  return (
    <div className="neo-list">
      {neoList.map((neoElement, index) => (
        <NeoItem
          key={index}
          neoElement={neoElement}
          isHighestHazard={highestHazardElements.includes(neoElement)}
        />
      ))}
    </div>
  );
};
