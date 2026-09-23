import styles from './ResumeStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import {
  about,
  experience,
  education,
  certifications,
  techSkills,
  tools,
  languages,
} from '../../data/resume';

function TimelineItem({ title, subtitle, period, description }) {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.itemHeader}>
        <h3>{title}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      {description && <p className={styles.itemText}>{description}</p>}
    </li>
  );
}

function TagGroups({ groups }) {
  return (
    <div className={styles.toolGroups}>
      {groups.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>
          <ul className={styles.tags}>
            {group.items.map((item) => (
              <li key={item} className={styles.tag}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Resume() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <main id="resume" className={styles.container}>
      <nav className={styles.nav}>
        <a href="#" className={styles.back}>
          ← Back
        </a>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </nav>

      <header className={styles.header}>
        <h1>Adrien Payen</h1>
        <h2>AI &amp; Data Consultant</h2>
        <p className={styles.about}>{about}</p>
      </header>

      <section>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <ul className={styles.timeline}>
          {experience.map((job) => (
            <TimelineItem
              key={`${job.company}-${job.period}`}
              title={job.role}
              subtitle={job.company}
              period={job.period}
              description={job.description}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.timeline}>
          {education.map((school) => (
            <TimelineItem
              key={school.degree}
              title={school.degree}
              subtitle={school.school}
              period={school.period}
              description={school.description}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <ul className={styles.cards}>
          {certifications.map((cert) => (
            <li key={cert.name} className={styles.card}>
              <h3>
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
              <p className={styles.subtitle}>{cert.issuer}</p>
              <span className={styles.period}>{cert.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Tech Skills</h2>
        <TagGroups groups={techSkills} />
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Tools</h2>
        <TagGroups groups={tools} />
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <ul className={styles.languages}>
          {languages.map((lang) => (
            <li key={lang.name}>
              <h3>{lang.name}</h3>
              <p className={styles.itemText}>{lang.level}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Resume;
