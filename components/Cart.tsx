"use client"

import { useState } from "react"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

interface CartProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Cart({ open, onOpenChange }: CartProps) {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    if (cart.length === 0) return

    setIsCheckingOut(true)
    
    // Format cart details for WhatsApp message
    let message = "🛒 *Cart Details*\n\n"
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n   Quantity: ${item.quantity}\n\n`
    })
    message += `Total Items: ${getTotalItems()}\n\n`
    message += "Please confirm this order."

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = "9676247093"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")
    
    setIsCheckingOut(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cart.length === 0
              ? "Your cart is empty"
              : `${getTotalItems()} item${getTotalItems() > 1 ? "s" : ""} in your cart`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-start gap-4 p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">{item.product.category}</p>
                      {item.product.volume && item.product.unit && (
                        <p className="text-sm text-gray-500">
                          {item.product.volume} {item.product.unit}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Items:</span>
                  <span className="font-semibold">{getTotalItems()}</span>
                </div>
                <Button
                  className="w-full bg-[#F78C2C] hover:bg-[#F78C2C]/90"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Checkout via WhatsApp"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

