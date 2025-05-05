import Logo from "../../public/Logo";
import MapIcon from "../../public/mapIcon";
import Track from "./track";

export default function Header() {
  return (
    <>
      <nav className="w-full h-12 bg-[#292929] flex items-center justify-center sticky top-0">
        <div className="w-1/6 flex justify-center">
          <Logo></Logo>
        </div>
        <div className="w-4/6 flex justify-center">
          <Track></Track>
        </div>
        <div className="w-1/6 flex justify-center">
          <MapIcon></MapIcon>
        </div>
      </nav>
    </>
  );
}
