import ezra from "./ezra.jpg";
import styles from "./personal.module.css";
import star from "./icon.svg";
import rlogo from "./logo192.png";
import xbox2 from "./gif/WhatsNew.gif";
import search from "./gif/search.gif";
import others from "./gif/others.gif";
import speech from "./gif/speech.gif";
import xbox1 from "./gif/FirstRunWelcome.gif";
import hello from "./gif/@windows-hello-V4.1.gif";
import browse from "./logo/browserstack-logo.svg";
import g from "./logo/GDALLogoColor.svg";
import mat from "./logo/matplotlib.svg";
import uncharted from "./images/U4TE.png";
import metalGear from "./images/MGVTPP.png";
import red from "./images/RDR2.png";
import last from "./images/TLOU:P2.png";
import horizon from "./images/horizon.png";

function Personal() {
	return(
		<>

		<div className={styles.middleContainer}>
		<hr />
			<img src={horizon} className={styles.theme2} />
		  	<div className={styles.pro}>		
			<img className={styles.profile} src={ezra} alt="" />
		<div className={styles.profileInfo}>
			<h1 className="">Hello</h1>
			<h2 className="">Ezra Yeneneh</h2>
			<p className={styles.protext}><em>Founder of IMDb top 60 video games<strong><a href="http://www.imdb-top-60-video-games.com/">The IMDb project</a></strong></em> React , Django, AI ChatBot developer and ALX Software Engineering student. I love work and other most things. I was born in DebreBirhan in sep 2 , 2000 i always tought technology to be somehow using 1 and 0 but what i got was different it mostly was only logic you are the one to make all the work hard work you are the creator not the machines so it was only a tool that helps you to make our work simpler and i love work cause it brings a form of struggle in you that gives you discipline and order</p>
			</div>
			</div>
			<hr />
			<div className={styles.skills}>
			<h2 className={styles.skilltitle}>My Skills.</h2>
			<div className={styles.skillRow}>
			</div>
			<div className={styles.skillInfo}>
			<h2 className={styles.skilltitle} >Skills</h2>
			<p className={styles.skilltext}>  <img className={[styles.logo, styles.logo1, styles.reaction].join(" ")} src={rlogo} alt="" />
 I started coding when i was in college in 3rd year and it really got into me cause i love video games especially how they made the graphically intense games with onlu using the programming language C  <img className={[styles.logo, styles.logo2, styles.globe].join(" ")} src={g} alt="" />
 and thier game engine made using this language i was just impressed how c a culmination of codes can make that master piece i admired and respected it so much that i wanted to create one i got experience from a lot of resources and dedications i started with c++ it was different than what i expected it to be but after all it was new then python but python was easy and very language friendly to the native english speakers  <img className={[styles.logo, styles.logo1, styles.matlab].join(" ")} src={mat} alt="" />
 and i got to C which was the most difficult of them all cause it has memory allocation you must be responsible for all the memory you allocate from you operating system finally i got to java script it as as same as c but there are some differences like instead of printf it was console.log  <img className={[styles.logo, styles.logo2, styles.slack].join(" ")} src={browse} alt="" />
 and others the language i never got to understand was java i still wonder what it is i mean i know it will be the same but what would be different is a mystery to me</p>
			</div>
			<div className={styles.tabu}>
			<table className={styles.skillTable} cellspacing="50px">
			<tbody>
			<tr>
			<td>Django</td>
			<table className={styles.skillTable}>
			<tr>
			<td><img className={styles.skill1}  src={star} /></td>
			<td><img className={styles.skill2}  src={star}/></td>
			<td><img className={styles.skill3}  src={star}/></td>
			<td><img className={styles.skill4}  src={star}/></td>
			<td><img className={styles.skill5}  src={star}/></td>
			</tr>
			</table>
			</tr>
			<tr>
			<td>React</td>
		<table className={styles.skillTable}>
		<tr>
		<td><img className={styles.skill1}  src={star} /></td>
		<td><img className={styles.skill2}  src={star}/></td>
		<td><img className={styles.skill3}  src={star}/></td>
		<td><img className={styles.skill4}  src={star}/></td>
		</tr>
		<tr>	
		</tr>
		</table>
		</tr>

		<tr>
		<td>AI Chatbot</td>
		<table className={styles.skillTable}>
		<tr>
		<td><img className={styles.skill1}  src={star}/></td>
		<td><img className={styles.skill2}  src={star}/></td>
		<td><img className={styles.skill3}  src={star}/></td>
		<td><img className={styles.skill4}  src={star}/></td>
		</tr>
		</table>
		</tr>
		<tr>

		<td>Docker</td>
		<table className={styles.skillTable}>
		<tr>
		<td><img className={styles.skill1}  src={star} /></td>
		<td><img className={styles.skill2}  src={star}/></td>
		<td><img className={styles.skill3}  src={star}/></td>
		<td><img className={styles.skill4}  src={star}/></td>
		<td><img className={styles.skill5}  src={star}/></td>
		</tr>
		</table>	
		</tr>
		</tbody>
		</table>
		</div>
		<hr className={styles.hr1} />

		<h1 className={styles.educ} >Education</h1>
		<div className={styles.learn}>
		<div className={styles.skillRow}>
		<hr />
		<h2>Currently Leaning</h2>
		<ul>
			<img className={styles.gif} src={xbox2} alt="" />
			<img className={styles.gif} src={search} alt="" />
			<li>The 12 month ALX software engineering course</li>
			<li>Advanced CSS techniques</li>
			<li>data structure</li>
			<li>python programming</li>
			<li> Bootstrap usage</li>
			<img className={styles.gif} src={xbox1} alt="" />
			<li>AAU chemmical Engineering</li>
			<li>Docker ability</li>
			<li>Saint Mary Distance Management</li>
			<li>Zapier bot maker</li>
			<li>GPT turbo implementation</li>
			<img className={styles.gif} src={others} alt="" />
			<li>API making using django rest framework</li>
			<li>using render for deployment</li>
			<li>using python everywhere for deployment</li>
			<li>postman API implemetation tool</li>
		</ul>
		<h2>Work Experience</h2>
		<img className={styles.gif} src={hello} alt="" />
		<p>None currently</p>
		</div>
		</div>
		</div>
		<hr />
		</div>
		<div className={styles.bottomContainer}>
			<h1>Get In Touch</h1>	
		<div className={styles.additional}>
			<p className={styles.gameDetail}> this are the games that are considered to be among the hard coded and are the hardest to <img className={[styles.other, styles.logo2, styles.metal].join(" ")} src={metalGear} />  make even for a significant amount of numbers and are the most criticized and acclaimed they are called the best because of their best story telling and   best screen play best narration best cinematography voice acting great and immense emotional weight great resemblance of  reality and thier unexpected twist so many plot twist and all workers in the game made it a reality that the game became a culmination of so many people's hard work if we look at the best video game creating companies one of the  <img className={[styles.other, styles.logo1, styles.last].join(" ")} src={last} /> most notorious makers are rockstar , naughty dog , cd project kd , kojima and santa monica production and so many others this companies have thier own teams of large programmers who can be helpful in graphics narration directory production make up and costumes world building culture resemblancy sites and so many of us did do it once <img className={[styles.other, styles.logo2, styles.uncharted].join(" ")} src={red} /> for example if we could just examine on game like the witcher 3 it was considered to be one of the greatest games ever made it was produced by cd project kd and also by one of the most sold games it has approximately sold 30 million copies world wide by a polish director the game is a dark tale set in the miedeval age but one of the most captivating story has been recorder in it</p>
			
			<h2>Other information</h2>
			<p className={styles.contactMessage}> if you would like to reach me here is my contact information my twitter, linkedin, email</p>
			<div className="contact-me">
			<a className={styles.btn} href="mailto:ezrayeneneh1992@email.com">CONTACT ME</a>
			</div>
			<div className={styles.footer}>
			<a href="https://ezrayeneneh1992@gmail.com">Gmail</a>
			<a className="footer-link" href="https://www.linkedin.com/in/ezra-yeneneh-a07203260/">LinkedIn</a>
			<a className="footer-link" href="https://discord.gg/afc7zd4S">Discord</a>
			<a className="footer-link" href="https://imdb-top-60-video-games-react-ezra.vercel.app/">Website</a>
			</div>
			<p className={styles.copyright}>© 2023 ezra yeneneh.</p>
			</div>
			<hr />
		</div>
	</>
	);
};

export default Personal;
