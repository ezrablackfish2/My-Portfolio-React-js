import styles from "./ezra.module.css";
import water from "./images/water.png";
import horizon from "./images/horizon.png";
import uncharted from "./images/U4TE.png";
import red from "./images/RDR2.png";
import ezra from "./ezra.jpg";
import Personal from "./personal.jsx";

function Ezra() {
	return(
		<>

		<div className="">
			<img className={styles.theme} src={water} />
			<div className={styles.firstTop}>
                	<img className={styles.topRed} src={red} />
			<h1 className={[styles.header, styles.headColor].join(" ")}>I am Ezra.</h1>
	                <h2 className={styles.headerContent}> a <span className={styles.pro}>pro</span>grammer.</h2>
	                <img className={styles.bottomRed} src={uncharted} />
			</div >
		</div>
		<Personal />
		</>
	);
};

export default Ezra;
