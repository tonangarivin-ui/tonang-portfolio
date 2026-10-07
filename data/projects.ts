export interface ProjectPreviewDetail {
  tagline: string;
  badge: string;
  sampleItems: {
    title: string;
    detail: string;
    tag: string;
  }[];
  highlightMetricLabel: string;
  highlightMetricValue: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  status: 'Live' | 'Ongoing' | 'Ongoing / Prototype';
  url: string;
  displayUrl: string;
  role: string;
  description: string;
  techTags: string[];
  preview: ProjectPreviewDetail;
}

export const PROJECTS: Project[] = [
  {
    id: 'sugar-bliss',
    title: 'Sugar Bliss Bakery',
    slug: 'sugar-bliss-bakery',
    status: 'Live',
    url: 'https://sugar-bliss-bakery2.vercel.app/',
    displayUrl: 'sugar-bliss-bakery2.vercel.app',
    role: 'Web Design & Frontend Development',
    description:
      'Website toko roti artisan dengan katalog produk, informasi pemesanan, dan tata letak responsif untuk pelanggan mobile.',
    techTags: ['Web Design', 'Frontend Development', 'Responsive Layout'],
    preview: {
      tagline: 'Roti Artisan dan Pastry Segar Dipanggang Setiap Hari',
      badge: 'Artisan Bakery Catalog',
      sampleItems: [
        {
          title: 'Sourdough Batard',
          detail: 'Fermentasi alami 24 jam dengan kerak renyah',
          tag: 'Menu Utama',
        },
        {
          title: 'Croissant Mentega',
          detail: 'Lapisan mentega Prancis berkualitas tinggi',
          tag: 'Pastry',
        },
        {
          title: 'Cinnamon Brioche Roll',
          detail: 'Tekstur lembut dengan kayu manis harum',
          tag: 'Favorit',
        },
      ],
      highlightMetricLabel: 'Metode Pengolahan',
      highlightMetricValue: 'Batch Kecil Harian',
    },
  },
  {
    id: 'vunk-movie',
    title: 'VUNK Movie',
    slug: 'vunk-movie',
    status: 'Ongoing',
    url: 'https://movie.vunk.my.id',
    displayUrl: 'movie.vunk.my.id',
    role: 'Full-Stack Web Development & Prototyping',
    description:
      'Eksplorasi katalog film berbasis web dengan antarmuka pencarian dan kurasi judul film yang ringan.',
    techTags: ['Web Development', 'Search Interface', 'Curation'],
    preview: {
      tagline: 'Katalog Sinema Mandiri dan Kurasi Film Pilihan',
      badge: 'Cinema Exploration',
      sampleItems: [
        {
          title: 'Sorotan Pekan Ini',
          detail: 'Kurasi film independen dengan sinematografi kuat',
          tag: 'Pilihan Editor',
        },
        {
          title: 'Arsip Sinema Asia',
          detail: 'Koleksi narasi sinematik kawasan regional',
          tag: 'Arsip',
        },
        {
          title: 'Dokumenter Pendek',
          detail: 'Kisah nyata yang dirangkum dalam durasi padat',
          tag: 'Dokumenter',
        },
      ],
      highlightMetricLabel: 'Pendekatan UI',
      highlightMetricValue: 'Pencarian Instan',
    },
  },
  {
    id: 'vunk-shop',
    title: 'VUNK Shop',
    slug: 'vunk-shop',
    status: 'Ongoing / Prototype',
    url: 'https://shop.vunk.my.id',
    displayUrl: 'shop.vunk.my.id',
    role: 'Product Design & Prototyping',
    description:
      'Prototype antarmuka e-commerce modern dengan alur penjelajahan katalog dan tata letak checkout yang intuitif.',
    techTags: ['Product Design', 'Prototype', 'User Flow'],
    preview: {
      tagline: 'Eksplorasi Antarmuka Toko Digital Minimalis',
      badge: 'Commerce Prototype',
      sampleItems: [
        {
          title: 'Katalog Barang Esensial',
          detail: 'Navigasi produk terarah tanpa distraksi visual',
          tag: 'Struktur Grid',
        },
        {
          title: 'Panel Detail Produk',
          detail: 'Informasi spesifikasi jelas dan alur varian rapi',
          tag: 'Komponen UI',
        },
        {
          title: 'Alur Checkout Cepat',
          detail: 'Tahapan ringkas untuk meminimalkan beban pengguna',
          tag: 'Alur Transaksi',
        },
      ],
      highlightMetricLabel: 'Status Rancang Bangun',
      highlightMetricValue: 'Tahap Prototype Fungsional',
    },
  },
];
