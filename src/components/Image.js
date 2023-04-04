import { BsFillTelephoneFill ,BsFacebook} from "react-icons/bs";
import { AiFillLinkedin ,AiFillGithub} from "react-icons/ai";


function  Image() {

    const imgsrc="https://i.imgur.com/iVVwD3B.jpg"
    return (








        <div className="flex flex-col items-center gap-1 bg-gray-200 w-full pb-5">


            <div className="flex flex-row">
                <img  className="border border-4 border-gray-600 rounded-full w-[200px] m-4"  src={imgsrc}/>

                <div className="flex flex-col mt-20 gap-2">
                <h1 className="font-serif text-4xl text-center text-gray-600  ">Mostafa Elsayed</h1>
                 <div>
                     <p className="font-extrabold  text-center text-gray-700 ">Computer Engineer</p>
                     <p className="font-extrabold  text-center text-gray-700 mb-5">Web Developer</p>
                 </div>
                 </div>


            </div>


                    <p className=" pr-8 pl-8 text-center font-mono bg-gray-400 rounded rounded-3xl">Contact Me</p>
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

export default Image;
