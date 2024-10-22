import Navbar from "../../components/shared/Navbar";
import bodyImage from "../../assets/images/body-image.png";
import SignInForm from "../../components/form/SignInForm";


export default function SignIn (){
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 gap-10 items-center h-[90vh]">
          <img src={bodyImage} alt="body image" className="h-[83vh]" />
          <SignInForm />         
        </div>
      </div>
    </div>
  );
};

