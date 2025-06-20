interface Item {
  listing_id: number;
  state: string;
  user_id: number;
  category_id: number;
  title: string;
  description: string;
  creation_tsz: number;
  ending_tsz: number;
  original_creation_tsz: number;
  last_modified_tsz: number;
  price: string;
  currency_code: string;
  quantity: number;
  sku: any[];
  tags: string[];
  category_path: string[];
  category_path_ids: number[];
  materials: string[];
  shop_section_id: number;
  featured_rank: number | null;
  state_tsz: number;
  url: string;
  views: number;
  num_favorers: number;
  shipping_template_id: number;
  processing_min: number;
  processing_max: number;
  who_made: string;
  is_supply: string;
  when_made: string;
  item_weight: number | null;
  item_weight_unit: string;
  item_length: number | null;
  item_width: number | null;
  item_height: number | null;
  item_dimensions_unit: string;
  is_private: boolean;
  MainImage?: {
    url_570xN?: string;
  };
}

interface ListingProps {
  items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const truncateTitle = (title: string): string => {
    return title.length > 50 ? title.substring(0, 50) + '...' : title;
  };

  const formatPrice = (price: string, currency_code: string): string => {
    switch (currency_code) {
      case 'USD': 
        return `${price}`;
      case 'EUR': 
        return `€${price}`;
      default: 
        return `${price} ${currency_code}`;
    }
  };

  const getQuantityLevel = (quantity: number): string => {
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
            <p className="item-title">{truncateTitle(item.title)}</p>
            <p className="item-price">
              {formatPrice(item.price, item.currency_code)}
            </p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
