import { useState } from 'react';
import Header from '@/components/Header';
import ProducerProfile from '@/components/ProducerProfile';
import BeatCatalog from '@/components/BeatCatalog';
import BeatDetails from '@/components/BeatDetails';
import ShoppingCart from '@/components/ShoppingCart';

interface Beat {
  id: number;
  title: string;
  producer: string;
  bpm: number;
  key: string;
  genre: string;
  price: number;
  image: string;
  audio: string;
  rating: number;
  reviews: number;
  sales: number;
}

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const mockBeats: Beat[] = [
  {
    id: 1,
    title: "Midnight Dreams",
    producer: "PRODBYWAVE",
    bpm: 140,
    key: "C Minor",
    genre: "Trap",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
    audio: "",
    rating: 4.8,
    reviews: 124,
    sales: 450
  },
  {
    id: 2,
    title: "Urban Waves",
    producer: "PRODBYWAVE",
    bpm: 128,
    key: "G Major",
    genre: "Hip-Hop",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400",
    audio: "",
    rating: 4.9,
    reviews: 89,
    sales: 320
  },
  {
    id: 3,
    title: "Neon Lights",
    producer: "PRODBYWAVE",
    bpm: 135,
    key: "A Minor",
    genre: "Drill",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400",
    audio: "",
    rating: 5.0,
    reviews: 201,
    sales: 780
  },
  {
    id: 4,
    title: "Lost in Space",
    producer: "PRODBYWAVE",
    bpm: 145,
    key: "D Minor",
    genre: "Trap",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    audio: "",
    rating: 4.7,
    reviews: 67,
    sales: 210
  },
  {
    id: 5,
    title: "Crystal Skies",
    producer: "PRODBYWAVE",
    bpm: 130,
    key: "E Minor",
    genre: "R&B",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
    audio: "",
    rating: 4.6,
    reviews: 95,
    sales: 340
  },
  {
    id: 6,
    title: "Future Bounce",
    producer: "PRODBYWAVE",
    bpm: 150,
    key: "F# Minor",
    genre: "Trap",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
    audio: "",
    rating: 4.9,
    reviews: 156,
    sales: 590
  }
];

const mockReviews: Review[] = [
  {
    id: 1,
    author: "MC Flame",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=flame",
    rating: 5,
    comment: "Absolutely fire beat! The mix is clean and the bounce is crazy. Already recorded two tracks on it.",
    date: "2 days ago"
  },
  {
    id: 2,
    author: "LilDrip",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=drip",
    rating: 5,
    comment: "PRODBYWAVE never misses. This is exactly what I was looking for my album.",
    date: "1 week ago"
  },
  {
    id: 3,
    author: "SoundWave23",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wave23",
    rating: 4,
    comment: "Great quality production. Would love to see more like this!",
    date: "2 weeks ago"
  }
];

export default function Index() {
  const [currentBeat, setCurrentBeat] = useState<number | null>(null);
  const [cart, setCart] = useState<number[]>([]);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);

  const togglePlay = (beatId: number) => {
    setCurrentBeat(currentBeat === beatId ? null : beatId);
  };

  const addToCart = (beatId: number) => {
    if (!cart.includes(beatId)) {
      setCart([...cart, beatId]);
    }
  };

  const removeFromCart = (beatId: number) => {
    setCart(cart.filter(id => id !== beatId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Header cartCount={cart.length} />
      <ProducerProfile />

      <main className="container py-12 px-4">
        {!selectedBeat ? (
          <BeatCatalog
            beats={mockBeats}
            currentBeat={currentBeat}
            cart={cart}
            onTogglePlay={togglePlay}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            onSelectBeat={setSelectedBeat}
          />
        ) : (
          <BeatDetails
            beat={selectedBeat}
            reviews={mockReviews}
            onClose={() => setSelectedBeat(null)}
          />
        )}
      </main>

      <ShoppingCart
        cart={cart}
        beats={mockBeats}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />

      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container text-center text-muted-foreground">
          <p className="mb-2">© 2024 BeatStore. All beats protected by copyright.</p>
          <p className="text-sm">Premium beats for serious artists.</p>
        </div>
      </footer>
    </div>
  );
}
