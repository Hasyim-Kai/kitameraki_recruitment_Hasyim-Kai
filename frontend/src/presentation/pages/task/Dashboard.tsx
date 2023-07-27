import { useState } from "react";
import DefaultLayout from "../../layout/Default";
import { Task, fetchTask } from "../../../infrastructure/task";
import TakListItem from "../../component/features/task/ListItem";
import PrimaryBtn from "../../component/global/PrimaryBtn";
import useFetch from "../../hooks/useFetch";
import Loading from "../../component/global/Loading";
import ErrorBanner from "../../component/global/ErrorBanner";

export default function Dashboard() {
    const [page, setPage] = useState<number>(1)
    const addPage = () => { setPage(page + 1) }
    const { data, loading, error } = useFetch(true, fetchTask, page);

    return <DefaultLayout>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {loading ? <Loading />
                : error ? <ErrorBanner />
                    : data?.length === 0 ? <div>Cannot Found Anything</div>
                        : data?.map((task: Task, i: number) => <TakListItem key={i} task={task} />)}
        </section>
        <PrimaryBtn txt="+ More" style="mt-7" fn={addPage} />
    </DefaultLayout>
}