import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Emanuele Bartolesi. All Rights Reserved.`,
  author: {
    name: "Emanuele Bartolesi",
    accounts: [
      {
        url: "https://github.com/kasuken",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/kasuken",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/kasuken",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/bartolesiemanuele",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:emanueleb@outlook.com",
        label: "Mail Emanuele",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
