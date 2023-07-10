import { NeoData } from "./NeoData";

export interface NeoResponse {
  element_count: number;
  near_earth_objects: {
    [date: string]: NeoData[];
  };
}