import {APP_CONFIG,firebaseConfigured} from './config.js';
let sdk=null,services=null;
export async function initFirebase(){
 if(!firebaseConfigured()) return null;
 const [app,auth,fs,storage]=await Promise.all([
  import('https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js'),
  import('https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js'),
  import('https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js'),
  import('https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js')]);
 const firebaseApp=app.initializeApp(APP_CONFIG.firebase);
 sdk={app,auth,fs,storage}; services={app:firebaseApp,auth:auth.getAuth(firebaseApp),db:fs.getFirestore(firebaseApp),storage:storage.getStorage(firebaseApp)};
 return services;
}
export const getSDK=()=>({sdk,services});
export async function signIn(){const {sdk,services}=getSDK();return sdk.auth.signInWithPopup(services.auth,new sdk.auth.GoogleAuthProvider())}
export async function signOutUser(){const {sdk,services}=getSDK();return sdk.auth.signOut(services.auth)}
export function onUser(cb){const {sdk,services}=getSDK();return sdk.auth.onAuthStateChanged(services.auth,cb)}
