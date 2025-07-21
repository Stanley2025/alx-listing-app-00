import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Beachfront",
  "Pet Friendly",
];

const Pill = ({ label }: { label: string }) => (
  <span className="bg-gray-200 text-sm px-3 py-1 rounded-full mr-2 cursor-pointer hover:bg-gray-300">
    {label}
  </span>
);

const HomePage = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
        <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="px-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-gray-500 text-sm">
                {property.address.city}, {property.address.state}, {property.address.country}
              </p>
              <p className="mt-2 font-bold">${property.price}</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
