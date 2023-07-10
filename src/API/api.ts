import { NeoResponse } from "../Types/NeoResponse";

const API_KEY = 'PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx';

export async function getData(startDate: string, endDate: string): Promise<NeoResponse> {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = (await response.json()) as NeoResponse;

    console.log(data.near_earth_objects);

    return data;
  } catch (error) {
    console.error('Error fetching NEO data:', error);

    throw error;
  }
}