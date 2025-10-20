import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  Bars2Icon,
  FolderOpenIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckIcon,
  ClipboardDocumentIcon,
  IdentificationIcon,
  MinusCircleIcon,
  MoonIcon,
  SunIcon,
  StarIcon,
  PlusCircleIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  CameraIcon,
} from '@heroicons/react/24/outline'

export const Icon = ({
  name,
  className,
}: {
  name: string
  className?: string
}) => {
  const icons: { [key: string]: any } = {
    burger: Bars2Icon,
    close: XMarkIcon,
    service: ClipboardDocumentListIcon,
    home: HomeIcon,
    faqPlass: PlusCircleIcon,
    faqMinus: MinusCircleIcon,
    faq: ChatBubbleLeftEllipsisIcon,
    next: ArrowRightIcon,
    work: FolderOpenIcon,
    sun: SunIcon,
    moon: MoonIcon,
    prev: ArrowLeftIcon,
    testimonial: StarIcon,
    tools: WrenchScrewdriverIcon,
    up: ArrowUpCircleIcon,
    contact: IdentificationIcon,
    Email: EnvelopeIcon,
    Phone: DevicePhoneMobileIcon,
    LinkedIn: UserGroupIcon,
    Instagram: CameraIcon,
    checkIcon: CheckIcon,
    clipboardDocumentIcon: ClipboardDocumentIcon,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
