import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    boyut: '',
    hamur: '',
    ekstralar: [],
    not: '',
    adet: 1,
  });

  const pizzaFiyat = 85.5;
  const ekstraFiyat = 5;

  const ekstraMalzemeler = [
    'Pepperoni', 'Sosis', 'Kavurma', 'Jalapeno',
    'Domates', 'Mısır', 'Ananas', 'Kaşar',
    'Biber', 'Sucuk', 'Tavuk', 'Sarmısak'
  ];

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        ekstralar: checked
          ? [...prev.ekstralar, value]
          : prev.ekstralar.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCountChange = (tip) => {
    setFormData((prev) => ({
      ...prev,
      adet: tip === 'artir' ? prev.adet + 1 : Math.max(1, prev.adet - 1),
    }));
  };

  const toplamEkstra = formData.ekstralar.length * ekstraFiyat;
  const toplam = (pizzaFiyat + toplamEkstra) * formData.adet;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.boyut || !formData.hamur || formData.ekstralar.length < 4) {
      return;
    }

    const enrichedData = {
      ...formData,
      toplamTutar: toplam.toFixed(2),

    };

    axios.post(
  'https://reqres.in/api/pizza',
  enrichedData,
  {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  }
)
.then(response => {
  console.log('Sunucudan gelen yanıt:', response.data);
  history.push('/confirmation', { siparis: response.data });
})
.catch(error => {
  console.warn('Hata oluştu:', error);
});
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="header-top">
          <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="header-logo" />
        </div>
        <div className="header-bottom"></div>
      </div>

      <div className="order-container">
        <h2 className="order-title">Position Absolute Acı Pizza</h2>
        <p className="order-price">{pizzaFiyat.toFixed(2)}₺</p>
        <p className="order-desc">
          Frontend dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
          geleneksel olarak odun ateşinde yüksek sıcaklıkta pişirilen İtalyan kökenli lezzetli bir yemektir.
        </p>

        <Form onSubmit={handleSubmit}>
          <h5 className="section-title">Boyut Seç *</h5>
          <div className="size-options">
            {['S', 'M', 'L'].map((b) => (
              <FormGroup check key={b}>
                <Input type="radio" name="boyut" value={b} onChange={handleChange} />
                <Label check>{b}</Label>
              </FormGroup>
            ))}
          </div>

          <div className="hamur-wrapper">
            <Label className="fw-bold" htmlFor="hamur">Hamur Seç *</Label>
            <Input
              type="select"
              name="hamur"
              className="hamur-select"
              onChange={handleChange}
            >
              <option value="">Seçiniz</option>
              <option>İnce</option>
              <option>Normal</option>
              <option>Kalın</option>
            </Input>
          </div>

          <h5 className="section-title">Ek Malzemeler (5₺):</h5>
          <h6 className="ekstra-desc">
            En az 4 en fazla 10 malzeme seçmelisin.</h6>
          <Row>
            {ekstraMalzemeler.map((ekstra) => (
              <Col xs="6" md="4" key={ekstra}>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    name="ekstralar"
                    value={ekstra}
                    onChange={handleChange}
                  />
                  <Label check>{ekstra}</Label>
                </FormGroup>
              </Col>
            ))}
          </Row>

          <FormGroup>
            <h5>Sipariş Notu</h5>
            <Input
              type="text"
              name="not"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.not}
              onChange={handleChange}
            />
          </FormGroup>

          <div className="adet-wrapper">
            <Button color="secondary" onClick={() => handleCountChange('azalt')}>-</Button>
            <span className="mx-3 fs-5">{formData.adet}</span>
            <Button color="secondary" onClick={() => handleCountChange('artir')}>+</Button>
          </div>

          <div className="fiyat-wrapper">
            <p>Sipariş Toplamı</p>
            <p>Seçimler: {toplamEkstra}₺</p>
            <h5><strong>Toplam: {toplam.toFixed(2)}₺</strong></h5>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              color="warning"
              className="siparis-btn"
              disabled={!formData.boyut || !formData.hamur || formData.ekstralar.length < 4}
            >
              SİPARİŞ VER
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default OrderForm;
