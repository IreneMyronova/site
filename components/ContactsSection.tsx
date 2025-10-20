import {
  Contacts as ContactType,
  allContacts,
} from '../.contentlayer/generated'
import ContactsPostCard from './ContactPostCard'

export default function ContactsSection() {
  const isSingleContact = allContacts.length === 1
  const isFewContacts = allContacts.length > 1 && allContacts.length <= 4
  const isManyContacts = allContacts.length > 4

  return (
    <div
      className={`w-full gap-4 flex-wrap grid
    ${
      // opt1: Exactly 1 contact (centered)
      isSingleContact
        ? 'grid-cols-1 place-items-center md:grid-cols-1 xl:grid-cols-1'
        : // opt2: more contacts (> 4)
          isManyContacts
          ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:grid-flow-row'
          : // opt3: Few contacts (2-4), but not 1
            'grid-cols-1 md:flex md:justify-center md:flex-wrap'
    }
  `}
    >
      {allContacts.map((contactsItem) => (
        <ContactsPostCard
          key={contactsItem._id}
          post={contactsItem as ContactType}
          className={
            isSingleContact
              ? // If 1 contact: fixed width 270px
                'w-[270px]'
              : isFewContacts
                ? // If 2-4 contacts: limit the width so that they are in a row
                  'md:max-w-xs md:flex-shrink-0'
                : ''
          }
        />
      ))}
    </div>
  )
}
