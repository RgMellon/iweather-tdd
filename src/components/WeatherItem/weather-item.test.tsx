import { render } from "@testing-library/react-native";
import { WeatherItem } from ".";

import dropIcon from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
  it("should be show title and value", () => {
    const { getByText } = render(
      <WeatherItem icon={dropIcon} title="Umidade do ar" value="81%" />
    );

    const title = getByText(/Umidade do ar/i);
    const value = getByText(/81%/i);

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
