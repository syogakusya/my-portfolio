"use client";

import React, { useRef, useEffect } from "react";
import * as p5Types from "p5";

class Particle {
  p: p5Types;
  x: number;
  y: number;
  xSpeed: number;
  ySpeed: number;
  lifespan: number;

  constructor(
    p: p5Types,
    x: number,
    y: number,
    xSpeed: number,
    ySpeed: number
  ) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.lifespan = 255;
  }

  update() {
    this.randomWalk();
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.lifespan -= 5;
  }

  show() {
    this.p.noStroke();
    this.p.fill(100, this.lifespan);
    this.p.ellipse(this.x, this.y, 16);
  }

  finished() {
    return this.lifespan < 0;
  }

  randomWalk() {
    const angle = this.p.random(this.p.TWO_PI);
    const step = this.p.random(0.5, 2);
    this.xSpeed += this.p.cos(angle) * step;
    this.ySpeed += this.p.sin(angle) * step;

    // 速度の上限を設定
    const maxSpeed = 5;
    const speed = this.p.sqrt(
      this.xSpeed * this.xSpeed + this.ySpeed * this.ySpeed
    );
    if (speed > maxSpeed) {
      this.xSpeed = (this.xSpeed / speed) * maxSpeed;
      this.ySpeed = (this.ySpeed / speed) * maxSpeed;
    }
  }
}

const InteractiveBackground = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("p5").then((p5Module) => {
        const p5 = p5Module.default;

        const sketch = (p: p5Types) => {
          const particles: Particle[] = [];
          let prevMouseX = 0;
          let prevMouseY = 0;
          let particlesNum = 0;

          p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.clear();
            prevMouseX = p.mouseX;
            prevMouseY = p.mouseY;
          };

          p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
          };

          p.draw = () => {
            p.clear();
            for (let i = particles.length - 1; i >= 0; i--) {
              particles[i].update();
              particles[i].show();
              if (particles[i].finished()) {
                particles.splice(i, 1);
              }
            }
            prevMouseX = p.mouseX;
            prevMouseY = p.mouseY;
          };

          p.mouseMoved = () => {
            const dx = prevMouseX - p.mouseX;
            const dy = prevMouseY - p.mouseY;
            const angle = p.atan2(dy, dx);
            const speed = p.random(2, 5);
            const xSpeed = p.cos(angle) * speed;
            const ySpeed = p.sin(angle) * speed;
            if (particlesNum > 2) {
              particles.push(
                new Particle(p, p.mouseX, p.mouseY, xSpeed, ySpeed)
              );
              particlesNum = 0;
            } else {
              particlesNum++;
            }
            prevMouseX = p.mouseX;
            prevMouseY = p.mouseY;
          };

          p.mousePressed = () => {
            for (let i = 0; i < 50; i++) {
              const angle = p.random(p.TWO_PI);
              const speed = p.random(2, 5);
              const xSpeed = p.cos(angle) * speed;
              const ySpeed = p.sin(angle) * speed;
              particles.push(
                new Particle(p, p.mouseX, p.mouseY, xSpeed, ySpeed)
              );
            }
          };

          p.keyPressed = () => {
            if ((p.key = "c")) {
              p.clear();
            }
          };
        };

        if (sketchRef.current) {
          new p5(sketch, sketchRef.current as HTMLElement);
        }
      });
    }
  }, []);

  return (
    <div ref={sketchRef} className="fixed inset-0 z-negative w-full h-full" />
  );
};

export default InteractiveBackground;
