import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`)
  if (!response.ok) {
    throw new Error(`Oops! An error occurred`)
  }
  return response.json()
}

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id)
  const title = data.drinks[0]?.strDrink
  const description = data.drinks[0]?.strInstructions
  const image = data.drinks[0]?.strDrinkThumb

  return (
    <div>
      <h1 className="text-5xl mb-8">{title}</h1>
      <p className="text-2xl mb-8">
        <span className="text-primary font-bold">Drink Contents:</span>{' '}
        {description}
      </p>
      <div className="relative h-60 mb-4">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          alt={title}
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>
    </div>
  )
}
export default SingleDrinkPage
