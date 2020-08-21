import React from "react";
import { shallow } from "enzyme";
import Main from "..";

describe("Main screen component", () => {
  it("should render", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.length).toBe(1);
  });
});
