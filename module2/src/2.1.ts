{
//
//type assertion 

let anything: any;
anything = "everything is fare and lovely";
anything = 4567;

// (anything as string)

const kgToGm = (value: number | string): number | string | undefined => {
    if(typeof value === "string"){
        const convertValue = parseFloat(value) * 1000;
        return convertValue;
    }
    if(typeof value === "number"){
        return value * 1000;
    }
}
const result1 = kgToGm(456) as number;
const result2 = kgToGm("9847") as string;

console.log({result1, result2});


type ErrorMessage = {
    message: string;
}
try{

}catch(error){
    console.log((error as ErrorMessage).message);
    
}

















//
}