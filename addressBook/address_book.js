// Address Book Manager Class
class AddressBookManager {
    constructor() {
        this.addressBooks = new Map(); // Stores multiple address books
    }

    // Create a new address book
    createAddressBook(name) {
        if (this.addressBooks.has(name)) {
            console.log(`Address book '${name}' already exists.`);
        } else {
            this.addressBooks.set(name, new AddressBook());
            console.log(`Address book '${name}' created.`);
        }
    }

    // Get an address book by name
    getAddressBook(name) {
        return this.addressBooks.get(name) || null;
    }
}

// Address Book Class
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    
    // Regex Patterns
    namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    addressPattern = /^[a-zA-Z0-9\s]{2,}$/;
    zipPattern = /^[0-9]{6}$/;
    phonePattern = /^[6-9][0-9]{9}$/;
    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    validateContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!this.namePattern.test(firstName)) 
            throw new Error("Invalid First Name!");
        if (!this.namePattern.test(lastName))
             throw new Error("Invalid Last Name!");
        if (!this.addressPattern.test(address))
             throw new Error("Invalid Address!");
        if (!this.addressPattern.test(city))
             throw new Error("Invalid City!");
        if (!this.addressPattern.test(state))
             throw new Error("Invalid State!");
        if (!this.zipPattern.test(zip)) 
            throw new Error("Invalid Zip Code!");
        if (!this.phonePattern.test(phoneNumber)) 
            throw new Error("Invalid Phone Number!");
        if (!this.emailPattern.test(email)) 
            throw new Error("Invalid Email!");
    }

    // Add a new contact
    addContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        try {
            this.validateContact(firstName, lastName, address, city, state, zip, phoneNumber, email);
            const contact = { firstName, lastName, address, city, state, zip, phoneNumber, email };
            this.contacts.push(contact);
            console.log("Contact added:", firstName, lastName);
        } catch (error) {
            console.error("Error adding contact:", error.message);
        }
    }

    // View all contacts
    viewAllContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log("All Contacts:");
            console.table(this.contacts);
        }
    }

    // Find a contact by name
    findContactByName(name) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === name.toLowerCase() || 
            contact.lastName.toLowerCase() === name.toLowerCase()
        );
    }

    // Edit an existing contact by name
    editContact(name, updatedDetails) {
        const contact = this.findContactByName(name);
        if (contact) {
            Object.assign(contact, updatedDetails);
            console.log(`Contact updated: ${contact.firstName} ${contact.lastName}`);
        } else {
            console.log(`No contact found with name: ${name}`);
        }
    }
}

// Create an instance of AddressBookManager
const manager = new AddressBookManager();

// Create multiple address books
manager.createAddressBook("Personal");
manager.createAddressBook("Work");

// Get the personal address book and add contacts
const personalBook = manager.getAddressBook("Personal");
if (personalBook) {
    personalBook.addContact("Deepraj", "Lodhi", "Jahangirabad", "Bhopal", "MP", "462008", "8878269924", "deeprajlodhi59@gmail.com");
    personalBook.addContact("Amit", "Sharma", "Indira Colony", "Delhi", "DL", "110001", "9876543210", "amitsharma@gmail.com");
    
    console.log("\nBefore Editing:");
    personalBook.viewAllContacts();

    // Edit a contact
    personalBook.editContact("Deepraj", { phoneNumber: "9998887776", city: "Indore" });

    console.log("\nAfter Editing:");
    personalBook.viewAllContacts();
}

// Get the work address book and add contacts
const workBook = manager.getAddressBook("Work");
if (workBook) {
    workBook.addContact("Sanjay", "Rajpoot", "IT Park", "Noida", "UP", "201301", "9123456789", "sanjay@work.com");
    workBook.viewAllContacts();
}
