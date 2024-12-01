const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getAllContacts: () => {
				 fetch('https://playground.4geeks.com/contact/agendas/aapitarch/')
					.then(resp => resp.json())
					.then(respJson => {
						const newContacts = respJson.contacts;
						setStore({ contacts: newContacts });
					}
				)
			},

			addContact: async (contact) => {
				await fetch('https://playground.4geeks.com/contact/agendas/aapitarch/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				})
			}
		}
	};
};

export default getState;
