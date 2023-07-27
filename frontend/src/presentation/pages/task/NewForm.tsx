import { useState } from "react";
import DefaultLayout from "../../layout/Default";
import { Task, dummyTask } from "../../../infrastructure/task";
import TakListItem from "../../component/features/task/ListItem";

export default function NewForm() {
    const [input, setIinput] = useState<Task>({
        title: '',
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
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            Form
        </form>
        <button>Add</button>
    </DefaultLayout>
}