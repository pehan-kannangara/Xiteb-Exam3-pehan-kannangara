import React, { useState } from 'react';
import './Choose.css';

const Choose = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="choose-section">
            <div className="trusted-clients">
                <h2>Trusted Clients</h2>
                <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                <div className="testimonial">
                    <blockquote>
                        Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum.
                    </blockquote>
                    <div className="author">
                        <strong>JOHN DEO</strong>
                        <span>Managing Director</span>
                    </div>
                </div>
               
            </div>
            <div className="why-choose-us">
                <h2>Why Choose Us</h2>
                <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                <div className="accordion">
                    {accordionData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                                <h3>{item.title}</h3>
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && <div className="accordion-content">{item.content}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const accordionData = [
    {
        title: 'Dui ac hendrerit elementum quam ipsum auctor lorem',
        content: 'Content for first title.',
    },
    {
        title: 'Mauris vel magna a est lobortis volutpat',
        content: 'Content for second title.',
    },
    {
        title: 'Sed bibendum ornare lorem mauris feugiat suspendisse neque',
        content: 'Content for third title.',
    },
    {
        title: 'Nulla scelerisque dui hendrerit elementum quam',
        content: 'Content for fourth title.',
    },
];

export default Choose;
