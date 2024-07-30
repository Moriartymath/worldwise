import Section from "../../components/Section/Section";
import pricingImage from "../../assets/pricing.jpg";

function Pricing() {
  return (
    <Section
      title={`Simple Pricing.
              Just $9/month.`}
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vitae. Hic quaerat blanditiis iusto recusandae maxime harum illum quis, libero sed, eveniet, nam excepturi labore vel dignissimos ex esse debitis!"
      image={pricingImage}
      reversePos={true}
    />
  );
}

export default Pricing;
