import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const { googleSigned, createUser, updateUser } = useAuth()
    const axiosInstance = useAxios()

    const navigate = useNavigate()
    const location = useLocation()


    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await createUser(email, password);
            await updateUser(name); 

            const userInfo = { displayName: name, email };
            const { data } = await axiosInstance.post("/users", userInfo);
            if(data.insertedId){
                Swal.fire("user created Successfully")
                navigate(location?.state || "/")
                e.target.reset()
            }

            e.target.reset();
        } catch (err) {
            // console.error(err);
            setError(err.message);
        }
    };


    const handleGoogleSign = () => {
        googleSigned()
            .then(res => {
                const users = res.user
                axiosInstance.post("/users", users)
                    .then(data => {
                        console.log(data.data)
                    })
                navigate(location?.state || "/")
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl text-center font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Username"
                                pattern="[A-Za-z][A-Za-z0-9\-]*"
                                minLength="3"
                                maxLength="30"
                                title="Only letters, numbers or dash"
                            />
                        </label>
                        <label className="label">Your Email</label>
                        <label className="input validator">
                            <input type="email" name="email" placeholder="mail@site.com" required />
                        </label>
                        <label className="label">Password</label>
                        <label className="input validator">
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                        {show ?
                            <FaEye onClick={() => setShow(false)} className='absolute right-13 top-60 cursor-pointer'></FaEye> :
                            <FaEyeSlash onClick={() => setShow(true)} className='absolute right-13 top-60 cursor-pointer'></FaEyeSlash>}
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including,one number,one lowercase letter,one uppercase letter
                        </p>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p>Already have an account? <Link to="/login" className="underline">Log in Now</Link></p>
                {error && <p className="text-center text-red-600">{error}</p>}
                </form>

                <div className="divider">OR</div>
                <button type="button" onClick={handleGoogleSign} className="btn bg-white text-black border-[#e5e5e5] w-3/4 mx-auto">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    SignUp with Google
                </button>

            </div>
        </div>
    )
}
export default SignUp;