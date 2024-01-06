import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import "./index.css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import QuaoarCentricComponent from "./routes/QuaoarCentric/QuaoarCentric";

const rootRoute = new RootRoute({
  component: () => (
    <div>
      <header className="p-2   flex gap-2 ">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/quaoarcentric" className="[&.active]:font-bold">
          About
        </Link>
      </header>

      <hr />
      <main className=" p-3">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </div>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const QuaoarCentric = new Route({
  getParentRoute: () => rootRoute,
  path: "/quaoarcentric",
  component: QuaoarCentricComponent,
});

const routeTree = rootRoute.addChildren([indexRoute, QuaoarCentric]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
