import { Component, lazy } from "solid-js";
import { Router, Route, RouteSectionProps } from "@solidjs/router";

const Home = lazy(() => import("./pages/Home"));
const Test = lazy(() => import("./pages/Test"));

const Layout: Component<RouteSectionProps<unknown>> = (props) => {
  return (
    <div>
      <div>
        <a href="/">home</a>
        <a href="/test">test</a>
      </div>
      {props.children}
    </div>
  );
};

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Router>
  );
}
