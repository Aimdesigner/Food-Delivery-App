import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Burger from "../../assets/hero/Hero-Dish-2.png"
import { Link } from 'react-router-dom'

function Section1() {
    return (
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <div className="position-relative">
                            <img src={Burger} className='img-fluid' alt="Hero" />
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg">$6.99</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="hero_text text_center">
                            <h1 className="">Savor Flavors <span>For Every Celebration</span></h1>
                            <h2 className="">Tasty Meals for Every Mood & Moment</h2>
                            <p className='pt-2 pb-4'>Craving something tasty? Explore a wide variety of cuisines from top restaurants in your area. Whether it’s lunch, dinner, or a late-night snack, we deliver fresh and hot meals straight to your doorstep—quick, easy, and hassle-free.</p>
                        </div>

                        

                        <Link to="/" className="btn order_now">
                            Order Now
                        </Link>
                        

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1