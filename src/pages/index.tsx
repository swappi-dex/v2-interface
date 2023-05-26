import { createHashRouter, RouterProvider } from "react-router-dom";
import { Header } from "./headers";
import { config } from "./config";
import Footer from "./footer";

function withHeader(ele: JSX.Element) {
  return (
    <>
      <Header />
      {ele}
      <Footer />
    </>
  );
}

const router = createHashRouter(
  config.map((item) => ({ ...item, element: withHeader(item.element) }))
);

export default function Router() {
  return <RouterProvider router={router} />;
}
