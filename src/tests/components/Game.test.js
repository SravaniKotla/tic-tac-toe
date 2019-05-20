import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Game from "../../components/Game";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Game Component", () => {
  test("renders", () => {
    const wrapper = shallow(<Game />);

    expect(wrapper.exists()).toBe(true);
  });

//   test("renders", () => {
//     const wrapper = shallow(<GameStatus />);

//     expect(wrapper.exists()).toBe(true);
//   });
});