import React from "react";

const TestPage = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Zustand Guide</h1>

                {/* Introduction Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">What is Zustand?</h2>
                    <p className="text-gray-700 mb-4">
                        Zustand is a small, fast, and scalable state management solution for
                        React. Unlike Redux, it has a minimal API and doesn&apos;t require
                        complex setup or boilerplate code.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-md">
                        <h3 className="font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Lightweight (only ~1KB)</li>
                            <li>No boilerplate code</li>
                            <li>Doesn&apos;t require providers</li>
                            <li>Can be used with TypeScript</li>
                            <li>Built-in persistence support</li>
                        </ul>
                    </div>
                </section>

                {/* Installation Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono">
                        <p>npm install zustand</p>
                    </div>
                </section>

                {/* Basic Usage Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono mb-4">
                        <pre>{`import { create } from 'zustand'

interface BearStore {
  bears: number
  addBear: () => void
}

const useStore = create<BearStore>((set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
}))`}</pre>
                    </div>
                    <p className="text-gray-700">To use the store in a component:</p>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono mt-4">
                        <pre>{`function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const addBear = useStore((state) => state.addBear)
  return <button onClick={addBear}>Add a bear</button>
}`}</pre>
                    </div>
                </section>

                {/* How We Use Zustand Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        How We Use Zustand in Our Project
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">1. Wishlist Store</h3>
                        <div className="bg-gray-900 text-white p-4 rounded-md font-mono">
                            <pre>{`interface WishlistStore {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlistItems: [],
      addToWishlist: (product) => {
        const state = get();
        if (!state.isInWishlist(product.id)) {
          set((state) => ({
            wishlistItems: [...state.wishlistItems, product],
          }));
        }
      },
      // ... other methods
    }),
    { name: 'wishlist-storage' }
  )
)`}</pre>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">
                            2. Cart Store with Variant Support
                        </h3>
                        <div className="bg-gray-900 text-white p-4 rounded-md font-mono overflow-x-auto">
                            <pre>{`interface CartItem extends Product {
  quantity: number;
  size?: string;
  color?: string;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: number, size?: string, color?: string) => void;
  updateQuantity: (productId: number, quantity: number, size?: string, color?: string) => void;
  isInCart: (productId: number, size?: string, color?: string) => boolean;
  getCartItemQuantity: (productId: number, size?: string, color?: string) => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}`}</pre>
                        </div>
                    </div>
                </section>

                {/* Data Management Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        Data Management & Product Handling
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">1. Product Interface</h3>
                            <div className="bg-gray-900 text-white p-4 rounded-md font-mono">
                                <pre>{`export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  description?: string;
  category: "men" | "women" | "kids" | "hotpick";
  tabs?: string[];
  oldPrice?: string;
  discount?: string;
  sizes: string[];
  images?: string[];
  colorAvai: string[]; // valid CSS color names
}`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                2. Data Structure & Management
                            </h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>Static Data:</strong> Product data is stored in a
                                    static array in the <code>product.ts</code> file.
                                </li>
                                <li>
                                    <strong>Categories:</strong> Products are organized by category
                                    (men, women, kids, hotpick).
                                </li>
                                <li>
                                    <strong>Variants:</strong> Each product supports multiple
                                    variants (sizes, colors, images).
                                </li>
                                <li>
                                    <strong>Price Handling:</strong> Prices are strings parsed when
                                    needed.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">3. State Persistence</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Cart stored under 'cart-storage'</li>
                                <li>Wishlist under 'wishlist-storage'</li>
                                <li>Data persists across sessions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Advanced Features Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Advanced Features We Use</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. Persistence</h3>
                            <p className="text-gray-700">
                                Using Zustand&apos;s persist middleware:
                            </p>
                            <div className="bg-gray-900 text-white p-4 rounded-md font-mono mt-2">
                                <pre>{`import { persist } from 'zustand/middleware'

create()(
  persist(
    (set, get) => ({
      // store data
    }),
    { name: 'storage-name' }
  )
)`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. TypeScript Integration</h3>
                            <p className="text-gray-700">
                                Type-safe store definitions using interfaces.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. Computed Values</h3>
                            <p className="text-gray-700">
                                Getter functions for derived state:
                            </p>
                            <div className="bg-gray-900 text-white p-4 rounded-md font-mono mt-2">
                                <pre>{`getTotalPrice: () => {
  const state = get();
  return state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}`}</pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Practices Section */}
                <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>
                            <strong>Selective Updates:</strong> Subscribe to only the state
                            slices you need.
                        </li>
                        <li>
                            <strong>TypeScript:</strong> Always type your store interfaces.
                        </li>
                        <li>
                            <strong>Middleware:</strong> Use persist or devtools wisely.
                        </li>
                        <li>
                            <strong>Organization:</strong> Keep related state/actions together.
                        </li>
                        <li>
                            <strong>Computed Values:</strong> Use derived values instead of
                            storing computed data.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default TestPage;
