export interface Task {
    id: number,
    title: string,
    date?: string,
    desc?: string
}

export const dummyTask: Task[] = [
    {
        id: 1,
        title: 'Pemuda Tersesat',
        desc: 'Zuko Ui 3 periode aowkawokwaokwok'
    },
    {
        id: 2,
        title: 'saia siapa',
        desc: 'dimana bantengnya ??'
    },
]