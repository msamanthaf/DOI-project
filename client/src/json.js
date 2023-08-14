export const json = {
	logoPosition: "right",
	pages: [
		{
			name: "page1",
			elements: [
				{
					type: "text",
					name: "question1",
					title: "Name",
					isRequired: true,
				},
				{
					type: "text",
					name: "question6",
					title: "Your personal school email",
					isRequired: true,
				},
				{
					type: "dropdown",
					name: "question8",
					title: "Gender",
					isRequired: true,
					choices: [
						{
							value: "Item 1",
							text: "Male",
						},
						{
							value: "Item 2",
							text: "Female",
						},
					],
				},
				{
					type: "dropdown",
					name: "question2",
					title: "Your School",
					isRequired: true,
					choices: [
						{
							value: "Item 1",
							text: "UBC Vancouver",
						},
						{
							value: "Item 2",
							text: "UBC Okanagan",
						},
						{
							value: "Item 3",
							text: "SFU",
						},
						{
							value: "Item 4",
							text: "Langara College",
						},
					],
				},
				{
					type: "dropdown",
					name: "question4",
					startWithNewLine: false,
					title: "Partner School Preference",
					isRequired: true,
					choices: [
						{
							value: "Item 1",
							text: "UBC Vancouver",
						},
						{
							value: "Item 2",
							text: "UBC Okanagan",
						},
						{
							value: "Item 3",
							text: "SFU",
						},
						{
							value: "Item 4",
							text: "Langara College",
						},
						{
							value: "Item 5",
							text: "Any (I don't mind)",
						},
					],
				},
				{
					type: "text",
					name: "question5",
					title: "Your Age",
					isRequired: true,
				},
				{
					type: "checkbox",
					name: "question3",
					startWithNewLine: false,
					title: "Partner Age Preference",
					isRequired: true,
					choices: [
						{
							value: "Item 1",
							text: "Younger",
						},
						{
							value: "Item 2",
							text: "Same Age",
						},
						{
							value: "Item 3",
							text: "Older",
						},
					],
				},
				{
					type: "dropdown",
					name: "question7",
					title: "Beliefs",
					isRequired: true,
					choices: [
						{
							value: "Item 1",
							text: "Catholic",
						},
						{
							value: "Item 2",
							text: "Christian",
						},
						{
							value: "Item 3",
							text: "Islam",
						},
						{
							value: "Item 4",
							text: "Buddhism",
						},
						{
							value: "Item 5",
							text: "Hinduism",
						},
						{
							value: "Item 6",
							text: "Atheist",
						},
					],
				},
				{
					type: "checkbox",
					name: "question10",
					startWithNewLine: false,
					title: "Partner's Beliefs Dealbreaker",
					choices: [
						{
							value: "Item 1",
							text: "Catholic",
						},
						{
							value: "Item 2",
							text: "Christian",
						},
						{
							value: "Item 3",
							text: "Islam",
						},
						{
							value: "Item 4",
							text: "Buddhism",
						},
						{
							value: "Item 5",
							text: "Hinduism",
						},
						{
							value: "Item 6",
							text: "Atheist",
						},
					],
				},
				{
					type: "text",
					name: "question9",
					title: "Your Current Major",
					isRequired: true,
				},
				{
					type: "dropdown",
					name: "question11",
					startWithNewLine: false,
					title: "Preferred Partner Major",
					isRequired: true,
					showOtherItem: true,
					showNoneItem: true,
					otherText: "I have a preference (describe)",
				},
				{
					type: "text",
					name: "question12",
					title: "3 Songs That Would Describe You (insert Spotify Public Album link)",
					isRequired: true,
					inputType: "url",
				},
			],
		},
	],
};
