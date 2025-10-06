import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const history = useHistory();

  const goToOrderForm = () => {
    history.push('/order');
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="hero-logo" />
          <div className="hero-subtitle">fırsatı kaçırma</div>
          <h1 className="hero-heading">
            KOD ACIKTIRIR<br />PİZZA, DOYURUR
          </h1>
          <button className="hero-button" onClick={goToOrderForm}>Acıktım</button>
        </div>
      </section>

      <nav className="category-bar">
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/1.svg" alt="Ramen" className="category-icon" />
          <div>Ramen</div>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" className="category-icon" />
          <div>Pizza</div>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" className="category-icon" />
          <div>Burger</div>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" className="category-icon" />
          <div>Kızartmalar</div>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" className="category-icon" />
          <div>Fast food</div>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/6.svg" alt="İçecek" className="category-icon" />
          <div>İçecek</div>
        </div>
      </nav>

      <section className="campaign-cards">
        <div className="campaign-left">
          <div className="campaign-left-title">Özel Lezzetus</div>
          <div className="campaign-left-desc">Position Absolute Acı Burger</div>
          <button className="campaign-button">SİPARİŞ VER</button>
        </div>
        
        <div className="campaign-right">
          <div className="campaign-card dark">
            <div>
              <div className="campaign-card-title">Hackathlon Burger Menü</div>
              <button className="campaign-button small">SİPARİŞ VER</button>
            </div>
          </div>
          <div className="campaign-card light">
            <div>
              <div className="campaign-card-title highlight">Çooook hızlı<br />npm gibi kurye</div>
              <button className="campaign-button small">SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>

      <div className='menu-subtitle'>en çok paketlenen menüler</div>
      <div className='menu-title'>Acıktıran Kodlara Doyuran Lezzetler</div>

      <div className="menu-filters">
        <button className="filter-button">
          <img src="/images/iteration-2-images/icons/1.svg" alt="Ramen" className="menu-filters-icon" />Ramen</button>
        <button className="filter-button ">
          <img src="/images/iteration-2-images/icons/2.svg" alt="Ramen" className="menu-filters-icon" />Pizza</button>
        <button className="filter-button">
          <img src="/images/iteration-2-images/icons/3.svg" alt="Ramen" className="menu-filters-icon" />Burger</button>
        <button className="filter-button">
          <img src="/images/iteration-2-images/icons/4.svg" alt="Ramen" className="menu-filters-icon" />French fries</button>
        <button className="filter-button">
          <img src="/images/iteration-2-images/icons/5.svg" alt="Ramen" className="menu-filters-icon" />Soft drinks</button>
      </div>

      <section className="product-cards">
        <div className="product-card">
          <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" className="product-img" />
          <div className="product-name">Terminal Pizza</div>
          <div className="product-rating">4.9 (200)</div>
          <div className="product-price">60₺</div>
        </div>
        <div className="product-card">
          <img src="/images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" className="product-img" />
          <div className="product-name">Position Absolute Acı Pizza</div>
          <div className="product-rating">4.9 (829)</div>
          <div className="product-price">85₺</div>
        </div>
        <div className="product-card">
          <img src="/images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" className="product-img" />
          <div className="product-name">useEffect Tavuklu Burger</div>
          <div className="product-rating">4.9 (492)</div>
          <div className="product-price">75₺</div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <div className="footer-title">Teknolojik Yemekler</div>
            <div
             className="footer-contact">
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Logo" className="footer-logo" />341 Londonderry Road, İstanbul Türkiye</div>
            <div className="footer-contact">
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Logo" className="footer-logo" />aciktim@teknolojikyemekler.com</div>
            <div className="footer-contact">
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Logo" className="footer-logo" />+90 216 123 45 67</div>
          </div>
          <div>
            <div className="footer-subtitle">Sıcak Menüler</div>
            <div className="footer-menu">
            <div>Terminal Pizza</div>
            <div>5 Kişilik Hackathlon Pizza</div>
            <div>useEffect Tavuklu Pizza</div>
            <div>Bayer Console Frosty</div>
            <div>Testler Çeşitli Hutbu Burger</div>
            <div>Position Absolute Acı Burger</div>
            </div>
          </div>
          <div>
            <div className="footer-subtitle">Instagram</div>
            <div className="footer-insta">
              <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Insta1" className="footer-insta-img" />
              <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Insta2" className="footer-insta-img" />
              <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Insta3" className="footer-insta-img" />
              <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Insta4" className="footer-insta-img" />
              <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Insta5" className="footer-insta-img" />
              <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Insta6" className="footer-insta-img" />
            </div>
          </div>
        </div>
        <div className="footer-copy">© 2023 Teknolojik Yemekler.</div>
      </footer>
    </div>
  );
}
