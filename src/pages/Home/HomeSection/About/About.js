import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const About = () => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-20 p-5 mt-20'>
            <div className="about">
                <div className='flex  mb-10 justify-start items-center'>
                    <p className='mr-3 font-bold text-3xl text-blue-800 '>About Us</p> <span className='w-9/12'><hr /></span>
                </div>
                <div >
                    <div className='flex gap-10'>
                        <img className='w-1/2' src=" https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/blog-30-300x170.jpg" alt="" srcSet="" />
                        <img className='w-1/2' src="https://demo.proteusthemes.com/repairpress/wp-content/uploads/sites/27/2015/09/blog-20-300x170.jpg" alt="" srcSet="" />
                    </div>
                    <p className='mt-5 text-lg font-sans opacity-50'>
                        Sanctus dolore sit lorem invidunt consetetur. Et clita labore lorem erat sit elitr labore dolores. Tempor amet sed sed tempor. Voluptua eirmod consetetur labore elitr kasd diam dolor lorem et, sanctus et et ut kasd. Dolor dolore dolor eirmod accusam ut. Voluptua rebum lorem sea eos. Takimata et at no lorem labore erat at vero. Amet erat stet at dolore accusam at ipsum clita labore. Et est eirmod lorem et. Et invidunt et eirmod sit diam sea at eos sed. Stet vero amet et eirmod sed. Dolor accusam clita era
                        lorem duo no ea. Dolores sit labore dolor amet sed amet diam consetetur. Est et labore accusam
                    </p>
                    <button className='text-secondary font-bold text-xl'>Read More...</button>
                </div>

            </div>
            <div className="faq">
                <div><div className='flex  mb-10 justify-start items-center'>
                    <p className='mr-3 font-bold text-3xl text-blue-800 '>FAQ</p> <span className='w-9/12'><hr /></span>
                </div>
                </div>
                <Fragment>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            React vs. Angular vs. Vue?
                        </AccordionHeader>
                        <AccordionBody>
                            A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            How does prototypical inheritance work?
                        </AccordionHeader>
                        <AccordionBody>
                            Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            What is React JS?
                        </AccordionHeader>
                        <AccordionBody>
                            React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            What is closure in javascript?
                        </AccordionHeader>
                        <AccordionBody>
                            A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                        <AccordionHeader onClick={() => handleOpen(5)}>
                            How does prototypical inheritance work?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <br />
                    <Link to='/blog' className='text-secondary mt-5 shadow-lg p-2 font-bold border text-xl'>Read More...</Link>
                </Fragment>


            </div>
        </section>
    );
};

export default About;