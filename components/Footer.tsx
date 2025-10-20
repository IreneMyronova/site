import { Icon } from './Icon'

export default function Footer() {
  let currentYear = new Date().getFullYear()

  const socialMedia = [
    // {
    //   id: 1,
    //   name: 'insta',
    //   linkPath: '#',
    //   icon: ()
    // },
    {
      id: 2,
      name: 'linkedin',
      linkPath: 'https://www.linkedin.com/in/myronovairene',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.62527 17.8711H6.16434V9.92578H8.62527V17.8711ZM8.87082 7.39439C8.87082 6.59885 8.22537 5.95312 7.43024 5.95312C6.63208 5.95312 5.98828 6.59885 5.98828 7.39439C5.98828 8.19022 6.63208 8.83594 7.43024 8.83594C8.22537 8.83594 8.87082 8.19022 8.87082 7.39439ZM17.8359 13.4999C17.8359 11.3671 17.3854 9.78516 14.8938 9.78516C13.6966 9.78516 12.8929 10.3839 12.5648 11.0066H12.5625V9.92578H10.1719V17.8711H12.5625V13.9262C12.5625 12.8931 12.8255 11.8922 14.1061 11.8922C15.3692 11.8922 15.4102 13.0736 15.4102 13.9918V17.8711H17.8359V13.4999ZM21 18.8906V5.10938C21 3.9462 20.0538 3 18.8906 3H5.10938C3.9462 3 3 3.9462 3 5.10938V18.8906C3 20.0538 3.9462 21 5.10938 21H18.8906C20.0538 21 21 20.0538 21 18.8906ZM18.8906 4.40625C19.2783 4.40625 19.5938 4.72169 19.5938 5.10938V18.8906C19.5938 19.2783 19.2783 19.5938 18.8906 19.5938H5.10938C4.72169 19.5938 4.40625 19.2783 4.40625 18.8906V5.10938C4.40625 4.72169 4.72169 4.40625 5.10938 4.40625H18.8906Z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'email',
      linkPath: 'mailto:irenemyronova@gmail.com',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.0194 4C21.0609 4 22 4.80067 22 5.87289V18.1271C22 19.2007 21.0595 20 20.0194 20H3.98067C2.93912 20 2 19.1994 2 18.1271V5.87289C2 4.79936 2.94051 4 3.98067 4H20.0194ZM20.0194 5.8563H3.98067V7.44746L10.8215 12.4579C11.5194 12.969 12.4649 12.9748 13.1665 12.4689C15.051 11.11 18.6721 8.48781 20.0022 7.44746L20.0194 5.8563ZM3.98067 18.1105H20.0194V9.81749C18.6833 10.8107 15.7015 13.0081 13.7744 14.4273C12.7181 15.2051 11.2803 15.2049 10.2229 14.4287L3.96354 9.83413V18.1271L3.98067 18.1105Z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="w-full p-4 sm:p-6 bg-slate-800 text-slate-300 flex items-center flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between text-base">
      <p className="text-[10px] sm:whitespace-nowrap text-center sm:text-left">
        Copyright &copy; 2016–{currentYear} Nuno Marques (OSITAKA).
        <br />
        Site modifications &copy; {currentYear} Irene Myronova
        <br />— Licensed under MIT.{' '}
        <a
          href="/LICENSE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read the license PDF in a new tab"
          className="font-bold focus:outline-hidden"
        >
          View license
        </a>
      </p>

      <div className="w-full flex flex-row items-center justify-between">
        {/* icons socialMedia */}
        <div className="flex flex-row items-center justify-center sm:mx-auto gap-2">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.linkPath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.name}
              className="flex items-center justify-center size-8 opacity-80 hover:opacity-100 transition-opacity"
            >
              {info.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-64 flex items-center justify-end gap-2 outline-offset-8 rounded"
        >
          <span>Scroll to Top</span>
          <Icon name="up" className="size-4" />
        </button>
      </div>
    </footer>
  )
}
