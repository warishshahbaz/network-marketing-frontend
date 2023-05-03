import { ShareSocial } from "react-share-social";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import {AiFillGooglePlusCircle} from 'react-icons/ai'

export default function SocialApp() {
  return (
    <div className="fixed  top-[300px] right-[0px] flex flex-col h-[100px] justify-evenly ">
      <a
        href="https://www.facebook.com/profile.php?id=100063804705328"
        target={"_blank"}
      >
        <BsFacebook
          size="35"
          className="  sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] rounded-[50%] hover:rounded-[50%] mb-2 "
          round={true}
        >
          {" "}
        </BsFacebook>
      </a>
      <a href="https://www.linkedin.com/in/imperial-management-15759014b/?original_referer=http%3A%2F%2Fimperialmanagement.in%2F" target={"_blank"}>
        <GrLinkedin
          size="30"
          className=" sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] rounded-[50%] hover:rounded-[50%] mb-2 "
          lightingColor="white"
          round={true}
        ></GrLinkedin>
      </a>

      <a href="">
        <AiFillTwitterCircle
          size="35"
          className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]  rounded-[50%] hover:rounded-[50%] mb-2 "
          lightingColor="white"
          round={true}
        ></AiFillTwitterCircle>
      </a>
      <a href="https://www.google.co.in/search?ei=ASURWsmgB8nXvgSvzKywDg&q=+imperial+management+trichy&oq=+imperial+management+trichy&gs_l=psy-ab.3..35i39k1l2j0l7j0i8i30k1.2713.4599.0.5572.3.2.1.0.0.0.93.180.2.2.0....0...1.1.64.psy-ab..0.3.180....0.IYQgghPUAOk">
        <AiFillGooglePlusCircle
          size="35"
          className=" sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] rounded-[50%] hover:rounded-[50%] mb-2 "
          lightingColor="white"
          round={true}
        ></AiFillGooglePlusCircle>
      </a>
    </div>
  );
}
