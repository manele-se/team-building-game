import React, { Component } from 'react';
import './confetti.css';

const PARTICLE_COUNT = 300;

class Confetti extends Component {
  state = {
    particles: []
  };

  componentDidMount() {
    setTimeout(() => this.doParticles(), 100);
  }

  doParticles() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let { particles } = this.state;

    particles = particles.map((particle) => ({
      x: particle.x + particle.dx,
      y: particle.y > height ? -10 : particle.y + particle.dy,
      dx: particle.dx,
      dy: particle.dy
    }));

    if (particles.length < PARTICLE_COUNT) {
      particles = [
        ...particles,
        {
          x: Math.random() * width,
          y: -10,
          dx: Math.random() - 0.5,
          dy: Math.random() + 2,
          hue: Math.random() * 360
        }
      ];
    }

    this.setState({ particles });

    window.requestAnimationFrame(() => this.doParticles());
  }

  render() {
    const { particles } = this.state;

    return particles.map((particle) => (
      <div
        class="confetti"
        style={{
          left: particle.x,
          top: particle.y,
          backgroundColor: `hsl(${particle.hue}, 100%, 50%)`
        }}
      />
    ));
  }
}

const ConfettiTestView = (props) => (
  <React.Fragment>
    <Confetti />
  </React.Fragment>
);

export default Confetti;
export { ConfettiTestView };
