import Navbar from "../component/global/Navbar"

interface Props {
    children: JSX.Element | JSX.Element[] | null
}

export default function DefaultLayout({ children }: Props) {
    return <main className="min-h-screen">
        <Navbar />
        <div className="p-7">
            {children}
        </div>
    </main>
}