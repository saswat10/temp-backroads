import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'
export const pageLinks = [
	{
		id: 1,
		href: '#home',
		text: 'home',
	},
	{
		id: 2,
		href: '#about',
		text: 'about',
	},
	{
		id: 3,
		href: '#services',
		text: 'services',
	},
	{
		id: 4,
		href: '#tours',
		text: 'tours',
	},
]

export const socialLinks = [
	{
		id: 1,
		href: 'https://www.twitter.com',
		className: 'fab fa-facebook',
	},
	{
		id: 2,
		href: 'https://www.twitter.com',
		className: 'fab fa-twitter',
	},
	{
		id: 3,
		href: 'https://www.twitter.com',
		className: 'fab fa-squarespace',
	},
]

export const services = [
	{ id: 1, icon: 'fas fa-wallet fa-fw', text: 'saving money' },
	{ id: 2, icon: 'fas fa-tree fa-fw', text: 'endless hiking' },
	{ id: 3, icon: 'fas fa-socks fa-fw', text: 'amazing comfort' },
]

export const tours = [
	{
		id: 1,
		image: tour1,
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam illum enim assumenda obcaecati ipsam sequi, atque eum. Optio laboriosam unde ratione aliquid asperiores numquam error exercitationem consectetur ad! Id laboriosam animi molestias provident.',
		location: 'China',
		duration: 6,
		cost: 2100,
		date: '16th December ' + new Date().getFullYear(),
	},
	{
		id: 2,
		image: tour2,
		title: 'Best of Java',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam illum enim assumenda obcaecati ipsam sequi, atque eum. Optio laboriosam unde ratione aliquid asperiores numquam error exercitationem consectetur ad! Id laboriosam animi molestias provident.',
		location: 'Indonesia',
		duration: 11,
		cost: 1400,
		date: '6th October ' + new Date().getFullYear(),
	},
	{
		id: 3,
		image: tour3,
		title: 'Explore Hong Kong',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam illum enim assumenda obcaecati ipsam sequi, atque eum. Optio laboriosam unde ratione aliquid asperiores numquam error exercitationem consectetur ad! Id laboriosam animi molestias provident.',
		location: 'Hong Kong',
		duration: 8,
		cost: 5000,
		date: '26th August ' + new Date().getFullYear(),
	},
	{
		id: 4,
		image: tour4,
		title: 'Kenya Highlights',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam illum enim assumenda obcaecati ipsam sequi, atque eum. Optio laboriosam unde ratione aliquid asperiores numquam error exercitationem consectetur ad! Id laboriosam animi molestias provident.',
		location: 'Kenya',
		duration: 20,
		cost: 3300,
		date: '8th June ' + new Date().getFullYear(),
	},
	{
		id: 5,
		image: tour5,
		title: 'Tanznania Wildlife',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam illum enim assumenda obcaecati ipsam sequi, atque eum. Optio laboriosam unde ratione aliquid asperiores numquam error exercitationem consectetur ad! Id laboriosam animi molestias provident.',
		location: 'Tanzania',
		duration: 4,
		cost: 3700,
		date: '17th May ' + new Date().getFullYear(),
	},
	{
		id: 6,
		image: tour6,
		title: 'Incredible India',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam illum enim assumenda obcaecati ipsam sequi, atque eum. Optio laboriosam unde ratione aliquid asperiores numquam error exercitationem consectetur ad! Id laboriosam animi molestias provident.',
		location: 'India',
		duration: 10,
		cost: 4300,
		date: '4th January ' + new Date().getFullYear(),
	},
]
