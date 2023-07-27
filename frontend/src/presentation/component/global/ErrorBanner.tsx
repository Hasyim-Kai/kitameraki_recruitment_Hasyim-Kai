type Props = { txt?: string }

export default function ErrorBanner({ txt = `Something went Wrong ...` }: Props) {
    return <div className='p-6 bg-red-200 rounded-md my-5'>
        <h1 className='text-xl'>{txt}</h1>
    </div>
}