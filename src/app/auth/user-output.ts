 /**
 * name
 */
export class User {
    Name: string;
    Username: string;
    LocationId: number;
    UserId: number;
    CompanyId: number;
    IsManager: UserType;
    Password: string;
}

export enum UserType{
    IsNotManager = 0, 
    IsManager
}