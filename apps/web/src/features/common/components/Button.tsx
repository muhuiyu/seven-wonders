export const Button = ({ title, onClick }: { title: string; onClick(): void }) => {
  return (
    <button className="w-fit rounded-md bg-green-600 px-4 py-2 text-white" onClick={onClick}>
      {title}
    </button>
  )
}
