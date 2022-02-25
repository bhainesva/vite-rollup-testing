import React from "react";
import {renderToString} from "react-dom/server";
import Component from "./component.jsx";

export function render() {
	return renderToString(React.createElement(Component, null))
}
