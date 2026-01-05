// Commented out base page - redirecting to products page
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/products")
}

// /* Original Home Page - Commented Out
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0A9A9F]/10 to-[#F78C2C]/10">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                   Premium Cleaning Solutions
//                 </h1>
//                 <p className="max-w-[600px] text-gray-500 md:text-xl">
//                   Discover our range of high-quality household and commercial cleaning products designed to make your
//                   spaces spotless.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                 <Link href="/contact">
//                   <Button variant="outline" className="px-8 text-[#0A9A9F] border-[#0A9A9F] hover:bg-[#0A9A9F]/10">
//                     Contact Us
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <Image
//                 src="/products.png?height=400&width=400"
//                 alt="Cleaning Products"
//                 width={700}
//                 height={600}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Categories */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Product Categories</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Explore our wide range of cleaning solutions for every need
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <CategoryCard
//               title="Household Liquids"
//               description="Detergents, softeners, and cleaning solutions for your home"
//               href="/products?segment=Household&sub_segment=Liquid"
//               image="/HouseHold.png"
//             />
//             <CategoryCard
//               title="Household Powders"
//               description="Powerful cleaning powders for laundry and dishes"
//               href="/products?segment=Household&sub_segment=Powder"
//               image="/Powders.png?height=200&width=200"
//             />
//             <CategoryCard
//               title="Household Soaps"
//               description="Effective soap solutions for various cleaning needs"
//               href="/products?segment=Household&sub_segment=Soap"
//               image="/Soaps.png?height=200&width=200"
//             />
//             <CategoryCard
//               title="Commercial Solutions"
//               description="Heavy-duty cleaning products for business environments"
//               href="/products?segment=Commerical"
//               image="/Granite.png?height=200&width=200"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function CategoryCard({ title, description, href , image}: { title: string; description: string; href: string ,image: string }) {
//   return (
//     <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
//       <Image
//         src={image}
//         alt={title}
//         width={150}
//         height={150}
//         className="h-17 w-17 transition-transform group-hover:scale-110"
//       />
//       <div className="space-y-2 text-center">
//         <h3 className="text-xl font-bold">{title}</h3>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//     </div>
//   )
// }

// function ProductCard({
//   id,
//   name,
//   category,
//   packaging,
//   volume,
// }: {
//   id: string
//   name: string
//   category: string
//   packaging: string
//   volume: string
// }) {
//   return (
//     <Link href={`/products/${id}`} className="group">
//       <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
//         <Image
//           src="/placeholder.svg?height=200&width=200"
//           alt={name}
//           width={200}
//           height={200}
//           className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
//         />
//         <div className="flex flex-col space-y-1.5 p-4">
//           <h3 className="font-semibold">{name}</h3>
//           <p className="text-sm text-gray-500">{category}</p>
//           <div className="flex items-center justify-between text-sm text-gray-500">
//             <span>{packaging}</span>
//             <span>{volume}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }
// */
