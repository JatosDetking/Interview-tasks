export interface Event {
    _id: string;
    name: string;
    userId: string;
    serviceId: string;
    status: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface Service {
    _id: string;
    name: string;
    image: string;
    description: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
