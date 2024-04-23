import { useViewport } from "../hooks/use-viewport";

const NavViewport = (props) => {
  const viewports = useViewport();
  return (
    <div className="absolute top-[155%] right-0">
      {viewports.viewport.device === "MOBILE" ? (
        <>{props.navMobile}</>
      ) : (
        <>{props.navDesk}</>
      )}
    </div>
  );
};

export default NavViewport;
