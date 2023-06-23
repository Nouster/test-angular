import { IOrderDetails } from './IOrderDetails.model';

export interface IOrder {
  orderID: number;
  orderDetails: IOrderDetails;
  orderState: string;
  creationDateTime: string;
  lastModifiedDateTime: string;
  clientID: number;
}
