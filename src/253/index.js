const min = 11111;
const max = 99999;

for (let p = min; p <= max; p+=1) {
	const x = parseInt(`${p}1`, 10);
	const y = parseInt(`1${p}`, 10);

	if (3 * y === x) {
		console.log('found it', p);
	}
}
