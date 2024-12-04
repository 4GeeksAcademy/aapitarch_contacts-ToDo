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

			addContact: (contact) => {
				const store = getStore();
				const contacts = store.contacts;

				fetch('https://playground.4geeks.com/contact/agendas/aapitarch/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					})
				}).then(resp => resp.json()).then(respJson => {
					const newContact = [...contacts, respJson];
					setStore({ contacts: newContact })
				})
			},

			updateContact: (id, updateContact) => {
				const store = getStore();

				fetch(`https://playground.4geeks.com/contact/agendas/aapitarch/contacts/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updateContact)
				}).then(resp => resp.json()).then((respJson) => {
					// recorre todos los contactos y cuando lo encuentre lo actualizas		
					const updateContacts = store.contacts.map(contact => contact.id === parseInt(id) ? respJson : contact); // si me viene el contacto se retorna actualizado
					setStore({ contacts: [...updateContacts]});
				})
			},

			deleteContact: (id) => {
				const store = getStore();
				const contacts = store.contacts;

				fetch(`https://playground.4geeks.com/contact/agendas/aapitarch/contacts/${id}`, {
					method: 'DELETE'
				}).then(resp => {
					if(resp.ok) {
						resp.json()
					}
				}).then(() => {
					const newContact = contacts.filter(item => item.id !== id);
					setStore({contacts: newContact});
				})
			}
		}
	};
};

export default getState;
