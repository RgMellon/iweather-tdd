import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherApiResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
  it("should return weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse,
    });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 333,
    });

    expect(response).toHaveProperty("today");
  });
});
