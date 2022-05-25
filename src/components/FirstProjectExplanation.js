const FirstProjectExplanation = () => {
  return (
    <>
      <div className="project-description-explnation">
        <span className="project-description-explnation-title">
          DoneWithIt-For Selling Items you dont need
        </span>
        <ul>
          <li>
            Phone app to which is easy to use, to sell items and get contact
            with sellers.
          </li>
          <li>
            The app was developed with React Native using NodeJS as backend.
          </li>
          <li>the app is made out of a couple of screens.</li>
          <li>Welcome - got the Login and Register buttons.</li>
          <li>Login - got inputs for Email and Password.</li>
          <li>
            The Login process takes the info input posts it to the server and
            waits for response to either allow access to the app or deny it.
          </li>
          <li>Register - got inputs for Name, Email and Password.</li>
          <li>
            The registration process takes the info inputed in the register
            screen, sends it to the server, the server encrypts it and save it{" "}
          </li>
          <li>Listing - shows all the available listing at the moment.</li>
          <li>
            NewListing - input for image, title, price, category and
            description.
          </li>
          <li>
            account - got account info, access to messages, account's listings
            and logout button.
          </li>
          <li>
            Messages - shows messages with option to delete when sliding left.
          </li>
          <li>The app is using local cache in case of no access to network.</li>
        </ul>
      </div>
      <div className="project-description-seperating-div"></div>
      <div className="project-description-images">
        <div className="first-project-content">
          <img
            src={require("../assets/1st project/WelcomeScreen.png")}
            alt="WelcomeScreen"
          />
          <img
            src={require("../assets/1st project/RegisterScreen.png")}
            alt="RegisterScreen"
          />
          <img
            src={require("../assets/1st project/LoginScreen.png")}
            alt="LoginScreen"
          />
          <img
            src={require("../assets/1st project/ListingScreen.png")}
            alt="ListingScreen"
          />
          <img
            src={require("../assets/1st project/ListingDetailScreen.png")}
            alt="ListingDetailScreen"
          />
          <img
            src={require("../assets/1st project/NotificationBox.png")}
            alt="NotificationBox"
          />
          <img
            src={require("../assets/1st project/NewListingScreen.png")}
            alt="NewListingScreen"
          />
          <img
            src={require("../assets/1st project/CategoriesScreen.png")}
            alt="CategoriesScreen"
          />
          <img
            src={require("../assets/1st project/FilledNewListingScreen.png")}
            alt="FilledNewListingScreen"
          />
          <img
            src={require("../assets/1st project/AccountScreen.png")}
            alt="AccountScreen"
          />
          <img
            src={require("../assets/1st project/MessagesScreen.png")}
            alt="MessagesScreen"
          />
        </div>
      </div>
    </>
  );
};
export default FirstProjectExplanation;
