import { useState } from "react";

function Form(){
    const [name,setName] = useState("");

    const handleSubmit = (e) =>{
        alert(`Form submitted with name : ${name}`)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
            <p>Your name is : {name}</p>
        </div>
    )
}

export default Form;