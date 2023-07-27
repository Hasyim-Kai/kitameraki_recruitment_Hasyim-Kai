interface Props {
    txt?: string,
    child?: JSX.Element | JSX.Element[] | null,
    fn: () => any,
    style?: string
}

export default function PrimaryBtn({ txt, child, fn, style }: Props) {
    return <button className={`flex gap-5 items-center ${style}`} onClick={fn}>
        {child}
        {txt}
    </button>
}