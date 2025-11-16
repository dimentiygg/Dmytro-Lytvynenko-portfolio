import React from "react";

import { useEffect, useRef, useState } from "react";
import p5 from "p5";

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const sketchRef = useRef(null);

  const [lineCount, setLineCount] = useState(3);
  const [noiseDensity, setNoiseDensity] = useState(50);
  const [extraRotate, setExtraRotate] = useState(false);

  useEffect(() => {
    if (sketchRef.current) sketchRef.current.remove();

    const sketch = (p) => {
      let canvas, ctx;

      const THIRD_PI = Math.PI / 3;
      const SIXTH_PI = Math.PI / 6;

      p.setup = () => {
        const container = containerRef.current;
        const width = container ? container.offsetWidth : p.windowWidth;
        const height = container ? container.offsetHeight : p.windowHeight;
        canvas = p.createCanvas(width, height);
        ctx = canvas.drawingContext;
      };

      p.draw = () => {
        p.background(255);

        p.stroke(0);
        p.strokeCap(p.PROJECT);
        p.noFill();

        let s = Math.min(p.width, p.height);
        let c = 20;
        let r = Math.max(s / c, 30);
        let d = r * 2;
        let a = r * Math.cos(SIXTH_PI);
        let w = a * 2;
        let h = d;

        let t = p.frameCount / 400;

        let count = lineCount;
        let density = noiseDensity;

        p.strokeWeight(r * 0.1);

        // hex grid
        let x1 = p.width;
        let y1 = p.height;
        let dx = h * 0.86;
        let dy = w * 0.86;

        let j = Math.round(0 / dy);
        let i = Math.round(0 / dx);

        for (let y = j * dy; y < y1 + r; y += dy, ++j) {
          for (let x = i * dx + ((j & 1) * dx) / 2; x < x1 + dx / 2; x += dx) {
            p.push();

            p.translate(x, y);

            hexClip(p, ctx, r);

            let nx = x / density;
            let ny = y / density;
            let n = p.map(p.noise(nx, ny, t), 0.3, 0.7, 0, p.TAU);

            p.rotate(
              THIRD_PI * Math.floor(n + (extraRotate ? p.frameCount / 30 : 0))
            );

            for (let i = 0; i < count; i++) {
              let xline = p.map(i, 0, count - 1, -a, a);
              p.line(xline, -d, xline, d);
            }

            p.pop();
          }
        }
      };

      p.windowResized = () => {
        const container = containerRef.current;
        const width = container ? container.offsetWidth : p.windowWidth;
        const height = container ? container.offsetHeight : p.windowHeight;
        p.resizeCanvas(width, height);
      };

      function hexClip(p, ctx, r) {
        let sides = 6;
        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
          let t = (i / sides) * p.TAU;
          let x = Math.sin(t) * r;
          let y = Math.cos(t) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.clip();
      }
    };

    sketchRef.current = new p5(sketch, containerRef.current);

    return () => sketchRef.current.remove();
  }, [lineCount, noiseDensity, extraRotate]);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
      />
    </>
  );
}
