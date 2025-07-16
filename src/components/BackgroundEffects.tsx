export const BackgroundEffects = () => {
  return (
    <>
      {/* Ana ışık kaynağı - yazının altında */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(6,182,212,0.15),transparent_40%)]" />
      
      {/* Yazının altında yoğunlaşan ışık efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.2),transparent_60%)] blur-2xl" />
      
      {/* Parlak noktalar - yazının altında */}
      <div className="absolute top-[55%] left-[48%] w-3 h-3 bg-cyan-400 rounded-full blur-sm opacity-80" />
      <div className="absolute top-[58%] left-[52%] w-2 h-2 bg-white rounded-full blur-sm opacity-90" />
      <div className="absolute top-[56%] left-[50%] w-4 h-4 bg-cyan-300 rounded-full blur-md opacity-70" />
      <div className="absolute top-[60%] left-[49%] w-2 h-2 bg-cyan-500 rounded-full blur-sm opacity-85" />
      <div className="absolute top-[59%] left-[51%] w-3 h-3 bg-white rounded-full blur-sm opacity-75" />
      <div className="absolute top-[57%] left-[53%] w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-80" />
      <div className="absolute top-[61%] left-[47%] w-3 h-3 bg-cyan-300 rounded-full blur-md opacity-70" />
      
      {/* Ek glow efektleri */}
      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-[56%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-400/5 rounded-full blur-[80px]" />
      
      {/* Yan taraflarda hafif ışık efektleri */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/3 rounded-full blur-3xl" />
    </>
  );
};