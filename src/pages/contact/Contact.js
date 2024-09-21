import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
     
      
         
          <div className="col-12 col-lg-6 ">
            <ContactInfo name={name} location={location} email={email} />
          </div>
    
      <SocialIcons />
    </section>
  );
};

export default Contact;
