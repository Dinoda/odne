const files = {
	amelioration: {
		filename: 'amelioration.html',
		data: {
			anchors: [],
		},
	},
	'catalyseurs': {
		filename: 'catalyseurs.html',
		data: {
			anchors: [
				{
					href: "#combien",
					name: "Combien j'en ai ?",
				},
				{
					href: "#direct",
					name: "Les obtenir directement",
				},
				{
					href: "#monnaies",
					name: "Les obtenir à partir d'autres monnaies",
				},
				{
					href: "#echange",
					name: "Echanger d'autres monnaies contre des catalyseurs",
				}
			],
		},
	},
	equipement: {
		filename: 'equipement.html',
		data: {
			anchors: [
				{
					href: "#besoin",
					name: "De quoi je vais avoir besoin ?",
				},
				{
					href: "#cest-ou",
					name: "Je vais où ?!",
				},
				{
					href: "#le-gros",
					name: "Le gros de mon équipement",
				},
				{
					href: "#implants",
					name: "Et mes implants du coup ?",
				},
				{
					href: "#tactique",
					name: "Une carte tactique ?"
				}
			],
		},
	},
	index: {
		filename: 'index.html',
		data: {
			anchors: [],
		},
	},
};

export default files;
