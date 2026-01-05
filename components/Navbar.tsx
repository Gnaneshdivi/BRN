'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { Cart } from '@/components/Cart'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { getTotalItems } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/products" className="flex items-center">
            <Image
              src="/BRN logo.jpg"
              alt="BRN Jewels Logo"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Button
              variant="outline"
              size="icon"
              className="relative border-[#0A9A9F] text-[#0A9A9F]"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F78C2C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </nav>

          {/* Mobile menu button and cart */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="relative border-[#0A9A9F] text-[#0A9A9F]"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F78C2C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-[#0A9A9F] text-[#0A9A9F]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-white border-t">
            <ul className="flex flex-col px-4 py-2 space-y-2">
              <li>
                <Link
                  href="/products"
                  className="block py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <Cart open={cartOpen} onOpenChange={setCartOpen} />
    </>
  )
}
