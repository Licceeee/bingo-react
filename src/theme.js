import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#C3C1AC",
		},
	},
});

export default responsiveFontSizes(theme);
