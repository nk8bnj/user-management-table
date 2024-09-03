interface Props {
	error: string | null
}

export default function ErrorMessage({ error }: Props) {
	return <p className='text-red-500 text-center text-xl'>{error}</p>
}
