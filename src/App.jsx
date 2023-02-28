import React, { useState } from "react";
import { Grid, Box, Button, Typography, Container } from "@mui/material";
import { Nav, Card } from "./components";
import shuffle from "./utils/shuffleData";
import checkIfWon from "./utils/checkIfWon";
import arr from "./data/data";

const data = shuffle(arr);

export default function App() {
	const [cardState, setCardState] = useState({ checked: { 12: true } });

	const toggleCard = (id) => {
		// if cardId != 12 (center), toggle card on/off and set cardState
		id !== 12 &&
			setCardState((cardState) => {
				// set card to opposite
				const checked = { ...cardState.checked, [id]: !cardState.checked[id] };
				// console.log(checked);
				const won = checkIfWon(checked);
				return {
					...cardState,
					checked,
					won,
				};
			});
	};

	return (
		<Box
			sx={{
				backgroundColor: "#F3EAD8",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}>
			<Nav />
			<Container
				maxWidth="md"
				sx={{
					minHeight: "100%",
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
				}}>
				<Box>
					<Typography variant="h2" sx={{ p: 5 }}>
						Bingooooo Challange
					</Typography>
				</Box>
				<Grid container spacing={0.5} columns={5}>
					{data &&
						data.map((phrase, id) => {
							return (
								<Card
									key={id}
									isSet={Boolean(cardState.checked[id])}
									onToggle={() => toggleCard(id)}>
									{phrase}
								</Card>
							);
						})}
				</Grid>
				{cardState.won ? <Typography>WON!</Typography> : null}
			</Container>
		</Box>
	);
}
