const INS = 
[
	/* 300 SERIES */
	{
		number: 300,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates an enemy using subroutine %1 at coordinates %2, %3 (relative to position of enemy that called it), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 301,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates an enemy using subroutine %1 at coordinates %2, %3 (absolute position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 302,
		game: 13,
		args: "S",
		argnames: ["anmIndex"],
		description: "Selects ANM file to be used by other instructions based on %1."
	},
	{
		number: 303,
		game: 13,
		args: "SS",
		argnames: ["slot", "script"],
		description: "Loads script %2 from ANM selected with [ins=302,13] on slot %1."
	},
	{
		number: 304,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates a mirrored enemy using subroutine %1 at coordinates %2, %3 (relative to caller's position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 305,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates an mirrored enemy using subroutine %1 at coordinates %2, %3 (absolute position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 306,
		game: 13,
		args: "SS",
		argnames: ["slot", "script"],
		description: "Loads script %2 from ANM selected with [ins=302,13] on slot %1. However, the script number provided will only be used when the enemy is not moving. When moving left %2+1 will be used, right %2+2, diagonal left %2+3, diagonal right %2+4. Might not work properly if %1 is not 0 according to THBWiki."
	},
	{
		number: 307,
		game: 13,
		args: "SS",
		argnames: ["anmIndex", "script"],
		description: "From ANM file selected based on %1, play script %2 at caller's current coordinates. The spawned script is completely independent, and will continue existing even if caller is deleted."
	},
	{
		number: 308,
		game: 13,
		args: "SS",
		argnames: ["anmIndex", "script"],
		description: "From ANM file selected based on %1, play script %2 at coordinates (0, 0). The spawned script is completely independent, and will continue existing even if caller is deleted."
	},
	{
		number: 309,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates a filler enemy using subroutine %1 at coordinates %2, %3 (relative to caller's position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 310,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates a filler enemy using subroutine %1 at coordinates %2, %3 (absolute position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 311,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates a mirrored filler enemy using subroutine %1 at coordinates %2, %3 (relative to caller's position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 312,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		description: "Creates a mirrored filler enemy using subroutine %1 at coordinates %2, %3 (absolute position), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	{
		number: 313,
		game: 13,
		args: "S",
		argnames: ["script"],
		description: "Same as [ins=307,13], except it uses the ANM script selected by [ins=302,13]."
	},
	{
		number: 314,
		game: 13,
		args: "SS",
		argnames: ["anmIndex", "script"],
		description: "Same as [ins=307,13], except it spawns the ANM with a higher layer? Needs further investigation."
	},
	{
		number: 315,
		game: 13,
		args: "SSf",
		argnames: ["anmIndex", "script", "angle"],
		description: "Same as [ins=307,13], except it sets rotation of spawned ANM to %3."
	},
	{
		number: 316,
		game: 13,
		args: "SS",
		argnames: ["a", "b"],
		description: "[c=red]Unknown.[/c]"
	},
	{
		number: 317,
		game: 13,
		args: "SS",
		argnames: ["slot", "switch"],
		description: "Sets the execution pointer of ANM script on slot %1 to where ANM `ins_5(a)` with `a` == `switch` is (the time is also changed to match time of `ins_5`). Doesn't work if the value is 0 apparently?"
	},
	{
		number: 327,
		game: 13,
		args: "SS",
		argnames: ["slot", "alpha"],
		description: "Sets alpha of ANM script on slot %1 to %2 (must be a value between 0-255)"
	},
	{
		number: 328,
		game: 13,
		args: "SSSS",
		argnames: ["slot", "time", "mode", "alpha"],
		description: "Change alpha of ANM script on slot %1 to %4 (must be a value between 0-255) in %2 frames using mode %3."
	},
	/* 400 SERIES */
	{
		number: 400,
		game: 13,
		args: "ff",
		argnames: ["x", "y"],
		description: "Immidiately sets enemy's absolute position to %1, %2."
	},
	{
		number: 401,
		game: 13,
		args: "SSff",
		argnames: ["time", "mode", "x", "y"],
		description: "Change enemy's absolute position to %3, %4 in %1 frames using mode %2."
	},
	{
		number: 402,
		game: 13,
		args: "ff",
		argnames: ["x", "y"],
		description: "Immidiately sets enemy's relative position to %1, %2."
	},
	{
		number: 403,
		game: 13,
		args: "SSff",
		argnames: ["time", "mode", "x", "y"],
		description: "Change enemy's relative position to %3, %4 in %1 frames using mode %2."
	},
	{
		number: 431,
		game: 13,
		args: "SSff",
		argnames: ["time", "mode", "angle", "spd"],
		description: "Change enemy's relative angle to %3 and relative speed to %4 in %1 frames using mode %2. Ignores the mirror flag."
	},
	/* 500 SERIES */
	{
		number: 502,
		game: 13,
		args: "S",
		argnames: ["n"],
		description: "Sets flag(s) according to %1. Refer to the flag table for exact values."
	},
	{
		number: 518,
		game: 13,
		args: "S",
		argnames: ["dialogueId"],
		description: "Starts a dialogue, %1 is the ID of an entry in the .msg file. Apart from that, has the effect [ins=525,13]."
	},
	{
		number: 525,
		game: 13,
		args: "",
		argnames: [],
		description: "Kills all other enemies (unless they have a flag that prevents that set)."
	},
	{
		number: 547,
		game: 13,
		args: "f",
		argnames: ["s"],
		description: "Sets game speed to %1 of the normal speed. In [game=143]ISC[/game], enemies with flag 13 (dec=8192) set will ignore effects of this opcode."
	},
	/* 600 SERIES */
	{
		number: 615,
		game: 13,
		args: "f",
		argnames: ["r"],
		description: "Clears all bullets in a circle of radius %1 around the caller, and turns them into cancel items."
	},
	{
		number: 616,
		game: 13,
		args: "f",
		argnames: ["r"],
		description: "Clears all bullets in a circle of radius %1 around the caller without turning them into cancel items."
	},
	{
		number: 635,
		game: 13,
		args: "f",
		argnames: ["r"],
		description: "Same as [ins=615,13], but doesn't clear bullets with bomb invulnerability."
	},
	{
		number: 636,
		game: 13,
		args: "f",
		argnames: ["r"],
		description: "Same as [ins=616,13], but doesn't clear bullets with bomb invulnerability."
	}

]

const ARGTYPES = {
	"S": "int",
	"f": "float",
	"m": "string"
}
