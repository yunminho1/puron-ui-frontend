
// const participant = [];//마라톤 참여 
// const completion = [];//마라톤 완주

// function solution(participant, completion) {
//     participant.push(getName());

//     if(participant.length<100000){
//         solution(participant, completion);
//          completion.push(getName());
//     }else{
//         return;
//     }
// }

// function getName(){
//     let name = "";
//     for(let i=0; i<=20; i++){
//         const alphabet = "abcdefghijklmnopqrstuvwxyz";
//         const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//         name= name+randomLetter
//     }
//     return name
// }

function solution(participant, completion) {
    const counts = new Map();

    participant.forEach((name) => {
        counts.set(name, (counts.get(name) || 0) + 1);
    });

    completion.forEach((name) => {
        counts.set(name, counts.get(name) - 1);
    });
    
    const zeroEntries = Array.from(counts).filter(([key, value]) => value === 1);

   return zeroEntries[0][0];
}
// n=5, lost=[2,4], reserve=[1,3,5] → return 5
// n=5, lost=[2,4], reserve=[3]     → return 4
// n=3, lost=[3], reserve=[1]       → return 2
function lostclose(n,lost,reserve){
    //참가자 수 N
    const lostFilter = lost.filter((lostData)=> !reserve.includes(lostData))
    const reserveFilter = reserve.filter((reserveData)=>!lost.includes(reserveData))

    const answarNumber = n-lostFilter.length;

    for(const student of lostFilter) {
        const min = student-1
        const up = student+1

        if(reserveFilter.includes(min)){
            reserveFilter.splice(reserveFilter.indexOf(min),1)
            answarNumber++
        }else if(reserveFilter.includes(up)){
             reserveFilter.splice(reserveFilter.indexOf(up),1)
            answarNumber++
        }
    }

    return answarNumber
}
// 예를 들어 
// arr = [1, 1, 3, 3, 0, 1, 1]
// 이면 [1, 3, 0, 1]을 return 
// 하면 되고, 
// arr = [4, 4, 4, 3, 3]
// 이면 [4, 3]을 
// return 하면 됩니다.
function solutionArr(arr) {
    return arr.filter((n,idx)=>n !==arr[idx-1])

    // // 여기에 코드 작성
    // const returnArr = [];
    // let bkdata = null;
    // for(const number of arr){

    //     if(number !==  bkdata){
    //         returnArr.push(number);
    //     }

    //     bkdata = number;
    // }

    // return returnArr

}

function solutionStack(s) {
    const stackArr = [];
    const sDataMap = {')':'(','}':'{',']':'['};

    for(const sData of s){
        if(sData === '(' || sData==='{' || sData==='['){
            stackArr.push(sData);
        }else{
            if(stackArr.pop() !== sDataMap[sData]){
                return false;
            }
        }
    }
    return stackArr.length===0



    // Array.from(s).forEach((data,idx)=>{
    //     if(stackArr.length===0 && data===')'){
    //          stackArr.push(data);
    //         TF = false;
    //     }
        
    //     if(TF){
    //         if(data ==='('){
    //             stackArr.push(data);
    //         }else if(data ===')'){
    //             stackArr.pop();
    //         }
    //     }
    // })

    // return stackArr.length===0

}

function allSearch(target){
    const arr = [1,2,3,4,6,7]
    const plusNum = new Map();
    let sumData = 0;
    for(const data of arr){
        const charge = target - data;
        if(charge!==0 && plusNum.has(charge)){
            sumData= `${data}+${plusNum.get(charge)}`
            break;
        }
        
        plusNum.set(data,data);
        
    }
    return sumData
}

// 테스트
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo" 나와야 함
console.log(lostclose(5,[5,3],[2,3]))
console.log(solutionArr([4, 4, 4, 3, 3]))
console.log(solutionStack('(({}))()'))
console.log(allSearch(5))