import { Button } from '@/components/ui/button';
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

interface BeatDetailsProps {
  beat: Beat;
  reviews: Review[];
  onClose: () => void;
}

export default function BeatDetails({ beat, reviews, onClose }: BeatDetailsProps) {
  return (
    <section className="mb-12 p-8 border border-border rounded-lg bg-card">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onClose}
        className="mb-4"
      >
        <Icon name="ArrowLeft" size={16} className="mr-2" />
        Back to catalog
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={beat.image} 
            alt={beat.title}
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
          <h2 className="text-3xl font-bold mb-2">{beat.title}</h2>
          <p className="text-muted-foreground mb-6">by {beat.producer}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-3 border border-border rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">BPM</div>
              <div className="text-xl font-semibold">{beat.bpm}</div>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Key</div>
              <div className="text-xl font-semibold">{beat.key}</div>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Genre</div>
              <div className="text-xl font-semibold">{beat.genre}</div>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Sales</div>
              <div className="text-xl font-semibold">{beat.sales}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold">{beat.rating}</span>
              <span className="text-muted-foreground">({beat.reviews} reviews)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg mb-6">
            <span className="text-3xl font-bold text-primary">
              ${beat.price}
            </span>
            <Button size="lg">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Purchase License
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Customer Reviews</h3>
            {reviews.map((review) => (
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
  );
}
