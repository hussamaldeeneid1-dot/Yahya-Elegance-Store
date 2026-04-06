import useReveal from "../hooks/useReveal";
import ProductCard from "./ProductCard";

const Section = ({ title, items, bg, addToCart }) => {
  const ref = useReveal();

  return (
    <section ref={ref} className={`section ${bg} section-spacing reveal mt-20`}>
      <div className="container-luxury">
        <h2 className="heading-lg gold-text mb-10 stagger">{title}</h2>

        <div className="divider mb-10 stagger"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((p, index) => (
            <div
              key={p.id}
              className="stagger"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={p} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
