import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Ecran 30 cm",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/9b5846b1157b296c3012f16c817f70ad1929fa6f/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Electrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }
  ]
}

function Catalog() {

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}

export default Catalog