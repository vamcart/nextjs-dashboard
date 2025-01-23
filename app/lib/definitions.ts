// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type PokemonData = {
  id: string;
  stock: number;
  rating: number;
  name: string;
  description: string;
  price: Price;
  isBestSeller: boolean;
  leadTime: number;
  image?: string;
  imageBlur?: string;
  discount?: Discount;
  usedPrice?: UsedPrice;
};

type Price = {
  amount: number;
  currency: Currency;
  scale: number;
};

type Currency = {
  code: string;
  base: number;
  exponent: number;
};

type Discount = {
  percent: number;
  expires?: number;
};

type UsedPrice = {
  amount: number;
  currency: Currency;
  scale: number;
};

type MinimalLink = {
  name: string;
  url: string;
};

type Sprites = {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: unknown;
    "official-artwork": unknown;
  };
  versions: {
    "generation-i": {
      "red-blue": unknown;
      yellow: unknown;
    };
    "generation-ii": {
      crystal: unknown;
      gold: unknown;
      silver: unknown;
    };
    "generation-iii": {
      emerald: unknown;
      "firered-leafgreen": unknown;
      "ruby-sapphire": unknown;
    };
    "generation-iv": {
      "diamond-pearl": unknown;
      "heartgold-soulsilver": unknown;
      platinum: unknown;
    };
    "generation-v": {
      "black-white": unknown;
    };
    "generation-vi": {
      "omegaruby-alphsapphire": unknown;
      "x-y": unknown;
    };
    "generation-vii": {
      icons: unknown;
      "ultra-sun-ultra-moon": unknown;
    };
    "generation-viii": {
      icons: unknown;
    };
  };
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: MinimalLink;
  }[];
  forms: MinimalLink[];
  game_indices: {
    game_index: number;
    version: MinimalLink;
  }[];
  held_items: {
    item: MinimalLink;
    version_details: {
      rarity: number;
      version: MinimalLink;
    };
  }[];
  location_area_encounters: string;
  moves: {
    move: MinimalLink;
    version_group_details: {
      level_learned_at: number;
      version_group: MinimalLink;
      move_learn_method: MinimalLink;
    }[];
  }[];
  species: MinimalLink;
  sprites: Sprites;
  stats: {
    base_stat: number;
    effort: number;
    stat: MinimalLink;
  };
  types: {
    slot: number;
    type: MinimalLink;
  };
};

export type PokemonPageResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};
