declare module "react";
import * as ReactObj from "react";
import * as ReactDOMObj from "react-dom";

declare global {
    var React: typeof ReactObj;
    var ReactDOM: typeof ReactDOMObj;
}

declare module "*.json" {
    const value: any;
    export default value;
}

