const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" aria-label="Social profile links">
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/rahul-chauhan-766528219"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Rahul Chauhan on LinkedIn"
      >
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
