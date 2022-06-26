const { Products } = require('../models');

const productsData = [
    {
        product_name: 'NZXT H510i',
        description: 'Compact ATX mid-tower PC gaming case',
        price: 98.99,
        stock: 4,
        category_id: 3,
        date_posted: 2021-06-01,
        product_img: 'https://nzxt.com/assets/cms/34299/1617971513-h510i-2020-white-black-kraken-x-system.png?fit=max&fm=jpg&w=1000'
    },
    {
        product_name: 'ASUS TUF Gaming GeForce RTX 3070 Ti 8GB GDDR6X PCI Express 4.0',
        description: '8GB 256-Bit GDDR6X',
        price: 699.00,
        stock: 8,
        category_id: 2,
        date_posted: 2022-03-25,
        product_img: 'https://dlcdnwebimgs.asus.com/gain/834c6831-d2a4-480f-9e6a-e12053f32ca2/'
    },
    {
        product_name: 'Z-EDGE UG27 27in 1080P Monitor',
        description: '200Hz 1ms Curved Gaming Monitor, FreeSync, HDR10 compatible, 350cd/m², with RGB Light, Ultra-Slim Bezel, DisplayPort x2, HDMI x2, Built-in Speakers',
        price: 199.50,
        stock: 2,
        category_id: 1,
        date_posted: 2021-02-21,
        product_img: 'https://c1.neweggimages.com/ProductImage/AT2ES220424A13Sq.jpg'
    },
    {
        product_name: 'X79 Motherboard LGA2011',
        description: 'MATX USB3.0 SATA3 PCI-E NVME M.2 SSD X79 LGA 2011 Motherbboard 4 Channel DDR3 Up to 64GB',
        price: 114.99,
        stock: 12,
        category_id: 4,
        date_posted: 2020-01-13,
        product_img: 'https://c1.neweggimages.com/ProductImage/B601S2203151yMkf.jpg'
    },
    {
        product_name: 'SAMSUNG 870 QVO Series',
        description: '8TB SATA III Samsung 4-bit MLC V-NAND Internal Solid State Drive',
        price: 739.95,
        stock: 2,
        category_id: 5,
        date_posted: 2022-06-23,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-784-V01.jpg'
    },
    {
        product_name: 'AMD Ryzen 7 5700X',
        description: 'Ryzen 7 5000 Series 8-Core Socket AM4 65W Desktop Processor',
        price: 286.98,
        stock: 31,
        category_id: 6,
        date_posted: 2022-05-01,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-735-V01.jpg'
    },
    {
        product_name: 'Rosewill ATX Mid Tower Gaming PC Computer Case',
        description: 'Aura Sync Compatible Dual Ring RGB LED Fans, Top Mount PSU & HDD/SSD, Tempered Glass & Steel',
        price: 79.98,
        stock: 15,
        category_id: 3,
        date_posted: 2022-03-21,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/11-147-283-V01.jpg'
    },
    {
        product_name: 'Intel Pentium Gold G6400',
        description: 'Pentium Gold Comet Lake Dual-Core 4.0 GHz LGA 1200 58W Intel UHD Graphics 610 Desktop Processor',
        price: 59.33,
        stock: 2,
        category_id: 6,
        date_posted: 2018-03-21,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/A2W0S201117kN6Ok.jpg'
    },
    {
        product_name: 'ASUS TUF Gaming VG24VQ 24in Monitor',
        description: 'Full HD 1920 x 1080 1ms MPRT 144Hz 2 x HDMI, DisplayPort AMD FreeSync Asus Eye Care with Ultra Low-Blue Light & Flicker-Free Backlit LED Height Adjustable Curved Gaming Monitor',
        price: 189.99,
        stock: 21,
        category_id: 1,
        date_posted: 2020-12-17,
        product_img: 'https://c1.neweggimages.com/ProductImage/24-281-027-S01.jpg'
    },
    {
        product_name: 'Seagate Desktop HDD ST2000DM001 2TB',
        description: '64MB Cache SATA 6.0Gb/s 3.5" Internal Hard Drive Bare Drive',
        price: 54.00,
        stock: 16,
        category_id: 5,
        date_posted: 2020-01-21,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/22-148-834-07.jpg'
    },
    {
        product_name: 'Yeston Radeon RX550 2GB GDDR5',
        description: '1071MHz 640processors PCIExpress 3.0 DirectX12 Single Slot',
        price: 129.00,
        stock: 6,
        category_id: 2,
        date_posted: 2019-11-21,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/AZUES210824qhks6.jpg'
    },
    {
        product_name: 'GIGABYTE H610M S2H Motherboard',
        description: 'DDR4 H610 Intel LGA 1700 Micro ATX Motherboard with DDR4, Single M.2, PCIe 4.0, USB 3.2 Gen1, Realtek GbE LAN',
        price: 99.99,
        stock: 6,
        category_id: 4,
        date_posted: 2021-03-01,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-371-01.jpg'
    },
    {
        product_name: 'AMD RYZEN 5 3600',
        description: '6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W 100-100000031BOX Desktop Processor',
        price: 164.99,
        stock: 13,
        category_id: 6,
        date_posted: 2021-05-13,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V01.jpg'
    },
    {
        product_name: 'ASUS ROG Strix Z690-E Gaming Motherboard',
        description: 'Intel 12th Gen ATX Gaming Motherboard- PCIe 5.0, DDR5, 18+1 Power Stages, 2.5 Gb LAN, Bluetooth v5.2',
        price: 429.99,
        stock: 4,
        category_id: 4,
        date_posted: 2022-04-20,
        product_img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-512-V01.jpg'
    },
]

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;