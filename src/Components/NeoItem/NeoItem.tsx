import React from 'react';

import { NeoData } from '../../Types/NeoData';

type Props = {
  neoElement: NeoData;
  isHighestHazard: boolean;
};

export const NeoItem: React.FC<Props> = ({ neoElement, isHighestHazard }) => {
  const {
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data,
  } = neoElement;

  return (
    <div className={`neo-element ${isHighestHazard ? 'red-background' : ''}`}>
      <p>Max Estimated Diameter: {estimated_diameter.kilometers.estimated_diameter_max} km</p>

      <p>Potentially Hazardous NEOs: {is_potentially_hazardous_asteroid ? 1 : 0}</p>

      <p>Closest NEO: {close_approach_data[0].miss_distance.kilometers} km</p>

      <p>Fastest NEO: {close_approach_data[0].relative_velocity.kilometers_per_hour} kph</p>
    </div>
  );
};
