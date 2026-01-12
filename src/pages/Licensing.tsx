import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const licenses = [
  {
    id: 1,
    name: "Basic License",
    price: 29.99,
    popular: false,
    features: [
      "MP3 Download (High Quality)",
      "Non-Profit Performances",
      "Up to 2,000 Streams",
      "Up to 500 Music Video Views",
      "1 Music Video",
      "Tagged Beat (Producer Tag)",
      "Distribution up to 2,000 copies"
    ],
    restrictions: [
      "No Radio Broadcasting",
      "No TV/Film Usage",
      "Credit Required"
    ]
  },
  {
    id: 2,
    name: "Premium License",
    price: 99.99,
    popular: true,
    features: [
      "WAV + MP3 Download (Untagged)",
      "Profit & Non-Profit Performances",
      "Up to 100,000 Streams",
      "Unlimited Music Videos",
      "Up to 5 Music Videos",
      "Radio Broadcasting (2 Stations)",
      "Distribution up to 10,000 copies",
      "Priority Support"
    ],
    restrictions: [
      "No Exclusive Rights",
      "Credit Required"
    ]
  },
  {
    id: 3,
    name: "Unlimited License",
    price: 299.99,
    popular: false,
    features: [
      "WAV + Trackout/Stems (Untagged)",
      "Unlimited Streams & Downloads",
      "Unlimited Music Videos",
      "Unlimited Radio Broadcasting",
      "TV Shows, Films & Commercials",
      "Unlimited Distribution",
      "Priority Support",
      "Future Updates Included"
    ],
    restrictions: [
      "Non-Exclusive Rights",
      "Credit Required"
    ]
  },
  {
    id: 4,
    name: "Exclusive Rights",
    price: 2999.99,
    popular: false,
    features: [
      "WAV + Trackout/Stems (Untagged)",
      "100% Ownership of Master Recording",
      "Unlimited Everything",
      "Full Copyright Transfer",
      "Original Beat Removed from Store",
      "No Credit Required",
      "Producer Collaboration Available",
      "Lifetime Support"
    ],
    restrictions: []
  }
];

export default function Licensing() {
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
          
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Back to Store
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 text-center border-b border-border/40">
        <div className="container max-w-4xl mx-auto">
          <Badge className="mb-4">Licensing</Badge>
          <h1 className="text-5xl font-bold mb-4">
            Choose Your License
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect license for your project. All licenses include professional quality beats and instant delivery.
          </p>
        </div>
      </section>

      <main className="container py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {licenses.map((license) => (
            <Card 
              key={license.id}
              className={`relative p-6 bg-card border-border transition-all duration-300 hover:scale-105 ${
                license.popular ? 'border-primary border-2 shadow-xl shadow-primary/20' : ''
              }`}
            >
              {license.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{license.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">${license.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Included:
                  </p>
                  <ul className="space-y-2">
                    {license.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {license.restrictions.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Icon name="X" size={16} className="text-destructive" />
                      Restrictions:
                    </p>
                    <ul className="space-y-2">
                      {license.restrictions.map((restriction, index) => (
                        <li key={index} className="text-sm flex items-start gap-2 text-muted-foreground">
                          <Icon name="X" size={14} className="text-destructive mt-0.5 flex-shrink-0" />
                          <span>{restriction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button 
                className="w-full" 
                size="lg"
                variant={license.popular ? "default" : "outline"}
              >
                Select License
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border">
          <h2 className="text-3xl font-bold mb-6">Licensing FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-primary" />
                What's the difference between licenses?
              </h3>
              <p className="text-muted-foreground pl-7">
                Each license tier offers different usage rights and distribution limits. Higher tiers provide more streams, videos, and commercial usage rights. The Exclusive license gives you 100% ownership and removes the beat from our store.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-primary" />
                Can I upgrade my license later?
              </h3>
              <p className="text-muted-foreground pl-7">
                Yes! You can upgrade any license at any time. Just pay the difference between your current license and the new one. Contact us for upgrade assistance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-primary" />
                Do I need to credit the producer?
              </h3>
              <p className="text-muted-foreground pl-7">
                Yes, for all non-exclusive licenses (Basic, Premium, Unlimited) you must credit "Produced by PRODBYWAVE" in your song title or description. Only the Exclusive license removes this requirement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-primary" />
                What are Trackout/Stems?
              </h3>
              <p className="text-muted-foreground pl-7">
                Trackouts are separated audio files for each instrument (drums, bass, melody, etc.). They give you complete control over the mix, allowing your engineer to adjust levels, add effects, and create a professional final product.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-primary" />
                What happens if I exceed my license limits?
              </h3>
              <p className="text-muted-foreground pl-7">
                If your song exceeds the stream/distribution limits of your license, you'll need to upgrade to a higher tier. We monitor usage and will contact you if you're approaching your limits. Upgrade anytime to avoid interruptions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-primary" />
                How do I receive my files?
              </h3>
              <p className="text-muted-foreground pl-7">
                After purchase, you'll receive instant download links via email. Files are delivered in high-quality formats based on your license (MP3, WAV, or Trackouts). You can re-download anytime from your account.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Icon name="Mail" size={20} className="text-primary" />
              Need Custom Licensing?
            </h3>
            <p className="text-muted-foreground mb-4">
              Looking for something specific? We offer custom licensing agreements for major labels, TV/Film productions, and special projects. Contact us to discuss your needs.
            </p>
            <Button>
              <Icon name="Mail" size={16} className="mr-2" />
              Contact Us
            </Button>
          </div>
        </Card>
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
