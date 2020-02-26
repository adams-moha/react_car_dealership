import React from "react";
import "./skills.styles.css";
import SkillItem from "./skill-item.component";
import SectionTitle from "../section-title/section-title.component";

const Skills = () => {
  return (
    <section className="skills py-5" id="skills">
      <div className="container">
        <SectionTitle title1="Why Choose" title2="Adams' Motors" />

        <div className="row">
          <SkillItem
            skillTitle="all brands"
            skillBody="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />

          <SkillItem
            skillTitle="Free Support"
            skillBody="Facere, in! Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <SkillItem
            skillTitle="Caring"
            skillBody="Hic labore fugiat commodi eius! Lorem ipsum dolor sit amet."
          />

          <SkillItem
            skillTitle="Caring"
            skillBody="Reiciendis alias, sit recusandae adipisci facilis mollitia ad optio."
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
