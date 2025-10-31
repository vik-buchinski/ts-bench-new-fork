import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App, { TEST_CONSTANT2 } from "./app/app";

console.log(TEST_CONSTANT);
console.log(TEST_CONSTANT2);
console.log(TEST_CONSTANT3);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
