
const TitleComponent = ({ title, className }: { title: string, className?: string }) => {
  return (
    <h1 className={`title text-5xl md:text-7xl font-medium my-5 ${className && className}`}>{title}</h1>
  )
}

export default TitleComponent