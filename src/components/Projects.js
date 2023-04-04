
function  Projects() {


    return (

       <div className="flex flex-row  bg-[#222831]  mt-1   pb-36">

           <div className="flex flex-col   mt-20  rounded-2xl  ml-20">

               <ul className="list-disc  text-white border-2 border-white rounded-2xl font-bold font-extrabold text-xl p-10">
                   <a href="https://github.com/mostafaelsayed2002/Chess-Game-With-Assembly">
                   <li className="mt-4 mb-4"> Chess game using Assembly</li>
                   </a>

                   <a href="https://github.com/mostafaelsayed2002/RestaurantDB">
                   <li  className="mt-4 mb-4">Website for Restaurant</li>
                   </a>
                   <li  className="mt-4 mb-4">Snake and Ladder using C++ (OOP) </li>

                   <li  className="mt-4 mb-4">Make AES using verilog</li>

                   <li  className="mt-4 mb-4">Shoping Company Simulation System C++ (data structure)</li>


               </ul>



           </div>


         <div className="flex-col justify-center items-center mt-20 flex">
             <img src="https://img.icons8.com/color-glass/1000/null/project-management.png" className="w-[100px] h-[100px] ml-40 "/>
             <h1 className="text-4xl font-serif font-bold text-white text-center ml-40 ">Projects</h1>
           <p className= "  text-white text-center ml-40 mt-4 ">Click on the Project to go to github</p>
         </div>
       </div>


    );
}

export default Projects;
