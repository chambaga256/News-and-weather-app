import Product from "./News";

function ProductFeed({ products}) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .map(({ id,  title, summary, media,link, published_date , country }) => (
          <Product
            key={id}
            title={title}
            summary={summary}
            media={media}
            link={link}
            published_date={published_date}
            country={country}
          />
        ))}

        </div>
  );
}

export default ProductFeed;
