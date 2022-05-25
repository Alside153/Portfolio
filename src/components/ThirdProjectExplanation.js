const ThirdProjectExplanation = () => {
  return (
    <>
      <div className="project-description-explnation">
        <span className="project-description-explnation-title">
          user's managment- Tasks&posts
        </span>
        <ul>
          <li>The app is made using ReactJS</li>
          <li>the main use of the app is to manage users, tasks and posts.</li>
          <li>
            the app is using webservices to collect data for users, tasks and
            posts.
          </li>
          <li>
            after collecting the data the app connects each user for its tasks
            and posts via shared id.
          </li>
          <li>
            MainPage-shows name and email with Other data option, update and
            delete.
          </li>
          <li>Other Data- shows user's adress.</li>
          <li>
            update- updates the users with the info changed in the input fields.
          </li>
          <li>
            Delete- sends delete request to the webservices to delete the user.
          </li>
          <li>
            when pressing the user's id it shows his posts and taks with options
            to add posts and tasks.
          </li>
          <li>
            each Task has it's own mark completed button to remove it from the
            list.
          </li>
          <li>
            when pressing complete the page reloads and sends request to the
            webservices to mark the task as completed.
          </li>
        </ul>
      </div>
      <div className="project-description-seperating-div"></div>
      <div className="project-description-images">
        <div className="third-project-content">
          <img
            src={require("../assets/3rd project/MainPage.png")}
            alt="MainPage"
          />
          <img
            src={require("../assets/3rd project/UserDetails.png")}
            alt="UserDetails"
          />
          <img
            src={require("../assets/3rd project/MainPostsAndTasks.png")}
            alt="Main&Posts&Tasks"
          />
          <img
            src={require("../assets/3rd project/NewPost.png")}
            alt="NewPost"
          />
          <img
            src={require("../assets/3rd project/NewTask.png")}
            alt="NewTask"
          />
        </div>
      </div>
    </>
  );
};
export default ThirdProjectExplanation;
