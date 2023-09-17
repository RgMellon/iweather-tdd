import { render } from "@testing-library/react-native";
import { Day } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should be render a day", () => {
    const { getByText } = render(
      <Day
        data={{
          day: "01/08/2000",
          max: "20",
          min: "18",
          weather: "Céu limpo",
          icon: clearDay,
        }}
      />
    );

    expect(getByText("18")).toBeTruthy();
  });
});
