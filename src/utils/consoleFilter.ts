// Console uyarılarını filtrelemek için
const originalWarn = console.warn;

console.warn = function(message, ...args) {
  // FBXLoader uyarılarını filtrele
  if (typeof message === 'string' && 
      (message.includes('ShininessExponent map is not supported') ||
       message.includes('ReflectionFactor map is not supported'))) {
    return; // Bu uyarıları gösterme
  }
  
  // Diğer uyarıları normal şekilde göster
  originalWarn.call(console, message, ...args);
};

export {};