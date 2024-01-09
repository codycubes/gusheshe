import React, { useEffect, useRef, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, ContactShadows, Environment,  Lightformer, Html, useProgress, PerformanceMonitor } from '@react-three/drei';
import { animate, useMotionValue } from 'framer-motion';
import './App.css';
import { Gusheshe } from './Components/Gusheshe/Gusheshe';
import { Underlay } from './Underlay';
import { Customize } from './Components/Customize/Customize';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';




function App() {

  const ref = useRef();
  const cameraRef = useRef();
  const [cameraPosition, setCameraPosition] = useState([4, 0, 0]);
  const [degraded, degrade] = useState(false)
  // const navigate = useNavigate();

  const handleButtonClick = () => {
    gsap.to(cameraRef.current.position, {
      duration: 1,
      x: 3,
      y: 0.5,
      z: 2.5,
      ease: 'power3.in',
    });

    setCameraPosition([2, 2, 2]);


  };

  const handleButtonClose = () => {
    gsap.to(cameraRef.current.position, {
      duration: 1,
      x: 4,
      y: 0,
      z: 0,
      ease: 'power3.in',
    });
    // setCameraPosition([4, 0, 0]);
  };



  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust field of view based on width
      if (width < 744) {
        cameraRef.current.fov = 70; // Set your desired FOV for small screens
        cameraRef.current.position.y = 3;
      } else {
        cameraRef.current.fov = 56; // Set your desired FOV for larger screens
      }

      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const [showFirstMesh, setShowFirstMesh] = useState(true);
  const [showSecondMesh, setShowSecondMesh] = useState(false);

  // const [numPages, setNumPages] = useState(3);

  const handleToggleFirstMesh = () => {
    setShowFirstMesh(true);
    setShowSecondMesh(false);
  };

  const handleToggleSecondMesh = () => {
    setShowSecondMesh(true);
    setShowFirstMesh(false);
  };


  

  return (
    <>
      <div className='container' ref={ref}>

      <Router>
          <Routes>
            <Route path='/' element={<Underlay handleButtonClick={handleButtonClick} />} />
            <Route path='/Components/Customize' 
            element={<Customize 
            handleButtonClose={handleButtonClose}  
            onToggleFirstMesh={handleToggleFirstMesh} 
            onToggleSecondMesh={handleToggleSecondMesh}/>} />

          </Routes>
        </Router>
   
        <Canvas gl={{ toneMappingExposure: 0.8 }} eventSource={ref} eventPrefix='client'>
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={1} />
        <spotLight intensity={2} angle={0.1} penumbra={1} position={[0, 5, -5]} castShadow />
   
          <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
          <PerformanceMonitor onDecline={() => degrade(true)} />
          {/* <OrbitControls /> */}
  
          

          <PerspectiveCamera
            makeDefault
            position={cameraPosition}
            fov={56}
            ref={cameraRef}
            zoom={0.85}
            minPolarAngle={0} 
            // rotation={Math.PI / 2.25}
            // rotation={[0, Math.PI / 2, 0]}
            

          />
          <Environment preset="city" />
          {/* <Environment files={"/meadow_2k.hdr"} /> */}



          <ContactShadows resolution={1024} frames={1} scale={50} blur={0.2} opacity={1} far={20} />
          <Gusheshe rotation={[0, 0, 0]} scale={1} showFirstMesh={showFirstMesh} showSecondMesh={showSecondMesh} />
          </Suspense>
        </Canvas>


   
      </div>
    </>
  );
}


function Loader() {
  const { progress } = useProgress();
  const roundedProgress = Math.floor(progress);

  return (
    <Html center className="Loader" style={{ color: 'black' }}>
      {roundedProgress}% 
    </Html>
  );
}



export default App;


