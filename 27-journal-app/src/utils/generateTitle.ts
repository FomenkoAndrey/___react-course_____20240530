export const generateTitle = (sortField: string | null) => {
  if (!sortField) return ''

  const fieldName = sortField.startsWith('-') ? sortField.slice(1) : sortField
  const order = sortField.startsWith('-') ? 'descending' : 'ascending'
  return ` sorted by ${fieldName}, ${order}`
}
