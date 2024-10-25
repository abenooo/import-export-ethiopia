"use client";
// import { useEffect, useState } from "react";
import {
  Globe,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "./componet/Footer";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img2 from "./public/assets/img2.webp";
import img4 from "./public/assets/img4.webp";
import img6 from "./public/assets/img6.webp";
import img55 from "./public/assets/img5.jpg";
import img56 from "./public/assets/img6.jpg";
import img57 from "./public/assets/img7.jpg";
import img58 from "./public/assets/img8.jpg";
import second from "./public/assets/second.png"
import { Coffee, ShoppingBag, Leaf } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  const heroImages = [img2, img4, img6,img55,img56,img57,img58];

  // const nextTestimonial = () =>
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // const prevTestimonial = () =>
  //   setCurrentTestimonial(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );
  // const areas = [
  //   {
  //     title: "Manufacturing",
  //     description: "Manufacturing operations",
  //     content:
  //       "The blanket and acrylic yarn dyeing plant is the major line of manufacturing business portfolio of KK. Our factory is equipped with modern computerized and automated machines, as well as conventional technology machines.",
  //     icon: Factory,
  //   },
  //   {
  //     title: "Export",
  //     description: "Export operations",
  //     content:
  //       "The exporting department at PamRisen mainly focuses on the international operation of the company, aiming to promote Ethiopian Coffee, Pulse, Oil Seed, and Mining to overseas markets.",
  //     icon: Globe,
  //   },
  //   {
  //     title: "Real Estate",
  //     description: "Real Estate operations",
  //     content:
  //       "Our company implements innovative solutions in the engineering, design, and strategy sectors with the potential to create aesthetically marvelous spaces.",
  //     icon: Building2,
  //   },
  // ];
  //   {
  //     title: "Manufacturing",
  //     description:
  //       "The blanket and acrylic yarn dyeing plant is the major line of manufacturing business portfolio of KK. Our factory is equipped with modern computerized and automated machines, as well as conventional technology machines.",
  //     image: "/placeholder.svg?height=200&width=400&text=Manufacturing",
  //   },
  //   {
  //     title: "Export",
  //     description:
  //       "The exporting department at PamRisen mainly focuses on the international operation of the company, aiming to promote Ethiopian Coffee, Pulse, Oil Seed, and Mining to overseas markets.",
  //     image: "/placeholder.svg?height=200&width=400&text=Export",
  //   },
  //   {
  //     title: "Real Estate",
  //     description:
  //       "Our company implements innovative solutions in the engineering, design, and strategy sectors with the potential to create aesthetically marvelous spaces.",
  //     image: "/placeholder.svg?height=200&width=400&text=Real+Estate",
  //   },
  // ];
  // const testimonials = [
  //   {
  //     quote:
  //       "PamRisen has revolutionized how we find international business opportunities.",
  //     author: "Abebe Kebede",
  //     role: "Ethiopian Coffee Exporter",
  //     avatar: "/placeholder.svg?height=100&width=100",
  //   },
  //   {
  //     quote:
  //       "The market insights provided by PamRisen have been invaluable for our growth strategy.",
  //     author: "Fatima Ahmed",
  //     role: "Textile Importer",
  //     avatar: "/placeholder.svg?height=100&width=100",
  //   },
  //   {
  //     quote:
  //       "We've expanded into new markets effortlessly thanks to PamRisen's global network.",
  //     author: "Dawit Haile",
  //     role: "Agricultural Products Exporter",
  //     avatar: "/placeholder.svg?height=100&width=100",
  //   },
  //   {
  //     quote:
  //       "PamRisen's AI-powered matching has connected us with perfect business partners.",
  //     author: "Tigist Mengesha",
  //     role: "Leather Goods Manufacturer",
  //     avatar: "/placeholder.svg?height=100&width=100",
  //   },
  //   {
  //     quote:
  //       "The logistics support from PamRisen has simplified our international shipping process.",
  //     author: "Yohannes Tadesse",
  //     role: "Electronics Importer",
  //     avatar: "/placeholder.svg?height=100&width=100",
  //   },
  //   {
  //     quote:
  //       "We've seen a 30% increase in exports since using PamRisen's market analysis tools.",
  //     author: "Hiwot Gebremariam",
  //     role: "Spice Exporter",
  //     avatar: "/placeholder.svg?height=100&width=100",
  //   },
  // ];
  const navItems = [
    { name: "Home", id: "home-section" },
    { name: "About Us", id: "about-section" },
    { name: "Portfolio", id: "portfolio-section" },
    { name: "Clients", id: "clients-section" },
    { name: "Contact", id: "contact-section" },
  ];
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const portfolioItems = [
    {
      title: "EXPORT BUSINESS",
      description:
        "Specializing in the global distribution of sustainable products, from agricultural innovations to industrial solutions.",
      icon: "🌾",
      tags: [
        "International Trade",
        "Sustainability",
        "Economic Growth",
        "Environmental Stewardship",
      ],
    },
    {
      title: "SPARE PART SALES",
      description:
        "Offering a comprehensive range of high-quality spare parts for various industries, ensuring reliability and performance.",
      icon: "🏢",
      tags: [
        "Replacement Parts",
        "Industrial Supplies",
        "Equipment Maintenance",
        "Operational Efficiency",
        "Product Longevity",
        "Part Sourcing",
      ],
    },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button className="flex items-center">
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
                  activeClass="relative font-medium text-primary before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-x-100"
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
          className="bg-gradient-to-r from-blue-800 to-green-700 text-white overflow-hidden"
        >
          <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 space-y-8 mb-12 lg:mb-0">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
                  Bridging Ethiopia with Global Markets
                </h1>
                <div className="space-y-6">
                  {[
                    {
                      icon: Coffee,
                      text: "Facilitating seamless trade partnerships and fostering economic growth.",
                    },
                    {
                      icon: ShoppingBag,
                      text: "Enhancing the global presence of Ethiopian products through dedicated support.",
                    },
                    {
                      icon: Globe,
                      text: "Connecting local producers with international buyers to expand market reach.",
                    },
                    {
                      icon: Leaf,
                      text: "Leveraging Ethiopia's rich resources to meet global market demands.",
                    },
                    {
                      icon: Heart,
                      text: "Building community partnerships to sustain and grow the Ethiopian export sector.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <item.icon className="h-8 w-8 text-yellow-400" />
                      </div>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 text-lg font-semibold"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className=" bg-blue-500 hover:bg-blue-700 text-lg font-semibold"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12">
                <div className="rounded-lg shadow-2xl overflow-hidden">
                  <Slider {...settings}>
                    {heroImages.map((img, idx) => (
                      <div key={idx} className="outline-none">
                        <Image
                          src={img}
                          alt={`Ethiopian landscape ${idx + 1}`}
                          width={800}
                          height={600}
                          objectFit="fit"
                          className="w-full h-[400px] object-fit"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-screen bg-gray-200">
          <section className="py-20 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About PamRisen</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Genuine Spare part Our Company importing and sale different
                  heavy construction machinery genuine parts for different
                  construction machineries for the past seven year in Ethiopian
                  market
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More About Our History
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={second}
                  alt="PamRisen growth timeline"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>
          <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
              <div className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">
                  Our Business Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Heavy Machinery Spare Part Sales */}
                  <Card className="flex flex-col h-full">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-black bg-opacity-75 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-medium">HMS</span>{" "}
                        {/* Added text */}
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        Heavy Machinery Spare Part Sales
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Specialized in providing high-quality spare parts for
                        heavy machinery, ensuring operational reliability and
                        efficiency.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-center">
                      <p className="text-muted-foreground">
                        Replacement Parts, Maintenance, Efficiency, Industrial
                        Support
                      </p>
                    </CardContent>
                    <CardFooter className="pt-6">
                      <Button className="w-full text-lg py-6">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                  {/* Export Business */}
                  <Card className="flex flex-col h-full">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-black bg-opacity-75 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-medium">EXP</span>{" "}
                        {/* Added text */}
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        Export Business
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Expertise in the global distribution of sustainable
                        products across agricultural and industrial sectors.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-center">
                      <p className="text-muted-foreground">
                        International Trade, Sustainability, Global Markets,
                        Quality Compliance
                      </p>
                    </CardContent>
                    <CardFooter className="pt-6">
                      <Button className="w-full text-lg py-6">
                        Explore Opportunities
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Shaping Ethiopia&apos;s Future
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              At PamRisen, we&apos;re not just building a business; we&apos;re
              building a nation. Our commitment to excellence, innovation, and
              sustainable development continues to drive us forward. Join us as
              we work towards a brighter future for Ethiopia and beyond.
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
              PamRisen has become one of the prominent businesses in Ethiopia,
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
                    We&apos;d love to hear from you. Fill out the form below and
                    we&apos;ll get back to you as soon as possible.
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
                    <div>
                      <Textarea placeholder="Type your message here." />
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
                    address kera, Addis Ababa Ethiopia around sofiya mall
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <p className="text-sm">+251-924-30-39-32</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <p className="text-sm">+251-901-53-76-85</p>
                    </div>
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
