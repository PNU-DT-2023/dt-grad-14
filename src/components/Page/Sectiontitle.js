
import styles from './page.module.css';

function Sectiontitle(props) {
    const text = props.text;
    return (
        <div className={styles.subtitle}>
            <p className="relative bg-[url(/scribble.svg)] bg-contain bg-center bg-no-repeat p-2 px-2">{text}</p>
        </div>
    )
}

export default Sectiontitle;