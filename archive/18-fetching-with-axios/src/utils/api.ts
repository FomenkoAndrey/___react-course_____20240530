import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

// ! via axios
export const fetchData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

// ! via fetch
// export const fetchData = async () => {
//   try {
//     const response = await fetch(API_URL)
//     if (!response.ok) {
//       throw new Error('Error fetching data')
//     }
//     const data = await response.json()
//
//     return data
//   } catch (error) {
//     throw new Error('Error fetching data')
//   }
// }
