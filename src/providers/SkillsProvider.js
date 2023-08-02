import React from "react";
import {ReactComponent as Html} from "../components/Html.svg";
import {ReactComponent as Css} from "../components/Css.svg";
import {ReactComponent as Javascript} from "../components/Javascript.svg";
import {ReactComponent as Tailwind} from "../components/Tailwind.svg";
import {ReactComponent as Bootstrap} from "../components/Bootstrap.svg";
import {ReactComponent as Sass} from "../components/Sass.svg";

export const SkillsContext = React.createContext();

export default function SkillsProvider(children) {
	return (
		<SkillsContext.Provider
			value={{Html, Css, Javascript, Tailwind, Bootstrap, Sass}}
		>
			{children}
		</SkillsContext.Provider>
	);
}
