import DrinksList from '@/components/DrinksList'
import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Oops! An error occurred`)
  }
  const data = await response.json()
  return data
}

const DrinksPage = async () => {
  const data = await fetchDrinks()

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  )
}
export default DrinksPage
