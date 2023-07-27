import { useState } from "react";
import DefaultLayout from "../../layout/Default";
import { Task, dummyTask } from "../../../infrastructure/task";
import TakListItem from "../../component/features/task/ListItem";

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([])

    return <DefaultLayout>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {dummyTask.map((task: Task, i: number) => <TakListItem key={i} task={task} />)}
        </section>
    </DefaultLayout>
}