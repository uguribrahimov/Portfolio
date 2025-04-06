import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around">
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[300px] mb-6 md:mb-0 " 
      />
      <div className="flex flex-col gap-5 items-start justify-center">
        <ContactInfo />
        <ContactSocial />
      </div>
    </div>
  );
};

export default ContactMeRight;
