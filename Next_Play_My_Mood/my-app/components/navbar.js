import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>My Song List</h1>
      </div>
      <Link href="/">
        <a>Home/</a>
      </Link>
      <Link href="/about">
        <a>About/</a>
      </Link>
      <Link href="/mood">
        <a>Todays mood Songs/</a>
      </Link>
      <Link href="/Favourites">
        <a> Favourites/</a>
      </Link>
    </nav>
  );
};

export default NavBar;
