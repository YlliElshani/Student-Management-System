export interface User {
    username: string;
    displayName: string;
    token: string;
    image?:string;
    email:string;
    age: string;
    city: string;
    address: string;
    zipCode: string;
    phoneNumber:string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayName?:string;
    username?:string;
    age?: string;
    city?: string;
    address?: string;
    zipCode?: string;
    phoneNumber?:string;
}
