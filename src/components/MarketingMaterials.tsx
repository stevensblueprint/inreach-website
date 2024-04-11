import React from 'react';
import styles from './MarketingMaterials.module.scss';
import englishImage from '/Users/krishmalik/Documents/inreach-website/src/app/images/english-images.png'; 
import spanishImage from '/Users/krishmalik/Documents/inreach-website/src/app/images/spanish-images.png'; 
import frenchImage from '/Users/krishmalik/Documents/inreach-website/src/app/images/french-images.png'; 
import russianImage from '/Users/krishmalik/Documents/inreach-website/src/app/images/russian-images.png';
import koreanImage from '/Users/krishmalik/Documents/inreach-website/src/app/images/korean-images.png';

const MarketingMaterials: React.FC = () => {
  return (
    <div className={styles.pageContainer}> {}
      <div className={styles.downloadContainer}>
        <h1 className={styles.title}>Download Free Images as Flyers or Web Banners!</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.downloadButton}>ENGLISH</button>
          <button className={styles.downloadButton}>SPANISH</button>
          <button className={styles.downloadButton}>FRENCH</button>
          <button className={styles.downloadButton}>RUSSIAN</button>
          <button className={styles.downloadButton}>KOREAN</button>
          <button className={styles.downloadButton}>LCR VOLUNTEERS</button>
        </div>
      </div>
      <p className={styles.textBelowBorder}>English</p>
      <div className={styles.imageContainer}>
        <img src={englishImage.src} alt="" className={styles.image} />
      </div>
      <p className={styles.textBelowBorder}>Español</p>
      <div className={styles.imageContainerTwo}>
        <img src={spanishImage.src} alt="" className={styles.image} />
      </div>
      <p className={styles.textBelowBorder}>Français</p>
      <div className={styles.imageContainerThree}>
        <img src={frenchImage.src} alt="" className={styles.image} />
      </div>
      <p className={styles.textBelowBorder}>Русский</p>
      <div className={styles.imageContainerFour}>
        <img src={russianImage.src} alt="" className={styles.image} />
      </div>
      <p className={styles.textBelowBorder}>한국어</p>
      <div className={styles.imageContainerFive}>
        <img src={koreanImage.src} alt="" className={styles.image} />
      </div>
    </div> 
  );
};

export default MarketingMaterials;
