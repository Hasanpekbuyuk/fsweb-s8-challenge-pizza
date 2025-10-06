import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();

  if (!location.state || !location.state.siparis) {
    return <Redirect to="/" />;
  }

  const { siparis } = location.state;

  return (
    <div className="order-confirmation-container">
      <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="hero-logo" />
      <h2>SİPARİŞ ALINDI</h2>

      <hr style={{ width: '60%', margin: '30px auto', borderColor: '#fff' }} />

      <h3>Position Absolute Acı Pizza</h3>

      <p>Boyut:<strong> {siparis.boyut}</strong></p>
      <p>Hamur:<strong>{siparis.hamur}</strong></p>
      <p>Ek Malzemeler: <strong>{siparis.ekstralar.join(', ')}</strong></p>

      <div className="summary-box">
        <h4>Sipariş Toplamı</h4>
        <div className="line">
          <span>Seçimler:</span>
          <span>{siparis.ekstralar.length * 5}₺</span>
        </div>
        <div className="line">
          <strong>Toplam:</strong>
          <strong>{siparis.toplamTutar}₺</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
