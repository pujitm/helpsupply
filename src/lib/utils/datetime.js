import moment from 'moment'

// Format incoming date
export const formatDate = (date) => {
  const momentDate = moment(date || undefined)
  return momentDate.format('MMM D, h:mm a')
}
