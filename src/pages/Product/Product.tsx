import aboutImage from "../../assets/product.jpg";
import Section from "../../components/Section/Section";

function Product() {
  return (
    <Section
      title="About WorldWide"
      text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quo
          exercitationem! Neque fuga voluptas doloremque nulla provident minus
          natus tempore eum saepe, culpa obcaecati dignissimos, accusantium quos
          facere corrupti at."
      image={aboutImage}
    />
  );
}

export default Product;
