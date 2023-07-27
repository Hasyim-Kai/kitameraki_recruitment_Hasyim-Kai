import Navbar from "../component/global/Navbar"

interface Props {
    children: JSX.Element | JSX.Element[] | null
}

export default function DefaultLayout({ children }: Props) {
    return <main className="min-h-screen">
        <Navbar />
        {children}
    </main>
}