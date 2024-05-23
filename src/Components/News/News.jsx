import React from "react";
import "./News.css";
import img6 from '../../Pics/p6.png'
import img7 from '../../Pics/p7.png'
import img8 from '../../Pics/p8.png'
import img9 from '../../Pics/p9.png'

const News = () => {
  return (
    <section className="news">
      <div className="news-header">
        <h2>Latest News</h2>
        <p className="subtitle">Integer Congue Elit</p>
      </div>
      <div className="news-container">
        <div className="news-card">
          <img src={img6} alt="News 1" />
          <div className="news-content">
            <div className="news-text">
              <h3>Curabitur Lorem Uism Quis</h3>
              <div className="news-meta">
                <span>Admin</span>
                <span>15</span>
              </div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames turpis egestas. Aenean non donec ...
              </p>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img src={img7} alt="News 2" />
          <div className="news-content">
            
            <div className="news-text">
              <h3>Curabitur Lorem Uism Quis</h3>
              <div className="news-meta">
                <span>Admin</span>
                <span>15</span>
              </div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames turpis egestas. Aenean non donec ...
              </p>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img src={img8} alt="News 3" />
          <div className="news-content">
            
            <div className="news-text">
              <h3>Curabitur Lorem Uism Quis</h3>
              <div className="news-meta">
                <span>Admin</span>
                <span>15</span>
              </div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames turpis egestas. Aenean non donec ...
              </p>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img src={img9} alt="News 4" />
          <div className="news-content">
            
            <div className="news-text">
              <h3>Curabitur Lorem Uism Quis</h3>
              <div className="news-meta">
                <span>Admin</span>
                <span>15</span>
              </div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames turpis egestas. Aenean non donec ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
