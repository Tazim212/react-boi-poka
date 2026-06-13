import { Link } from "react-router";

const LogIn = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl text-center font-bold">Login now!</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <label className="input validator">
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>                            <label className="label">Password</label>
                        <label className="input validator">
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including,one number,one lowercase letter,one uppercase letter
                        </p>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>don't have an account? <Link to="/register">Register Now</Link></p>
                </div>
            </div>
        </div>
    )
}
export default LogIn;