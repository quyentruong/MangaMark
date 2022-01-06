const required = (propertyType) => {
  return (v) => !!v || `${propertyType} is required`
}
const passwordConfirmation = (password, passwordConfirmation) => {
  return password === passwordConfirmation || 'Password must match'
}

const quantity = () => {
  return (v) => (!!v && v > 0) || 'Number has to be greater than 0'
}

const number = () => {
  return (v) => /\d/.test(v) || 'Number is required'
}

const email = () => {
  return (v) => /.+@.+/.test(v) || 'E-mail must be valid'
}
const url = () => {
  return (v) =>
    /^(http(s?)):\/\//gi.test(v) ||
    "Url starts with 'http://' or 'https://'. Ex: http://example.com"
}

const protein = () => {
  return (v) =>
    /^(p\.)[\d\w]+/gi.test(v) ||
    "protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"
}
const minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} must be at least ${minLength} characters`
}
const maxLength = (propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    `${propertyType} must be less than ${maxLength} characters`
}

export default {
  required,
  minLength,
  maxLength,
  email,
  url,
  number,
  protein,
  passwordConfirmation,
  quantity,
}
