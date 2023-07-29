import { TextField } from '@fluentui/react'
import { Task, fetchDelTask, fetchUpdateTask, formSettingLsKey } from '../../../../infrastructure/task'
import { useEffect, useState } from 'react'
import { BackIcon, DeleteIcon, EditIcon } from '../../global/Icons'
import useDataMutator from '../../../hooks/useMutate'
import ErrorBanner from '../../global/ErrorBanner'
import Loading from '../../global/Loading'

type Props = {
    task: Task,
    refetchFn: any
}

export default function TakListItem({ task, refetchFn }: Props) {
    const [optionalText, setOptionalText] = useState([])
    const [isEdit, setIsEdit] = useState<boolean>(false)
    function handleIsEdit() { setIsEdit(!isEdit) }
    const [input, setInput] = useState<Task>({
        id: task.id,
        title: task.title,
        desc: task?.desc
    })
    function handleInput(e: any) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const { data, loading, error, mutateData } = useDataMutator();
    function handleSubmit(e: any) {
        e.preventDefault()
        mutateData(fetchUpdateTask, input);
    }
    function handleDel(e: any) {
        e.preventDefault()
        mutateData(fetchDelTask, input.id);
    }
    useEffect(() => {
        if (data?.status) {
            setIsEdit(false)
            refetchFn()
        }
        const formSettingJson = localStorage.getItem(formSettingLsKey) || '[]'
        const formSettingParsed = JSON.parse(formSettingJson);
        setOptionalText(formSettingParsed)
    }, [data])

    return <div className='flex justify-between items-center gap-5 border p-5 rounded-md shadow-sm'>
        {loading ? <Loading />
            : error ? <ErrorBanner />
                : isEdit ? <form className='w-full' onSubmit={handleSubmit}>
                    <TextField name='title' label="Title" value={input.title} onChange={handleInput} />
                    <TextField name='desc' label="Description" value={input.desc} onChange={handleInput} multiline resizable={false} rows={6} />
                    <button className='mt-5 flex items-center'><EditIcon /> Submit</button>
                </form>
                    : <div>
                        <h1 className='text-xl font-semibold'>{task.title}</h1>
                        {optionalText.map((item: any) => <p className='text-sm'>{task[item?.txt]}</p>)}
                        <p className='text-sm text-gray-600'>{task?.desc}</p>
                    </div>}
        <div className='flex flex-col gap-5'>
            {isEdit ? <button onClick={handleIsEdit}><BackIcon /></button> : <button onClick={handleIsEdit}><EditIcon /></button>}
            <button onClick={handleDel}><DeleteIcon /></button>
        </div>
    </div>
}