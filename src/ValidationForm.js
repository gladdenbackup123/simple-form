import { use, useState } from "react";

function ValidationForm(){
    const [email,setEmail] = useState("")
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")){
            setError("Invalid email address");
        }
        else{
            setError("");
            alert("Email submitted");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <button type="submit">Submit</button>

            <p style={{color:"red"}}>{error}</p>
        </form>
    )
}

export default ValidationForm;