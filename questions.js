var questions = [{
	page_id: 1,
	data: [{
		title: 'take_photo',
		question: 'Do you like taking photos of your food and while doing an activity?',
		images: ['1.png', '2.png'],
		options: ['yes', 'no']
	}, {
		title: 'use_insta',
		question: 'Do you post such photos on social media such as Instagram or Facebook?',
		images: ['3.png', '4.png', '5.png'],
		options: ['yes', 'no']
	}]
}, {
	page_id: 2,
	data: [{
		title: 'gender',
		question: 'What is your gender?',
		options: ['male', 'female']
	}, {
		title: 'location',
		question: 'Where is your current location?',
		options: ['Singapore', 'USA']
	}, {
		title: 'age_group',
		question: 'Which age group do you fall under?',
		options: ['< 15', '15 - 19', '20 - 24', '25 - 29', '30 - 35', '> 35']

	}, {
		title: 'occupation',
		question: 'What is your current occupation?',
		options: ['Accountant', 
			'Banking Associate', 
			'Professional/Technical e.g. mobile developers / computer engineers', 
			'Sales', 'Student - Arts & Humanities Major', 
			'Student - Business Major', 
			'Student - Engineering Major', 
			'Student - Computing Major', 
			'Student - Science Major', 
			'Student - Others', 
			'Teacher/Professor', 
			'Others'
		]
	}, {
		title: 'email',
		question: 'Do provide us your email to stay connected! We will inform you when we launch!',
		input: 'example@gmail.com'
	}]
}]

exports.questions = questions;