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
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:00',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'G Drive',
			icon: 'hard-drive',
			link: 'https://drive.google.com/',
		},
		{
			id: '2',
			name: 'G Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'LinkedIn',
			icon: 'linkedin',
			link: 'https://www.linkedin.com',
		},
		{
			id: '4',
			name: 'WhtsApp',
			icon: 'phone',
			link: 'https://web.whatsapp.com',
		},
		{
			id: '5',
			name: 'P Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

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
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
				{
					name: 'F',
					link: 'https://sigaa.sistemas.ufj.edu.br/sigaa/verTelaLogin.do',
				},
				{
					name: 'A',
					link: 'https://sigaa.sistemas.ufj.edu.br/sigaa/verTelaLogin.do',
				},
				{
					name: 'C',
					link: 'https://sigaa.sistemas.ufj.edu.br/sigaa/verTelaLogin.do',
				},
			],
		},
		{
			icon: 'binary',
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
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'W3 Schools',
					link: 'https://www.w3schools.com/',
				},
			],
		},
	],
};
