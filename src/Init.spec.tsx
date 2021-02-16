import React from "react";
import renderer from "react-test-renderer";
import { Init } from "./Init";

describe("Game Initialization", () => {
	it("<Init /> matches previous snapshot", () => {
		const tree: any = renderer.create(<Init />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
