import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <div className="stat-background">890</div>
                <div className="stat-content">
                    <h2>890</h2>
                    <p>Delivered packages</p>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-background">137</div>
                <div className="stat-content">
                    <h2>137</h2>
                    <p>Countries covered</p>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-background">740</div>
                <div className="stat-content">
                    <h2>740</h2>
                    <p>Tons of Goods</p>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-background">600</div>
                <div className="stat-content">
                    <h2>600</h2>
                    <p>Satisfied Clients</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
