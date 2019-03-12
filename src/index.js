module.exports = function getZerosCount(number, base) {
    let p=100000000000; //imagine max value for zeros
    for(let i=2;i<=base;i++){
        if(base%i===0){
            let k=0;//base multiplier degree

            //find value of k
            while(base%i===0){
                base=base/i;
                k++;
            }

            let temp=number;
            let zerosXk=0;
            let m=Math.trunc(temp/i); //first time
            while(m>0){
                zerosXk+=m;
                temp=m;
                m=Math.trunc(temp/i);
            }
            let zeros=Math.trunc(zerosXk/k);

            p=Math.min(p,zeros);
        }
    }
    return p;
}