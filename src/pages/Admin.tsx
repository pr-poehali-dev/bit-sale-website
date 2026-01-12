import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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

const initialBeats: Beat[] = [
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
  }
];

export default function Admin() {
  const [beats, setBeats] = useState<Beat[]>(initialBeats);
  const [editingBeat, setEditingBeat] = useState<Beat | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Beat>>({
    title: '',
    producer: 'PRODBYWAVE',
    bpm: 140,
    key: 'C Minor',
    genre: 'Trap',
    price: 29.99,
    image: '',
    audio: '',
    rating: 0,
    reviews: 0,
    sales: 0
  });

  const handleInputChange = (field: keyof Beat, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (editingBeat) {
      setBeats(beats.map(beat => 
        beat.id === editingBeat.id 
          ? { ...beat, ...formData } as Beat
          : beat
      ));
    } else {
      const newBeat: Beat = {
        id: Math.max(...beats.map(b => b.id)) + 1,
        title: formData.title || '',
        producer: formData.producer || 'PRODBYWAVE',
        bpm: formData.bpm || 140,
        key: formData.key || 'C Minor',
        genre: formData.genre || 'Trap',
        price: formData.price || 29.99,
        image: formData.image || 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
        audio: formData.audio || '',
        rating: formData.rating || 0,
        reviews: formData.reviews || 0,
        sales: formData.sales || 0
      };
      setBeats([...beats, newBeat]);
    }
    resetForm();
  };

  const handleEdit = (beat: Beat) => {
    setEditingBeat(beat);
    setFormData(beat);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setBeats(beats.filter(beat => beat.id !== id));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      producer: 'PRODBYWAVE',
      bpm: 140,
      key: 'C Minor',
      genre: 'Trap',
      price: 29.99,
      image: '',
      audio: '',
      rating: 0,
      reviews: 0,
      sales: 0
    });
    setEditingBeat(null);
    setIsDialogOpen(false);
  };

  const totalRevenue = beats.reduce((sum, beat) => sum + (beat.price * beat.sales), 0);
  const totalSales = beats.reduce((sum, beat) => sum + beat.sales, 0);
  const avgRating = beats.reduce((sum, beat) => sum + beat.rating, 0) / beats.length;

  return (
    <div className="min-h-screen bg-background dark">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Admin Panel</span>
          </div>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Back to Store
          </Button>
        </div>
      </header>

      <main className="container py-12 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Beat Management</h1>
          <p className="text-muted-foreground">Manage your beat catalog and track sales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Revenue</span>
              <Icon name="DollarSign" size={20} className="text-green-500" />
            </div>
            <p className="text-3xl font-bold text-primary">${totalRevenue.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">From {totalSales} sales</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Beats</span>
              <Icon name="Music" size={20} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary">{beats.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Active in catalog</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Avg Rating</span>
              <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-primary">{avgRating.toFixed(1)}</p>
            <p className="text-xs text-muted-foreground mt-1">Across all beats</p>
          </Card>
        </div>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Beat Catalog</h2>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => resetForm()}>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Add New Beat
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingBeat ? 'Edit Beat' : 'Add New Beat'}</DialogTitle>
                  <DialogDescription>
                    {editingBeat ? 'Update beat information' : 'Fill in the details to add a new beat to your catalog'}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="col-span-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter beat title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="producer">Producer</Label>
                    <Input
                      id="producer"
                      value={formData.producer}
                      onChange={(e) => handleInputChange('producer', e.target.value)}
                      placeholder="Producer name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="genre">Genre</Label>
                    <Input
                      id="genre"
                      value={formData.genre}
                      onChange={(e) => handleInputChange('genre', e.target.value)}
                      placeholder="e.g. Trap, Hip-Hop"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bpm">BPM</Label>
                    <Input
                      id="bpm"
                      type="number"
                      value={formData.bpm}
                      onChange={(e) => handleInputChange('bpm', parseInt(e.target.value))}
                      placeholder="140"
                    />
                  </div>

                  <div>
                    <Label htmlFor="key">Key</Label>
                    <Input
                      id="key"
                      value={formData.key}
                      onChange={(e) => handleInputChange('key', e.target.value)}
                      placeholder="C Minor"
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                      placeholder="29.99"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sales">Sales</Label>
                    <Input
                      id="sales"
                      type="number"
                      value={formData.sales}
                      onChange={(e) => handleInputChange('sales', parseInt(e.target.value))}
                      placeholder="0"
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="audio">Audio URL</Label>
                    <Input
                      id="audio"
                      value={formData.audio}
                      onChange={(e) => handleInputChange('audio', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit}>
                    {editingBeat ? 'Update Beat' : 'Add Beat'}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Genre</TableHead>
                  <TableHead>BPM</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beats.map((beat) => (
                  <TableRow key={beat.id}>
                    <TableCell className="font-medium">{beat.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{beat.genre}</Badge>
                    </TableCell>
                    <TableCell>{beat.bpm}</TableCell>
                    <TableCell>{beat.key}</TableCell>
                    <TableCell>${beat.price}</TableCell>
                    <TableCell>{beat.sales}</TableCell>
                    <TableCell className="font-semibold text-green-500">
                      ${(beat.price * beat.sales).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(beat)}
                        >
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(beat.id)}
                        >
                          <Icon name="Trash2" size={16} className="text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </main>
    </div>
  );
}
