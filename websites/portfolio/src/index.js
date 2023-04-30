import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as THREE from 'three';

function App() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x212121 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 5, 10);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Welcome to Matthew Hammel's portfolio website</h1>
          <p>Hi, my name is Matthew Hammel</p>
        </section>
        <section>
          <h2>My Projects</h2>
          <div className="card">
            <h3>Project 1</h3>
            <img src="https://via.placeholder.com/300x150" alt="Project 1" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex et lorem porttitor, at cursus felis cursus. In non arcu enim.</p>
            <div className="skills">
              <span className="skill">React</span>
              <span className="skill">Node.js</span>
              <span className="skill">SQL</span>
            </div>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <img src="https://via.placeholder.com/300x150" alt="Project 2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex et lorem porttitor, at cursus felis cursus. In non arcu enim.</p>
            <div className="skills">
              <span className="skill">React</span>
              <span className="skill">Node.js</span>
              <span className="skill">SQL</span>
            </div>
          </div>
        </section>
        <section>
          <h2>Three.js Example</h2>
          <canvas ref={canvasRef}></canvas>
        </section>
        <section>
            <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" required></textarea>
        <button type="submit">Submit</button>
        </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Matthew Hammel. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));