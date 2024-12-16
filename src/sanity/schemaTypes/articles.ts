export default {
	name: 'articles',
	type: 'document',
	title: 'Articles',
	fields: [
		{
			name: 'articles',
			title: 'Articles',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string',
						},
						{
							name: 'excerpt',
							title: 'Excerpt',
							type: 'string',
						},
						{
							name: 'link',
							title: 'Link',
							type: 'string',
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
