import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

interface BeatCatalogProps {
  beats: Beat[];
  currentBeat: number | null;
  cart: number[];
  onTogglePlay: (beatId: number) => void;
  onAddToCart: (beatId: number) => void;
  onRemoveFromCart: (beatId: number) => void;
  onSelectBeat: (beat: Beat) => void;
}

export default function BeatCatalog({
  beats,
  currentBeat,
  cart,
  onTogglePlay,
  onAddToCart,
  onRemoveFromCart,
  onSelectBeat
}: BeatCatalogProps) {
  return (
    <div>
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
        {beats.map((beat) => (
          <Card 
            key={beat.id} 
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card cursor-pointer group"
            onClick={() => onSelectBeat(beat)}
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
                  onTogglePlay(beat.id);
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
                    cart.includes(beat.id) ? onRemoveFromCart(beat.id) : onAddToCart(beat.id);
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
    </div>
  );
}
