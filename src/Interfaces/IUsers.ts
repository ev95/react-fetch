interface IUsers {  
    id: number,
    name: string
    username: string
    email: string
    address: Address,
    phone: string
    website: string
    company: Company
  }


type Address = {
    street: string,
    suite:string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    } 
}

type Company = {
    name: string
    catchPhrase: string
    bs: string
}

export default IUsers;