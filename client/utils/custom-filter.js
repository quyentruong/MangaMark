function customFilterHelper(moment, search, items, filter) {
  if (filter.startsWith('name=')) {
    const {
      name,
      // quantity,
      // season,
      other_name_1,
      other_name_2,
      other_name_3,
      // updated_at,
    } = items
    const wordArray = search
      .toString()
      .toLowerCase()
      .split(' ')
      .filter((x) => x)
    return wordArray.every((word) =>
      JSON.stringify(
        Object.values({ name, other_name_1, other_name_2, other_name_3 })
      )
        .toString()
        .toLowerCase()
        .includes(word)
    )
  }
  if (filter.startsWith('chapter=')) {
    if (parseInt(items.quantity) === parseInt(search)) {
      return JSON.stringify(Object.values(items))
    }
  }

  if (filter.startsWith('chapter>')) {
    if (parseInt(items.quantity) >= parseInt(search)) {
      return JSON.stringify(Object.values(items))
    }
  }

  if (filter.startsWith('chapter<')) {
    if (parseInt(items.quantity) <= parseInt(search)) {
      return JSON.stringify(Object.values(items))
    }
  }

  if (filter.startsWith('day=')) {
    if (search.length === 10) {
      const updated_at = moment(items.updated_at).isSame(search, 'day')
      if (updated_at) {
        return JSON.stringify(Object.values(items))
      }
    }
  }

  if (filter.startsWith('month=')) {
    if (search.length === 7) {
      const updated_at = moment(items.updated_at).isSame(search, 'month')
      if (updated_at) {
        return JSON.stringify(Object.values(items))
      }
    }
  }

  if (filter.startsWith('year=')) {
    if (search.length === 4) {
      const updated_at = moment(items.updated_at).isSame(search, 'year')
      if (updated_at) {
        return JSON.stringify(Object.values(items))
      }
    }
  }
}

export default customFilterHelper
