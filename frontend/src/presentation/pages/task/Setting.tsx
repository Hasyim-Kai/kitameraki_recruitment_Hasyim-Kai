import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from "react";
import DefaultLayout from "../../layout/Default";
import FormItem from "../../component/features/task/FormItem";
import StrictModeDroppable from '../../component/features/task/Droppable';
import { TextField } from '@fluentui/react';
import { formSettingLsKey } from '../../../infrastructure/task';

export default function SettingTaskPage() {
    const [columns, setColumns] = useState({
        formItem: {
            id: 'formItem',
            list: [{ id: '1', type: 'number', txt: 'Number' }, { id: '2', type: 'date', txt: 'Date' }, { id: '3', type: 'txt', txt: 'Text Field' }]
        },
        formImplementation: {
            id: 'formImplementation',
            list: []
        }
    })

    const onDragEnd = ({ source, destination }: any) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null

        // Make sure we're actually moving the item
        if (source.droppableId === destination.droppableId && destination.index === source.index) return null

        // Set start and end variables
        const start = columns[source.droppableId]
        const end = columns[destination.droppableId]

        // If start is the same as end, we're in the same column
        if (start === end) {
            const newList = start.list.filter((_: any, idx: number) => idx !== source.index)
            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index])

            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                list: newList
            }

            setColumns(state => ({ ...state, [newCol.id]: newCol }))
            return null
        } else {
            // Insert the item into the end list
            const newEndList = end.list
            const fieldToAdd = { ...start.list[source.index] }
            fieldToAdd.id = 'new Field ' + String(new Date())
            newEndList.splice(destination.index, 0, fieldToAdd)

            setColumns(state => ({
                ...state,
                [end.id]: { id: end.id, list: newEndList }
            }))
            return null
        }
    }
    function delImplementationForm(id: string) {
        const newList = columns.formImplementation.list.filter((item: any) => item.id !== id);
        setColumns(state => ({
            ...state,
            formImplementation: { ...state.formImplementation, list: newList }
        }))
    }
    function changeLabelImplementationForm(id: string, label: string) {
        const formImplementationListClone = columns.formImplementation.list.slice();
        const itemIndex = formImplementationListClone.findIndex((item: any) => item.id === id);
        formImplementationListClone[itemIndex] = {
            ...formImplementationListClone[itemIndex],
            txt: label.replace(/\s/g, '')
        }
        setColumns(state => ({
            ...state,
            formImplementation: { ...state.formImplementation, list: formImplementationListClone }
        }))
    }
    function saveSetting() {
        localStorage.setItem(formSettingLsKey, JSON.stringify(columns.formImplementation.list));
    }
    useEffect(() => {
        const formSettingJson = localStorage.getItem(formSettingLsKey) || '[]'
        const formSettingParsed = JSON.parse(formSettingJson);
        setColumns(state => ({
            ...state,
            formImplementation: { ...state.formImplementation, list: formSettingParsed }
        }))
    }, [])

    return <DefaultLayout isPadded={false} addStyle="flex">
        <DragDropContext onDragEnd={onDragEnd}>
            <section className="w-1/4 bg-gray-100 border-r border-black">
                <div className='border-b border-black px-4 py-2 font-medium'><h1>Components</h1></div>
                <StrictModeDroppable droppableId={columns.formItem.id} isDropDisabled={true}>
                    {(provided: any) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='p-3 flex gap-3 flex-wrap'>
                            {columns.formItem.list.map((item: any, index: number) => <FormItem key={item.id} item={item} index={index} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </StrictModeDroppable>
            </section>

            <section className="w-3/4 p-5">
                <div className=''>
                    <div className='flex gap-5'>
                        <h1 className='text-3xl font-semibold mb-3'>Form Setting</h1>
                        <button className='border px-3 py-1 rounded-md' onClick={saveSetting}>Save Setting</button>
                    </div>
                    <p className='font-medium mb-3'>Standard Field</p>
                    <TextField name='title' type="text" label="Title" required disabled />
                    <TextField name='desc' label="Description" multiline resizable={false} rows={3} disabled />
                    <p className='font-medium my-5'>Optional Field</p>
                </div>
                <StrictModeDroppable droppableId={columns.formImplementation.id}>
                    {(provided: any) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='min-h-screen flex flex-col gap-4'>
                            {columns.formImplementation.list.map((item: any, index: number) => <FormItem implementForm key={item.id} item={item} index={index} txtChangeFn={changeLabelImplementationForm} delFn={delImplementationForm} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </StrictModeDroppable>
            </section>
        </DragDropContext>
    </DefaultLayout>
}