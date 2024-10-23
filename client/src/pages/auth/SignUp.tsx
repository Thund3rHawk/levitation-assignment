import Navbar from "../../components/shared/Navbar";
import bodyImage from "../../assets/images/body-image.png";
import SignUpForm from "../../components/form/SignUpForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  function handleNavigate (){
    // console.log("click from nav");
    navigate ('/sign-in')
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar navButton={<button onClick={handleNavigate} className="bg-[#CCF575] rounded-lg px-6 relative transform transition-transform duration-300 hover:-translate-x-4">
          Login
        </button>}/>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 gap-10 items-center h-[90vh]">
          <img src={bodyImage} alt="body image" className="h-[83vh]" />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
