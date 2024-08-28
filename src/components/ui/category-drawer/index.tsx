import React, { useState, useEffect } from "react";
import { Button, Drawer, Slider } from "antd";
import "./style.scss";
import { RightOutlined, SlidersOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isButtonEnabled, setIsButtonEnabled] = useState(windowWidth <= 375);
  const [size, setSize] = useState("small");
  const showDrawer = () => {
    if (isButtonEnabled) {
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsButtonEnabled(newWidth <= 375);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Button onClick={showDrawer} disabled={!isButtonEnabled}>
        <SlidersOutlined />
      </Button>
      <Drawer
        placement="right"
        title="Filter"
        onClose={onClose}
        open={open}
      >
        <div className="filter-leftt">
          <div className="filter-icon">
            <h3>Filters</h3>
            <p>
              <SlidersOutlined />
            </p>
          </div>
          <div className="filter-category">
            <ul>
              <li>
                <p>T-shirts</p>
                <p>
                  <RightOutlined />
                </p>
              </li>
              <li>
                <p>Shorts</p>
                <p>
                  <RightOutlined />
                </p>
              </li>
              <li>
                <p>Shirts</p>
                <p>
                  <RightOutlined />
                </p>
              </li>
              <li>
                <p>Hoodie</p>
                <p>
                  <RightOutlined />
                </p>
              </li>
              <li>
                <p>Jeans</p>
                <p>
                  <RightOutlined />
                </p>
              </li>
            </ul>
          </div>
          <h4>Price</h4>
          <Slider
            className="slider"
            range
            step={1}
            tooltipVisible={false} // Disable tooltip
          />

          <div className="colors-wrapper">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="sizes">
            <p
              onClick={() => setSize("small")}
              className={size == "small" ? "size-active" : ""}
            >
              Small
            </p>
            <p
              onClick={() => setSize("medium")}
              className={size == "medium" ? "size-active" : ""}
            >
              Medium
            </p>
            <p
              onClick={() => setSize("large")}
              className={size == "large" ? "size-active" : ""}
            >
              Large
            </p>
            <p
              onClick={() => setSize("x-large")}
              className={size == "x-large" ? "size-active" : ""}
            >
              X-Large
            </p>
          </div>

          <div className="dress">
            <h3>Dress Style</h3>
            <ul>
              <li>Casual</li>
              <li>Formal</li>
              <li>GymParty</li>
              <li></li>
            </ul>
          </div>

          <button>Apply Filter</button>
        </div>
      </Drawer>
    </>
  );
};

export default App;
