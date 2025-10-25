// Donors Data - Easy to update!
// Add new donors by adding objects to these arrays

export interface Donor {
  name: string
  type: 'family' | 'business' | 'individual'
  logo?: string // Optional logo path
  photo?: string // Optional photo path
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
    name: "Francisco Colón",
    type: "individual",
    amount: "gold",
    //photo: "/images/donaciones/donor1.webp"
  },
  {
    name: "Danielle Graziano",
    type: "individual",
    amount: "silver"
  },
  {
    name: "Stacey Oliger",
    type: "individual",
    amount: "bronze"
  },
  {
    name: "Javier Jaramillo",
    type: "individual",
    amount: "platinum"
  },
  {
    name: "Oscar León",
    type: "individual",
    amount: "platinum"
  }
]

// Business Sponsors (with logos)
export const sponsors: Sponsor[] = [
  {
    name: "ColpoVital Dra. Giannina Arroba",
    logo: "/images/donaciones/donor1.webp",
    tier: "platinum"
  },
  {
    name: "Matrix Training Center",
    logo: "/images/donaciones/donor2.webp",
    //website: "https://www.supermarket.com",
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

// Donation tier information - Improved accessibility colors
export const donationTiers = {
  platinum: {
    name: "Platino",
    color: "from-slate-600 to-slate-800",
    textColor: "text-black",
    icon: "💎",
    minAmount: "$50+"
  },
  gold: {
    name: "Oro",
    color: "from-amber-600 to-amber-800",
    textColor: "text-black",
    icon: "🥇",
    minAmount: "$25+"
  },
  silver: {
    name: "Plata",
    color: "from-gray-600 to-gray-800",
    textColor: "text-white",
    icon: "🥈",
    minAmount: "$15+"
  },
  bronze: {
    name: "Bronce",
    color: "from-orange-600 to-orange-800",
    textColor: "text-white",
    icon: "🥉",
    minAmount: "$10+"
  }
}

