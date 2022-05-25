const Welcome = () => {
  return (
    <div className="WelcomeContainer">
      <span className="Title">Fullstack Developer & Programmer</span>
      <span className="Summary">I design and code beautifully simple things, and I love what I do.</span>
      <img
            src={require("../assets/profile.png")}
            alt="profile"
          />
    </div>
  );
};

export default Welcome;
