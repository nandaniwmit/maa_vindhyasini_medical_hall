/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Medicine, FAQItem, HealthTip, Testimonial, ServiceItem, GalleryItem } from '../types';

export const MEDICINES: Medicine[] = [
  // Tablets
  {
    id: 'med-1',
    name: 'Paracetamol 650mg',
    category: 'Tablets',
    form: 'Tablet',
    price: 30,
    description: 'Effective relief from fever, mild to moderate body pain, headache, and toothache.',
    inStock: true,
    dosage: '1 tablet every 6 hours as needed',
    packageSize: 'Strip of 15 Tablets'
  },
  {
    id: 'med-2',
    name: 'Amoxycillin 500mg',
    category: 'Tablets',
    form: 'Tablet',
    price: 120,
    description: 'Broad-spectrum antibiotic tablet used for treating various bacterial infections under prescription.',
    inStock: true,
    dosage: 'As prescribed by physician',
    packageSize: 'Strip of 10 Tablets'
  },
  {
    id: 'med-3',
    name: 'Atorvastatin 10mg',
    category: 'Tablets',
    form: 'Tablet',
    price: 95,
    description: 'Used to lower cholesterol levels and reduce risk of cardiovascular diseases.',
    inStock: true,
    dosage: '1 tablet daily at night',
    packageSize: 'Strip of 15 Tablets'
  },
  {
    id: 'med-4',
    name: 'Metformin 500mg (SR)',
    category: 'Diabetic Care',
    form: 'Tablet',
    price: 45,
    description: 'Sustained-release tablet for management of Type 2 Diabetes Mellitus.',
    inStock: true,
    dosage: '1 tablet with dinner or as directed',
    packageSize: 'Strip of 15 Tablets'
  },
  {
    id: 'med-5',
    name: 'Pantoprazole 40mg',
    category: 'Tablets',
    form: 'Tablet',
    price: 110,
    description: 'Relieves acidity, heartburn, and gastroesophageal reflux disease (GERD).',
    inStock: true,
    dosage: '1 tablet daily empty stomach',
    packageSize: 'Strip of 15 Tablets'
  },

  // Capsules
  {
    id: 'med-6',
    name: 'Omeprazole 20mg',
    category: 'Capsules',
    form: 'Capsule',
    price: 55,
    description: 'Proton-pump inhibitor capsules to suppress gastric acid secretion.',
    inStock: true,
    dosage: '1 capsule morning empty stomach',
    packageSize: 'Strip of 15 Capsules'
  },
  {
    id: 'med-7',
    name: 'Amoxycillin + Clavulanic Acid 625mg',
    category: 'Capsules',
    form: 'Capsule',
    price: 180,
    description: 'Combination penicillin-class antibiotic for persistent bacterial infections.',
    inStock: true,
    dosage: '1 capsule twice daily after meals',
    packageSize: 'Strip of 6 Capsules'
  },
  {
    id: 'med-8',
    name: 'Vitamin D3 60K UI Cholecalciferol',
    category: 'Vitamins',
    form: 'Capsule',
    price: 150,
    description: 'High-strength Vitamin D3 capsules for strong bones, joints, and immune health.',
    inStock: true,
    dosage: '1 capsule weekly with milk',
    packageSize: 'Pack of 4 Capsules'
  },

  // Syrups
  {
    id: 'med-9',
    name: 'Cough Relief Syrup (Dextromethorphan + Chlorpheniramine)',
    category: 'Syrups',
    form: 'Syrup',
    price: 95,
    description: 'Fast-acting syrup for dry cough, sneezing, throat tickle, and runny nose.',
    inStock: true,
    dosage: '10ml thrice a day or as directed',
    packageSize: '100ml Bottle'
  },
  {
    id: 'med-10',
    name: 'Antacid Gel Suspension (Magaldrate + Simethicone)',
    category: 'Syrups',
    form: 'Syrup',
    price: 115,
    description: 'Quick-acting mint-flavored antacid liquid for gas, acidity, bloating, and stomach pain.',
    inStock: true,
    dosage: '10ml after meals as required',
    packageSize: '200ml Bottle'
  },
  {
    id: 'med-11',
    name: 'Multivitamin & Zinc Syrup',
    category: 'Vitamins',
    form: 'Syrup',
    price: 140,
    description: 'Daily health tonic syrup containing essential vitamins, minerals, and Zinc for children and adults.',
    inStock: true,
    dosage: '5ml twice a day',
    packageSize: '200ml Bottle'
  },

  // Injections
  {
    id: 'med-12',
    name: 'Insulin Glargine 100 IU/ml',
    category: 'Diabetic Care',
    form: 'Injection',
    price: 750,
    description: 'Long-acting basal insulin analogue injection for managing high blood sugar.',
    inStock: true,
    dosage: 'Subcutaneous injection as directed by physician',
    packageSize: '3ml Prefilled Pen'
  },
  {
    id: 'med-13',
    name: 'Ceftriaxone 1g Injection',
    category: 'Injection',
    form: 'Injection',
    price: 65,
    description: 'Sterile cephalosporin antibiotic injection for severe clinical bacterial infections.',
    inStock: true,
    dosage: 'Intravenous/Intramuscular clinical use only',
    packageSize: 'Single Vial with sterile water'
  },

  // Medical Equipment / Devices
  {
    id: 'med-14',
    name: 'Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    form: 'Device',
    price: 1850,
    description: 'Fully automatic digital upper arm BP monitor with memory storage and large digital display.',
    inStock: true,
    packageSize: '1 Unit (With Cuff & Batteries)'
  },
  {
    id: 'med-15',
    name: 'OneTouch Select Plus Glucometer',
    category: 'Diabetic Care',
    form: 'Device',
    price: 999,
    description: 'Accurate blood glucose monitoring kit. Provides results in 5 seconds with simple color range indicators.',
    inStock: true,
    packageSize: '1 Kit (Glucometer, Lancing Device, 10 Lancets & 10 Strips)'
  },
  {
    id: 'med-16',
    name: 'Digital Clinical Thermometer',
    category: 'Medical Equipment',
    form: 'Device',
    price: 150,
    description: 'Safe, mercury-free digital body temperature sensor with buzzer alert and memory recall.',
    inStock: true,
    packageSize: '1 Unit'
  },

  // Supplements
  {
    id: 'med-17',
    name: 'Whey Protein Powder (Vanilla)',
    category: 'Protein Supplements',
    form: 'Supplement',
    price: 2400,
    description: 'High-quality premium whey protein isolate powder for muscle recovery and nutritional wellness.',
    inStock: true,
    dosage: '1 scoop in 200ml water post-workout',
    packageSize: '1kg Jar'
  },
  {
    id: 'med-18',
    name: 'Calcium + Vitamin D3 Tablets',
    category: 'Protein Supplements',
    form: 'Tablet',
    price: 180,
    description: 'Calcium carbonate & Vitamin D3 formulation to maintain healthy bone mass and density.',
    inStock: true,
    dosage: '1 tablet daily after lunch',
    packageSize: 'Bottle of 60 Tablets'
  },

  // Baby Care
  {
    id: 'med-19',
    name: 'Himalaya Baby Massage Oil',
    category: 'Baby Products',
    form: 'Baby Care',
    price: 199,
    description: 'Pure, mild, non-staining oil infused with olive oil and winter cherry to nourish baby skin.',
    inStock: true,
    packageSize: '200ml Bottle'
  },
  {
    id: 'med-20',
    name: 'Pampers Active Baby Diapers (M)',
    category: 'Baby Products',
    form: 'Baby Care',
    price: 499,
    description: 'Ultra-absorbent baby diapers with soft stretchable sides and anti-leakage guards.',
    inStock: true,
    packageSize: 'Pack of 32 Diapers'
  },

  // Skin Care
  {
    id: 'med-21',
    name: 'Sunscreeen Gel SPF 50+',
    category: 'Skin Care',
    form: 'Cream',
    price: 395,
    description: 'Non-greasy, matte-finish dermatologically tested high defense broad spectrum UVA/UVB shield.',
    inStock: true,
    packageSize: '50g Tube'
  },
  {
    id: 'med-22',
    name: 'Moisturizing Cream for Sensitive Skin',
    category: 'Skin Care',
    form: 'Cream',
    price: 290,
    description: 'Intense hydration cream, fragrance-free, clinically proven to soothe irritated skin.',
    inStock: true,
    packageSize: '100g Tub'
  },

  // Orthopedic Support & Personal Hygiene
  {
    id: 'med-23',
    name: 'Adjustable Neoprene Knee Support',
    category: 'Orthopedic Support',
    form: 'Orthopedic',
    price: 450,
    description: 'Compression knee sleeve for therapeutic warmth, stability, and minor joint pain relief.',
    inStock: true,
    packageSize: '1 Unit'
  },
  {
    id: 'med-24',
    name: 'Lumbo-Sacral (LS) Back Belt',
    category: 'Orthopedic Support',
    form: 'Orthopedic',
    price: 850,
    description: 'Double-pull elastic back support brace for posture correction and chronic lower back lumbar pain.',
    inStock: true,
    packageSize: '1 Unit'
  },
  {
    id: 'med-25',
    name: 'Antiseptic Liquid (Dettol)',
    category: 'Personal Hygiene',
    form: 'Other',
    price: 160,
    description: 'Multi-purpose antiseptic disinfectant liquid for first aid, surface cleaning, and personal hygiene.',
    inStock: true,
    packageSize: '500ml Bottle'
  },
  {
    id: 'med-26',
    name: 'N95 Respirator Face Mask',
    category: 'Personal Hygiene',
    form: 'Other',
    price: 40,
    description: '5-layer filtration high-protection face mask with adjustable nose clip and soft ear loops.',
    inStock: true,
    packageSize: 'Pack of 1 Mask'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I order medicines on WhatsApp from Maa Vindhyavasini Medical Hall?',
    answer: 'Ordering is extremely easy! Simply use our digital "WhatsApp Order Form" on this website, fill in your details (name, delivery details, list of medicines), optionally upload a photo of your prescription, and click "Send via WhatsApp". This will instantly format your order and open it in your WhatsApp app to send directly to us.',
    category: 'Order'
  },
  {
    id: 'faq-2',
    question: 'Do you require a doctor\'s prescription for all medicines?',
    answer: 'While Over-The-Counter (OTC) items, vitamins, health supplements, and baby care products do not require prescriptions, Scheduled drugs, antibiotics, and critical therapeutic medicines strictly require a valid prescription from a registered medical practitioner.',
    category: 'Prescription'
  },
  {
    id: 'faq-3',
    question: 'Are all your medicines genuine and authenticated?',
    answer: 'Absolutely. We procure our entire inventory of medicines, surgical items, and healthcare devices directly from authorized pharmaceutical distributors and certified manufacturers. Each item has verified batch numbers, expiry dates, and is stored in strict temperature-controlled environments.',
    category: 'Store'
  },
  {
    id: 'faq-4',
    question: 'What are the store operating hours for Maa Vindhyavasini Medical Hall?',
    answer: 'We are open 7 days a week, Monday through Sunday, from 08:30 AM to 10:00 PM. In case of emergency healthcare inquiries, you can call us directly on our hotlines.',
    category: 'Store'
  },
  {
    id: 'faq-5',
    question: 'Do you offer home delivery of medicines in Gaya?',
    answer: 'Yes, we provide prompt nearby home delivery for locations around Delha, Delha Chauraha, Chotki Kharkhura, Tekari Road, and nearby areas of Gaya, Bihar. Orders placed through WhatsApp with prescriptions are dispatched swiftly.',
    category: 'Order'
  },
  {
    id: 'faq-6',
    question: 'Can I upload a hand-written prescription or a hospital slip?',
    answer: 'Yes, a clear photo of any valid doctor\'s prescription—printed, digital, or hand-written on official clinic/hospital letterhead—is acceptable. Please ensure the doctor\'s name, registration number, patient name, and medicines are clearly legible.',
    category: 'Prescription'
  },
  {
    id: 'faq-7',
    question: 'Do you offer discounts on bulk orders or chronic care medicines?',
    answer: 'Yes! We provide attractive discounts on monthly prescriptions (like diabetes, thyroid, or hypertension medications) and bulk purchases of healthcare supplements. Please inquire via WhatsApp or call us to get the best pricing.',
    category: 'General'
  },
  {
    id: 'faq-8',
    question: 'Can I return or exchange purchased medicines?',
    answer: 'Medicines can be returned or exchanged within 7 days of purchase, provided they are in their original sealed packing, undamaged, have more than 3 months of remaining shelf life, and are accompanied by the original store bill. Cold-chain medicines or cut strips cannot be returned.',
    category: 'General'
  },
  {
    id: 'faq-9',
    question: 'Do you supply surgical equipment and home care devices like wheelchair or walkers?',
    answer: 'Yes, we stock a wide range of orthopedic supports (knee caps, back belts, cervical collars), daily surgical consumables, and key diagnostic devices like BP monitors, glucometers, nebulizers, and digital thermometers. For heavy durable medical equipment, you can contact us to place a priority booking.',
    category: 'Store'
  },
  {
    id: 'faq-10',
    question: 'How do I pay for my medicine order?',
    answer: 'We accept multiple payment options including Google Pay, PhonePe, Paytm, BHIM UPI, Net Banking, and cash at the store counter or upon delivery.',
    category: 'Order'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'How to Store Your Medicines Safely at Home',
    category: 'Medicine Care',
    snippet: 'Improper storage can make medicines lose their efficacy. Learn how to preserve them correctly.',
    content: 'Storing medicines correctly is crucial to preserve their active ingredients and ensure they work effectively. 1. Keep them away from high-moisture areas like bathrooms—humidity degrades tablets. 2. Store in a cool, dry place away from direct sunlight (under 25°C). 3. Always store insulin, vaccines, and specific syrups in the refrigerator (never freezer) at 2-8°C. 4. Ensure child-proof container locks are fully engaged and stored out of reach of children and pets.',
    date: 'July 5, 2026',
    readTime: '3 min read',
    author: 'Chief Pharmacist'
  },
  {
    id: 'tip-2',
    title: 'Managing Blood Sugar levels: Quick Diagnostic Tips',
    category: 'Diabetes Care',
    snippet: 'A short guide to using your home glucometer accurately for diabetes management.',
    content: 'When checking your blood sugar levels with a home glucometer: 1. Wash your hands thoroughly with warm water and soap; do not use alcohol wipes as trace alcohol can dilute blood and alter readings. 2. Warm your fingers to promote blood flow. 3. Use the side of the fingertip rather than the pad to minimize pain. 4. Track readings consistently in a journal: fasting (target 70-130 mg/dL) and 2 hours post-meal (target below 180 mg/dL). Share this data with your doctor at Maa Vindhyavasini Medical Hall for customized therapy.',
    date: 'June 28, 2026',
    readTime: '4 min read',
    author: 'Diabetic Consultant'
  },
  {
    id: 'tip-3',
    title: 'Your Family Emergency First Aid Box Essentials',
    category: 'First Aid',
    snippet: 'Every household must keep a fully stocked first-aid kit. Here is the checklist of what is required.',
    content: 'A perfect first aid kit prepares your home for accidental cuts, burns, or bruises. Your kit should contain: Antiseptic wash liquid (Dettol/Savlon), sterile gauze swabs, cohesive bandage rolls, micropore medical adhesive tape, bandage strips (Band-Aid), Neosporin antiseptic ointment, Silverex burn relief gel, paracetamol tablets for pain/fever, ORS sachets for dehydration, medical-grade scissors, and a digital body thermometer. Keep this kit in an accessible, known spot.',
    date: 'May 15, 2026',
    readTime: '5 min read',
    author: 'Emergency Care Team'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sujit Kumar',
    rating: 5,
    text: 'Maa Vindhyavasini Medical Hall is hands-down the most reliable pharmacy in Delha, Gaya. I get all my elderly parents\' diabetes and blood pressure medicines here. They always have 100% genuine stocks and give genuine discounts, unlike other commercial chains. Their WhatsApp ordering works like a charm!',
    date: 'June 20, 2026',
    role: 'Local Resident',
    location: 'Delha, Gaya'
  },
  {
    id: 'test-2',
    name: 'Pooja Singh',
    rating: 5,
    text: 'I ordered baby diapers, baby oil, and baby food via their WhatsApp order page. The service was extremely quick! They confirmed availability within minutes and delivered it to my home nearby. Very polite and helpful staff. Highly recommend for any healthcare products.',
    date: 'July 2, 2026',
    role: 'Mother of 2',
    location: 'Tekari Road, Gaya'
  },
  {
    id: 'test-3',
    name: 'Dr. Amit Verma',
    rating: 5,
    text: 'As a practicing healthcare specialist in Gaya, I strictly advise my patients to purchase medicines from trusted pharmacies to avoid counterfeit drugs. Maa Vindhyavasini Medical Hall is a standard of trust. Their storage conditions are excellent, ensuring vaccine and insulin cold-chains are perfectly preserved.',
    date: 'May 10, 2026',
    role: 'MD Physician',
    location: 'Chotki Kharkhura, Gaya'
  },
  {
    id: 'test-4',
    name: 'Rajesh Ranjan',
    rating: 5,
    text: 'Very reasonable pricing. I saved almost 15% on my monthly allergy and thyroid medicines compared to other retail outlets. The owner Mukesh is extremely friendly and knowledgeable; he even explains correct dosages clearly and double checks the doctor\'s prescription.',
    date: 'April 28, 2026',
    role: 'Government Employee',
    location: 'Delha Chauraha, Gaya'
  },
  {
    id: 'test-5',
    name: 'Meera Devi',
    rating: 5,
    text: 'Highly satisfied with their orthopedic belts and knee braces collections. They helped me choose the right size of LS belt for my backache and showed me how to wear it. It\'s great to have a highly qualified and patient-centric medical shop in our Delha neighborhood.',
    date: 'June 15, 2026',
    role: 'Retired Teacher',
    location: 'Kharkhura, Gaya'
  },
  {
    id: 'test-6',
    name: 'Vikash Kumar',
    rating: 5,
    text: 'Awesome digital process! I uploaded my hospital prescription slip directly on this website, and received the medicines at my doorstep. No hassle of going out in the heat or searching multiple stores. Honest pricing and genuine products.',
    date: 'July 6, 2026',
    role: 'Software Engineer',
    location: 'Bypass Road, Gaya'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Prescription Medicines',
    description: 'Procuring and dispensing highly authenticated, genuine therapeutic medicines across multi-specialties like Cardiology, Neurology, Endocrinology, and Nephrology under strict medical prescription.',
    features: ['100% Genuine Brands', 'Cold-Chain Insulin Safe', 'Accurate Batch Checking', 'Doctor Prescription Verified'],
    iconName: 'FileText'
  },
  {
    id: 'srv-2',
    title: 'General Medicines & OTC',
    description: 'Fully stocked range of daily over-the-counter medicines, pain relievers, allergy medications, cough & cold syrups, antacids, and digestive enzymes ready for instant access.',
    features: ['Fast Relief OTC Care', 'Cough & Cold Specialists', 'Safe Pain Management', 'Gastric Care Suspension'],
    iconName: 'Pill'
  },
  {
    id: 'srv-3',
    title: 'Health Supplements',
    description: 'Authentic vitamin formulations, calcium, zinc, iron formulations, premium protein powders, whey isolates, omega-3, and energy health tonics to support your health and active recovery.',
    features: ['Certified Proteins Only', 'Multi-Vitamins & Minerals', 'Bone and Joint Health', 'Herbal Extracts'],
    iconName: 'Sparkles'
  },
  {
    id: 'srv-4',
    title: 'Baby Care Products',
    description: 'Gentle and dermatologically safe baby baby-oils, baby washes, powders, baby diapers, baby wipes, and premium baby nutrition feeds from trusted brands.',
    features: ['Dermatologist Approved', 'Ultra Soft Diapers', 'Nourishing Oils & Creams', 'Organic Baby Cereals'],
    iconName: 'Baby'
  },
  {
    id: 'srv-5',
    title: 'Personal Care Products',
    description: 'High-quality personal hygiene essentials, medicated soaps, facial moisturizers, sunscreens, hair health oils, oral hygiene pastes, and hand sanitizers.',
    features: ['Medicated Skincare', 'Oral Hygiene Solutions', 'Anti-Dandruff Therapies', 'Anti-Bacterial Washes'],
    iconName: 'Sparkles'
  },
  {
    id: 'srv-6',
    title: 'Medical Equipment & Devices',
    description: 'Reliable and accurate diagnostic devices for home health tracking, including blood pressure monitors, clinical thermometers, nebulizers, and steam inhalers.',
    features: ['Fully Digital Monitors', 'Warranty-Backed Devices', 'Easy One-Button BP Systems', 'Fast Clinical Thermometers'],
    iconName: 'Activity'
  },
  {
    id: 'srv-7',
    title: 'Surgical Supplies',
    description: 'Comprehensive medical disposables for surgeries and post-operative home dressing, including sterile surgical gloves, IV cannulas, syringes, and clinical tapes.',
    features: ['Sterile Certified Pack', 'Disposable Syringes', 'Doctor Recommended Gauze', 'Surgical Face Shields'],
    iconName: 'Scissors'
  },
  {
    id: 'srv-8',
    title: 'First Aid Products',
    description: 'Every essential tool and antiseptic needed to assemble a comprehensive emergency first-aid kit for family homes, schools, or offices.',
    features: ['Antiseptic Band-Aids', 'Dettol Disinfectants', 'Burn Relief Ointment', 'Adhesive Micropore Tape'],
    iconName: 'ShieldAlert'
  },
  {
    id: 'srv-9',
    title: 'Diabetic Care Section',
    description: 'Specialized clinic support for diabetic patients including home glucometers, diabetic test strips, insulin pens, insulin syringes, and low glycemic food alternatives.',
    features: ['Accurate Glucometer Strips', 'Safe Insulin Syringes', 'Continuous Glucose Monitors', 'Sugar-Free Health Supplements'],
    iconName: 'HeartPulse'
  },
  {
    id: 'srv-10',
    title: 'Healthcare Essentials',
    description: 'Quality daily hygiene accessories including masks, sanitizing sprays, antiseptic cleaners, hot water bags, vaporizers, and heating pads for general wellness.',
    features: ['High Filtration N95 Masks', 'Instant Hand Sanitizers', 'Premium Hot Water Bags', 'Dual Speed Face Vaporizers'],
    iconName: 'CheckCircle'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Store Front & Sign Board',
    category: 'Front',
    imageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8d304f3ced?auto=format&fit=crop&q=80&w=800',
    description: 'The clean, illuminated exterior of Maa Vindhyavasini Medical Hall located at Tekari Road, Delha, Gaya.'
  },
  {
    id: 'gal-2',
    title: 'Prescription Medicine Shelves',
    category: 'Store',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
    description: 'Well-organized and categorized medicine racks enabling our expert staff to dispense prescriptions rapidly.'
  },
  {
    id: 'gal-3',
    title: 'Baby Care & Nutrition Corner',
    category: 'Products',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800',
    description: 'Dedicated section for highly trusted baby diapers, wipes, and infant nutritional products.'
  },
  {
    id: 'gal-4',
    title: 'Diagnostic Device Counter',
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Display containing digital blood pressure monitors, clinical blood glucose systems, and pulse oximeters.'
  },
  {
    id: 'gal-5',
    title: 'Quality-Assured Medicine Storage',
    category: 'Store',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
    description: 'Perfect storage setup ensuring all vitamins, tablets, and liquids are kept dry and at stable room temperature.'
  },
  {
    id: 'gal-6',
    title: 'First Aid & Surgical Counter',
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
    description: 'Essential bandages, sterile dressings, and clinical cotton reels kept ready for emergency purchases.'
  },
  {
    id: 'gal-7',
    title: 'Personal Skincare & Hygiene Display',
    category: 'Products',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    description: 'Top skin moisturizers, sunblock gels, and hand sanitizers of trusted global healthcare brands.'
  },
  {
    id: 'gal-8',
    title: 'Professional Pharmacist Consultation',
    category: 'Store',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Our certified staff assisting local Gaya residents with their monthly medications and dosage guidelines.'
  }
];
