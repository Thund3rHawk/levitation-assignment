import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#1F1F1F] py-3 flex justify-center align-middle">
      <div className="container flex justify-between">
        <img src={logo} alt="logo" className="h-12" />
        <button className="bg-[#CCF575] rounded-lg px-6 relative transform transition-transform duration-300 hover:-translate-x-4">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
