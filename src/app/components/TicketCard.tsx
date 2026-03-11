import { QrCode } from 'lucide-react';

// Simple SVG barcode component
function Barcode() {
  const pattern = [
    3,1,2,1,3,1,1,2,3,1,2,1,1,3,1,2,1,3,2,1,1,2,3,1,2,1,3,1,1,2,1,3,2,1,1,2,3,1,2,1,3,1,1,2,1,3,1,2,3,1
  ];
  let x = 0;
  return (
    <svg width="220" height="50" viewBox="0 0 220 50" className="mx-auto">
      {pattern.map((w, i) => {
        const bar = (
          <rect
            key={i}
            x={x + 10}
            y="0"
            width={w * 1.5}
            height="50"
            fill={i % 2 === 0 ? '#1a1a1a' : 'transparent'}
          />
        );
        x += w * 1.5 + 0.8;
        return bar;
      })}
    </svg>
  );
}

// Dotted line separator
function DottedSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className="w-full"
        style={{
          height: '1px',
          backgroundImage: 'radial-gradient(circle, #c8c8c8 1px, transparent 1px)',
          backgroundSize: '6px 1px',
          backgroundRepeat: 'repeat-x',
        }}
      />
    </div>
  );
}

// Serrated edge using CSS
function SerratedEdge({ position }: { position: 'top' | 'bottom' }) {
  const isTop = position === 'top';
  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: '8px' }}
    >
      <svg width="100%" height="8" preserveAspectRatio="none" viewBox="0 0 400 8">
        <path
          d={isTop
            ? 'M0,8 ' + Array.from({ length: 40 }, (_, i) => `L${i * 10 + 5},0 L${(i + 1) * 10},8`).join(' ')
            : 'M0,0 ' + Array.from({ length: 40 }, (_, i) => `L${i * 10 + 5},8 L${(i + 1) * 10},0`).join(' ')
          }
          fill="white"
        />
      </svg>
    </div>
  );
}

export function TicketCard() {
  const data = {
    question: 'Will Bitcoin reach $150K in 2026?',
    emoji: '🪙',
    direction: 'YES',
    shares: '1,250',
    avgPrice: '$0.62',
    amount: '$775.00',
    potentialPayout: '$1,250.00',
    profitIfYes: '+$475.00',
    market: '72%',
    roi: '+61.3%',
    date: 'Mar 09, 2026  14:32:07 UTC',
    orderId: '#PM-2026-0309-7A3F',
  };

  const rows = [
    { label: 'Shares', value: data.shares },
    { label: 'Avg Price', value: data.avgPrice },
    { label: 'Amount', value: data.amount },
    { label: 'Potential Payout', value: data.potentialPayout },
    { label: 'Profit if Yes', value: data.profitIfYes },
    { label: 'Market', value: `${data.market} YES` },
  ];

  return (
    <div className="relative w-full max-w-[360px] mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
      {/* Drop shadow - enhanced */}
      <div className="absolute inset-0 translate-y-3 bg-black/12 blur-2xl rounded-2xl" />

      <div className="relative">
        {/* Top serrated edge */}
        <SerratedEdge position="top" />

        {/* Main ticket body */}
        <div className="bg-white px-7 pb-2">
          {/* Brand header */}
          <div className="pt-5 pb-4">
            <div
              className="mx-auto rounded-xl flex items-center justify-center py-2.5 px-6 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #4A6CF7 0%, #6366F1 100%)' }}
            >
              <span className="text-white tracking-[0.2em]" style={{ fontSize: '13px', fontWeight: 700 }}>
                BITGET WALLET
              </span>
            </div>
          </div>

          {/* Question */}
          <div className="text-center pb-5 pt-1">
            <span style={{ fontSize: '22px' }}>{data.emoji}</span>
            <h2 className="mt-2 text-gray-900 leading-snug" style={{ fontSize: '17px', fontWeight: 700 }}>
              {data.question}
            </h2>
          </div>

          {/* Direction badge */}
          <div className="flex justify-center pb-4">
            <div className="bg-gray-50 rounded-lg px-12 py-2.5 flex items-center gap-2">
              <span className="text-emerald-500" style={{ fontSize: '20px', fontWeight: 700 }}>
                {data.direction}
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Separator with side notches */}
          <div className="relative mx-[-28px]">
            <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[14px] h-[28px] bg-[#f0f2f5] rounded-r-full" />
            <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-[14px] h-[28px] bg-[#f0f2f5] rounded-l-full" />
            <div className="px-10">
              <DottedSeparator />
            </div>
          </div>

          {/* Data rows */}
          <div className="py-4 space-y-3">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between items-baseline">
                <span className="text-gray-400" style={{ fontSize: '12px' }}>{row.label}</span>
                <span className="text-gray-800" style={{ fontSize: '13px', fontWeight: 700 }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* ROI highlight */}
          <div className="flex justify-center py-3">
            <div className="border border-emerald-200 bg-emerald-50/60 rounded-lg px-16 py-2.5 text-center">
              <span className="text-emerald-500" style={{ fontSize: '20px', fontWeight: 700 }}>
                {data.roi} ROI
              </span>
            </div>
          </div>

          {/* Separator */}
          <div className="py-4">
            <DottedSeparator />
          </div>

          {/* Timestamp & Order */}
          <div className="text-center pb-3">
            <p className="text-gray-400" style={{ fontSize: '11px' }}>{data.date}</p>
            <p className="text-gray-400 mt-0.5" style={{ fontSize: '11px' }}>Order {data.orderId}</p>
          </div>

          {/* Dotted separator before barcode */}
          <DottedSeparator className="pb-4" />

          {/* Barcode */}
          <div className="pb-3">
            <Barcode />
          </div>

          {/* Footer */}
          <div className="text-center pb-5 pt-1">
            <p className="text-gray-400" style={{ fontSize: '10px' }}>bitgetwallet.com</p>
            <p className="text-gray-300 mt-1" style={{ fontSize: '10px' }}>
              — Thank you for trading —
            </p>
          </div>
        </div>

        {/* Bottom serrated edge */}
        <SerratedEdge position="bottom" />
      </div>
    </div>
  );
}