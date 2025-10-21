// Donors Data - Easy to update!
// Add new donors by adding objects to these arrays

export interface Donor {
  name: string
  type: 'family' | 'business' | 'individual'
  logo?: string // Optional logo path
  amount?: string // Optional: 'platinum', 'gold', 'silver', 'bronze'
  message?: string // Optional thank you message
}

export interface Sponsor {
  name: string
  logo: string
  website?: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
}

// Individual and Family Donors
export const donors: Donor[] = [
  {
    name: "Familia Colón",
    type: "family",
    amount: "gold"
  },
  {
    name: "Familia Graziano",
    type: "family",
    amount: "gold"
  },
  {
    name: "Familia Oliger",
    type: "family",
    amount: "gold"
  },
  {
    name: "Familia Jaramillo",
    type: "family",
    amount: "platinum"
  }
]

// Business Sponsors (with logos)
export const sponsors: Sponsor[] = [
  {
    name: "Tu Empresa Aquí",
    logo: "/images/sponsors/placeholder.png",
    tier: "platinum"
  }
  // Add more sponsors here:
  // {
  //   name: "Nombre de la Empresa",
  //   logo: "/images/sponsors/company-logo.png",
  //   website: "https://www.empresa.com",
  //   tier: "gold"
  // }
]

// Donation tier information
export const donationTiers = {
  platinum: {
    name: "Platino",
    color: "from-slate-400 to-slate-600",
    icon: "💎",
    minAmount: "$100+"
  },
  gold: {
    name: "Oro",
    color: "from-yellow-400 to-yellow-600",
    icon: "🥇",
    minAmount: "$50+"
  },
  silver: {
    name: "Plata",
    color: "from-gray-300 to-gray-500",
    icon: "🥈",
    minAmount: "$25+"
  },
  bronze: {
    name: "Bronce",
    color: "from-orange-400 to-orange-600",
    icon: "🥉",
    minAmount: "$10+"
  }
}

