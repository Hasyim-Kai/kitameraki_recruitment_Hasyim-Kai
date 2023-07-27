export interface Task {
    id: number,
    title: string,
    date?: string,
    desc?: string
}

export const dummyTask: Task[] = [
    {
        id: 0,
        title: 'Pemuda Tersesat',
        desc: 'Zuko Ui 3 periode aowkawokwaokwok'
    },
    {
        id: 1,
        title: 'saia siapa',
        desc: 'dimana bantengnya ??'
    },
]