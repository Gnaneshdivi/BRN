"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Filter, X, Search } from "lucide-react" // Add Search icon
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/products"

// Update the ProductsPage component to include search functionality
export default function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    sub_segment: searchParams.get("sub_segment") || "",
    category: searchParams.get("category") || "",
  })
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "") // Add search state
  const [showFilters, setShowFilters] = useState(false)

  // Get unique values for filter options
  const categories = ["Gold", "Silver", "Box"]
  const subSegments = ["Coins", "Bullion"]

  useEffect(() => {
    // Apply filters and search
    let result = [...products]

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.sub_segment.toLowerCase().includes(query),
      )
    }

    // Apply category filter
    if (filters.category) {
      if (filters.category === "Box") {
        // When Box is selected, show all Box products (which can be for both coins and bullion)
        result = result.filter((product) => product.category === "Box")
      } else {
        // For Gold or Silver, filter by category
        result = result.filter((product) => product.category === filters.category)
      }
    }

    // Apply sub_segment filter (only if category is not Box, or if Box is selected, show all)
    if (filters.sub_segment && filters.category !== "Box") {
      result = result.filter((product) => product.sub_segment === filters.sub_segment)
    }

    setFilteredProducts(result)

    // Update URL with filters and search
    const params = new URLSearchParams()
    if (filters.sub_segment) params.set("sub_segment", filters.sub_segment)
    if (filters.category) params.set("category", filters.category)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/products?${params.toString()}`)
  }, [filters, searchQuery, router])

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: value }
      // If category is changed to Box, clear sub_segment filter
      if (key === "category" && value === "Box") {
        newFilters.sub_segment = ""
      }
      return newFilters
    })
  }

  const clearFilters = () => {
    setFilters({
      sub_segment: "",
      category: "",
    })
    setSearchQuery("")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // The search is already applied via the useEffect
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Search bar */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A9A9F] focus:border-transparent"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Mobile filter toggle */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-[#0A9A9F] border-[#0A9A9F] hover:bg-[#0A9A9F]/10"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        {(Object.values(filters).some(Boolean) || searchQuery) && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            size="sm"
            className="text-[#F78C2C] hover:text-[#F78C2C]/90 hover:bg-[#F78C2C]/10"
          >
            Clear filters
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className={`w-full md:w-64 md:block ${showFilters ? "block" : "hidden"}`}>
          <div className="bg-white p-4 rounded-lg border mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="md:hidden">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value === "all" ? "" : value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {filters.category !== "Box" && (
                <div>
                  <label className="text-sm font-medium mb-1 block">Sub Category</label>
                  <Select value={filters.sub_segment} onValueChange={(value) => handleFilterChange("sub_segment", value === "all" ? "" : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Sub Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sub Categories</SelectItem>
                      {subSegments.map((subSegment) => (
                        <SelectItem key={subSegment} value={subSegment}>
                          {subSegment}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="hidden md:block">
                {(Object.values(filters).some(Boolean) || searchQuery) && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full text-[#0A9A9F] border-[#0A9A9F] hover:bg-[#0A9A9F]/10"
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1">
          {/* Active filters */}
          {(Object.values(filters).some(Boolean) || searchQuery) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {searchQuery && (
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <span>Search: {searchQuery}</span>
                  <button onClick={() => setSearchQuery("")} className="text-gray-500 hover:text-gray-700">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              {Object.entries(filters).map(([key, value]) =>
                value ? (
                  <div key={key} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>
                      {key}: {value}
                    </span>
                    <button onClick={() => handleFilterChange(key, "")} className="text-gray-500 hover:text-gray-700">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ) : null,
              )}
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(
                filteredProducts.reduce((acc, product) => {
                  // Create display category name
                  let displayCategory = product.category
                  if (product.category === "Gold" || product.category === "Silver") {
                    displayCategory = `${product.category} ${product.sub_segment}`
                  }
                  if (!acc[displayCategory]) {
                    acc[displayCategory] = []
                  }
                  acc[displayCategory].push(product)
                  return acc
                }, {} as Record<string, typeof filteredProducts>)
              ).map(([displayCategory, categoryProducts]) => (
                <div key={displayCategory}>
                  <h2 className="text-2xl font-bold mb-6">{displayCategory}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <Link key={product.id} href={`/products/${product.id}`} className="group">
                        <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt={product.name}
                            width={200}
                            height={200}
                            className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="flex flex-col space-y-1.5 p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.category}</p>
                            {product.volume && product.unit && (
                              <p className="text-sm text-gray-500">
                                {product.volume} {product.unit}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
