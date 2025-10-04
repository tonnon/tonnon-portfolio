import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  fid?: number;
  ttfb?: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitorar Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[0]?.startTime;
        if (fcp) {
          console.log('🎨 FCP (First Contentful Paint):', fcp.toFixed(2), 'ms');
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1]?.startTime;
        if (lcp) {
          console.log('🖼️ LCP (Largest Contentful Paint):', lcp.toFixed(2), 'ms');
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('📐 CLS (Cumulative Layout Shift):', clsValue.toFixed(4));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[0]?.processingStart - entries[0]?.startTime;
        if (fid) {
          console.log('⚡ FID (First Input Delay):', fid.toFixed(2), 'ms');
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Time to First Byte
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const ttfb = entries[0]?.responseStart - entries[0]?.requestStart;
        if (ttfb) {
          console.log('🌐 TTFB (Time to First Byte):', ttfb.toFixed(2), 'ms');
        }
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
        ttfbObserver.disconnect();
      };
    }
  }, []);

  // Monitorar carregamento de recursos
  useEffect(() => {
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const images = resources.filter(r => r.name.includes('.jpg') || r.name.includes('.png') || r.name.includes('.webp'));
      
      console.log('📊 Recursos carregados:', {
        total: resources.length,
        images: images.length,
        totalSize: resources.reduce((sum, r) => sum + (r as any).transferSize || 0, 0),
        imageSize: images.reduce((sum, r) => sum + (r as any).transferSize || 0, 0)
      });
    };

    // Monitorar após carregamento completo
    if (document.readyState === 'complete') {
      monitorResources();
    } else {
      window.addEventListener('load', monitorResources);
      return () => window.removeEventListener('load', monitorResources);
    }
  }, []);
};
