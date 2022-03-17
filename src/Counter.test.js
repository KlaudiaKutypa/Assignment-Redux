import { render } from "@testing-library/react";
import Counter from "./Counter";

test("checkButtonRender", () => {
    const { queryByTitle } = render(<Counter />);
    const btn = queryByTitle("testingtitle");
    expect(btn).toBeTruthy();
})

test("checkButtonRender2", () => {
    const { queryByTitle } = render(<Counter />);
    const btnsec = queryByTitle("testingtitle2");
    expect(btnsec).toBeTruthy();
})