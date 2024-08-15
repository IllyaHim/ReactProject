const API_URL = 'https://api.api-ninjas.com/v1/cars';
const API_KEY = 'wOTOJ0DmLtxPlTEo7nKyXw==LrcjXAPAc4LMfNVD';

async function fetchFromAPI(endpoint, params) {
  const url = new URL(endpoint);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const response = await fetch(url, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getCarsByMake(make) {
  return await fetchFromAPI(API_URL, { make });
}
export async function getCarsByYear(year) {
  return await fetchFromAPI(API_URL, { year });
}

export async function getCarsByFuelType(fuelType) {
  return await fetchFromAPI(API_URL, { fuel_type: fuelType });
}
export async function getCarsByDisplacement(displacement) {
  return await fetchFromAPI(API_URL, { displacement });
}
export async function getCarsByClass(carClass) {
  return await fetchFromAPI(API_URL, { class: carClass });
}
