import { useViewport } from "../hooks/use-viewport";

const NavViewport = (props) => {
  const viewports = useViewport();
  return (
    <>
      {viewports.viewport.device === "MOBILE" ? (
        <>{props.navMobile}</>
      ) : (
        <>{props.navDesk}</>
      )}
    </>
  );
};

export default NavViewport;
