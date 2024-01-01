import Image from 'next/image'
import Link from 'next/link'

const DrinksList = ({ drinks }) => {
  return (
    <div>
      <h2 className="text-5xl">Drinks</h2>
      <ul className="grid sm:grid-cols-2 gap-6 mt-6">
        {drinks.map((drink) => (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw "
                  alt={drink.strDrink}
                  className="rounded-lg object-cover"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default DrinksList
