import React, { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

CustomTabs.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.instanceOf(Array).isRequired,
};

function CustomTabs({ activeTab, children, ...props }) {
  const [key, setKey] = useState(activeTab);

  function onClickTabItem(tab) {
    setKey(tab);
  }

  return (
    <section className="content">
      <Tab.Container
        id="content__tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <div className="content__head">
          <div className="container">
            <Row>
              <Col xs={12}>
                <h2 className="content__title">New items</h2>

                <Nav varian="tabs" className="content__tabs">
                  {children.map((child, index) => {
                    const { label } = child.props;
                    return (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={label}>{label}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>

                {/* <!-- content mobile tabs nav --> */}
                <div className="content__mobile-tabs" id="content__mobile-tabs">
                  <div
                    className="content__mobile-tabs-btn dropdown-toggle"
                    role="navigation"
                    id="mobile-tabs"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <input type="button" value="New items" />
                    <span></span>
                  </div>

                  <div
                    className="content__mobile-tabs-menu dropdown-menu"
                    aria-labelledby="mobile-tabs"
                  >
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="1-tab"
                          data-toggle="tab"
                          href="#tab-1"
                          role="tab"
                          aria-controls="tab-1"
                          aria-selected="true"
                        >
                          NEW RELEASES
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="2-tab"
                          data-toggle="tab"
                          href="#tab-2"
                          role="tab"
                          aria-controls="tab-2"
                          aria-selected="false"
                        >
                          MOVIES
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="3-tab"
                          data-toggle="tab"
                          href="#tab-3"
                          role="tab"
                          aria-controls="tab-3"
                          aria-selected="false"
                        >
                          TV SERIES
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="4-tab"
                          data-toggle="tab"
                          href="#tab-4"
                          role="tab"
                          aria-controls="tab-4"
                          aria-selected="false"
                        >
                          CARTOONS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- end content mobile tabs nav --> */}
              </Col>
            </Row>
          </div>
        </div>

        <div className="container">
          {/* <!-- content tabs --> */}
          <Tab.Content>
            {children.map((child, index) => {
              const { label } = child.props;
              return (
                <Tab.Pane eventKey={label} key={index}>
                  {child.props.children}
                </Tab.Pane>
              );
            })}
          </Tab.Content>
          {/* <!-- end content tabs --> */}
        </div>
      </Tab.Container>
    </section>
  );
}

CustomTabs.propTypes = {};

export default CustomTabs;
