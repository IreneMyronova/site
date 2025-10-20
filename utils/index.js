import { SHOW_PER_PAGE } from '../config'

//  array sortByDate
export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date)
}

// count the page number
export function pageCount(number) {
  return Math.ceil(number / SHOW_PER_PAGE)
}

export function formatDateClient(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-UK', {
    dateStyle: 'medium',
    timeZone: 'Portugal',
  })
}


