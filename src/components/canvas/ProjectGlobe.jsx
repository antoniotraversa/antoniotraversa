import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";

const ProjectGlobe = () => {
  const [textures, setTextures] = useState([]);

  useEffect(() => {
    // carica le immagini come texture cicliche
    const imgs = [
      "/assets/images/2.png",
      "/assets/images/3.png",
      "/assets/images/4.png"
    ];
    setTextures(imgs);
  }, []);

  return (
    <Globe
  globeImageUrl={'/assets/images/2.png'} // texture base
  backgroundImageUrl={null}
  showGlobe={true}
  animateIn={true}
  globeCloudsTextureUrl={null}
  width={600}
  height={600}
  pointsData={textures.map((t, i) => ({ lat: i * 30 - 60, lng: i * 60 - 180, img: t }))}
  pointLat={(d) => d.lat}
  pointLng={(d) => d.lng}
  pointColor={() => 'white'}
  pointAltitude={0.02}
  pointRadius={0.3}
  pointLabel={(d) => `<img src="${d.img}" width="50" />`}
/>

  );
};

export default ProjectGlobe;
