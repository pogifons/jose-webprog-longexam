import flaskImg from './products/flask1.jpg';
import hoodieImg from './products/hoodie.jpg';
import shirt1Img from './products/shirt1.jpg';
import shirt2Img from './products/shirt2.jpg';
import capImg from './products/cap.jpg';
import keychainImg from './products/nukeychain.jpg';
import lanyardImg from './products/lace.jpg';
import medtechUniformImg from './products/medtech.jpg';

const products = [
  {
    name: 'nu-flask',
    title: 'National University Flask',
    category: 'Drinkware',
    price: 'PHP 499',
    stock: 'In stock',
    imageSrc: flaskImg,
    imageAlt: 'National University flask',
    content: [
      'A National University flask for staying hydrated during long class days and campus commutes.',
      'Designed for easy carry in backpacks and side pockets—great for water, coffee, or tea.',
      'Perfect for National University students who want a reliable drink companion between classes.',
    ],
  },
  {
    name: 'nu-tee-campus-crew',
    title: 'National University Shirt (Campus Crew)',
    category: 'Apparel',
    price: 'PHP 249',
    stock: 'In stock',
    imageSrc: shirt1Img,
    imageAlt: 'National University shirt with campus crew print',
    content: [
      'A National University shirt with a clean “National University” campus-style print.',
      'Easy to pair with jeans or school pants for regular NU days.',
      'A simple NU staple for students and alumni.',
    ],
  },
  {
    name: 'nu-tee-crest-black',
    title: 'National University Shirt (Crest Black)',
    category: 'Apparel',
    price: 'PHP 599',
    stock: 'Low stock',
    imageSrc: shirt2Img,
    imageAlt: 'Black National University shirt with NU crest',
    content: [
      'A black National University tee featuring the NU crest.',
      'A low-key look that works for org events, campus days, and casual wear.',
      'Great for showing NU pride without going loud.',
    ],
  },
  {
    name: 'nu-hoodie',
    title: 'National University Hoodie',
    category: 'Apparel',
    price: 'PHP 899',
    stock: 'In stock',
    imageSrc: hoodieImg,
    imageAlt: 'National University hoodie',
    content: [
      'A cozy National University hoodie for cooler classroom days and campus nights.',
      'Comfortable fit for commutes, org meetings, and weekend wear.',
      'A go-to layer for National University students.',
    ],
  },
  {
    name: 'nu-cap',
    title: 'National University Cap',
    category: 'Accessories',
    price: 'PHP 399',
    stock: 'In stock',
    imageSrc: capImg,
    imageAlt: 'National University cap',
    content: [
      'A classic National University cap with embroidered NU lettering.',
      'Great for campus walks, PE days, and sunny commutes.',
      'A simple NU accessory that matches most outfits.',
    ],
  },
  {
    name: 'nu-keychain',
    title: 'National University Keychain',
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    imageSrc: keychainImg,
    imageAlt: 'National University keychain with NU crest',
    content: [
      'A National University keychain featuring the NU crest.',
      'Perfect for keys, bags, and quick NU-style personalization.',
      'A small-but-solid NU accessory for everyday use.',
    ],
  },
  {
    name: 'nu-lanyard',
    title: 'National University Lanyard',
    category: 'Accessories',
    price: 'PHP 199',
    stock: 'In stock',
    imageSrc: lanyardImg,
    imageAlt: 'National University lanyard',
    content: [
      'A National University lanyard for NU IDs, access cards, and campus passes.',
      'Easy to wear all day—ideal for students who are always moving.',
      'A National University essential for daily campus routines.',
    ],
  },
  {
    name: 'nu-medtech-uniform',
    title: 'National University MedTech Uniform',
    category: 'Uniforms',
    price: 'PHP 1,199',
    stock: 'In stock',
    imageSrc: medtechUniformImg,
    imageAlt: 'National University MedTech uniform',
    content: [
      'A National University MedTech uniform set with the NU patch.',
      'Designed for course requirements, lab days, and program activities.',
      'A professional NU look for MedTech students.',
    ],
  },
];

export default products;
