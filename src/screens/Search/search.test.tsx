import { render, fireEvent, waitFor } from "@__tests__/utils/customRender";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";

describe("Screen Integration: Search", () => {
  it("should be show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const { getByTestId, findByText, debug } = render(<Search />);

    const searchInput = getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => findByText(/São Paulo/i));

    expect(option).toBeTruthy();
  });
});
