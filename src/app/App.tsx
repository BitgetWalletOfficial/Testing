import { TicketCard } from './components/TicketCard';
import { Download } from 'lucide-react';

export default function App() {
  const handleDownload = () => {
    // In a real implementation, this would capture and download the ticket as an image
    console.log('Download ticket');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
          Prediction Market Receipt
        </h1>
        <p className="text-white/80 text-sm">
          Your trade confirmation ticket
        </p>
      </div>

      {/* Ticket Card */}
      <TicketCard />

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/20"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        <Download size={18} />
        <span className="text-sm font-medium">Download Receipt</span>
      </button>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-white/60 text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
          Powered by Bitget Wallet • Prediction Market Platform
        </p>
      </div>
    </div>
  );
}