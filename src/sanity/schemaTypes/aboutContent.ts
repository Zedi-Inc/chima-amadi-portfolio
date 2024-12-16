export default {
	name: 'about',
	type: 'document',
	title: 'About',
	fields: [
		{
			name: 'heroContent',
			title: 'Hero content',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'name',
							title: 'Name',
							type: 'string',
						},
						{
							name: 'description',
							title: 'Description',
							type: 'blockContent',
						},
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
					],
				},
			],
		},
		{
			name: 'aboutContent',
			title: 'About content',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'name',
							title: 'Name',
							type: 'string',
						},
						{
							name: 'description',
							title: 'Description',
							type: 'blockContent',
						},
					],
				},
			],
		},
		{
			name: 'activities',
			title: 'Activities',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'name',
							title: 'Name',
							type: 'string',
						},
						{
							name: 'description',
							title: 'Description',
							type: 'text',
						},
						{
							name: 'image',
							title: 'Image',
							type: 'image',
							options: {
								hotspot: true,
							},
						},
					],
				},
			],
		},
	],
};
