import logo from "../../../public/logo.png";

export const Header = () => {
  return (
    <header className="pt-[31px] pb-[18px]">
      <a href="/" className="inline-block">
        <img
          src={logo}
          alt="AQVEX Logo"
          className="h-10 w-auto object-contain"
        />
      </a>
    </header>
  );
};
