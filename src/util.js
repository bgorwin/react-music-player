import { v4 as uuidv4 } from 'uuid';

function chillHop() {
	return [
		{
			name: 'Paved Paths',
			artist: 'Leavv',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg',
			id: uuidv4(),
			active: true,
			color: ['#D9E8A9', '#CF8F60'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9919'
		},
		{
			name: 'Pine and Oak',
			artist: 'Philanthrope, The Field Tapes',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#94392F', '#AC6D55'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10249'
		},
		{
			name: 'burn my mind',
			artist: 'Tesk',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/06/52bd092974ccce9aa610c33f03575fc2d7f9c7d2-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#EEEEF2', '#AEBDB2'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8137'
		},
		{
			name: 'this again...',
			artist: 'SwuM, quickly, quickly',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/f3dda653e5ff94d787639ef56cb8e922d321a04f-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#222222', '#2B312D'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8953'
		},
		{
			name: 'Sleepover',
			artist: 'Nymano, JK the Sage',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#5C5581', '#222222'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10130'
		},
		{
			name: 'Lunar Cycles',
			artist: 'Sleepy Fish',
			cover:
				' https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg',
			id: uuidv4(),
			active: false,
			color: ['#1E5A76', '#AA4C3D'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10031'
		}
	];
}

export default chillHop;
