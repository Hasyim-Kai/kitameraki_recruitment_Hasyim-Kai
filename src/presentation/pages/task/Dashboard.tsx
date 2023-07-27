import { ITextFieldStyles, TextField } from "@fluentui/react";
import { useState } from "react";
import DefaultLayout from "../../component/layout/Default";

export default function Dashboard() {
    const [input, setInput] = useState({
        email: ``,
        desc: ``
    })
    function handleInput(e: any) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(input)
    }

    const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
    return <DefaultLayout>
        <section>
            <TextField
                name="email"
                label="Basic controlled TextField"
                onChange={handleInput}
                styles={textFieldStyles}
            />
            <TextField
                name="desc"
                label="Controlled TextField limiting length of value to 5"
                onChange={handleInput}
                styles={textFieldStyles}
            />
            <button onClick={handleSubmit}>aaa</button>
        </section>
    </DefaultLayout>
}