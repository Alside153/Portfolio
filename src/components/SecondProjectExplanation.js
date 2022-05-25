const SecondProjectExplanation = () => {
  return (
    <>
      <div className="project-description-explnation">
        <span className="project-description-explnation-title">
          Database Managment-Student's details
        </span>
        <ul>
          <li>The site is used to manage Info in Database.</li>
          <li>main page- shows all students with their faculties.</li>
          <li>
            Pressing on student's name on main page gives all student current
            information.
          </li>
          <li>
            Create New student - opens a new page and lets the user input new
            student into the database.
          </li>
          <li>
            Grades - shows all student's past grades and gives option to add
            grades.
          </li>
          <li>
            Edit- when pressing on specific student Edit gives all the student
            info in new page and lets you edit it.
          </li>
          <li>
            the project has Search implemented to find student by either first
            name or surname.
          </li>
          <li>
            the project has dat validation implemented to check if the student
            was born yet or if the grades set didnt pass the current date.
          </li>
          <li>
            project made with vanilla javascript, nodeJS as backend and MongoDB
            as Database.
          </li>
        </ul>
      </div>
      <div className="project-description-seperating-div"></div>
      <div className="project-description-images">
        <div className="second-project-content">
          <img
            src={require("../assets/2nd project/MainPage.png")}
            alt="MainPage"
          />
          <img
            src={require("../assets/2nd project/NewStudent.png")}
            alt="NewStudent"
          />
          <img
            src={require("../assets/2nd project/EditStudent.png")}
            alt="EditStudent"
          />
          <img src={require("../assets/2nd project/Grades.png")} alt="Grades" />
        </div>
      </div>
    </>
  );
};
export default SecondProjectExplanation;
