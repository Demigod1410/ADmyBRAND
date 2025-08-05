declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    ticks?: number;
    shapes?: string[];
    zIndex?: number;
    colors?: string[];
    origin?: {
      x: number;
      y: number;
    };
  }

  function confetti(options?: ConfettiOptions): Promise<{ reset: () => void }>;
  export default confetti;
}
