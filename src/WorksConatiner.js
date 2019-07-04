//Full
const imagesFull = require.context('./Assets/Works', true);
const imageFull = (name) => imagesFull(name, true)

// Thumbail

const imagesThumb = require.context('./Assets/Works/thumbnail', true);
const imageThumb = (name) => imagesThumb(name, true)


const Work = [
  {
    title: "B Paper Italia",
    img: imageFull('./B_papper.webp'),
    thumb: imageThumb('./b_paper_Italia.jpg')
  }, {
    title: "Dxm Italia",
    img: imageFull('./Dxm.webp'),
    thumb: imageThumb('./dxm_Italia.jpg')
  }, {
    title: "Fd Auto",
    img: imageFull('./Fd_auto.webp'),
    thumb: imageThumb('./fd_auto.jpg')
  }, {
    title: "Natura Spa",
    img: imageFull('./Natura_spa.webp'),
    thumb: imageThumb('./naturaspa.jpg')
  }, {
    title: "Tippografia Rufo",
    img: imageFull('./Tippografia.webp'),
    thumb: imageThumb('./tipografiaruffo.jpg')
  }, {
    title: "Aeg",
    img: imageFull('./Aeg.webp'),
    thumb: imageThumb('./aeg.jpg')
  }, {
    title: "Spektra Srl",
    img: imageFull('./Spektra.webp'),
    thumb: imageThumb('./spektra.jpg')
  }, {
    title: "Mr Disinfestazione",
    img: imageFull('./Disinfestazione.webp'),
    thumb: imageThumb('./mr_disinfestazione.jpg')
  }, {
    title: "Luxury Homes",
    img: imageFull('./Luxury_homes.webp'),
    thumb: imageThumb('./luxuryhomes.jpg')
  }, {
    title: "Nuova Scn",
    img: imageFull('./Nuova_scn.webp'),
    thumb: imageThumb('./nuovascn.jpg')
  }, {
    title: "Bottacchiari",
    img: imageFull('./Bottacchiari.webp'),
    thumb: imageThumb('./bottacchiari.jpg')
  }, {
    title: "Corradimpianti",
    img: imageFull('./Corradimpianti.webp'),
    thumb: imageThumb('./corradimpianti.jpg')
  }
];

export {Work};