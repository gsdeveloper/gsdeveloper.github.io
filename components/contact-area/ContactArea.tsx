import styles from './contact-area.module.scss';

const ContactArea = () => (
  <div className={styles['contact-area']}>
    <h2 className={styles['contact__title']}>Thank you for reading it!</h2>
    <a
      className={styles['contact-area__link']}
      href="mailto:gsdevelopercontact@gmail.com"
    >
      <button className={styles['contact-area__button']}>Contact</button>
    </a>
  </div>
);

export default ContactArea;
