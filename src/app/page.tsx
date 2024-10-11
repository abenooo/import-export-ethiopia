"use client";
import { useState } from "react";
import {
  Globe,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Truck,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "./componet/Footer";
import heroImage from "./public/assets/image.jpg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Printer, Mail, Inbox } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import your images directly
import heroImage1 from "./public/assets/image.jpg";
import heroImage2 from "./public/assets/image2.jpg";
import heroImage3 from "./public/assets/image.jpg";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3
  ];


  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const services = [
    {
      icon: Globe,
      title: "Global Trade Network",
      description: "Connect with verified importers and exporters worldwide",
    },
    {
      icon: ShoppingCart,
      title: "Market Analysis",
      description: "Get real-time insights on global market trends and demands",
    },
    {
      icon: Users,
      title: "Business Matchmaking",
      description:
        "Find the perfect business partners with our AI-powered matching",
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description:
        "Streamline your shipping and customs processes with our tools",
    },
  ];
  const businessAreas = [
    {
      title: "Manufacturing",
      description:
        "The blanket and acrylic yarn dyeing plant is the major line of manufacturing business portfolio of KK. Our factory is equipped with modern computerized and automated machines, as well as conventional technology machines.",
      image: "/placeholder.svg?height=200&width=400&text=Manufacturing",
    },
    {
      title: "Export",
      description:
        "The exporting department at KK PLC mainly focuses on the international operation of the company, aiming to promote Ethiopian Coffee, Pulse, Oil Seed, and Mining to overseas markets.",
      image: "/placeholder.svg?height=200&width=400&text=Export",
    },
    {
      title: "Real Estate",
      description:
        "Our company implements innovative solutions in the engineering, design, and strategy sectors with the potential to create aesthetically marvelous spaces.",
      image: "/placeholder.svg?height=200&width=400&text=Real+Estate",
    },
  ];
  const testimonials = [
    {
      quote:
        "TradeAtlas has revolutionized how we find international business opportunities.",
      author: "Abebe Kebede, Ethiopian Coffee Exporter",
    },
    {
      quote:
        "The market insights provided by TradeAtlas have been invaluable for our growth strategy.",
      author: "Fatima Ahmed, Textile Importer",
    },
    {
      quote:
        "We've expanded into new markets effortlessly thanks to TradeAtlas's global network.",
      author: "Dawit Haile, Agricultural Products Exporter",
    },
    {
      quote:
        "TradeAtlas's AI-powered matching has connected us with perfect business partners.",
      author: "Tigist Mengesha, Leather Goods Manufacturer",
    },
    {
      quote:
        "The logistics support from TradeAtlas has simplified our international shipping process.",
      author: "Yohannes Tadesse, Electronics Importer",
    },
    {
      quote:
        "We've seen a 30% increase in exports since using TradeAtlas's market analysis tools.",
      author: "Hiwot Gebremariam, Spice Exporter",
    },
  ];
  const navItems = [
    { name: "Home", id: "home-section" },
    { name: "About Us", id: "about-section" },
    { name: "Portfolio", id: "portfolio-section" },
    { name: "Clients", id: "clients-section" },
    { name: "Contact", id: "contact-section" },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const portfolioItems = [
    {
      title: "Manufacturing",
      description:
        "State-of-the-art manufacturing facilities producing high-quality goods.",
      icon: "🏭",
      tags: ["Industrial", "Production"],
    },
    {
      title: "Agriculture",
      description:
        "Sustainable farming practices and agricultural innovations.",
      icon: "🌾",
      tags: ["Farming", "Sustainability"],
    },
    {
      title: "Real Estate",
      description: "Premium residential and commercial property development.",
      icon: "🏢",
      tags: ["Property", "Development"],
    },
    {
      title: "Technology",
      description: "Cutting-edge tech solutions for businesses and consumers.",
      icon: "💻",
      tags: ["Innovation", "Digital"],
    },
    {
      title: "Hospitality",
      description:
        "Luxury hotels and resorts providing world-class experiences.",
      icon: "🏨",
      tags: ["Tourism", "Service"],
    },
    {
      title: "Education",
      description:
        "Investing in the future through quality educational institutions.",
      icon: "🎓",
      tags: ["Learning", "Development"],
    },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center"
              >
                <Globe className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  PamRisen
                </span>
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 " // Tailwind classes for active state
                  className="cursor-pointer inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="">
        <section
          id="home-section"
          className="relative bg-gradient-to-r from-blue-700 to-green-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Ethiopian landscape with coffee plantations and mountains"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <section
            id="home-section"
            className="relative bg-gradient-to-r from-blue-700 to-green-600 text-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40 flex">
              <div className="w-full lg:w-1/2 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Connecting Ethiopia to the World
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 max-w-xl">
                  Empowering Ethiopian businesses with global trade solutions
                  for coffee, textiles, and more.
                </p>
                <p className="text-xl sm:text-2xl text-gray-200 max-w-xl">
                  Empowering Ethiopian businesses with global trade solutions
                  for coffee, textiles, and more.
                </p>
                <p className="text-xl sm:text-2xl text-gray-200 max-w-xl">
                  Empowering Ethiopian businesses with global trade solutions
                  for coffee, textiles, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-yellow-500 text-blue-900 hover:bg-yellow-400"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-gray-900 border-white hover:bg-white/20"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2">
              <Slider {...settings}>
      {heroImages.map((img, idx) => (
        <div key={idx} className="w-full h-full">
          <Image
            src={img}
            alt={`Ethiopian landscape ${idx + 1}`}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-lg shadow-2xl"
          />
        </div>
      ))}
    </Slider>
    </div>
              
            </div>
          </section>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        </section>
        <div className="min-h-screen bg-gray-200">
          <section id="about-section" className="relative  text-black py-24">
            <div className="absolute inset-0 z-0"></div>
            <div className="relative z-10 container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About KK PLC
              </h1>
              <p className="text-xl max-w-3xl">
                KK PLC is the largest business entity in Ethiopia, established
                by the visionary Mr. Ketema Kebede over forty years ago. Our
                diverse portfolio spans manufacturing, export, and real estate,
                contributing significantly to Ethiopia's economic growth.
              </p>
            </div>
          </section>

          <section className="py-20 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Legacy</h2>
                <p className="text-lg text-gray-700 mb-6">
                  For over four decades, KK PLC has been at the forefront of
                  Ethiopian business, driving innovation and economic
                  development. Founded by Mr. Ketema Kebede, our company has
                  grown from humble beginnings to become the largest business
                  entity in Ethiopia.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our success is built on a foundation of visionary leadership,
                  commitment to quality, and a deep understanding of both local
                  and international markets. We continue to expand our reach and
                  impact, always with an eye towards sustainable growth and
                  community development.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More About Our History
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={heroImage}
                  alt="KK PLC growth timeline"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Business Areas
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessAreas.map((area, index) => (
                  <Card
                    key={index}
                    className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader>
                      <CardTitle>{area.title}</CardTitle>
                    </CardHeader>
                    <Image
                      src={area.image}
                      alt={`${area.title} operations`}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="mt-4">
                      <CardDescription>{area.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Shaping Ethiopia's Future
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              At KK PLC, we're not just building a business; we're building a
              nation. Our commitment to excellence, innovation, and sustainable
              development continues to drive us forward. Join us as we work
              towards a brighter future for Ethiopia and beyond.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </section>
        </div>
        <section
          id="portfolio-section"
          className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Portfolio
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              KK has become one of the prominent businesses in Ethiopia,
              successfully diversifying its operations across multiple sectors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {item.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="clients-section"
          className="min-h-screen flex items-center justify-center"
        >
          {/* Testimonial Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our Clients Say
              </h2>
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  {[0, 1, 2].map((offset) => {
                    const index =
                      (currentTestimonial + offset) % testimonials.length;
                    return (
                      <Card key={index} className="bg-white shadow-lg flex-1">
                        <CardContent className="p-6">
                          <p className="text-lg italic mb-4">{`"${testimonials[index].quote}"`}</p>
                          <p className="font-semibold">
                            - {testimonials[index].author}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white shadow-md hover:bg-gray-100"
                    onClick={prevTestimonial}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous testimonials</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white shadow-md hover:bg-gray-100"
                    onClick={nextTestimonial}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next testimonials</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* CTA Section */}
        <section
          id="contact-section"
          className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Fill out the form below and
                    we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="johndoe@example.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        className="min-h-[100px]"
                        id="message"
                        placeholder="Enter your message here"
                      />
                    </div>
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch with us using the information below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                    <p className="text-sm">
                      Churchil Avenue around national theater
                      <br />
                      Adjacent to the Commercial Bank of Ethiopia,
                      <br />
                      Addis Ababa Branch.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <p className="text-sm">+251-115-15-90-15</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <p className="text-sm">+251-115-53-48-10</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <p className="text-sm">+251-115-51-11-74</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <p className="text-sm">+251-115-15-80-00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Printer className="w-5 h-5 text-gray-500" />
                    <p className="text-sm">+251-151-99-49</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Inbox className="w-5 h-5 text-gray-500" />
                    <p className="text-sm">P.O.Box: 702</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <a
                      href="mailto:info@kkplcethiopia.com"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      info@pamrisen.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
