import { Button } from '@/components/ui/button';
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

interface ShoppingCartProps {
  cart: number[];
  beats: Beat[];
  onRemoveFromCart: (beatId: number) => void;
  onClearCart: () => void;
}

export default function ShoppingCart({ cart, beats, onRemoveFromCart, onClearCart }: ShoppingCartProps) {
  if (cart.length === 0) return null;

  const totalPrice = cart.reduce((sum, id) => {
    const beat = beats.find(b => b.id === id);
    return sum + (beat?.price || 0);
  }, 0);

  return (
    <section className="fixed bottom-6 right-6 w-96 p-6 bg-card border border-border rounded-lg shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Icon name="ShoppingCart" size={20} />
          Cart ({cart.length})
        </h3>
        <Button variant="ghost" size="sm" onClick={onClearCart}>
          Clear
        </Button>
      </div>
      
      <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
        {cart.map(id => {
          const beat = beats.find(b => b.id === id);
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
                onClick={() => onRemoveFromCart(id)}
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
  );
}
