import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
import './Blob/style.css'

export default function Home() {
  return (
    <div className="blobContainer">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Blob />
      </Canvas>
    </div>
  );
}