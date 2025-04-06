import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/u%C4%9Fur-ibrahimov-958bb1229/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/uguribrahimov" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/uguribrahimv?igsh=MWJxbWxrMzBlMjY4MA%3D%3D&utm_source=qr" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
