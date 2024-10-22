import { useForm, SubmitHandler } from 'react-hook-form';

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpForm () {
  const { register, handleSubmit } = useForm<SignupFormValues>();

  const onSubmit: SubmitHandler<SignupFormValues> = data => {
    console.log(data);
    // Handle form submission (e.g., send data to backend)
  };

  return (
    <div className='text-white w-[80%]'>
      <h1 className='text-4xl font-bold my-3'>Sign up to begin journey</h1>
      <h4 className='text-[#B8B8B8] mb-6'>This is basic signup page which is used for levitation <br/> assignment purpose.</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        {/* Name Field */}
        <div className='my-4'>
          <label className="block my-1">Enter your name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required", minLength: 3 })}
            placeholder='Enter Email ID'
            className="border p-4 w-full rounded bg-[#1F1F1F] border-[#424647] placeholder:font-thin outline-none"
          />
          {/* {errors.name && <span className="text-red-600">{errors.name.message}</span>} */}
          <span className='text-[#B8B8B8] font-thin'>This name will be displayed with your inquiry</span>
        </div>

        {/* Email Field */}
        <div className='my-4'>
          <label className="block my-1">Email Address</label>
          <input
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format"
              }
            })}
            placeholder='Enter Email ID'
            className="border border-[#424647] p-4 w-full rounded bg-[#1F1F1F] placeholder:font-thin outline-none"
          />
          {/* {errors.email && <span className="text-red-600">{errors.email.message}</span>} */}
          <span className='text-[#B8B8B8] font-thin'>This email will be displayed with your inquiry</span>
        </div>

        {/* Password Field */}
        <div className='my-4'>
          <label className="block my-1">Password</label>
          <input
            type="password"
            {...register("password", { 
              required: "Password is required", 
              minLength: { value: 6, message: "Password must be at least 6 characters long" }
            })}
            placeholder='Enter the Password'
            className="border border-[#424647] p-4 w-full rounded bg-[#1F1F1F] placeholder:font-thin outline-none"
          />
          {/* {errors.password && <span className="text-red-600">{errors.password.message}</span>} */}
          <span className='text-[#B8B8B8] font-thin'>Any further updates will be forwarded on this Email ID</span>
        </div>

        {/* Submit Button */}
        <div className='mt-6'>
          <button type="submit" className=" bg-[#1F1F1F] py-4 px-6 rounded-lg text-[#CCF575]">
            Register
          </button>
          <span className='text-[#B8B8B8] px-5'>Already have account ?</span>
        </div>
      </form>
    </div>
  );
};
