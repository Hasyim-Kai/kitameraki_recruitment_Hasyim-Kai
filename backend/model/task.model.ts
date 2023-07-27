export interface Task {
    id: number,
    title: string,
    date?: string,
    desc?: string
}

export const dummyTask: Task[] = [
    {
        id: 0,
        title: 'Random Data',
        desc: 'Dummy description for the object.'
    },
    {
        id: 1,
        title: 'Sample Title',
        desc: 'This is a random description.'
    },
    {
        id: 2,
        title: 'JavaScript Object',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 3,
        title: 'JavaScript Object',
        desc: 'Dummy description for the object.'
    },
    {
        id: 4,
        title: 'Sample Title',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 5,
        title: 'JavaScript Object',
        desc: 'This is a random description.'
    },
    {
        id: 6,
        title: 'Sample Title',
        desc: 'This is a random description.'
    },
    {
        id: 7,
        title: 'Lorem Ipsum',
        desc: 'Another random description.'
    },
    {
        id: 8,
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 10,
        title: 'Random Data',
        desc: 'Lorem ipsum dolor sit amet.'
    }
]