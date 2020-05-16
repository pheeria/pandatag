// https://stackoverflow.com/a/6117889
function getWeekNumber() {
  let date = new Date()
  let d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  )
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  // Calculate full weeks to nearest Thursday
  let week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7).toString()

  let year = d.getUTCFullYear().toString().slice(-2)
  // Return array of year and week number
  return [year, week]
}
