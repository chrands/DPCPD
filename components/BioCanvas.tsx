import React, { useEffect, useRef } from 'react';

export const BioCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    
    // Configuration
    const mouse = {
      x: -1000, 
      y: -1000,
      radius: 120 // 稍微减小感应半径，让交互更精确
    };

    const colors = {
      primary: 'rgb(0, 153, 168)', // #0099A8
      primaryAlpha: 'rgba(0, 153, 168,',
    };

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Handle Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Handle Mouse Leave
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      density: number;
      minSpeed: number; // 记录基础最小速度

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = colors.primary;
        // 减小密度的随机范围，让受力更均匀 (原来是 *30, 太大了)
        this.density = (Math.random() * 10) + 1; 
        this.minSpeed = 0.2; // 设定一个最高漂浮速度阈值，用于摩擦力计算
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
        // 稍微降低粒子本身的透明度，让线条更突出
        ctx.fillStyle = colors.primary; 
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1.0; // 重置全局透明度
      }

      update() {
        // 1. Mouse Interaction (Repulsion) - 柔和版
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            
            // 之前的 0.6 改为 0.05，大幅减弱推力
            const repulsionStrength = 0.05; 
            
            this.directionX -= forceDirectionX * force * this.density * repulsionStrength;
            this.directionY -= forceDirectionY * force * this.density * repulsionStrength;
        }

        // 2. Friction / Damping (增加阻尼，防止粒子无限加速)
        // 如果速度超过了 0.3 (被鼠标推快了)，就乘以 0.96 慢慢减速
        if (Math.abs(this.directionX) > 0.3) {
            this.directionX *= 0.96;
        }
        if (Math.abs(this.directionY) > 0.3) {
            this.directionY *= 0.96;
        }

        // 3. Movement
        this.x += this.directionX;
        this.y += this.directionY;

        // 4. Boundary Check (Bounce)
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        this.draw();
      }
    }

    function initParticles() {
      particlesArray = [];
      // 保持之前的密度计算：每 9000 像素一个粒子
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        
        // 速度优化：从原来的 -0.5~0.5 降低到 -0.2~0.2
        // 让背景漂浮感更强，不抢视觉重心
        let directionX = (Math.random() * 0.4) - 0.2; 
        let directionY = (Math.random() * 0.4) - 0.2;
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                // 连线距离阈值
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    if(opacityValue < 0) opacityValue = 0;
                    
                    if (!ctx) return;
                    ctx.strokeStyle = colors.primaryAlpha + opacityValue + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Initialize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
    animate();

    // Event Listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-auto z-0 opacity-60 mix-blend-screen"
    />
  );
};