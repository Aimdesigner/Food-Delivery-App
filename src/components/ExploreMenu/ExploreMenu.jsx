import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/assets";
import { Container, Row, Col } from "react-bootstrap";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <Container>
      <div className="explore_menu" id="explore_menu">
        <h1>
          Explore the Savoréa Menu – <br />
          Delight in Every Bite!
        </h1>
        <p className="explore_menu_text">
          Discover a world of flavors with Savoréa’s carefully curated menu.
          From sizzling appetizers to mouthwatering mains and decadent desserts,
          every dish is crafted to satisfy your cravings. Whether you’re in the
          mood for something comforting or adventurous, we’ve got the perfect
          bite waiting for you. Explore, indulge, and let the feast begin!
        </p>
        <div className="explore_menu_list">
          {menu_list.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className={
                category === item.menu_name
                  ? "explore_menu_list_item active"
                  : "explore_menu_list_item"
              }
            >
              <div className="explore_menu_image_container">
                <img className="" src={item.menu_image} alt={item.menu_name} />
              </div>

              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExploreMenu;
