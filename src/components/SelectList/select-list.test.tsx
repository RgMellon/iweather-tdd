import { fireEvent, render } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: <SelectList />", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Floripa",
        longitude: 123,
        latitude: 456,
      },
      {
        id: "2",
        name: "Curitiba",
        longitude: 12334,
        latitude: 1345,
      },
    ];

    const onPress = jest.fn();

    const { getByText } = render(
      <SelectList data={data} onChange={() => {}} onPress={onPress} />
    );

    const selectedCity = getByText(/Floripa/i);
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledTimes(1);
    expect(onPress).toBeCalledWith(data[0]);
  });

  it("shoul not show city options when data props is empty", () => {
    const { getByTestId } = render(
      <SelectList data={[]} onChange={() => {}} onPress={() => {}} />
    );

    const options = getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
