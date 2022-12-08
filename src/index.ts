let message: string = "Hello World!";
message = "Test-01";

message = "Test-02";

console.log(message);

/**
 * js types
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * ts types
 * any
 * unknown
 * never
 * arrays
 * tyuplas
 * enums
 * infended types
 */

let dinosaurExtinction: number = 76_000_000;
let dinosaurFavorite: string = "T-Rex";
let extinct: boolean = true;

let anyExample; //Don't use
anyExample = "any value";
anyExample = 122;

function config(set: any) {
    return set;
}

let animals: string[] = ["cat", "dog", "bird"];
let numbers: number[] = [1, 2, 3];
let checks: boolean[] = [];
let empty: Array<number> = [];

let tupla: [number, string, number[]] = [1, "John", [1, 2, 3]];

const small = "s";
const median = "m";
const long = "l";
const extraLong = "xl";

enum Size {
    Small = "s",
    Median = "m",
    Long = "l",
    ExtraLong = "xl",
}

const mySize = Size.Long;
console.log(mySize);

const enum LoadingState {
    Idle,
    Loading,
    Succes,
    Error,
}

const state = LoadingState.Succes;

type Address = {
    number: number,
    street: string,
    country: string
}

type Person = {
    readonly id: number,
    name?: string,
    age?: number, //optional
    size: Size,
    address: Address
}

const obj: Person = {
    id: 1,
    name: "John",
    size: Size.ExtraLong,
    address: {
        number: 1,
        street: 'Guatemala',
        country: 'Guatemala'
    }
};

const arr: Person[] = []