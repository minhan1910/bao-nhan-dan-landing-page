const eMagazineItems = document.querySelectorAll(
  ".e-magazine-content-left .e-magazine-item"
);

Array.from(eMagazineItems).forEach(eMagazineItem => {
    const eMagazineThumb = eMagazineItem.querySelector('.e-magazine-thumb');
    const eMagazineLink = eMagazineItem.querySelector('.e-magazine-title__left a');

    const res = eMagazineThumb.clientHeight + eMagazineLink.clientHeight;

    eMagazineItem.style.height = `${res}px`;

    // console.log(eMagazineItem.style.height);
});
