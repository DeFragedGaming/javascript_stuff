import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as THREE from 'three';
import pptxgen from "pptxgenjs";

function App() {
  
    const pptx = new pptxgen();
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
          <h1>Welcome to Matthew Hammel's DeVry University portfolio website</h1>
          <p>Hi, my name is Matthew Hammel</p>
        </section>
        <section>
          <h2>Projects</h2>
          <div className="card">
            <h3>CEIS 101</h3>
            <iframe src="https://mydevryedu-my.sharepoint.com/personal/mhammel1_my_devry_edu/_layouts/15/Doc.aspx?sourcedoc={23aca671-d715-4923-a2ba-d71a2d73ad12}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            <p>This was my first tech class where I learned about IoT (Internet of Thing)</p>
            <div className="skills">
              <span className="skill">IoT</span>
            </div>
          </div>
          <div className="card">
            <h3>CEIS 106</h3>
            <iframe src="https://mydevryedu-my.sharepoint.com/personal/mhammel1_my_devry_edu/_layouts/15/Doc.aspx?sourcedoc={665fedf5-25af-4650-8fe9-eff00073b50b}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            <p>In this class CEIS 106 I learned about the linux system from creating directories all the way to monitoring the network. </p>
            <div className="skills">
            <span className="skill">Linux Systems</span>
            </div>
          </div>
          <div className="card">
            <h3>CEIS 110</h3>
            <iframe src="https://mydevryedu-my.sharepoint.com/personal/mhammel1_my_devry_edu/_layouts/15/Doc.aspx?sourcedoc={df71f43e-ec85-4c5f-af36-c0479fdc73db}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            <p>In this class CEIS 110 I learned about Python </p>
            <div className="skills">
            <span className="skill">Python</span>
            </div>
          </div>
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