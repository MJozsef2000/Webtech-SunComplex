import React from 'react';
import { GaleryContainer, GaleryH1, GaleryCard } from './GaleryElements';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
function importAll(r) {
  return r.keys().map(r);
}

const Inverterek = importAll(require.context('../../images/gallery/Inverterek', false, /\.(png|jpe?g|svg)$/));
const Parkok = importAll(require.context('../../images/gallery/parkok', false, /\.(png|jpe?g|svg)$/));
const Tetok = importAll(require.context('../../images/gallery/tetok', false, /\.(png|jpe?g|svg)$/));
const images = [];

for (const img of Tetok)
{
  images.push({original: img, thumbnail: img})
}

for (const img of Parkok)
{
  images.push({original: img, thumbnail: img})
}

for (const img of Inverterek)
{
  images.push({original: img, thumbnail: img})
}
const Galery = () => {
  return (
    <GaleryContainer id="galery">
      <GaleryCard>
        <GaleryH1> Galéria </GaleryH1>
        <ReactImageGallery items={images}/>
      </GaleryCard>
    </GaleryContainer>
  )
}

export default Galery