import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
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
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/admin'}>
            <Icon name="Shield" size={16} className="mr-2" />
            Admin
          </Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
}