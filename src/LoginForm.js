import { use, useState } from "react";

function LoginForm(){
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("");

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const {key,value} = e.target;
        setFormData(prev => ({...prev, [key]:value}))
        console.log(formData);
    };

    return (
        <form>
            <input
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            />
            <br/>
            <input
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            />
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;