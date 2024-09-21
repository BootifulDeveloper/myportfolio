

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
    <div className="socialIcons" style={styles.socialIcons}>
     
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/rahul-chauhan-766528219">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Rahul Chauhan' LinkedIn Profile"></i>
      </a>
      
      
    </div>
  );
};

export default SocialIcons;
