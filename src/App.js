import logo from './logo.svg';
import './App.css';
import Personal from "./personal";
import Ezra from "./ezra";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.title = "Ezra Personal Site";
	});
  return (
	  <>
	  <title>Ezra's Personal Site</title>
	  <body>
	  	<Ezra />
	  </body>
	  </>
  );
}

export default App;
