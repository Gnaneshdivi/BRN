export interface Product {
  id: string
  sub_segment: string
  name: string
  category: string
  volume: string
  unit: string
}

export const products: Product[] = [
  // Gold Coins
  {
    id: "gc-1",
    sub_segment: "Coins",
    name: "1 Dinar",
    category: "Gold",
    volume: "1",
    unit: "Dinar",
  },
  // Silver Coins
  {
    id: "sc-1",
    sub_segment: "Coins",
    name: "Nifs (1/2) Dirham",
    category: "Silver",
    volume: "0.5",
    unit: "Dirham",
  },
  {
    id: "sc-2",
    sub_segment: "Coins",
    name: "1 Dirham",
    category: "Silver",
    volume: "1",
    unit: "Dirham",
  },
  {
    id: "sc-3",
    sub_segment: "Coins",
    name: "10 Dirham",
    category: "Silver",
    volume: "10",
    unit: "Dirham",
  },
  // Gold Bullion
  {
    id: "gb-1",
    sub_segment: "Bullion",
    name: "1 gms",
    category: "Gold",
    volume: "1",
    unit: "gms",
  },
  {
    id: "gb-2",
    sub_segment: "Bullion",
    name: "2 gms",
    category: "Gold",
    volume: "2",
    unit: "gms",
  },
  {
    id: "gb-3",
    sub_segment: "Bullion",
    name: "5 gms",
    category: "Gold",
    volume: "5",
    unit: "gms",
  },
  {
    id: "gb-4",
    sub_segment: "Bullion",
    name: "10 gms",
    category: "Gold",
    volume: "10",
    unit: "gms",
  },
  {
    id: "gb-5",
    sub_segment: "Bullion",
    name: "50 gms",
    category: "Gold",
    volume: "50",
    unit: "gms",
  },
  {
    id: "gb-6",
    sub_segment: "Bullion",
    name: "100 gms",
    category: "Gold",
    volume: "100",
    unit: "gms",
  },
  // Silver Bullion
  {
    id: "sb-1",
    sub_segment: "Bullion",
    name: "5 gms",
    category: "Silver",
    volume: "5",
    unit: "gms",
  },
  {
    id: "sb-2",
    sub_segment: "Bullion",
    name: "10 gms",
    category: "Silver",
    volume: "10",
    unit: "gms",
  },
  {
    id: "sb-3",
    sub_segment: "Bullion",
    name: "50 gms",
    category: "Silver",
    volume: "50",
    unit: "gms",
  },
  {
    id: "sb-4",
    sub_segment: "Bullion",
    name: "100 gms",
    category: "Silver",
    volume: "100",
    unit: "gms",
  },
  {
    id: "sb-5",
    sub_segment: "Bullion",
    name: "500 gms",
    category: "Silver",
    volume: "500",
    unit: "gms",
  },
  {
    id: "sb-6",
    sub_segment: "Bullion",
    name: "1000 gms",
    category: "Silver",
    volume: "1000",
    unit: "gms",
  },
  // Packing
  {
    id: "p-1",
    sub_segment: "Box",
    name: "Box 1",
    category: "Box",
    volume: "1",
    unit: "Box",
  },
  {
    id: "p-2",
    sub_segment: "Box",
    name: "Box 2",
    category: "Box",
    volume: "2",
    unit: "Box",
  },
  {
    id: "p-3",
    sub_segment: "Box",
    name: "Box 3",
    category: "Box",
    volume: "3",
    unit: "Box",
  },
]
