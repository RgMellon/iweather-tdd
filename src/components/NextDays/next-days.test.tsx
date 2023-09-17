import { render } from "@testing-library/react-native";
import { NextDays } from ".";

import clearDay from "@assets/clear_day.svg";

const fiveDays = [
  {
    day: "01/08/2000",
    max: "20",
    min: "18",
    weather: "Céu limpo",
    icon: clearDay,
  },
  {
    day: "02/08/2000",
    max: "20",
    min: "18",
    weather: "Céu limpo",
    icon: clearDay,
  },
  {
    day: "03/08/2000",
    max: "20",
    min: "18",
    weather: "Céu limpo",
    icon: clearDay,
  },
  {
    day: "04/08/2000",
    max: "20",
    min: "18",
    weather: "Céu limpo",
    icon: clearDay,
  },
  {
    day: "05/08/2000",
    max: "20",
    min: "18",
    weather: "Céu limpo",
    icon: clearDay,
  },
];
describe("Component: NextDays", () => {
  it("should render day", () => {
    const { getByText } = render(<NextDays data={fiveDays} />);

    expect(getByText("05/08/2000")).toBeTruthy();
  });
});
