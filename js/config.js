export const APP_CONFIG={
  tripId:'orlando-2026',
  fixedCorsProxy:'https://corsproxy.io/?url=',
  firebase:{
    apiKey:'COLE_AQUI',authDomain:'COLE_AQUI',projectId:'COLE_AQUI',
    storageBucket:'COLE_AQUI',messagingSenderId:'COLE_AQUI',appId:'COLE_AQUI'
  }
};
export const firebaseConfigured=()=>!Object.values(APP_CONFIG.firebase).some(v=>!v||v==='COLE_AQUI');
