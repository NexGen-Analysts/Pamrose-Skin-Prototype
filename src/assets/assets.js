import logo from './pamrose-logo.png'
import placeholder_img from './product-placeholder.png' 
import nexgen_logo from './nexgen-logo.png'
import naledi_profile_img from './naledi-profile.png' // New profile photo for About page
import naledi_contact_img from './naledi-contact.png' // New photo for Contact page
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img: placeholder_img, 
    about_img: naledi_profile_img, // Assigning Naledi's photo
    contact_img: naledi_contact_img, // Assigning Naledi's contact photo
    nexgen_logo,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    /* razorpay_logo,
    stripe_logo, */
    cross_icon
}

export const products = [
    {
        _id: "ps001",
        name: "Silken Savannah Nourish Nook",
        description: "A complete body care kit featuring our Body Scrub, Body Butter, and Body Oil to leave your skin feeling silky smooth and combatting dryness.",
        price: 299,
        image: [placeholder_img],
        category: "Kits",
        skin_concern: ["Dry Skin", "Hydration"],
        bestseller: true
    },
    {
        _id: "ps002",
        name: "Velvet Veldt Unicorn Fruit",
        description: "The perfect shave kit with a Pre-Shave Scrub, Shave Butter, and After-Shave Serum for a smooth, irritation-free shave and preventing post-shave bumps.",
        price: 279,
        image: [placeholder_img],
        category: "Kits",
        skin_concern: ["Shave Bumps", "Irritation"],
        bestseller: true
    },
    {
        _id: "ps003",
        name: "Gleam Retreat Coco Cloud",
        description: "An after-shave moisturizer with a buttery, ultra-hydrating finish to soothe and moisturize your skin.",
        price: 120,
        image: [placeholder_img],
        category: "Moisturizers",
        skin_concern: ["Hydration", "Irritation"],
        bestseller: true
    },
    {
        _id: "ps004",
        name: "Golden Glow Body Oil Trio",
        description: "A luxurious trio of rich body oils with our signature scent blends for a radiant glow.",
        price: 300,
        image: [placeholder_img],
        category: "Oils",
        skin_concern: ["Dry Skin", "Glow"],
        bestseller: false
    },
    {
        _id: "ps005",
        name: "Bikini Bliss",
        description: "A targeted kit for the bikini line, featuring our Ingrown Hair Serum and Pubic Hair & Skin Serum.",
        price: 199,
        image: [placeholder_img],
        category: "Kits",
        skin_concern: ["Ingrown Hairs", "Irritation"],
        bestseller: false
    },
    {
        _id: "ps006",
        name: "Glowy Glutes",
        description: "Our butt glow kit with a Soothing Butt Butter and a Glow Butt Serum for perfectly smooth and radiant glutes.",
        price: 199,
        image: [placeholder_img],
        category: "Kits",
        skin_concern: ["Hydration", "Glow"],
        bestseller: false
    },
    {
        _id: "ps007",
        name: "Soothing Sanctuary",
        description: "A fast-acting after-shave recovery serum to heal and soothe irritated skin.",
        price: 110,
        image: [placeholder_img],
        category: "Serums",
        skin_concern: ["Irritation", "Shave Bumps"],
        bestseller: false
    },
    {
        _id: "ps008",
        name: "Silk-Edge Razor",
        description: "A reusable, stainless steel razor for a close and eco-friendly shave.",
        price: 100,
        image: [placeholder_img],
        category: "Tools",
        skin_concern: ["Shave Bumps"],
        bestseller: false
    }
]