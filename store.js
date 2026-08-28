import {APP_CONFIG} from './config.js';import {defaultState} from './data.js';import {getSDK} from './firebase.js';
const KEY='orlando-planner-v2';let state=loadLocal();let remote=false;let unsubscribe=null;const listeners=new Set();
function loadLocal(){try{return {...defaultState(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return defaultState()}}
function notify(){listeners.forEach(fn=>fn(state))}export const getState=()=>state;export const subscribe=fn=>(listeners.add(fn),()=>listeners.delete(fn));
export async function setState(next,{save=true}={}){state=typeof next==='function'?next(structuredClone(state)):next;localStorage.setItem(KEY,JSON.stringify(state));notify();if(save&&remote)await persist()}
async function persist(){const {sdk,services}=getSDK();await sdk.fs.setDoc(sdk.fs.doc(services.db,'trips',APP_CONFIG.tripId),{...state,updatedAt:sdk.fs.serverTimestamp()},{merge:false})}
export async function connectRemote(user){if(!user)return;const {sdk,services}=getSDK(),ref=sdk.fs.doc(services.db,'trips',APP_CONFIG.tripId);const snap=await sdk.fs.getDoc(ref);if(!snap.exists())await persist();remote=true;unsubscribe=sdk.fs.onSnapshot(ref,x=>{if(!x.exists())return;const data=x.data();delete data.updatedAt;state={...defaultState(),...data};localStorage.setItem(KEY,JSON.stringify(state));notify()});}
export function disconnectRemote(){unsubscribe?.();unsubscribe=null;remote=false}
export const isRemote=()=>remote;
