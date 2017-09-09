

function AddressBook(){
this.Contacts = [];
this.initialComplete = false;
}

AddressBook.prototype.addContact = function(contact){
	this.Contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){
	return this.Contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
	this.Contacts.splice(index,1);
};

AddressBook.prototype.getInitialContacts = function(cb){
	var self = this;

	setTimeout(function(){
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
}