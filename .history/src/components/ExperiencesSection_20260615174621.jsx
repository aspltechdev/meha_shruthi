import { useEffect, useState } from "react";
import "./ExperiencesSection.css";
import backgroundImage from "../assets/back2.png";
import collabImage from "../assets/collab1.png";
import global from "../assets/global-performance.jpg";
import playback from "../assets/playback-singer.png";
import tv from "../assets/tv.png";
import orchestra from "../assets/orchestra.png";
import event from "../assets/events.png";

const experiences = [
  {
    id: "01",
    title: "Maestro Collaborations",
    description:
      "Privileged to perform alongside legendary icons including Maestro Ilaiyaraaja and special celebrations honoring Kamal Haasan.",
    image: collabImage,
  },

  {
    id: "02",
    title: "500+ Global Performances",
    description:
      "Performed across Canada, UK, Australia, Denmark, Switzerland, Singapore, Malaysia, Sri Lanka and numerous cities throughout India.",
    image: global,
  },

  {
    id: "03",
    title: "Playback Singing Career",
    description:
      "Contributed songs to Tamil and Kannada film industries, collaborating with renowned composers and production houses.",
    image: playback,
  },

  {
    id: "04",
    title: "Television Appearances",
    description:
      "Recognized through reality shows and television platforms, earning accolades for melody and folk music performances.",
    image: tv,
  },

  {
    id: "05",
    title: "Live Orchestra & Band Shows",
    description:
      "Lead vocalist for large-scale orchestra productions, performing with celebrated musicians and artists across South India.",
    image: orchestra,
  },

  {
    id: "06",
    title: "1000+ Premium Events",
    description:
      "Delivering unforgettable entertainment experiences through music, dance, comedy, stage productions and corporate events.",
    image: event,
  },
];
const ExperiencesSection = () => {
  const [visibleCards, setVisibleCards] =
    useState([]);

  const [heroVisible, setHeroVisible] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHeroVisible(true);
    }, 300);

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(
              entry.target.getAttribute(
                "data-index"
              )
            );

            if (entry.isIntersecting) {
              setVisibleCards((prev) =>
                prev.includes(index)
                  ? prev
                  : [...prev, index]
              );
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

    const cards =
      document.querySelectorAll(
        ".exp-card"
      );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section">

      <div className="exp-texture"></div>

      <div className="gold-glow gold-glow-1"></div>
      <div className="gold-glow gold-glow-2"></div>

      {/* HERO */}

      <div className="exp-header">

        <div className="hero-bg-art">
          <img
            src={backgroundImage}
            alt=""
            className="hero-bg-image"
          />
        </div>

        <div
          className={`header-content ${
            heroVisible ? "show" : ""
          }`}
        >

          <div className="header-ornament">
            <span></span>
            ✦
            <span></span>
          </div>

          

          <h2 className="exp-headline">
            THE SOUL OF
            <span>
              SOUTH INDIAN MUSIC
            </span>
          </h2>

          <p className="exp-subtitle">
            Experience the richness of
            Carnatic traditions through
            timeless performances,
            sacred rhythms and cultural
            celebrations that connect
            generations through music,
            devotion and artistry.
          </p>

          <div className="header-ornament bottom">
            <span></span>
            ❀
            <span></span>
          </div>

        </div>

      </div>

      {/* CARDS */}

      <div className="exp-container">

        {experiences.map(
          (item, index) => (
            <article
              key={item.id}
              data-index={index}
              className={`exp-card ${
                visibleCards.includes(
                  index
                )
                  ? "show"
                  : ""
              }`}
            >

             

              <div className="card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-image"
                />
              </div>

              <div className="card-content">

                <h3>
                  {item.title}
                </h3>

                

                <p>
                  {item.description}
                </p>

                

              </div>

            </article>
          )
        )}

      </div>

      <div className="exp-footer-ornament">
        <span></span>
        ✦ ❀ ✦
        <span></span>
      </div>

    </section>
  );
};

export default ExperiencesSection;