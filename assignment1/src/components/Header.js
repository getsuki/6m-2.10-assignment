import cat from "../assets/cat.jpg";
function Header() {
  return (
    <>
      <img src={cat} height="250px" width="250px" alt="generic" />
      <h1>Truffles</h1>
      <h2>Domestic Long Haired Feline</h2>
    </>
  );
}

export default Header;
