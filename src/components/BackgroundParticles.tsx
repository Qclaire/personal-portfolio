"use client";

const BackgroundParticles = () => {
    // Predefined particle positions and properties
    const particles = [
        { color: 'primary', width: '12px', height: '12px', opacity: 0.3, left: '15%', top: '22%', duration: '15s', delay: '0s' },
        { color: 'secondary', width: '8px', height: '8px', opacity: 0.2, left: '35%', top: '45%', duration: '18s', delay: '1s' },
        { color: 'accent', width: '10px', height: '10px', opacity: 0.4, left: '75%', top: '30%', duration: '12s', delay: '2s' },
        { color: 'highlight', width: '14px', height: '14px', opacity: 0.15, left: '60%', top: '70%', duration: '20s', delay: '0.5s' },
        { color: 'neon-pink', width: '9px', height: '9px', opacity: 0.35, left: '25%', top: '85%', duration: '16s', delay: '1.5s' },
        { color: 'primary', width: '7px', height: '7px', opacity: 0.25, left: '90%', top: '10%', duration: '14s', delay: '3s' },
        { color: 'secondary', width: '11px', height: '11px', opacity: 0.3, left: '50%', top: '50%', duration: '17s', delay: '2.5s' },
        { color: 'accent', width: '13px', height: '13px', opacity: 0.2, left: '80%', top: '65%', duration: '19s', delay: '0.7s' },
        { color: 'highlight', width: '6px', height: '6px', opacity: 0.4, left: '10%', top: '40%', duration: '13s', delay: '1.2s' },
        { color: 'neon-pink', width: '10px', height: '10px', opacity: 0.25, left: '40%', top: '15%', duration: '15s', delay: '2.2s' },
    ];

    return (
        <div className="particle-container fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="particle absolute rounded-full"
                    style={{
                        backgroundColor: `var(--${particle.color})`,
                        width: particle.width,
                        height: particle.height,
                        opacity: particle.opacity,
                        left: particle.left,
                        top: particle.top,
                        animation: `float ${particle.duration} ease-in-out infinite ${particle.delay}`,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;