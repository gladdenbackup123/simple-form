import { use, useState } from "react";

function FeedbackForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [isSubmitted,setSubmitted] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!name || !email || !message){
            alert("All fields are required!")
        }
        else{
            alert("Your feedback has been submitted.")
            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br/>
            <label>Email :</label>
            <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <label>Feedback :</label>
            <input
            type="text"
            placeholder="Enter your feedback"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            <br/>
            <button type="submit">Submit</button>
        </form>

        {isSubmitted && <p>Your feedback has been submitted.</p>}
        </div>
    )
}

export default FeedbackForm;