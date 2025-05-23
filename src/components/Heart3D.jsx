import { useEffect, useRef } from "react";

function Heart3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Import Three.js dan library lain secara dinamis
    let renderer, scene, camera, controls, animationId;

    async function init() {
      const THREE = await import("three");
      // Jika kamu ingin pakai loader/controls eksternal, import juga di sini
      // const { TrackballControls } = await import('./js/TrackballControls');
      // const { OBJLoader } = await import('./js/OBJLoader');
      // ...dst

      // Setup scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Buat geometry heart sederhana
      const shape = new THREE.Shape();
      shape.moveTo(0, 0.5);
      shape.bezierCurveTo(0, 0.5, -0.5, 0.5, -0.5, 0);
      shape.bezierCurveTo(-0.5, -0.5, 0, -0.5, 0, -0.2);
      shape.bezierCurveTo(0, -0.5, 0.5, -0.5, 0.5, 0);
      shape.bezierCurveTo(0.5, 0.5, 0, 0.5, 0, 0.5);

      const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 });
      const material = new THREE.MeshPhongMaterial({ color: 0xff3366, shininess: 100 });
      const mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      // Lighting
      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);

      // Animation loop
      function animate() {
        animationId = requestAnimationFrame(animate);
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      animate();
    }

    init();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      if (renderer) {
        renderer.dispose();
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "400px", height: "400px", margin: "0 auto" }} />;
}

export default Heart3D;
