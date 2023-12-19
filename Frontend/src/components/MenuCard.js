import "./menuCard.css";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MenuCard() {
  const menu = [
    {
      image: require("../Shirts/3.webp"),
      category: "Shirts",
      items: [""],
    },
    {
      image: require("../dress/2.webp"),
      category: "Women Dress",
      items: [""],
    },
    {
      image: require("../Shoes/3.webp"), // Corrected the image path
      category: "Shoes",
      items: [""],
    },
    {
      image: require("../Hoodie/10.webp"),
      category: "Hoodies",
      items: [""],
    },

    {
      image: require("../Shorts/3.webp"),
      category: "Shorts",
      items: [""],
    },

    {
      image: require("../Trousers/1.webp"),
      category: "Trousers",
      items: [""],
    },

    {
      image: require("../Sunglasses/1.webp"),
      category: "Sunglasses",
      items: [""],
    },
    
    {
      image: require("../Gloves/3.webp"),
      category: "Gloves",
      items: [""],
    },
    
  ];

  return (
    <>
      <div className="row menu-card-row1">
        <div className="container menu-card-container">
          <div className="row row-cols-1 row-cols-md-3 menu-card-row-cols g-4">
            {menu.map((menuItem) => (
              <div className="col menu-card-col" key={menuItem.category}>
                <div className="card menu-card">
                  <img
                    className="menu-card-img"
                    src={menuItem.image}
                    alt={menuItem.category}
                  />
                  <div className="card-body menu-card-body">
                    <div className="menu-card-title-container">
                      <h5 className="card-title menu-card-title">
                        {menuItem.category}
                      </h5>
                    </div>
                    <div className="menu-card-text-container">
                      <p className="card-text menu-card-text">
                        All types of {menuItem.category.toLowerCase()} available.
                      </p>
                      <p className="card-text menu-card-text">
                        {menuItem.items.join(", ")}
                      </p>
                    </div>
                    <div className="menu-card-btn-container">
                      {menuItem.category === "Shirts" ? (
                        <Link to="/shirt-menu">
                          <button>View Menu</button>
                        </Link>
                      ) : menuItem.category === "Women Dress" ? (
                        <Link to="/dress-menu">
                          <button>View Menu</button>
                        </Link>
                      ) : menuItem.category === "Shoes" ? (
                        <Link to="/shoes-menu">
                          <button>View Menu</button>
                        </Link>
                      ) : menuItem.category === "Hoodies" ? (
                        <Link to="/hoodie-menu">
                          <button>View Menu</button>
                        </Link>
                      ) 
                      : menuItem.category === "Shorts" ? (
                        <Link to="/shorts-menu">
                          <button>View Menu</button>
                        </Link>
                      )
                      : menuItem.category === "Trousers" ? (
                        <Link to="/trousers-menu">
                          <button>View Menu</button>
                        </Link>
                      )
                      : menuItem.category === "Sunglasses" ? (
                        <Link to="/sunglasses-menu">
                          <button>View Menu</button>
                        </Link>
                      )
                     : menuItem.category === "Gloves" ? (
                        <Link to="/gloves-menu">
                          <button>View Menu</button>
                        </Link>
                      ): null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuCard;
