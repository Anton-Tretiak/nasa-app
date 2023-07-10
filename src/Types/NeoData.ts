export interface NeoData {
  id: string;
  name: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    miss_distance: {
      kilometers: number;
    };
    relative_velocity: {
      kilometers_per_hour: number;
    };
  }[];
}
