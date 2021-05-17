// Fetch data from the url
export const getTextData = () => {
	return fetch(
		`https://raw.githubusercontent.com/invictustech/test/main/README.md`,
		{
			method: "GET",
		}
	)
		.then((response) => {
			return response.text();
		})
		.catch((err) => console.log(err));
};

// Number of words finder
export const operationOfString = (strData) => {
	let wordsArray = strData.match(/\w+/g);
	let wordOccurrences = {};
	let amount = strData.length;
	for (let i = 0; i < wordsArray.length; i++) {
		wordOccurrences["_" + wordsArray[i]] =
			(wordOccurrences["_" + wordsArray[i]] || 0) + 1;
	}
	let result = Object.keys(wordOccurrences).reduce(function (acc, currentKey) {
		for (let i = 0; i < amount; i++) {
			if (!acc[i]) {
				acc[i] = {
					word: currentKey.slice(1, currentKey.length),
					occurences: wordOccurrences[currentKey],
				};
				break;
			} else if (acc[i].occurences < wordOccurrences[currentKey]) {
				acc.splice(i, 0, {
					word: currentKey.slice(1, currentKey.length),
					occurences: wordOccurrences[currentKey],
				});
				if (acc.length > amount) acc.pop();
				break;
			}
		}
		return acc;
	}, []);

	return result;
};
