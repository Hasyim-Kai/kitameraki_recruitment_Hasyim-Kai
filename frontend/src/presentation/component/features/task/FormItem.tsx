import { Draggable } from 'react-beautiful-dnd';
import { DateIcon, DeleteIcon, TextIcon, UpDownIcon } from '../../global/Icons';
import { TextField } from '@fluentui/react';

type Props = { implementForm?: boolean, item: any, index: number, txtChangeFn: any, delFn: any }

export default function FormItem({ implementForm = false, item, index, txtChangeFn, delFn }: Props) {
    function renderIcon(type: string) {
        if (type === 'number') { return <UpDownIcon /> }
        else if (type === 'date') { return <DateIcon /> }
        else if (type === 'txt') { return <TextIcon /> }
        else { return <TextIcon /> }
    }

    return <Draggable draggableId={item.id} index={index}>
        {(provided: any) => (implementForm
            ? <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                className='flex gap-5 items-center shadow p-3 bg-white rounded-md'>
                <TextField className='w-full' type='text' label={item.txt}
                    onChange={(e) => txtChangeFn(item.id, e.target.value)} />
                <button onClick={() => delFn(item.id)}><DeleteIcon /></button>
            </div>
            : <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                className='flex flex-col items-center justify-center p-3 bg-white rounded-md w-20 h-20'>
                {renderIcon(item.type)}
                <p className='text-xs mt-1'>{item.txt}</p>
            </div>
        )}
    </Draggable>
}