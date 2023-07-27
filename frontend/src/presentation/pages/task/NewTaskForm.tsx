import { useState } from "react";
import DefaultLayout from "../../layout/Default";
import { TextField } from "@fluentui/react";
import { Task } from "../../../infrastructure/task";

export default function NewTaskForm() {
    const [input, setInput] = useState<Task>({
        title: '',
        date: '',
        desc: ''
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

    return <DefaultLayout>
        <form className="mx-auto w-8/12" onSubmit={handleSubmit}>
            <TextField name='title' type="text" label="Title" onChange={handleInput} required />
            <TextField name='date' type="date" label="Date" onChange={handleInput} />
            <TextField name='desc' label="Description" onChange={handleInput} multiline resizable={false} rows={10} />
            <button className="mt-5">Add</button>
        </form>
    </DefaultLayout>
}