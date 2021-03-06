﻿/*
	config.js - Configuration File
*/

/*
* Connection Details
*
* NOTE: Do NOT use "[server].psim.us", that is the client url
* If you don't know what are the server, port or serverid values
* run 'node getserver.js' to get them
*
*/

exports.server = "sim.psim.us";

exports.port = 8000;

exports.serverid = "showdown";

exports.autoReconnectDelay = 10 * 1000;
exports.connectionTimeout = 2 * 60 * 1000;

/*
* Crash Guard
*
* If true, write errors to console instead of crashing
*/

exports.crashguard = true;

/*
* Security log
*/

exports.securityLog = {ageOfLogs: 3};

/*
* Watch Config
*/

exports.watchconfig = true;

/*
* Login Details
*/

exports.nick = "Neko~chan X";

exports.pass = "your password here";

exports.autoReloginDelay = 60 * 1000;

/*
* Rooms to join
*/

exports.rooms = ["groupchat-stc99-hairflick", "groupchat-jahim-hairflick"];

/*
* exports.rooms = 'all'; //For joining all rooms
* exports.rooms = 'official'; //For joining official rooms
* exports.rooms = 'public'; //For joining not-official rooms
* exports.rooms = ['room1', 'room2']; //For joining some rooms
*/

exports.privateRooms = { //Rooms listed here will be ignored by seen command
	//privateroomname: true
};

exports.ignoreRooms = { /*Rooms listed here will be ignored by CommandParser (bot is "asleep" in those rooms)*/
	roleplaying: true
};

exports.initCmds = ['|/avatar 23'];

/*
* Auth configuration
*/

exports.exceptions = {
	"shockingzinogre": true,
	"fluffypachirisu": true,
	"kirarothekitsune": true,
	"karenchanx": true
};
/*
* 'userid': 'rank' or 'userid': true for full access
* Example:
*
* exports.exceptions = {
*	'kirarothekitsune': true
*
*/
exports.ranks = ['+', '\u2605', '%', '@', '#', '&', '~'];

exports.globalPermissions = {
	'voice': '+', //Min rank to broadcast in a server
	'driver': '%', //Min rank to mute. Also min staff rank
	'moderator': '@', //Min rank to ban
	'roomowner': '#', //Rank for using room settings commands like set, lang, mod...
	'admin': '~' //Rank for using global admin commands
};

/*
* Commands configuration
*/

exports.commandTokens = ['$']; //Array of valid command characters

exports.defaultPermission = '';

exports.permissionExceptions = {
	//command: 'rank'
	'say': '#',
	'info': '%',
	'wall': '%',
	'autoban': '#',
	'banword': '#',
	'joinphrase': '#',
	'challenge': '@',
	'searchbattle': '@',
	'tournament': '%',
	'usage': '#'
};

exports.botguide = 
"https://hastebin.com/fasaqeniyo.sql";

//When you pm the bot but don't use a command, it replies you this message. Example: "Hi, I'm a bot. Use .help to view a command guide"
//The var #USER is replaced with the username that pms it
exports.pmhelp = "Hiya #USER! I believe I am a bot here to help Kiraro The Kitsune. Please send him a private message. Thank You!";

/*
* Language configuration
*/

exports.language = "english";

/*
* Configuration for console messages
*/

exports.debug = {
	/* Basic messages - Production Mode */
	error: true,
	ok: true,
	errlog: true,
	info: true,
	room: true,

	/* Monitoring */
	monitor: true,
	status: true,
	battle: true,

	/* Debug Mode */
	debug: false,
	cmdr: false,

	/* Low Level */
	recv: false,
	sent: false
};

/*
* Configuration for specific
* commands and features
*/

/*
* Moderation
*/

exports.moderation = {
	modException: '%', // Min rank for not receive moderation

	allowmute: true,
	disableModNote: false,

	MOD_CONSTS: {
		FLOOD_MESSAGE_NUM: 5,
		FLOOD_PER_MSG_MIN: 500, // this is the minimum time between messages for legitimate spam. It's used to determine what "flooding" is caused by lag
		FLOOD_MESSAGE_TIME: 6 * 1000,

		MIN_CAPS_LENGTH: 8,
		MIN_CAPS_PROPORTION: 0.8,

		MAX_STRETCH: 6
,		MAX_REPEAT: 4,
	},

	values: {
		'spam-p': 3,
		'spam': 4,
		'spam-link': 4,
		'flood-hard': 3,
		'flood': 2,
		'caps': 2,
		'stretch': 2,
		'banwords': 2,
		'inapwords': 2,
		'servers': 2,
		'youtube': 2,
		'spoiler': 2,
		'replays': 1
	},

	modDefault: {
		//basic mods
		'caps': 2,
		'stretching': 2,
		'flooding': 1,
		'spam': 1,

		'bannedwords': 1,
		'inapropiate': 1,

		//specific mods
		'spoiler': 0,
		'youtube': 0,
		'psservers': 0,
		'replays': 0,

		//multiple infraction
		'multiple': 1,

		//zero tolerance
		'zerotol': 1
	},

	punishments: [
		"warn",
		"mute",
		"hourmute",
		"roomban"
	],

	psServersExcepts: {
		"showdown": 1,
		"smogtours": 1,
		"sim": 1
	},

	zeroToleranceDefaultLevel: '2',
	zeroToleranceLevels: {
		'l': {name: 'Low', value: 1},
		'2': {name: 'normal', value: 2},
		'3': {name: 'hard', value:3},
	}
};

/*
* Battles
*/

exports.aceptAll = true;

exports.maxBattles = 1;

exports.initBattleMsg = ['Good luck! Battle well! Nya~!']

exports.winmsg = ['Yes! I won! Nya~!', 'Better luck next time I guess!', 'Another victory for karen! Yes!']

exports.losemsg = ['You were just too strong... __sigh__', 'No way! I have been defeated yet again!', 'Karen has lost\, Kiraro won\'t like that. __sigh__']

exports.battleMessages = {
	'crit': {
		'self': ['Cool!', 'You have a good strategy!'],
		'foe': ['Yes! My luck is at my side!', 'Good job!', 'Don\'t mess with Karen or she will bite!']
	},
	'miss': {
		'self': ['No way!', 'There goes my luck~']
	}
};

exports.battleModules = {
	/* Algorithms for use in battles */
	"challengecup1v1": "ingame-nostatus",
	"1v1": "ingame-nostatus"
};

//exports.battleLog = {ageOfLogs: 1}; // Days

exports.abandonedBattleAutojoin = true;

exports.ladderCheckInterval = 10 * 1000;

exports.ladderNumberOfBattles = 1;

exports.formatAliases = {
	'random': 'Random Battle',
	'randomdoubles': 'Random Doubles Battle',
	'randomtriples': 'Random Triples Battle',
	'doubles': 'Doubles OU',
	'triples': 'Smogon Triples',
	'vgc': 'Battle Spot Doubles (VGC 2015)',
	'vgc2015': 'Battle Spot Doubles (VGC 2015)',
	'ag': 'Anything Goes',
	'oras': 'OU',
	'bw': '[Gen 5] OU',
	'dpp': '[Gen 4] OU',
	'adv': '[Gen 3] OU',
	'gsc': '[Gen 2] OU',
	'rby': '[Gen 1] OU',
	'smou': '[Gen 7] OU'
};

/*
* Tournaments
*/
exports.tourDefault = {
	format: 'random',
	type: 'elimination',
	maxUsers: null,
	timeToStart: 30 * 1000,
	autodq: 1.5,
	scoutProtect: false
};

exports.leaderboards = {};

/* Leaderboard example:
exports.leaderboards['tournaments', 'games'] = {
	winnerPoints: 2,
	finalistPoints: 1,
	semiFinalistPoints: 0,
	battlePoints: 0,
	onlyOfficial: false // If true, only official tours (must use .official command) will be counted
};
*/

/*
* Youtube
*/

exports.youtube = {
	enableByDefault: false
};

/*
* Chat Logger
*/

exports.chatLogger = {
	rooms: ['groupchat-stc99-haiflick'],
	ignore: {'tournament': ['update', 'updateEnd'], 'formats': true, 'challstr': true, 'updateuser': true, 'queryresponse': true},
	logIntroMessages: true,
	ageOfLogs: 3 //in days (max age of logs, 0 to keep logs infinitely)
};

/*
exports.logServer = {
	port: 5400,
	bindaddress: null,
	users: {
		'admin': {
			name: 'Administrator',
			pass: 'password',
			access: {'room1': 1, 'room2': 1}
		}
	},
	rooms: {
		'room1': {private: true},
		'room2': {private: true}
	}
};
*/

/*
* Auto-Invite
*/

exports.autoInvite = [
	//{linked: 'public room linked', private: 'private room', rank: '+'}
];

/*
* GitHub
* Read this: https://developer.github.com/webhooks/creating/
*/

exports.github = {
	room: 'development',
	secret: "",
	port: 3420
};

/*
* Groupchats
*/

exports.groupChatTryJoinInterval = 60 * 1000;

exports.groupchats = ['groupchat-stc99-hairflick', 'groupchat-ecuacion-test'];

exports.groupchats - ['groupchat-stc99-hairflick', 'groupchat-ecuacion-test'] - {
	
	toJoin: ['/join groupchat-stc99-hairflick', '/groupchat-ecuacion-test'],
	onJoin: ['Hi guys!'],
	onLeave: ['Bye bye guys and gals!']
};
