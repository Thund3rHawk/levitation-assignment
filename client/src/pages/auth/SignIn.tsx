import Navbar from "../../components/shared/Navbar";
import bodyImage from "../../assets/images/body-image.png";
import SignInForm from "../../components/form/SignInForm";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  function handleNavigate (){
    console.log("click from nav");
    navigate('/');
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar navButton={<button onClick={handleNavigate} className="bg-transparent text-[#CCF575] border border-[#CCF575] rounded-lg px-6 relative transform transition-transform duration-300 hover:translate-x-4 hover:bg-[#CCF575] hover:text-black">
          Connect People With Technology
        </button>}/>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 gap-10 items-center h-[90vh]">
          <img src={bodyImage} alt="body image" className="h-[83vh]" />
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
