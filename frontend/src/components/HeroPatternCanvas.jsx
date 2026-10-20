import React, { useEffect, useRef } from 'react';
import './HeroPatternCanvas.css';

export default function HeroPatternCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Mouse coordinates (relative to Hero section)
    const mouse = {
      x: null,
      y: null,
      radius: 140, // Proximity detection radius
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Generate statistical data points on a structured grid with slight natural jitter
    let points = [];
    const spacing = 58; // Grid spacing in px

    const initPoints = () => {
      points = [];
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * spacing + (j % 2 === 0 ? 0 : spacing * 0.5);
          const originY = j * spacing;
          points.push({
            x: originX,
            y: originY,
            originX,
            originY,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            radius: 2.0, // Solid dot radius
          });
        }
      }
    };

    initPoints();

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initPoints();
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw nodes
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Idle floating drift
        p.x += p.vx;
        p.y += p.vy;

        // Return force towards origin
        p.vx += (p.originX - p.x) * 0.003;
        p.vy += (p.originY - p.y) * 0.003;

        // Damping
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Mouse interaction (gravitation / displacement)
        let isNearMouse = false;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            isNearMouse = true;
            const force = (mouse.radius - dist) / mouse.radius;
            // Subtle pull towards cursor simulating data clustering
            p.vx += (dx / dist) * force * 0.6;
            p.vy += (dy / dist) * force * 0.6;

            // Draw connecting line to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = '#94a3b8'; // Solid medium slate
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw solid circular point
        ctx.beginPath();
        ctx.arc(p.x, p.y, isNearMouse ? 2.6 : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? '#1e40af' : '#cbd5e1'; // Solid Royal Blue if near, Solid Slate if idle
        ctx.fill();
      }

      // 2. Draw discrete connecting lines between neighboring points within range
      const maxConnectDist = 65;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i];
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#e2e8f0'; // Solid subtle crisp line
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-pattern-canvas-container">
      <canvas ref={canvasRef} className="hero-pattern-canvas" />
    </div>
  );
}
