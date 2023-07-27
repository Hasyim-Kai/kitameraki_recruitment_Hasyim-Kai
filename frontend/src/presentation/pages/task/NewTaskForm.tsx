import { useEffect, useState } from "react";
import DefaultLayout from "../../layout/Default";
import { TextField } from "@fluentui/react";
import { Task, fetchPostTask } from "../../../infrastructure/task";
import useDataMutator from "../../hooks/useMutate";
import Loading from "../../component/global/Loading";
import ErrorBanner from "../../component/global/ErrorBanner";
import { useNavigate } from "react-router-dom";

export default function NewTaskForm() {
    const navigate = useNavigate()
    const [input, setInput] = useState<Task>({
        title: '',
        desc: ''
    })
    function handleInput(e: any) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const { data, loading, error, mutateData } = useDataMutator();
    function handleSubmit(e: any) {
        e.preventDefault()
        mutateData(fetchPostTask, input);
    }
    useEffect(() => {
        if (data?.status) { navigate(-1) }
    }, [data])

    return <DefaultLayout>
        {loading ? <Loading />
            : error ? <ErrorBanner />
                : <form className="mx-auto w-8/12" onSubmit={handleSubmit}>
                    <TextField name='title' type="text" label="Title" onChange={handleInput} required />
                    <TextField name='desc' label="Description" onChange={handleInput} multiline resizable={false} rows={10} />
                    <button className="mt-5 text-xl">+ Add</button>
                </form>}
    </DefaultLayout>
}