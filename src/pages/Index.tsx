import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

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

  const totalPrice = cart.reduce((sum, id) => {
    const beat = mockBeats.find(b => b.id === id);
    return sum + (beat?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background dark">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Music" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">BeatStore</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium transition-colors hover:text-primary">
              Catalog
            </button>
            <button className="text-sm font-medium transition-colors hover:text-primary">
              Producers
            </button>
            <button className="text-sm font-medium transition-colors hover:text-primary">
              Top Beats
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                  {cart.length}
                </span>
              )}
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 text-center border-b border-border/40">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Avatar className="h-24 w-24 border-4 border-primary">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=prodbywave" />
              <AvatarFallback>PW</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PRODBYWAVE
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Premium Trap & Hip-Hop Producer • 2.5K+ Sales • Platinum Certified
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Star" size={18} className="text-primary fill-primary" />
              <span className="font-semibold">4.8 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Music" size={18} className="text-primary" />
              <span className="font-semibold">156 Beats</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={18} className="text-primary" />
              <span className="font-semibold">890+ Clients</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container py-12 px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Beats</h2>
            <p className="text-muted-foreground">Browse our premium collection</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="ArrowUpDown" size={16} className="mr-2" />
              Sort
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockBeats.map((beat) => (
            <Card 
              key={beat.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card cursor-pointer group"
              onClick={() => setSelectedBeat(beat)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={beat.image} 
                  alt={beat.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(beat.id);
                  }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                    <Icon 
                      name={currentBeat === beat.id ? "Pause" : "Play"} 
                      size={28} 
                      className="text-primary-foreground ml-1"
                    />
                  </div>
                </button>
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-primary/90 backdrop-blur-sm">{beat.genre}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{beat.rating}</span>
                      <span className="text-white/60">({beat.reviews})</span>
                    </div>
                    <div className="text-sm text-white/80">
                      {beat.sales} sales
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {beat.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="Activity" size={14} />
                    {beat.bpm} BPM
                  </span>
                  <span>•</span>
                  <span>{beat.key}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${beat.price}
                  </span>
                  <Button 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      cart.includes(beat.id) ? removeFromCart(beat.id) : addToCart(beat.id);
                    }}
                    variant={cart.includes(beat.id) ? "secondary" : "default"}
                  >
                    <Icon name={cart.includes(beat.id) ? "Check" : "ShoppingCart"} size={16} className="mr-2" />
                    {cart.includes(beat.id) ? "In Cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedBeat && (
          <section className="mb-12 p-8 border border-border rounded-lg bg-card">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedBeat(null)}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Back to catalog
            </Button>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={selectedBeat.image} 
                  alt={selectedBeat.title}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div className="flex gap-2">
                  <Button className="flex-1" size="lg">
                    <Icon name="Play" size={20} className="mr-2" />
                    Play Preview
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedBeat.title}</h2>
                <p className="text-muted-foreground mb-6">by {selectedBeat.producer}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 border border-border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">BPM</div>
                    <div className="text-xl font-semibold">{selectedBeat.bpm}</div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Key</div>
                    <div className="text-xl font-semibold">{selectedBeat.key}</div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Genre</div>
                    <div className="text-xl font-semibold">{selectedBeat.genre}</div>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Sales</div>
                    <div className="text-xl font-semibold">{selectedBeat.sales}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-2xl font-bold">{selectedBeat.rating}</span>
                    <span className="text-muted-foreground">({selectedBeat.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ${selectedBeat.price}
                  </span>
                  <Button size="lg">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Purchase License
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold">{review.author}</span>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Icon 
                                key={i}
                                name="Star" 
                                size={14} 
                                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {cart.length > 0 && (
          <section className="fixed bottom-6 right-6 w-96 p-6 bg-card border border-border rounded-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Cart ({cart.length})
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setCart([])}>
                Clear
              </Button>
            </div>
            
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {cart.map(id => {
                const beat = mockBeats.find(b => b.id === id);
                if (!beat) return null;
                return (
                  <div key={id} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{beat.title}</div>
                      <div className="text-xs text-muted-foreground">${beat.price}</div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => removeFromCart(id)}
                    >
                      <Icon name="X" size={14} />
                    </Button>
                  </div>
                );
              })}
            </div>
            
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Checkout
              </Button>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container text-center text-muted-foreground">
          <p className="mb-2">© 2024 BeatStore. All beats protected by copyright.</p>
          <p className="text-sm">Premium beats for serious artists.</p>
        </div>
      </footer>
    </div>
  );
}
