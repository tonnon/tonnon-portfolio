import React, { useEffect, useRef } from 'react';

const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/\\*+-=¦｜';

interface RainColumn {
  head: number; // row index of the leading glyph
  speed: number; // rows per second
  trail: string[]; // index 0 = head
  trailLength: number;
  stepAcc: number; // ms accumulated since last step
}

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 16;
    let columns: RainColumn[] = [];

    const spawnColumn = (startAbove: boolean): RainColumn => {
      const rows = canvas.height / fontSize;
      const trailLength = 10 + Math.floor(Math.random() * 16);
      return {
        // Respawns drip in from above; the initial fill is spread across the screen
        head: startAbove
          ? -Math.floor(Math.random() * 60)
          : Math.floor(Math.random() * rows * 2) - rows,
        speed: 4 + Math.random() * 9,
        trail: Array.from({ length: trailLength }, randomGlyph),
        trailLength,
        stepAcc: 0,
      };
    };

    const initColumns = () => {
      const count = Math.ceil(canvas.width / fontSize);
      columns = Array.from({ length: count }, () => spawnColumn(false));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';

      columns.forEach((col, colIndex) => {
        col.stepAcc += dt;
        const stepInterval = 1000 / col.speed;

        while (col.stepAcc >= stepInterval) {
          col.stepAcc -= stepInterval;
          col.head += 1;
          col.trail.unshift(randomGlyph());
          if (col.trail.length > col.trailLength) col.trail.pop();
        }

        // Occasional glyph mutation for the classic flicker
        if (col.trail.length > 2 && Math.random() < 0.04) {
          col.trail[1 + Math.floor(Math.random() * (col.trail.length - 1))] = randomGlyph();
        }

        const x = colIndex * fontSize;

        col.trail.forEach((glyph, i) => {
          const y = (col.head - i) * fontSize;
          if (y < -fontSize || y > canvas.height) return;

          if (i === 0) {
            ctx.fillStyle = 'rgba(233, 213, 255, 0.6)';
          } else {
            const fade = 1 - i / col.trailLength;
            ctx.fillStyle = `rgba(168, 85, 247, ${(0.32 * fade).toFixed(3)})`;
          }
          ctx.fillText(glyph, x, y);
        });

        // Respawn once the whole trail has left the screen
        if ((col.head - col.trailLength) * fontSize > canvas.height) {
          columns[colIndex] = spawnColumn(true);
        }
      });
    };

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;
      draw(dt);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"
    />
  );
};

export default DigitalRain;
