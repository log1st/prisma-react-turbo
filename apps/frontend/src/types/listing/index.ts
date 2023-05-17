import { SerializedError } from '@reduxjs/toolkit';
import { RequestError } from '@/api';

export type Sortable = string | number | Date;

export type OrderBy<Entity> = Partial<{
  [key in keyof Entity as Entity[key] extends Sortable ? key : never]?: 'asc' | 'desc'
}>;

export type QueryMeta = {
  isLoading: boolean;
  isFetching: boolean;
};

export type ListingSuccessResponse<Entity, Full> = {
  data: {
    take: number;
    skip: number;
    total: number;
    records: Array<Entity>
  }
} & (Full extends true ? {
  error: null
} : {});

export type ListingFailureResponse<Full extends boolean> = {
  error: RequestError | SerializedError
} & (Full extends true ? {
  data: null
} : {});

export type ListingResponse<Entity, Full extends boolean> = QueryMeta & (
  ListingSuccessResponse<Entity, Full> | ListingFailureResponse<Full>
);

export type Request<Entity> = {
  take: number;
  skip: number;
  orderBy?: Array<OrderBy<Entity>>;
  where?: any;
};

export type ListingQuery<Entity, Full extends boolean = false> = {
  (payload: Request<Entity>): ListingResponse<Entity, Full>
};
