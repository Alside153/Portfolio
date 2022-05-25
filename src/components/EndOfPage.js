import { SiGmail, SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si";

const handleGmailClick = () => {
  window.open(
    "mailto:shlomoruckban@gmail.com?subject=Hello%20Shlomo",
    "_blank"
  );
};
const handleLinkedinClick = () => {
  window.open("https://www.linkedin.com/in/shlomo-ruckban/", "_blank");
};
const handleWhatsappClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=972522245480&text=Hello!+How+are+you?",
    "_blank"
  );
};
const handleGithubClick = () => {
  window.open("https://github.com/Alside153/General", "_blank");
};

const EndOfPage = () => {
  return (
    <div className="EndOfPage">
      <span>Stay In Touch</span>
      <div className="EndOfPageIcons">
        <div onClick={handleGmailClick}>
          <SiGmail />
        </div>
        <div onClick={handleLinkedinClick}>
          <SiLinkedin />
        </div>
        <div onClick={handleWhatsappClick}>
          <SiWhatsapp />
        </div>
        <div onClick={handleGithubClick}>
          <SiGithub />
        </div>
      </div>
    </div>
  );
};

export default EndOfPage;
