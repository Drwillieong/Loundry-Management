import { useState } from "react";

const services = {
  "Wash & Fold": {
    title: "Wash",
    description: "Your everyday laundry needs washed",
    image: "wash_fold.jpg",
    pricing: [
      { item: "Below 5 kiols", price: "IDK" },
      { item: "5 kilos", price: "IDK" },
    ],
  },
  "Dry": {
    title: "Dry Cleaning",
    description: " Dry cleaning for your clothes",
    image: "dry_cleaning.jpg",
    pricing: [
      { item: "IDK", price: "IDK" },
      { item: "IDK", price: "IDK" },
    ],
  },
  "Other Services": {
    title: "Free Pick up and Deliver",
    description:
      "Sana all",
    image: "hang_dry.jpg",
    pricing: [
      { item: "Kapag Malayo", price: "IDK?" },
    
    ],
  },
};

export default function LaundrySection() {
  const [selectedService, setSelectedService] = useState("Other Services");

  return (
    <div className="p-6 max-w-8xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <ul className="flex space-x-8 text-lg font-semibold border-b pb-2 text-gray-700">
        {Object.keys(services).map((service) => (
          <li
            key={service}
            className={`cursor-pointer transition duration-300 ${
              selectedService === service ? "text-orange-600 border-b-2 border-orange-600" : "hover:text-orange-500"
            }`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">{services[selectedService].title}</h2>
          <p className="mt-3 text-gray-700">{services[selectedService].description}</p>
          <h3 className="mt-6 text-xl font-semibold text-gray-800">Pricing</h3>
          <ul className="mt-3 space-y-2">
            {services[selectedService].pricing.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-1 text-gray-700">
                <span>{item.item}</span>
                <span className="font-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={services[selectedService].image}
          alt={services[selectedService].title}
          className="w-1/3 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
