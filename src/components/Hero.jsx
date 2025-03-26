import { Carousel, Typography, Button } from "@material-tailwind/react";

export function Hero() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={4000} // 4 seconds delay per slide
      transition={{ type: "fadeIn", duration: 1 }}
      className="h-[500px] w-full rounded-xl"
    >
      {/* Slide 1 */}
      <div className="relative h-full w-screen">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              The Beauty of Nature
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Experience the calming presence of untouched nature and explore the wonders of the wild.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">Explore</Button>
              <Button size="lg" color="white" variant="text">Gallery</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-full w-screen">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Forest Tranquility
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Discover the peaceful harmony of lush green forests and their soothing melodies.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">Explore</Button>
              <Button size="lg" color="white" variant="text">Gallery</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative h-full w-screen">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Ocean Serenity
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Feel the tranquility of the endless ocean waves and the vastness of the blue horizon.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">Explore</Button>
              <Button size="lg" color="white" variant="text">Gallery</Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Hero;
