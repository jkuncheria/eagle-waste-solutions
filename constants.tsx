import React from 'react';
import { NavItem, Category, Feature } from './types';
import { BadgeCheck, Users, Wrench, Truck, Recycle, Home, Building2 } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Construction Debris', href: '/construction-debris-removal' },
  { label: 'Office Cleanouts', href: '/business-office-cleanouts' },
  { label: 'Garage Cleanouts', href: '/garage-cleanouts' },
  { 
    label: 'More Services', 
    href: '#',
    subItems: [
      { label: 'Hot Tub Removal', href: '/hot-tub-removal' },
      { label: 'Furniture Pickup & Hauling', href: '/furniture-pickup-hauling' },
      { label: 'Appliance Disposal', href: '/appliance-disposal' },
      { label: 'Green Waste Disposal', href: '/green-waste-disposal' },
      { label: 'Hoarder House Cleanouts', href: '/hoarder-house-cleanouts' },
      { label: 'Mattress Disposal', href: '/mattress-disposal' },
      { label: 'Cardboard Disposal', href: '/cardboard-disposal' },
    ]
  },
  { 
    label: 'About', 
    href: '#',
    subItems: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const CATEGORIES: Category[] = [
  { id: 'construction-debris-removal', name: 'Construction Debris Removal', image: '/eaglewaste/348s-2.jpg' },
  { id: 'business-office-cleanouts', name: 'Business Office Cleanouts', image: '/eaglewaste/disposalbin.jpg' },
  { id: 'garage-cleanouts', name: 'Garage Cleanouts', image: '/eaglewaste/348s-6.jpg' },
  { id: 'hot-tub-removal', name: 'Hot Tub Removal', image: '/eaglewaste/348s-7.jpg' },
  { id: 'furniture-pickup-hauling', name: 'Furniture Pickup & Hauling', image: '/eaglewaste/furniture.jpg' },
  { id: 'appliance-disposal', name: 'Appliance Disposal', image: '/eaglewaste/appliance-disposal1.jpg' },
  { id: 'green-waste-disposal', name: 'Green Waste Disposal', image: '/eaglewaste/348s.jpg' },
  { id: 'mattress-disposal', name: 'Mattress Disposal', image: '/eaglewaste/348s-9.jpg' },
  { id: 'hoarder-house-cleanouts', name: 'Hoarder House Cleanouts', image: '/eaglewaste/348s-5.jpg' },
  { id: 'cardboard-disposal', name: 'Cardboard Disposal', image: '/eaglewaste/disposalbin2.jpg' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Same-Day Service',
    description: 'Need it gone today? We offer same-day removal for urgent jobs throughout LA and Orange County.',
    icon: <Truck className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises. Get an upfront quote before we start—what we quote is what you pay.',
    icon: <BadgeCheck className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Eco-Friendly Disposal',
    description: 'We recycle and donate whenever possible, ensuring your waste is disposed of responsibly.',
    icon: <Recycle className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured professionals who protect your property throughout the removal process.',
    icon: <Users className="w-8 h-8 text-blue-900" />,
  },
];