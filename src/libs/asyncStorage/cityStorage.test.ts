import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

const data = {
  id: "1",
  latitude: 123,
  longitude: 456,
  name: "Sao Paulo",
} as CityProps;

describe("Storage: CityStorage", () => {
  it("should return null when dont have a city storaged", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should return a city storaged", async () => {
    await saveStorageCity(data);

    const response = await getStorageCity();

    expect(response).toEqual({
      id: "1",
      latitude: 123,
      longitude: 456,
      name: "Sao Paulo",
    });
  });

  it("should remove a city storaged", async () => {
    await saveStorageCity(data);
    removeStorageCity();
    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
