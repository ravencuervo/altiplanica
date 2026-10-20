import React, { useState, useRef, useCallback, useEffect } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'ANTES',
  afterLabel = 'DESPUÉS',
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handlePointerDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  return (
    <div className="before-after-wrapper w-full select-none">
      {/* Slider Viewport Container with Exact A4 Aspect Ratio */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className={`before-after-container relative aspect-[210/297] w-full rounded-2xl overflow-hidden cursor-ew-resize border border-slate-200/90 shadow-xl bg-white select-none ${
          isDragging ? 'dragging' : ''
        }`}
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={afterImage}
          alt="DESPUÉS"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          loading="eager"
        />

        {/* BEFORE Image (Overlaid with CSS clip-path) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            willChange: 'clip-path',
          }}
        >
          <img
            src={beforeImage}
            alt="ANTES"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
          />
        </div>

        {/* Floating Label: ANTES (Left) */}
        <div
          className="absolute top-3.5 left-3.5 z-20 pointer-events-none transition-opacity duration-150 select-none"
          style={{ opacity: sliderPos > 8 ? 1 : 0 }}
        >
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider bg-rose-600 text-white shadow-lg border border-rose-400/40 uppercase">
            {beforeLabel}
          </span>
        </div>

        {/* Floating Label: DESPUÉS (Right) */}
        <div
          className="absolute top-3.5 right-3.5 z-20 pointer-events-none transition-opacity duration-150 select-none"
          style={{ opacity: sliderPos < 92 ? 1 : 0 }}
        >
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider bg-emerald-600 text-white shadow-lg border border-emerald-400/40 uppercase">
            {afterLabel}
          </span>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="slider-divider absolute top-0 bottom-0 z-30 pointer-events-none select-none"
          style={{ left: `${sliderPos}%`, willChange: 'left' }}
        >
          {/* Vertical Line */}
          <div className="slider-line h-full w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"></div>

          {/* Central Handle Button */}
          <div className="slider-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-blue-700 shadow-xl border-2 border-blue-600 flex items-center justify-center text-sm font-bold">
            <div className="flex items-center justify-center gap-0.5 text-blue-700">
              <i className="bi bi-chevron-left text-xs font-black"></i>
              <i className="bi bi-chevron-right text-xs font-black"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
