import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleLogin(){
        console.log("Email: ", email);
        console.log("Password: ", password);
        //backend localhost:3000/users/login

        axios.post(import.meta.env.VITE_API_URL+"/users/login",{
            email : email,
            password : password
        }).then((response)=>{

            console.log(response.data);
            localStorage.setItem("token" , response.data.token);
            //alert("Login successful!");
            toast.success("Login successful!");
            if(response.data.isAdmin){
                //redirect to admin dashboard
                //window.location.href = "/admin"
                
                navigate("/admin")
            }else{
                //redirect to homepage
                //window.location.href = "/"
                navigate("/")
            }

        }).catch((error)=>{
            //alert(error.response.data.message);
            toast.error(error.response.data.message)
        });
    }

	return (
		<div className="w-full h-screen flex justify-center items-center bg-[url('/bg.png')] bg-center bg-cover">
			<div className="w-1/2  h-full "></div>
			<div className="w-1/2  h-full  flex justify-center items-center ">
				<div className="w-[350px] h-[500px] text-[14px] backdrop-blur-lg rounded-2xl shadow-3xl flex flex-col justify-center items-center">
					<h1 className="text-4xl font-bold mb-8 text-accent">Sign in</h1>
					<input
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        }
                        value={email}
						placeholder="Email"
						className="w-3/4 p-3 mb-10 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-gray-500 text-amber-50"
					/>
					<input    
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                        value={password}
						placeholder="Password"
						type="password"
						className="w-3/4 p-3 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-gray-500 text-amber-50"
					/>
                    <p className="mb-6 w-3/4 mb-14 text-center text-white">Forget password? <Link to="/forgot-password" className="text-accent">Click here</Link></p>
                    <button onClick={handleLogin} className="w-3/4 p-3 bg-accent text-white rounded-lg ">
                        Sign in
                    </button>
                    <p className="mt-6 w-3/4 text-center text-white">Don't have an account? <Link to="/register" className="text-accent">Register</Link></p>
				</div>
			</div>
		</div>
	);
}
