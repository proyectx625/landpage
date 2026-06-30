'use client';

import { useState, useEffect } from 'react';
import { Share2, Home, Server, Activity, Zap } from 'lucide-react';

export function NetworkMap() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, type: 'OLT', label: 'Central OLT-01', x: '10%', y: '50%', status: 'online', power: 'N/A' },
    { id: 2, type: 'Splitter', label: 'Splitter Primario A', x: '40%', y: '30%', status: 'online', power: '-3.2 dBm' },
    { id: 3, type: 'Splitter', label: 'Splitter Primario B', x: '40%', y: '70%', status: 'online', power: '-3.5 dBm' },
    { id: 4, type: 'ONT', label: 'Cliente: Juan Pérez', x: '80%', y: '20%', status: 'online', power: '-18.2 dBm' },
    { id: 5, type: 'ONT', label: 'Cliente: María García', x: '85%', y: '40%', status: 'warning', power: '-24.8 dBm' },
    { id: 6, type: 'ONT', label: 'Cliente: Tech Corp', x: '80%', y: '65%', status: 'online', power: '-19.1 dBm' },
    { id: 7, type: 'ONT', label: 'Cliente: Res. Alborada', x: '85%', y: '85%', status: 'offline', power: 'Loss of Signal' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => {
        if (prev === null) return 1;
        return prev >= nodes.length ? 1 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-video rounded-2xl bg-slate-900 overflow-hidden relative border border-slate-800 shadow-2xl group">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Trunk */}
        <line x1="10%" y1="50%" x2="40%" y2="30%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-[pulse_3s_infinite]" />
        <line x1="10%" y1="50%" x2="40%" y2="70%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Branch A */}
        <line x1="40%" y1="30%" x2="80%" y2="20%" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
        <line x1="40%" y1="30%" x2="85%" y2="40%" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        
        {/* Branch B */}
        <line x1="40%" y1="70%" x2="80%" y2="65%" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
        <line x1="40%" y1="70%" x2="85%" y2="85%" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div 
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer
            ${activeNode === node.id ? 'scale-125 z-10' : 'scale-100 z-0'}`}
          style={{ left: node.x, top: node.y }}
          onMouseEnter={() => setActiveNode(node.id)}
        >
          <div className={`p-2 rounded-lg bg-slate-800 border-2 shadow-lg
            ${node.status === 'online' ? 'border-blue-500 text-blue-400' : 
              node.status === 'warning' ? 'border-yellow-500 text-yellow-400' : 'border-red-500 text-red-400'}
            ${activeNode === node.id ? 'ring-4 ring-blue-500/20' : ''}
          `}>
            {node.type === 'OLT' && <Server size={20} />}
            {node.type === 'Splitter' && <Share2 size={18} />}
            {node.type === 'ONT' && <Home size={16} />}
          </div>

          {/* Label Tooltip */}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-3 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-700 shadow-xl transition-opacity duration-300 pointer-events-none
            ${activeNode === node.id ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xs font-bold text-white mb-1">{node.label}</p>
            <div className="flex items-center justify-between gap-2">
              <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded
                ${node.status === 'online' ? 'bg-blue-500/20 text-blue-400' : 
                  node.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                {node.status}
              </span>
              <span className="text-[10px] text-slate-400 flex items-center">
                <Zap size={10} className="mr-1" /> {node.power}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Overlay Stats */}
      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 text-xs font-mono">
        <div className="flex items-center gap-2 mb-1 text-blue-400">
          <Activity size={12} className="animate-pulse" /> Live Monitoring
        </div>
        <p className="text-slate-400">Nodes: 1,240</p>
        <p className="text-slate-400">Uptime: 99.98%</p>
      </div>

      {/* Bottom Legend */}
      <div className="absolute bottom-4 left-4 flex gap-4 text-[10px] text-slate-500 uppercase font-bold tracking-wider">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Online</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Warning</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> Offline</div>
      </div>
    </div>
  );
}
