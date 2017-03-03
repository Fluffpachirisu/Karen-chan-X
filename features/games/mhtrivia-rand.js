const DATA_FILE = "./../../data/mhtrivia-data.js";

if (!fs.existsSync("./data/mhtrivia-data.js")) {
	debug("./data/mhtrivia-data.js" + " does not exist - creating from default...");
	fs.writeFileSync("./data/mhtrivia-data.js", fs.readFileSync('./data/mhtrivia-data-example.js'));
}

var getData = exports.getData = function () {
	try {
		return require(DATA_FILE).questions;
	} catch (e) {
		debug(e.stack);
		return null;
	}
};

exports.random = function () {
	var data = getData();
	if (!data) return null;
	var res = {};
	var id = Math.floor(Math.random() * data.length);
	res.id = id;
	res.question = data[id].q;
	if (typeof data[id].a === "string") res.answers = [data[id].a];
	else res.answers = data[id].a;
	return res;
};

exports.randomNoRepeat = function (arr) {
	if (!arr) return exports.random();
	var temp, loopBreak = 0;
	do {
		temp = exports.random();
		loopBreak++;
	} while (arr.indexOf(temp.id) >= 0 && loopBreak < 50);
	return temp;
};
