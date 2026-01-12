import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function ProducerProfile() {
  return (
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
  );
}
