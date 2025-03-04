// Address Book Class
class AddressBook {
    constructor() {
        this.contacts = []; 
    }

    // Add a new contact
    addContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        const contact = {firstName, lastName, address, city, state, zip, phoneNumber, email };
        this.contacts.push(contact);
        console.log("Contact added: "+firstName+" " +lastName);
    }

    // View all contacts
    viewAllContacts() {
        if (this.contacts.length == 0) {
            console.log("No contacts found.");
        } else {
            console.log("All Contacts:");
            this.contacts.forEach((contact, index) => {
                console.log(
                    `${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.email}`
                );
            });
        }
    }

    // Search for a contact by name
    searchContactByName(name) {
        const results = this.contacts.filter(
            (contact) =>
                contact.firstName.toLowerCase().includes(name.toLowerCase()) ||
                contact.lastName.toLowerCase().includes(name.toLowerCase())
        );

        if (results.length === 0) {
            console.log(`No contacts found with name: ${name}`);
        } else {
            console.log(`Search Results for "${name}":`);
            results.forEach((contact) => {
                console.log(`${contact.firstName} ${contact.lastName} - ${contact.email}`);
            });
        }
    }

    // Delete a contact by email
    deleteContactByEmail(email) {
        const index = this.contacts.findIndex((contact) => contact.email === email);
        if (index === -1) {
            console.log(`No contact found with email: ${email}`);
        } else {
            const deletedContact = this.contacts.splice(index, 1)[0];
            console.log(`Deleted contact: ${deletedContact.firstName} ${deletedContact.lastName}`);
        }
    }
}

// Create an instance of AddressBook
const addressBook = new AddressBook();

// Add some contacts
addressBook.addContact( "Deepraj", "Lodhi", "jahangirabad", "Bhopal", "MP", "462008", "8878269924", "deeprajlodhi59@gmail.com");

// View all contacts
addressBook.viewAllContacts();

// Search for a contact by name
addressBook.searchContactByName("Deepraj");

// Delete a contact by email
addressBook.deleteContactByEmail("deeprajlodhi59@gmail.com");

// View all contacts after deletion
addressBook.viewAllContacts();