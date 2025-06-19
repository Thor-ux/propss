import React from 'react';
import PropTypes from 'prop-types';

const Listing = ({ items = [] }) => {
  const formatPrice = (price, currency_code) => {
    switch (currency_code) {
      case 'USD':
        return `${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const getQuantityLevel = (quantity) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    currency_code: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};

export default Listing;