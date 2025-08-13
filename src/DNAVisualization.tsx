import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Play, Pause, ZoomIn, ZoomOut, Info } from 'lucide-react';

interface DNAVisualizationProps {
  selectedGenes?: string[];
}

export default function DNAVisualization({ selectedGenes = [] }: DNAVisualizationProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const dnaGroupRef = useRef<THREE.Group>();
  const animationIdRef = useRef<number>();
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const [zoom, setZoom] = useState(1);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00ff88, 0.6, 50);
    pointLight1.position.set(10, 0, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff0088, 0.6, 50);
    pointLight2.position.set(-10, 0, 10);
    scene.add(pointLight2);

    // Create DNA double helix
    const dnaGroup = new THREE.Group();
    dnaGroupRef.current = dnaGroup;
    scene.add(dnaGroup);

    // DNA parameters
    const helixRadius = 2;
    const helixHeight = 20;
    const turns = 4;
    const basePairs = 80;

    // Materials
    const backboneMaterial1 = new THREE.MeshPhongMaterial({ 
      color: 0x00ff88, 
      shininess: 100,
      transparent: true,
      opacity: 0.8
    });
    const backboneMaterial2 = new THREE.MeshPhongMaterial({ 
      color: 0xff0088, 
      shininess: 100,
      transparent: true,
      opacity: 0.8
    });

    // Base pair materials (A-T, G-C)
    const baseMaterials = {
      A: new THREE.MeshPhongMaterial({ color: 0xff4444 }), // Adenine - Red
      T: new THREE.MeshPhongMaterial({ color: 0x4444ff }), // Thymine - Blue
      G: new THREE.MeshPhongMaterial({ color: 0x44ff44 }), // Guanine - Green
      C: new THREE.MeshPhongMaterial({ color: 0xffff44 })  // Cytosine - Yellow
    };

    // Create backbone spheres and base pairs
    const backboneGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const baseGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const bondGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1, 8);

    for (let i = 0; i < basePairs; i++) {
      const t = i / basePairs;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * helixHeight;

      // First strand
      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;
      
      const backbone1 = new THREE.Mesh(backboneGeometry, backboneMaterial1);
      backbone1.position.set(x1, y, z1);
      backbone1.castShadow = true;
      dnaGroup.add(backbone1);

      // Second strand (opposite)
      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;
      
      const backbone2 = new THREE.Mesh(backboneGeometry, backboneMaterial2);
      backbone2.position.set(x2, y, z2);
      backbone2.castShadow = true;
      dnaGroup.add(backbone2);

      // Base pairs (every 4th position)
      if (i % 4 === 0) {
        // Random base pair (A-T or G-C)
        const isAT = Math.random() > 0.5;
        const base1Type = isAT ? 'A' : 'G';
        const base2Type = isAT ? 'T' : 'C';

        // Base 1
        const base1 = new THREE.Mesh(baseGeometry, baseMaterials[base1Type as keyof typeof baseMaterials]);
        base1.position.set(x1 * 0.7, y, z1 * 0.7);
        base1.castShadow = true;
        dnaGroup.add(base1);

        // Base 2
        const base2 = new THREE.Mesh(baseGeometry, baseMaterials[base2Type as keyof typeof baseMaterials]);
        base2.position.set(x2 * 0.7, y, z2 * 0.7);
        base2.castShadow = true;
        dnaGroup.add(base2);

        // Hydrogen bond between bases
        const bond = new THREE.Mesh(bondGeometry, new THREE.MeshPhongMaterial({ 
          color: 0xcccccc, 
          transparent: true, 
          opacity: 0.6 
        }));
        bond.position.set((x1 * 0.7 + x2 * 0.7) / 2, y, (z1 * 0.7 + z2 * 0.7) / 2);
        bond.lookAt(new THREE.Vector3(x2 * 0.7, y, z2 * 0.7));
        bond.rotateX(Math.PI / 2);
        bond.scale.y = Math.sqrt((x1 * 0.7 - x2 * 0.7) ** 2 + (z1 * 0.7 - z2 * 0.7) ** 2);
        dnaGroup.add(bond);
      }

      // Backbone connections
      if (i > 0) {
        const prevAngle = (i - 1) / basePairs * Math.PI * 2 * turns;
        const prevY = ((i - 1) / basePairs - 0.5) * helixHeight;
        
        // Connection for first strand
        const prevX1 = Math.cos(prevAngle) * helixRadius;
        const prevZ1 = Math.sin(prevAngle) * helixRadius;
        
        const connection1 = new THREE.Mesh(bondGeometry, backboneMaterial1);
        connection1.position.set((x1 + prevX1) / 2, (y + prevY) / 2, (z1 + prevZ1) / 2);
        connection1.lookAt(new THREE.Vector3(x1, y, z1));
        connection1.rotateX(Math.PI / 2);
        connection1.scale.y = Math.sqrt((x1 - prevX1) ** 2 + (y - prevY) ** 2 + (z1 - prevZ1) ** 2);
        dnaGroup.add(connection1);

        // Connection for second strand
        const prevX2 = Math.cos(prevAngle + Math.PI) * helixRadius;
        const prevZ2 = Math.sin(prevAngle + Math.PI) * helixRadius;
        
        const connection2 = new THREE.Mesh(bondGeometry, backboneMaterial2);
        connection2.position.set((x2 + prevX2) / 2, (y + prevY) / 2, (z2 + prevZ2) / 2);
        connection2.lookAt(new THREE.Vector3(x2, y, z2));
        connection2.rotateX(Math.PI / 2);
        connection2.scale.y = Math.sqrt((x2 - prevX2) ** 2 + (y - prevY) ** 2 + (z2 - prevZ2) ** 2);
        dnaGroup.add(connection2);
      }
    }

    // Animation loop
    const animate = () => {
      if (isPlaying && dnaGroupRef.current) {
        dnaGroupRef.current.rotation.y += rotationSpeed;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, []);

  // Update animation based on state
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 15 / zoom;
    }
  }, [zoom]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetRotation = () => {
    if (dnaGroupRef.current) {
      dnaGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  const adjustZoom = (delta: number) => {
    setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const adjustSpeed = (delta: number) => {
    setRotationSpeed(prev => Math.max(0, Math.min(0.05, prev + delta)));
  };

  return (
    <div className="relative w-full h-full min-h-[600px] bg-black rounded-xl overflow-hidden">
      {/* 3D DNA Visualization */}
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Controls */}
      <div className="absolute top-4 left-4 flex flex-col space-y-2">
        <button
          onClick={togglePlayPause}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        
        <button
          onClick={resetRotation}
          className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
          title="Reset Rotation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => adjustZoom(0.2)}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => adjustZoom(-0.2)}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
          title="Toggle Info"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Speed Control */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-lg p-3">
        <div className="text-white text-sm mb-2">Rotation Speed</div>
        <input
          type="range"
          min="0"
          max="0.05"
          step="0.005"
          value={rotationSpeed}
          onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
          className="w-24"
        />
      </div>

      {/* Info Panel */}
      {showInfo && (
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white rounded-lg p-4 max-w-sm">
          <h3 className="font-semibold mb-2">DNA Double Helix</h3>
          <div className="text-sm space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Adenine (A)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Thymine (T)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Guanine (G)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Cytosine (C)</span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded"></div>
                <span>Sugar-phosphate backbone</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-400 rounded"></div>
                <span>Complementary strand</span>
              </div>
            </div>
          </div>
          {selectedGenes.length > 0 && (
            <div className="mt-3 pt-2 border-t border-gray-600">
              <div className="text-xs text-gray-300">Selected Genes:</div>
              <div className="text-xs">{selectedGenes.join(', ')}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}