import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#D8E3CC] flex flex-col items-center py-8">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-green-900">SavoryFlavors</h1>
        <nav className="hidden md:flex items-center space-x-6 text-lg text-green-900">
          
          <a href="#">Home</a>
          <a href="#">Cuisines</a>
          <a href="#">Favourites</a>
          <a href="#">FitSavory</a>
          <a href="#">Categories</a>
          <a href="#">Community</a>
          <a href="#">About Us</a>
          {/* Icon Buttons */}
          <div className="flex items-center space-x-4 ml-4">
            <button className="w-8 h-8 p-1 bg-white rounded-full shadow flex items-center justify-center hover:bg-green-100">
              <Image src="/icons/notification.png" alt="Notification" width={24} height={24} />
            </button>
            <button className="w-8 h-8 p-1 bg-white rounded-full shadow flex items-center justify-center hover:bg-green-100">
              <Image src="/icons/profile.png" alt="Profile" width={24} height={24} />
            </button>
            <button className="w-8 h-8 p-1 bg-[#D8E3CC] rounded-md shadow flex items-center justify-center hover:bg-green-200">
              <Image src="/icons/upload.png" alt="Upload" width={24} height={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Featuring Section */}
      <section className="mt-8 w-full max-w-6xl bg-[#F3E8DC] rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-green-900">Featuring</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <span className="absolute top-2 left-2 bg-green-100 text-green-900 text-xs px-2 py-1 rounded shadow">
              Hot Recipes
            </span>
            <Image
              src="/pork-adobo.jpg"
              alt="Pork Adobo"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-green-900">PORK ADOBO</h3>
            <p className="mt-2 text-gray-700 max-w-md">
              Adobo is a dish that originated in the Philippines and is a staple in many Filipino households.
              It is made by cooking meat (chicken, pork, or both) in a mixture of soy sauce, vinegar,
              garlic, bay leaves, and black peppercorns. The result is a savory and delicious dish
              that has a tangy and slightly salty flavor.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">⏱ 35–40 mins.</span>
              <span className="flex items-center gap-1">🍖 Pork</span>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="bg-green-800 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
                View Recipe
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">Heideaa • 30 November 2024</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-10 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-900">CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Breakfast", img: "/breakfast.jpg" },
            { name: "Dessert", img: "/dessert.jpg" },
            { name: "Lunch", img: "/lunch.jpg" },
            { name: "Dinner", img: "/dinner.jpg" },
          ].map((cat) => (
            <div key={cat.name} className="text-center">
              <Image
                src={cat.img}
                alt={cat.name}
                width={220}
                height={220}
                className="rounded-lg shadow-md object-cover w-full h-[220px]"
              />
              <p className="mt-2 font-medium text-green-900">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="mt-12 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-6">Community</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: "/pancake.jpg", credit: "by: acexrez" },
            { src: "/burger.jpg", credit: "by: acexrez" },
            { src: "/ribs.jpg", credit: "by: myfoodblog" },
            { src: "/pasta.jpg", credit: "by: especial" },
            { src: "/ramen.jpg", credit: "by: foodporn" },
            { src: "/stew.jpg", credit: "by: beautyofPinoys" },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-lg shadow-md overflow-hidden">
              <Image
                src={item.src}
                alt={item.credit}
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
              <span className="absolute bottom-2 right-2 text-white text-xs italic bg-black/50 px-2 py-0.5 rounded">
                {item.credit}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="mt-14 w-full max-w-4xl text-center px-4">
        <h2 className="text-xl font-bold mb-4 text-green-900">About Us</h2>
        <p className="text-gray-800 text-sm leading-relaxed">
          The Savory Flavors aims to simplify the way users discover, organize, and share recipes by providing
          an intuitive, user-friendly platform. Our goal is to create a digital space where food enthusiasts,
          home cooks, and busy individuals can effortlessly manage their favorite recipes, explore new dishes,
          and engage with a supportive culinary community.
        </p>
        <p className="text-xs mt-8 text-gray-600">
          ©2025–2026 Savory Flavors | all rights reserved.
        </p>
      </section>
    </main>
  );
}
