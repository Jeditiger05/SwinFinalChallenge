export class Member {
    memberId?: number;
    name: string;
    email: string;
    password: string;
    pending: boolean;
    userType: string;
}

export class MemberCost {
    name: string;
    paid: number;
}