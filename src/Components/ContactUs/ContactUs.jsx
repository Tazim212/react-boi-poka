import { IoSend } from "react-icons/io5";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ContactUs = () => {
    const axiosInstance = useAxios()

    const handleMessage = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const messageBody = { name, email, message };
        axiosInstance.post("/usermessage", messageBody)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire("Your message has been posted")
                    e.target.reset()
                }
            })

    }
    return (
        <div className="flex justify-center items-center gap-15">
            <div className="w-80 shadow-2xl py-2 px-6">
                <h1 className="font-bold text-2xl/7 text-amber-800 italic">Have a question, suggestion, or feedback?
                </h1>
                <p className="py-5 text-gray-600">We would love to hear any question or doubts of yours to solve your problems</p>
            </div>
            <form onSubmit={handleMessage}>
                <fieldset className="py-4 text-gray-200 border-2 my-5 bg-sky-900 rounded-3xl opacity-90 shadow-2xl w-90 flex-wrap">
                    <div className="flex flex-col px-10">
                        <label className="py-2">Your Name</label>
                        <label className="input validator bg-gray-700">
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
                    </div>
                    <div className="flex flex-col px-10">
                        <label className="py-2">Your Email</label>
                        <label className="input validator bg-gray-700">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" name="email" placeholder="mail@site.com" required />
                        </label>
                    </div>
                    <div className="validator-hint hidden">Enter valid email address</div>
                    <div className="px-10">
                        <legend className="py-2">Message</legend>
                        <textarea placeholder="Write your message" name="message" className="textarea textarea-primary bg-gray-700"></textarea>
                    </div>
                    <button type="submit" className="btn btn-soft flex items-center my-3 mx-auto w-3/4"><span><IoSend></IoSend></span> Send Message</button>
                </fieldset>
            </form>
        </div>
    )
}
export default ContactUs;