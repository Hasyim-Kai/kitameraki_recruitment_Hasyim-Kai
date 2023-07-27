import { TextField } from '@fluentui/react'
import { Task } from '../../../../infrastructure/task'
import { useState } from 'react'
import { BackIcon, DeleteIcon, EditIcon } from '../../global/Icons'

type Props = {
    task: Task
}

export default function TakListItem({ task }: Props) {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    function handleIsEdit() { setIsEdit(!isEdit) }
    const [input, setInput] = useState<Task>({
        title: task.title,
        desc: task?.desc
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

    return <div className='flex justify-between items-center gap-5 border p-5 rounded-md shadow-sm'>
        {isEdit ? <form className='w-full' onSubmit={handleSubmit}>
            <TextField name='title' label="Title" value={input.title} onChange={handleInput} />
            <TextField name='desc' label="Description" value={input.desc} onChange={handleInput} multiline resizable={false} rows={6} />
            <button className='mt-5 flex items-center'><EditIcon /> Submit</button>
        </form>
            : <div>
                <h1 className='text-xl font-semibold'>{task.title}</h1>
                <p className='text-sm'><i>{task?.date}</i></p>
                <p className='text-sm text-gray-600'>{task?.desc}</p>
            </div>}
        <div className='flex flex-col gap-5'>
            {isEdit ? <button onClick={handleIsEdit}><BackIcon /></button> : <button onClick={handleIsEdit}><EditIcon /></button>}
            <button><DeleteIcon /></button>
        </div>
    </div>
}