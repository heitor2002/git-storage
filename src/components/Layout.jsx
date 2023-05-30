import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="center-module">
        <div className="box-layout">
          <Navigation />
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};
