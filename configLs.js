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
	openInNewTab: false,
	twelveHourFormat: false,

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

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
					name: 'D Drive',
					link: 'https://doodrive.com/dashboard',
				},
				{
					name: 'G Drive',
					link: 'https://drive.google.com/',
				},
				{
					name: 'Disk',
					link: 'https://disk.yandex.com/',
				},
				{
					name: 'Intrnxt',
					link: 'https://drive.internxt.com/app',
				},
				{
					name: 'One Drv',
					link: 'https://onedrive.live.com/',
				},
				{
					name: 'Media Fr',
					link: 'https://app.mediafire.com/',
				},
				{
					name: 'Mega',
					link: 'https://mega.nz/',
				},
			],
		},
		{
			icon: 'dices',
			id: '2',
			links: [
				{
					name: 'Roll20',
					link: 'https://www.roll20.net/',
				},
				{
					name: 'TTop Audio',
					link: 'https://tabletopaudio.com/',
				},
				{
					name: 'Amb Mixer',
					link: 'https://www.ambient-mixer.com/',
				},
				{
					name: 'Dojon',
					link: 'https://donjon.bin.sh/',
				},
				{
					name: 'My Noise	',
					link: 'https://mynoise.net/',
				},
				{
					name: 'ArtStation',
					link: 'https://www.artstation.com/',
				},
				{
					name: 'DevintArt',
					link: 'https://www.deviantart.com/',
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
					name: 'ChatGPT',
					link: 'https://chat.openai.com',
				},
				{
					name: 'Dictionary ADS',
					link: 'https://xlinux.nist.gov/dads/,
				},
				{
					name: 'CSS-Tricks',
					link: 'https://css-tricks.com/',
				},
				{
					name: 'Tailwind Components',
					link: 'https://tailwindcomponents.com/',
				},
				{
					name: 'Bootstrap Docs',
					link: 'https://getbootstrap.com/docs/',
				},
				{
				i	name: 'Curated Lists',
					link: 'https://github.com/cuuupid/awesome-lists',
				},
				{
					name: 'Stack Abuse',
					link: 'https://stackabuse.com/',
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
					name: 'Coursera',
					link: 'https://www.coursera.org',
				},
				{
					name: 'CodeCamp',
					link: 'https://www.freecodecamp.org',
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
					name: 'W3 Schools',
					link: 'https://www.w3schools.com/',
				},
			],
		},
	],
};
