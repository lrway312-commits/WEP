// الأرشيف الجنائي للمنتجات (The Product Ledger)
// هذا الملف هو المكان الوحيد الذي يحتاج العميل لتحديثه لإضافة صوره الحقيقية.

export const vaultData = {
  rings: {
    title: 'R I N G S',
    subtitle: 'The Circle of Legacy',
    description: 'Masterpieces forged in fire. Each ring carries the weight of a century-old heritage.',
    items: [
      { id: 99, name: 'AI Test Genesis', price: '₺10,000', image: 'https://res.cloudinary.com/dqkrdtjtr/image/upload/v1775765373/test_sync_jewel.png' },
      { id: 1, name: 'Royal Signet Diamond', price: '₺32,000', image: '/images/ring.png' },
      { id: 2, name: 'Obsidian Gold Band', price: '₺18,500', image: '/images/hero.png' },
      { id: 3, name: 'Sultan\'s Heritage', price: '₺24,000', image: '/images/ring.png' },
      { id: 4, name: 'Ottoman Filigree', price: '₺19,200', image: '/images/hero.png' }
    ]
  },
  necklaces: {
    title: 'N E C K L A C E S',
    subtitle: 'Grace Around The Neck',
    description: 'Drape yourself in history. Sculpted with precision, blending Ottoman majesty with modern lines.',
    items: [
      { id: 1, name: 'Sultan Drop Pearl', price: '₺45,000', image: '/images/ottoman.png' },
      { id: 2, name: 'Sapphire Midnight', price: '₺52,000', image: '/images/earrings.png' },
      { id: 3, name: 'Golden Anatolian', price: '₺38,700', image: '/images/bazaar.png' },
      { id: 4, name: 'Emerald Legacy', price: '₺89,000', image: '/images/ottoman.png' }
    ]
  },
  bracelets: {
    title: 'B R A C E L E T S',
    subtitle: 'Woven In Gold',
    description: 'A statement of power on the wrist. Heavy, meaningful, and crafted with obsession.',
    items: [
      { id: 1, name: 'Grand Bazaar Chain', price: '₺22,000', image: '/images/bazaar.png' },
      { id: 2, name: 'Emerald Cuff', price: '₺60,000', image: '/images/ring.png' }
    ]
  },
  earrings: {
    title: 'E A R R I N G S',
    subtitle: 'Whispers of Light',
    description: 'Framing the face with brilliance. Anatolian motifs reborn into sleek contemporary forms.',
    items: [
      { id: 1, name: 'Anatolian Glow Drops', price: '₺14,200', image: '/images/earrings.png' },
      { id: 2, name: 'Diamond Edge Studs', price: '₺28,000', image: '/images/ottoman.png' }
    ]
  }
};
