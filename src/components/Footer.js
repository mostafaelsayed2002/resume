import {BsFacebook, BsFillTelephoneFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

function Footer() {


    return (

   <div className="flex flex-col bg-gray-50 justify-center items-center mb-8  h-[120px]  gap-2">

       <p className=" pr-8 pl-8 text-center font-mono bg-gray-400 rounded mt-8 w-fit rounded-3xl">Contact Me</p>
       <div className="flex flex-row gap-2 items-center justify-center">
           <BsFillTelephoneFill/>
           <p className="text-center font-mono">+201111278802</p>
       </div>

       <div className="flex flex-row gap-2 items-center justify-center">
           <a href="https://www.facebook.com/mostafa.elsayed.2002">
               <BsFacebook className="w-[30px] h-[30px] fill-gray-600"/>
           </a>
           <a href=" https://www.linkedin.com/in/mostafa-elsayed-19a610214/">
               <AiFillLinkedin className="w-[35px] h-[35px] fill-gray-600"/>
           </a>

           <a href="https://github.com/mostafaelsayed2002">
               <AiFillGithub className="w-[35px] h-[35px] fill-gray-600"/>
           </a>

       </div>


   </div>

    );
}

export default Footer;
