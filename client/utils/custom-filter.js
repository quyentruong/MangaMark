function customFilterHelper(moment, search, items) {
  if (search.startsWith('n=')) {
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
      .split('n=')[1]
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
  if (search.startsWith('c=')) {
    const chap_value = parseInt(search.split('c=')[1])
    if (parseInt(items.quantity) === chap_value) {
      return JSON.stringify(Object.values(items))
    }
  }

  if (search.startsWith('c>')) {
    const chap_value = parseInt(search.split('c>')[1])
    if (parseInt(items.quantity) >= chap_value) {
      return JSON.stringify(Object.values(items))
    }
  }

  if (search.startsWith('c<')) {
    const chap_value = parseInt(search.split('c<')[1])
    if (parseInt(items.quantity) <= chap_value) {
      return JSON.stringify(Object.values(items))
    }
  }

  if (search.startsWith('dd=')) {
    const date_value = search.split('dd=')[1]
    if (date_value.length === 10) {
      const updated_at = moment(items.updated_at).isSame(date_value, 'day')
      if (updated_at) {
        return JSON.stringify(Object.values(items))
      }
    }
  }

  if (search.startsWith('dm=')) {
    const date_value = search.split('dm=')[1]
    if (date_value.length === 7) {
      const updated_at = moment(items.updated_at).isSame(date_value, 'month')
      if (updated_at) {
        return JSON.stringify(Object.values(items))
      }
    }
  }

  if (search.startsWith('dy=')) {
    const date_value = search.split('dy=')[1]
    if (date_value.length === 4) {
      const updated_at = moment(items.updated_at).isSame(date_value, 'year')
      if (updated_at) {
        return JSON.stringify(Object.values(items))
      }
    }
  }
}

export default customFilterHelper
