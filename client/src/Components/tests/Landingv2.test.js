import React from "react";
import { shallow } from "enzyme";
import Landing from "../Components/Landingv2.js";
import toJson from "enzyme-to-json";

it("Landing component should render without crashing", () => {
  shallow(<Landing />);
});

it("landing component snapshot with Enzyme", () => {
  const wrapper = shallow(<Landing />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
