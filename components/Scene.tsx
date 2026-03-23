'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { 
  Mesh, 
  Group, 
  Fog, 
  AmbientLight, 
  PointLight, 
  SphereGeometry, 
  TorusGeometry, 
  MeshStandardMaterial, 
  MeshBasicMaterial,
  Timer
} from 'three';

function Globe() {
  const meshRef = useRef<Mesh>(null);
  const timer = useMemo(() => new Timer(), []);
  
  useFrame(() => {
    timer.update();
    const delta = timer.getDelta();
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.8, 64, 64]} />
      <meshStandardMaterial 
        color="#0000" 
        wireframe 
        transparent 
        opacity={0.08}
        emissive="#ffffff"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function FloatingRings() {
  const groupRef = useRef<Group>(null);
  const timer = useMemo(() => new Timer(), []);
  
  useFrame(() => {
    timer.update();
    const delta = timer.getDelta();
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[4.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <fog attach="fog" args={['#030303', 5, 12]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#38bdf8" />
      <Globe />
      <FloatingRings />
    </Canvas>
  );
}
