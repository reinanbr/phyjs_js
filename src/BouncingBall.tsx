// src/BouncingBall.tsx
import React, { useEffect } from 'react';
import p5 from 'p5';

const BouncingBall: React.FC = () => {
  const sketch = (p: p5) => {
    let x: number;
    let y: number; // Posição da bola
    let speedY: number; // Velocidade vertical

    p.setup = () => {
      p.createCanvas(400, 400);
      x = p.width / 2;
      y = 50;
      speedY = 0;
    };

    p.draw = () => {
      p.background(220);

      // Atualiza a posição da bola
      y += speedY;
      speedY += 0.2; // Gravidade

      // Verifica colisão com o chão
      if (y > p.height - 20) {
        y = p.height - 20; // Restringe a posição da bola
        speedY *= -0.8; // Inverte a velocidade e diminui (perde energia)
      }

      // Desenha a bola
      p.fill(255, 0, 0);
      p.ellipse(x, y, 40, 40);
    };
  };

  useEffect(() => {
    const p5Instance = new p5(sketch);
    return () => {
      p5Instance.remove(); // Limpa o p5 ao desmontar
    };
  }, []);

  return null; // Este componente não renderiza nada no DOM
};

export default BouncingBall;

