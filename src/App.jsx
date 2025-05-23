import "./css/style (1).css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    import("./js/gsap.min.js");
    import("./js/MeshSurfaceSampler.js");
    import("./js/OBJLoader.js");
    import("./js/script (1).js");
    import("./js/simplex-noise.js");
    import("./js/three.min.js");
    import("./js/TrackballControls.js");
  }, []);

  return <div>{/* Konten aplikasi */}</div>;
}

export default App;
