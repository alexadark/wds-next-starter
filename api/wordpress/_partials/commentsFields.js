// Query partial: retrieve comment fields.
const commentsFields = `
  databaseId
  content(format: RENDERED)
  parentDatabaseId
  approved
  id
  date
  parentId
  type
`
export default commentsFields
