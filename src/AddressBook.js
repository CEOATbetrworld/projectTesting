function AddressBook(){
     this.contacts = [];
     this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
	let self = this;
	
	setTimeout(function(){
      self.initialComplete = true;
      if(cb){
      	return cb();
      }
	}, 3);
}

AddressBook.prototype.addContact = function(contact){
  this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(contactid){
  return this.contacts[contactid];
}

AddressBook.prototype.deleteContact = function(contactid){
	this.contacts.splice(contactid,1);
}
