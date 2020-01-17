export default () => ({
  itemSlots: [
    { name: 'item.name', value: 'name' },
    { name: 'item.season', value: 'season' },
    { name: 'item.quantity', value: 'quantity' }
  ],
  headersSlot: {
    'Manga': [
      { text: 'Name', value: 'name' },
      { text: 'Chapter', value: 'quantity' },
      { text: 'Last Read', value: 'updated_at' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    'Anime': [
      { text: 'Name', value: 'name' },
      { text: 'Season', value: 'season' },
      { text: 'Episode', value: 'quantity' },
      { text: 'Last Watched', value: 'updated_at' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    'TVShow': [
      { text: 'Name', value: 'name' },
      { text: 'Season', value: 'season' },
      { text: 'Episode', value: 'quantity' },
      { text: 'Last Watched', value: 'updated_at' },
      { text: 'Actions', value: 'action', sortable: false }
    ]
  },
  currentHeader: {},
  snackbars: []
})
