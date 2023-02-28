const checkIfWon = (checked) => {
	const range = [0, 1, 2, 3, 4];

	// if not satisfied, "find" returns undefined
	// checkRow
	const checkRow =
		undefined !==
		range.find((row) => range.every((column) => checked[row * 5 + column]));
	// checkRow
	const checkCol =
		undefined !==
		range.find((column) => range.every((row) => checked[row * 5 + column]));
	// check Diagonale from Left to Right
	const checkDiagLtR = range.every((index) => checked[index * 5 + index]);
	// check Diagonale from Right to Left
	const checkDiagRtL = range.every((index) => checked[index * 5 + 4 - index]);

	return checkRow || checkCol || checkDiagLtR || checkDiagRtL;
};

export default checkIfWon;
