import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const  ExampleRead=readable( "Detta kan man läsa")
export const  ExampleWrite=writable( "Detta kan man skriva")