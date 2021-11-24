export default (context, inject) => {
  const capitalize = msg => msg.charAt(0).toUpperCase() + msg.slice(1)
  // Inject $hello(msg) in Vue, context and store.
  inject('capitalize', capitalize)
  // For Nuxt <= 2.12, also add 👇
  context.$capitalize = capitalize
}
