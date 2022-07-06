const { Products } = require('../models');

const productsData = [
  {
    product_name: 'NZXT H510i',
    description: 'Compact ATX mid-tower PC gaming case',
    price: 98.99,
    stock: 4,
    date_posted: '2021-06-01',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_1/image.jpg',
    category_id: 3,
  },
  {
    product_name:
      'ASUS TUF Gaming GeForce RTX 3070 Ti 8GB GDDR6X PCI Express 4.0',
    description: '8GB 256-Bit GDDR6X',
    price: 699.0,
    stock: 8,
    date_posted: '2022-03-25',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_2/image.jpg',
    category_id: 2,
  },
  {
    product_name: 'Z-EDGE UG27 27in 1080P Monitor',
    description:
      '200Hz 1ms Curved Gaming Monitor, FreeSync, HDR10 compatible, 350cd/m², with RGB Light, Ultra-Slim Bezel, DisplayPort x2, HDMI x2, Built-in Speakers',
    price: 199.5,
    stock: 2,
    date_posted: '2021-02-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_3/image.jpg',
    category_id: 1,
  },
  {
    product_name: 'X79 Motherboard LGA2011',
    description:
      'MATX USB3.0 SATA3 PCI-E NVME M.2 SSD X79 LGA 2011 Motherbboard 4 Channel DDR3 Up to 64GB',
    price: 114.99,
    stock: 12,
    date_posted: '2020-01-13',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_4/image.jpg',
    category_id: 4,
  },
  {
    product_name: 'SAMSUNG 870 QVO Series',
    description:
      '8TB SATA III Samsung 4-bit MLC V-NAND Internal Solid State Drive',
    price: 739.95,
    stock: 2,
    date_posted: '2022-06-23',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_5/image.jpg',
    category_id: 5,
  },
  {
    product_name: 'AMD Ryzen 7 5700X',
    description: 'Ryzen 7 5000 Series 8-Core Socket AM4 65W Desktop Processor',
    price: 286.98,
    stock: 31,
    date_posted: '2022-05-01',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_6/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'Rosewill ATX Mid Tower Gaming PC Computer Case',
    description:
      'Aura Sync Compatible Dual Ring RGB LED Fans, Top Mount PSU & HDD/SSD, Tempered Glass & Steel',
    price: 79.98,
    stock: 15,
    date_posted: '2021-03-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_7/image.jpg',
    category_id: 3,
  },
  {
    product_name: 'Intel Pentium Gold G6400',
    description:
      'Pentium Gold Comet Lake Dual-Core 4.0 GHz LGA 1200 58W Intel UHD Graphics 610 Desktop Processor',
    price: 59.33,
    stock: 2,
    date_posted: '2018-03-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_8/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'ASUS TUF Gaming VG24VQ 24in Monitor',
    description:
      'Full HD 1920 x 1080 1ms MPRT 144Hz 2 x HDMI, DisplayPort AMD FreeSync Asus Eye Care with Ultra Low-Blue Light & Flicker-Free Backlit LED Height Adjustable Curved Gaming Monitor',
    price: 189.99,
    stock: 21,
    date_posted: '2020-12-17',
    product_img: 'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_9/image.jpg',
    category_id: 1,
  },
  {
    product_name: 'Seagate Desktop HDD ST2000DM001 2TB',
    description: '64MB Cache SATA 6.0Gb/s 3.5" Internal Hard Drive Bare Drive',
    price: 54.0,
    stock: 16,
    date_posted: '2020-01-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_10/image.jpg',
    category_id: 5,
  },
  {
    product_name: 'Yeston Radeon RX550 2GB GDDR5',
    description: '1071MHz 640processors PCIExpress 3.0 DirectX12 Single Slot',
    price: 129.0,
    stock: 6,
    date_posted: '2019-11-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_11/image.jpg',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE H610M S2H Motherboard',
    description:
      'DDR4 H610 Intel LGA 1700 Micro ATX Motherboard with DDR4, Single M.2, PCIe 4.0, USB 3.2 Gen1, Realtek GbE LAN',
    price: 99.99,
    stock: 6,
    date_posted: '2021-03-01',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_12/image.jpg',
    category_id: 4,
  },
  {
    product_name: 'AMD RYZEN 5 3600',
    description:
      '6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W 100-100000031BOX Desktop Processor',
    price: 164.99,
    stock: 13,
    date_posted: '2021-05-13',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_13/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'ASUS ROG Strix Z690-E Gaming Motherboard',
    description:
      'Intel 12th Gen ATX Gaming Motherboard- PCIe 5.0, DDR5, 18+1 Power Stages, 2.5 Gb LAN, Bluetooth v5.2',
    price: 429.99,
    stock: 4,
    date_posted: '2022-04-20',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_14/image.jpg',
    category_id: 4,
  },
  {
    product_name: 'Intel Core i7-10700KF',
    description:
      'Core i7 10th Gen Comet Lake 8-Core 3.8 GHz LGA 1200 125W Desktop Processor',
    price: 289.96,
    stock: 11,
    date_posted: '2021-05-13',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll300/19-118-128-01.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i5-11400F',
    description:
      'Core i5 11th Gen Rocket Lake 6-Core 2.6 GHz LGA 1200 65W Desktop Processor',
    price: 151.99,
    stock: 5,
    date_posted: '2021-05-13',
    product_img:
      'https://cdn11.bigcommerce.com/s-3kliogr9m/images/stencil/1280x1280/products/382/1415/Box_T4_i5F_11th_H93494_Ang03_Left_V01_HIGHRES_SIMPLIF__91936.1635983492.jpg?c=1',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i5-12600KF',
    description:
      'Core i5 12th Gen Alder Lake 10-Core (6P+4E) 3.7 GHz LGA 1700 125W Desktop Processor',
    price: 259.99,
    stock: 16,
    date_posted: '2021-05-13',
    product_img:
      'https://media.ldlc.com/r1600/ld/products/00/05/90/01/LD0005900180_1.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i7-12700KF',
    description:
      'Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W Desktop Processor',
    price: 377.98,
    stock: 9,
    date_posted: '2021-05-13',
    product_img:
      'https://www.tradeinn.com/f/13845/138457079/intel-i7-12700kf-box-processor.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i9-10900K',
    description:
      '6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W 100-100000031BOX Desktop Processor',
    price: 389.88,
    stock: 4,
    date_posted: '2021-05-13',
    product_img:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6411/6411492cv11d.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i3-12100',
    description:
      'Core i3 12th Gen Alder Lake Quad-Core 3.3 GHz LGA 1700 Processor 60W Intel UHD Graphics 730 Desktop Processor',
    price: 129.98,
    stock: 22,
    date_posted: '2021-05-13',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_13/image.jpg',
    category_id: 6,
  },
];

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;
