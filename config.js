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

	// Greetings
	greetingMorning: 'おはようございます！!',
	greetingAfternoon: 'こんにちは,',
	greetingEvening: 'こんばんは,',
	greetingNight: '寝ろ!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '2956d6845d0ee105e784b6001f68c344', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'pt_br', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-17.887520',
	defaultLongitude: '-51.726028',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

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
			name: 'G Mail',
			name: 'G Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '2',
			name: 'LinkedIn',
			icon: 'linkedin',
			link: 'https://www.linkedin.com',
		},
		{
			id: '3',
			name: 'P Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com',
		},
		{
			id: '4',
			name: 'WhtsApp',
			icon: 'phone',
			link: 'https://web.whatsapp.com',
		},
		{
			id: '5',
			name: 'Logs',
			icon: 'asterisk',
			link: 'https://clipperz.is/app/',
		},
		{
			id: '6',
			name: 'More Links',
			icon: 'plus',
			link: './lists.html',
		},

	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'code',
			id: '1',
			links: [
				{
					name: 'Github',
					link: 'https://github.com/ApplBoy',
				},
				{
					name: 'Replit',
					link: 'https://replit.com/~',
				},
				{
					name: 'Gentoo',
					link: 'https://wiki.gentoo.org/wiki/',
				},
				{
					name: 'SIGAA',
					link: 'https://sigaa.sistemas.ufj.edu.br/sigaa/verTelaLogin.do',
				},
			],
		},
		{
			icon: 'gamepad',
			id: '2',
			links: [
				{
					name: 'MobyGames',
					link: 'https://www.mobygames.com/',
				},
				{
					name: 'Itch.io',
					link: 'https://itch.io/',
				},
				{
					name: '4chan',
					link: 'https://www.4chan.org',
				},
				{
					name: 'Music',
					link: 'https://hyperpipe.surge.sh/',
				},
			],
		},
	],
};
