import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BootstrapDetails />
    </div>
  );
}
function BootstrapDetails() {
  let priceList = [
    {
      cost: "Free",
      rate: "$0/month",
      user: "✔ Single User",
      storage: "✔ 5GB Storage",
      public: "✔ Unlimited Public Project",
      community: "✔ Community Access",
      private: "✖ Unlimited Private Project",
      support: "✖ Dedicated Phone Support",
      subdomain: "✖ Free Subdomain",
      status: "✖ Monthly Status Report",
    },
    {
      cost: "Plus",
      rate: "$3/month",
      user: "✔ 5 User",
      storage: "✔ 50GB Storage",
      public: "✔ Unlimited Public Project",
      community: "✔ Community Access",
      private: "✔ Unlimited Private Project",
      support: "✔ Dedicated Phone Support",
      subdomain: "✔ Free Subdomain",
      status: "✖ Monthly Status Report",
    },
    {
      cost: "Pro",
      rate: "$5/month",
      user: "✔ Unlimited Users",
      storage: "✔ 15GB Storage",
      public: "✔ Unlimited Public Project",
      community: "✔ Community Access",
      private: "✔ Unlimited Private Project",
      support: "✔ Dedicated Phone Support",
      subdomain: "✔ Free Subdomain",
      status: "✔ Monthly Status Report",
    },
  ];
  return (
    <div className="mapping">
      {priceList.map((mv) => (
        <Bootstrap priceList={mv} />
      ))}
    </div>
  );
}
function Bootstrap({ priceList }) {
  return (
    <div className="cart">
      <div className="price-cart">
        <div className="header">
          <h3 className="text-muted">{priceList.cost}</h3>
          <h2>{priceList.rate}</h2>
        </div>
        <hr />
        <div className="main">
          <p>{priceList.user}</p>
          <p>{priceList.storage}</p>
          <p>{priceList.public}</p>
          <p>{priceList.community}</p>
          <p>{priceList.private}</p>
          <p>{priceList.support}</p>
          <p>{priceList.subdomain}</p>
          <p>{priceList.status}</p>
        </div>
        <div className="button">
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
}
export default App;
