export interface User {
    id: string;
    userName: string;
    displayName: string;
    token: string;
    image?:string;
    email:string;
    age: string;
    city: string;
    address: string;
    zipCode: string;
    phoneNumber:string;
    password:string;
}

export interface UserFormValues {
    id?:string;
    email: string;
    password: string;
    displayName?:string;
    userName?:string;
    age?: string;
    city?: string;
    address?: string;
    zipCode?: string;
    phoneNumber?:string;
}

