export default function Banner() {
  const images = [
    "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg",
    "https://i5.walmartimages.com/seo/KitchenAid-Artisan-Series-5-Quart-Tilt-Head-Stand-Mixer-KSM150PS_a68a606c-afdd-4498-a5a8-c2b64ebb4102.08aae8584b4a7d39cfb453a7bc7e491d.jpeg",
    "https://i0.wp.com/mbimports.com.bd/wp-content/uploads/2020/08/mac-matte-lipstick-rouge-a-levres-diva.jpg?resize=400%2C400&ssl=1",
    "https://i5.walmartimages.com/seo/Nike-Men-s-Air-Zoom-Pegasus-38-Road-Running-Shoes-CW7356-002-Black-White-Anthracite-11-US_2a46ad94-e283-4ac5-9eaf-fde467fb65b4.e681c5b7b8461f2ee17c2763a6d41fa3.jpeg",
  ];
  return (
    <div className=" my-6 w-full text-xs p-2 rounded-md sm:max-w-6xl mx-auto  max-h-screen sm:h-2/3">
      <div className="carousel h-[512px]  rounded-md ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={images[0]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
              text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">
              Samsung Galaxy S21 Ultra
            </h2>
            <p className="text-lg font-semibold">
              The Samsung Galaxy S21 Ultra is the epitome of smartphone
              technology, featuring a stunning 6.8-inch Dynamic AMOLED display,
              a powerful Snapdragon 888 processor, and a versatile quad-camera
              system
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={images[1]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
              text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">
              KitchenAid Artisan Series Stand Mixer
            </h2>
            <p className="text-lg font-semibold">
              The KitchenAid Artisan Series Stand Mixer is a must-have appliance
              for any kitchen enthusiast. With its powerful motor and versatile
              attachments, this stand mixer makes baking and cooking a breeze
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={images[2]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
              text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">
              MAC Cosmetics Matte Lipstick
            </h2>
            <p className="text-lg font-semibold">
              Get the perfect pout with MAC Cosmetics Matte Lipstick. This
              iconic lipstick delivers intense color and a long-lasting matte
              finish, leaving your lips looking and feeling flawless
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={images[3]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
              text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">
              Nike Men's Air Zoom Pegasus 38 Running Shoes{" "}
            </h2>
            <p className="text-lg font-semibold">
              Achieve your personal best with Nike Men's Air Zoom Pegasus 38
              Running Shoes. These lightweight and responsive shoes feature Zoom
              Air cushioning and a durable rubber outsole for optimal
              performance
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
