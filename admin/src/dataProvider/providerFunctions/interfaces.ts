import { User } from "../../types/User";
import { Link } from "../../types/Link";

export interface IGetOneParams {
    id: object
}

export interface ICreateParams {
    data: object
}

export interface IDeleteManyParams {
    ids: number[];
}

export interface IDeleteOneParams { 
    id: number
}

export interface IUpdateParams {
    id: number,
    data: User | Link
}