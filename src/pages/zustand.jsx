import React from "react";

const TestPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-6xl !mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
                {/* Header */}
                <br/> 
<br/>
<br/> 
<br/>
                <div className="mb-16 sm:mb-20 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Zustand Guide
                    </h1>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
                </div>
<br/> 
<br/>
                {/* Introduction Section */}
                <section className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white flex items-center gap-3">
                        <br/> 
<br/>
                        <span className="text-blue-400">✨</span> What is Zustand?
                    </h2>
                    <br/> 
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        Zustand is a small, fast, and scalable state management solution for
                        React. Unlike Redux, it has a minimal API and doesn&apos;t require
                        complex setup or boilerplate code.
                    </p>
                    <br/> 
                    <br/> 
                    <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-6 !sm:p-8 rounded-lg border border-blue-700/50 backdrop-blur-sm">
                        <h3 className="font-bold text-xl mb-4 text-blue-300">⭐ Key Features:</h3>
                        <ul className="grid gap-3 text-gray-200">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                <span>Lightweight (only ~1KB)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                <span>No boilerplate code</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                <span>Doesn&apos;t require providers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                <span>Can be used with TypeScript</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                <span>Built-in persistence support</span>
                            </li>
                        </ul>
                    </div>
                </section>
<br/> 
<br/> 
                {/* Installation Section */}
                <section className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-green-400">📦</span> Installation
                    </h2>
                    <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-sm sm:text-base border border-slate-600 overflow-x-auto">
                        <p>npm install zustand</p>
                    </div>
                </section>
<br/> 
<br/>
                {/* Basic Usage Section */}
                <section className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white flex items-center gap-3">
                        <span className="text-purple-400">⚙️</span> Basic Usage
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-300 mb-4">Create Store:</h3>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
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
                        </div>
                        <div>
                            <p className="text-gray-300 mb-4 text-lg">Use the store in a component:</p>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
                                <pre>{`function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const addBear = useStore((state) => state.addBear)
  return <button onClick={addBear}>Add a bear</button>
}`}</pre>
                            </div>
                        </div>
                    </div>
                </section>
<br/> 
<br/>
                {/* How We Use Zustand Section */}
                <section className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white flex items-center gap-3">
                        <span className="text-yellow-400">🚀</span> How We Use Zustand in Our Project
                    </h2>
<br/> 

                    <div className="space-y-10">
                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">1. Wishlist Store</h3>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
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
<br/> 

                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                                2. Cart Store with Variant Support
                            </h3>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
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
                    </div>
                </section>
<br/> 
<br/>
                {/* Data Management Section */}
                <section className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white flex items-center gap-3">
                        <span className="text-orange-400">📊</span> Data Management & Product Handling
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">1. Product Interface</h3>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
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
<br/> 

                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                                2. Data Structure & Management
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-4">
                                    <span className="text-cyan-400 font-bold text-lg mt-1">→</span>
                                    <span className="text-base leading-relaxed">
                                        <strong className="text-gray-100">Static Data:</strong> Product data is stored in a
                                        static array in the <code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">product.ts</code> file.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-cyan-400 font-bold text-lg mt-1">→</span>
                                    <span className="text-base leading-relaxed">
                                        <strong className="text-gray-100">Categories:</strong> Products are organized by category
                                        (men, women, kids, hotpick).
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-cyan-400 font-bold text-lg mt-1">→</span>
                                    <span className="text-base leading-relaxed">
                                        <strong className="text-gray-100">Variants:</strong> Each product supports multiple
                                        variants (sizes, colors, images).
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-cyan-400 font-bold text-lg mt-1">→</span>
                                    <span className="text-base leading-relaxed">
                                        <strong className="text-gray-100">Price Handling:</strong> Prices are strings parsed when
                                        needed.
                                    </span>
                                </li>
                            </ul>
                        </div>
<br/> 
                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-2xl font-bold mb-6 text-cyan-300">3. State Persistence</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
                                    <span>Cart stored under <code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">'cart-storage'</code></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
                                    <span>Wishlist under <code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">'wishlist-storage'</code></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
                                    <span>Data persists across sessions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
<br/> 
<br/>
                {/* Advanced Features Section */}
                <section className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white flex items-center gap-3">
                        <span className="text-pink-400">🔧</span> Advanced Features We Use
                    </h2>
<br/> 

                    <div className="space-y-6">
                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-cyan-300">1. Persistence</h3>
                            <p className="text-gray-300 mb-4">
                                Using Zustand&apos;s persist middleware:
                            </p>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
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
<br/> 
                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-cyan-300">2. TypeScript Integration</h3>
                            <p className="text-gray-300">
                                Type-safe store definitions using interfaces.
                            </p>
                        </div>
<br/> 
                        <div className="bg-slate-700/50 p-6 sm:p-8 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-cyan-300">3. Computed Values</h3>
                            <p className="text-gray-300 mb-4">
                                Getter functions for derived state:
                            </p>
                            <div className="bg-slate-900/80 text-cyan-300 p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto border border-slate-600">
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
<br/> 
<br/>
                {/* Best Practices Section */}
                <section className="mb-12 bg-gradient-to-br from-slate-800 to-slate-700 p-8 sm:p-10 rounded-xl border border-slate-700 shadow-2xl hover:border-slate-600 transition-all">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white flex items-center gap-3">
                        <span className="text-lime-400">💡</span> Best Practices
                    </h2>
                    <br/> 
<br/>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 bg-slate-700/50 p-4 sm:p-5 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <span className="text-lime-400 font-bold text-lg mt-0.5">✓</span>
                            <span className="text-gray-200">
                                <strong className="text-gray-100">Selective Updates:</strong> Subscribe to only the state
                                slices you need.
                            </span>
                        </li>
                        <li className="flex items-start gap-4 bg-slate-700/50 p-4 sm:p-5 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <span className="text-lime-400 font-bold text-lg mt-0.5">✓</span>
                            <span className="text-gray-200">
                                <strong className="text-gray-100">TypeScript:</strong> Always type your store interfaces.
                            </span>
                        </li>
                        <li className="flex items-start gap-4 bg-slate-700/50 p-4 sm:p-5 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <span className="text-lime-400 font-bold text-lg mt-0.5">✓</span>
                            <span className="text-gray-200">
                                <strong className="text-gray-100">Middleware:</strong> Use persist or devtools wisely.
                            </span>
                        </li>
                        <li className="flex items-start gap-4 bg-slate-700/50 p-4 sm:p-5 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <span className="text-lime-400 font-bold text-lg mt-0.5">✓</span>
                            <span className="text-gray-200">
                                <strong className="text-gray-100">Organization:</strong> Keep related state/actions together.
                            </span>
                        </li>
                        <li className="flex items-start gap-4 bg-slate-700/50 p-4 sm:p-5 rounded-lg border border-slate-600 hover:border-slate-500 transition-all">
                            <span className="text-lime-400 font-bold text-lg mt-0.5">✓</span>
                            <span className="text-gray-200">
                                <strong className="text-gray-100">Computed Values:</strong> Use derived values instead of
                                storing computed data.
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default TestPage;
