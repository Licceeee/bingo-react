import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Card({ children, onToggle, isSet }) {
	return (
		<Grid
			item
			xs={1}
			onClick={onToggle}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				height: "90px",
				border: "2px solid",
				borderColor: "primary.main",

				backgroundColor: isSet && "secondary.main",
			}}>
			<Typography sx={{ textAlign: "center" }}>{children}</Typography>
		</Grid>
	);
}
