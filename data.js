export const OUTLETS=[
 {id:'international-premium',name:'Orlando International Premium Outlets'},
 {id:'vineland-premium',name:'Orlando Vineland Premium Outlets'},
 {id:'lake-buena-vista',name:'Lake Buena Vista Factory Stores'},
 {id:'outlet-marketplace',name:'Orlando Outlet Marketplace'}
];
export const PARKS=[
 {id:'mk',name:'Magic Kingdom'},{id:'epcot',name:'EPCOT'},{id:'hs',name:'Hollywood Studios'},
 {id:'ak',name:'Animal Kingdom'},{id:'usf',name:'Universal Studios Florida'},{id:'ioa',name:'Islands of Adventure'},
 {id:'epic',name:'Epic Universe'},{id:'seaworld',name:'SeaWorld Orlando'}
];
export const PURCHASE_CATEGORIES=['Roupas','Calçados','Bolsas','Acessórios','Pelúcias','Brinquedos','Canecas','Pins','MagicBand','Varinhas','Eletrônicos','Cosméticos','Doces','Presentes','Casa','Outros'];
export const defaultState=()=>({schemaVersion:2,trip:{id:'orlando-2026',name:'Minha Viagem para Orlando',startDate:'2026-12-20',endDate:'2026-12-28',currency:'USD',budget:0},members:[],parks:PARKS,outlets:OUTLETS,stores:[],attractions:[],characters:[],restaurants:[],itineraryDays:[],itineraryItems:[],purchases:[],rainPlan:{},settings:{theme:'light'}});
