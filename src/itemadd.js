export class Item {
  body: string;
  userId: string;
}

  getItemsList(): FirebaseListObservable<Item[]> {
    if (!this.userId) return;
    this.items = this.db.list(`items/`);
    return this.items
  }


  // Create a brand new item
  createItem(item: Item)  {
    item.userId = this.userId
    this.items.push(item)
  }




//
//
//
join(itemKey) {
  const data = { [this.userId]: true}
  const members = this.db.object(`items/${itemKey}/members`)
  members.update(data)
}

leave(itemKey) {
  const member = this.db.object(`items/${itemKey}/members/${this.userId}`)
  member.remove()
}

export class ContactService {

  private contactCollection: FirestoreCollection<any>;
  private contactDocument: FirestoreDocument<any>;
  public contacts: Observable<any[]>;
  
  constructor(
  private authService: AuthService,
  private afs: Firestore
  ) {
  this.authService.user
  .subscribe(user => this.contactCollection = this.afs.collection(`directories/${user.uid}/contacts`));
  }
  
  getContacts(){
  return this.contactCollection.valueChanges() // this returns undefined.
  }
  
  }