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
            this.contacts.forEach((contact, index) => {
                console.log( `${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.email}` );
            });
        }
    }
}

// Create an instance of AddressBook
const addressBook = new AddressBook();

// Add contacts
addressBook.addContact("Deepraj", "Lodhi", "Jahangirabad", "Bhopal", "MP", "462008", "8878269924", "deeprajlodhi59@gmail.com");
addressBook.addContact("Sanjay", "Rajpoot", "MP nagar", "Bhopal", "MP", "462234", "9897654510", "sanjay@cg.com"); // Invalid case

// View all contacts
addressBook.viewAllContacts();
