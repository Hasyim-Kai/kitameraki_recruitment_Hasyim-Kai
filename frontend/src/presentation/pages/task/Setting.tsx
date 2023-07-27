import { useState } from "react";
import DefaultLayout from "../../layout/Default";

export default function SettingTaskPage() {
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

    return <DefaultLayout>
        <section>
            Setting
        </section>
        <section>
            <form method="post">

            </form>
        </section>
    </DefaultLayout>
}