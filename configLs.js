// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Saulo',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:00',
	hourDarkThemeInactive: '07:00',
 
	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'hard-drive',
			id: '1',
			links: [
				
				{
					name: 'Disk',
					link: 'https://disk.yandex.com/',
				},
        {
					name: 'Mega',
					link: 'https://mega.nz/',
				},
				{
					name: 'Skiff',
					link: 'https://app.skiff.org/drive/dashboard',
				},
				/*
				{
					name: 'One Drv',
					link: 'https://onedrive.live.com/',
				},*/
				{
					name: 'Filen',
					link: 'https://drive.filen.io/',
				},
        {
					name: 'D Drive',
					link: 'https://doodrive.com/dashboard',
				},
				{
					name: 'G Drive',
					link: 'https://drive.google.com/',
				},
        {
					name: 'Intrnxt',
					link: 'https://drive.internxt.com/app',
				},
				{
					name: 'Media Fr',
					link: 'https://app.mediafire.com/',
				},
			],
		},
		{
			icon: 'dices',
			id: '2',
			links: [
        {
					name: 'Dojon',
					link: 'https://donjon.bin.sh/',
				},
				{
					name: 'DevintArt',
					link: 'https://www.deviantart.com/',
				},
				{
					name: 'ArtStation',
					link: 'https://www.artstation.com/',
				},
        {
					name: 'My Noise	',
					link: 'https://mynoise.net/',
				},
				{
					name: 'Amb Mixer',
					link: 'https://www.ambient-mixer.com/',
				},
        {
					name: 'TTop Audio',
					link: 'https://tabletopaudio.com/',
				},
				{
					name: 'Password Gen',
					link: 'https://passwordsgenerator.net/',
				},
				{
					name: 'StandardNotes',
					link: 'https://app.standardnotes.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'terminal',
			id: '1',
			links: [
				{
					name: 'Cheat.sh',
					link: 'https://cheat.sh/',
				},
				{
					name: 'CSS-Tricks',
					link: 'https://css-tricks.com/',
				},
				{
					name: 'Curated Lists',
					link: 'https://github.com/cuuupid/awesome-lists',
				},
				{
					name: 'Stack Abuse',
					link: 'https://stackabuse.com/',
				},
				{
					name: 'Rosetta Code',
					link: 'https://rosettacode.org/',
				},
				{
					name: 'Tailwind Comp',
					link: 'https://tailwindcomponents.com/',
				},
				{
					name: 'Dictionary ADS',
					link: 'https://xlinux.nist.gov/dads/',
				},
				{
					name: 'Bootstrap Docs',
					link: 'https://getbootstrap.com/docs/',
				},
			],
		},
		{
			icon: 'code-2',
			id: '2',
			links: [
				{
					name: 'Rust',
					link: 'https://www.rust-lang.org/learn',
				},
				{
					name: 'PHP',
					link: 'https://www.php.net/manual/en/',
				},
				{
					name: 'B Crowd',
					link: 'https://www.beecrowd.com.br/judge/pt/login',
				},
				{
					name: 'Sololearn',
					link: 'https://www.sololearn.com',
				},
				{
					name: 'Neetcode',
					link: 'https://neetcode.io/',
				},
				{
					name: 'Coursera',
					link: 'https://www.coursera.org',
				},
				{
					name: 'CodeCamp',
					link: 'https://www.freecodecamp.org',
				},
				{
					name: 'W3 Schools',
					link: 'https://www.w3schools.com/',
				},
			],
		},
	],
};
