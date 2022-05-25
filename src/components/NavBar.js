

const handleOnClick = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <div className="MainIcon">
        </div>
        <div className="buttonNavBar">
          <div onClick={handleOnClick}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
