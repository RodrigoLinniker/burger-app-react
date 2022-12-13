import { Link, useLocation } from "react-router-dom";

export function Header() {
  let location = useLocation();
  return (
    <div className="w-full flex max-w-[1544px] mx-auto justify-center p-4 mt-8 gap-20">
      <div className=" flex gap-14">
        <div
          className={`pb-3 ${
            location.pathname === "/" ? "border-b-2 border-violet-700" : ""
          } `}
        >
          <Link to="/">
            <h1
              className={`font-semibold hover:text-violet-700 ${
                location.pathname === "/" ? " text-violet-700" : ""
              }`}
            >
              Home
            </h1>
          </Link>
        </div>
        <div
          className={`pb-3 ${
            location.pathname === "/burger"
              ? "border-b-2 border-violet-700"
              : ""
          }`}
        >
          <Link to="/burger">
            <h1
              className={`font-semibold hover:text-violet-700 ${
                location.pathname === "/burger" ? " text-violet-700" : ""
              }`}
            >
              Faça seu Burger
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
