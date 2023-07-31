import Navbar from "../component/global/Navbar"

interface Props {
    children: JSX.Element | JSX.Element[] | null
    isPadded?: boolean
    addStyle?: string
}

export default function DefaultLayout({ children, isPadded = true, addStyle }: Props) {
    return <main className={`min-h-screen`}>
        <Navbar />
        <div className={`${isPadded ? 'p-7' : 'p-0'} ${addStyle}`}>
            {children}
        </div>
    </main>
}