import { Icon } from './Icon'

export default function CategoryHeader({
  title,
  templateKey,
}: {
  title: string
  templateKey: string
}) {
  return (
    <>
      <header className="flex justify-center items-end">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center mt-28 gap-3">
            <Icon name={templateKey} className="size-6 sm:size-8 opacity-60" />
            <span>{title}</span>
          </h1>
      </header>
    </>
  )
}
