"use client";

import { useEffect, useRef } from "react";

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

const Canvas = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  var called = false;
  useEffect(() => {
    if (called) return;
    called = true;

    const width = window.innerWidth;
    const height = document.documentElement.scrollHeight;

    let boxDistance = 30;
    let boxSize = 28;

    let arr: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      color: string;
      intensity: number;
      level: number;
      propagating: boolean;
      index: number;
      constructor(x: number, y: number, index: number) {
        this.x = x;
        this.y = y;
        this.color = "rgb(12,12,12)";
        this.intensity = 0;
        this.level = 0;
        this.propagating = false;
        this.index = index;
      }
      propagate(level: number, intensity: number) {
        if (level > 1 || intensity <= 0 || this.propagating) return;
        this.propagating = true;
        this.intensity = intensity;
        this.level = level;
        setTimeout(() => {
          if (this.index + 1 < arr.length) {
            if (arr[this.index + 1].x > this.x) {
              arr[this.index + 1].propagate(level, intensity - 0.01);
            }
          }
          if (this.index - 1 >= 0) {
            if (arr[this.index - 1].x < this.x) {
              arr[this.index - 1].propagate(level, intensity - 0.01);
            }
          }
          let w = Math.ceil(
            (width - (boxDistance - boxSize) / 2) / boxDistance,
          );
          if (this.index + w < arr.length) {
            if (arr[this.index + w].y > this.y) {
              arr[this.index + w].propagate(level, intensity - 0.01);
            }
          }
          if (this.index - w >= 0) {
            if (arr[this.index - w].y < this.y) {
              arr[this.index - w].propagate(level, intensity - 0.01);
            }
          }
        }, 50);
      }

      update() {
        if (this.intensity <= 0) this.intensity = 0;
        let r, g, b;
        if (this.level < 0.5) {
          r = lerp(52, 228, this.level * 2);
          g = lerp(138, 52, this.level * 2);
          b = lerp(235, 165, this.level * 2);
        } else {
          r = lerp(228, 255, (this.level - 0.5) * 2);
          g = lerp(52, 203, (this.level - 0.5) * 2);
          b = lerp(165, 109, (this.level - 0.5) * 2);
        }
        r = lerp(r, 12, 1 - this.intensity);
        g = lerp(g, 12, 1 - this.intensity);
        b = lerp(b, 12, 1 - this.intensity);
        this.color = `rgb(${r},${g},${b})`;
        if (this.intensity > 0) {
          this.intensity -= this.intensity * 0.15;
        } else {
          this.propagating = false;
        }
        if (this.intensity <= 0.01) {
          this.intensity = 0;
        }
        if (this.level > 0) {
          this.level -= 0.1;
        }
      }
    }

    let c = 0;
    for (let y = (boxDistance - boxSize) / 2; y < height; y += boxDistance) {
      for (let x = (boxDistance - boxSize) / 2; x < width; x += boxDistance) {
        arr[c] = new Particle(x, y, c);
        c++;
      }
    }

    const canvas = canvasRef.current;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;

    function draw() {
      if (ctx == null) return;
      if (canvas == null) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      ctx.fillStyle = "rgb(12,12,12)";

      if (Math.round(Math.random() * 35) == 10) {
        arr[Math.floor(Math.random() * arr.length)].propagate(1, 0.5);
      }

      arr.forEach((p) => {
        p.update();
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, boxSize, boxSize);
      });

      ctx.stroke();
    }

    let timer = setInterval(function () {
      draw();
    }, 1000 / 20);

    window.addEventListener("resize", resizeCanvas, false);

    function resizeCanvas() {
      if (canvas == null) return;
      let width = window.innerWidth;
      let height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    }

    resizeCanvas();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        display: "block",
        opacity: 0.3,
        zIndex: -5,
      }}
    />
  );
};

export default Canvas;
