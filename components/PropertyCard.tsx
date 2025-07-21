import Image from 'next/image';

interface Property {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

const PropertyCard = ({ name, price, rating, image }: Property) => {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition border">
      <Image
        src={image}
        alt={name}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{price}</p>
        <p className="text-sm text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
