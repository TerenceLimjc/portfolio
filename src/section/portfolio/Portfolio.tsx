import PortfolioCards from "../../component/card/PortfolioCards";
import Title from "../../component/text/Title";

const Portfolio = () => {
  return (
    <div className="container">
      <div className='d-flex'>
        <div className='mx-auto'>
          <Title text="My Portfolio"/>
        </div>
      </div>
      <PortfolioCards/>
    </div>
  )
};

export default Portfolio;