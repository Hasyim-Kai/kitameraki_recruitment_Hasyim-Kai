interface Props {
    children: JSX.Element | JSX.Element[] | null
}

export default function DefaultLayout({ children }: Props) {
    return <main className="min-h-screen">
        {children}
    </main>
}