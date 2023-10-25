import Link from "next/link"
import styles from './page.module.css';

export function NameLink(props) {
    const name = props.name;
    return (
        <Link href={`/profile/${name}`} className="relative text-left min-w-max">
            <div className={styles.namelink}>
                {name}
            </div>
        </Link>
    )
}

export default NameLink;