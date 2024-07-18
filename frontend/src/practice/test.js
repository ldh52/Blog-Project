//concat,filter,map,slice,스프레드 연산자 


const a=[1,2,3];
const b=[...a]; //깊은 복사  //const b= a;얕은 복사 
console.log("--------스프레드 (전개)연산자");
b.push(4);
console.log(`a의 값은: ${a}`);
console.log(`a의 값은: ${b}`);
//백틱. 


console.log("------------------추가하기");
const a2=[1,2,3];
const b2=a2.concat(4); //만약 b2= a2.push(4) 하면 b의 값은 4만
//a2.concat(4)하면  a2값은 그대로 123 출력  ,어디간에 담지 않아서
//a2.push(4)하면 a2의 값은 1234
console.log(`a2의 값은:${a2}`)
console.log(`b2의 값은:${b2}`)
const c2=[0,...a2,4]; //concat은 끝에 추가만 되지만 스프레드는 앞에도 가능 
console.log(`c의 값은: ${c2}`);


console.log("------------------걸러내기"); //삭제하기
const a3=[1,2,3];
const b3=a3.filter((n)=>{return n!=1}); //bool을 return 받는다 =true 만 걸러낸다 

console.log(b3);

console.log("------------------잘라내기");
const a4=[1,2,3];
const b4=a4.slice(0,2); //index 2번 전까지.
console.log(`b4의 값은: ${b4}`);//1,2
const c4=[a4.slice(0,2)]; //[[1,2]] const c4=[...a4.slice(0,2)]; 로하면 [1,2]
console.log(c4);
//const c4=[...a4.slice(0,2),4,..a4.slice(2,3)]; 하면 1,2,4,3
// 즉 중간 삽입은 slice 쓰면 된다 



console.log("------------------반복하기");
const a5=[1,2,3];
for(let i=0;i<a5.length;i++){

    console.log(a5[i]);

} 

//jxs 에서는 못써 한줄 코딩해야하나봐
a5.forEach((n)=>{console.log(n);}) //변수 n ,return 못함
//b5=a5.forEach ~~ 못함
const b5=a5.map((n)=>n); //const b5=[...a5]; 값하나하나를 가공 가능 
console.log(b5);


const users=[
    {id:1,name:"홍길동",phone:"1234"},
    {id:2,name:"정재호",phone:"2222"},
    {id:3,name:"정영아",phone:"3333"}

];
const updateUserDto={
    id:2,name:"가나다"
    };
const update=users.map(n=>n.id===updateUserDto.id?{...n,...updateUserDto}:n) //update={...users}
console.log("업데이트된 users",update);
/*
const updateUserDto={
id:2,name:"가나다"
};
users[0].name=updateUserDto.name;
console.log(users[0]);
*/ 
const data={phone:"4588"}
const y={id:1,name:"홍길동",phone:"1234"}
const x={...y,name:"바뀌냐"};
const x2={id:1,name:"홍길동",phone:"1234",name:"레알이다"};
const x3={...y,...data}
console.log(x);
console.log(x2);
console.log(x3);


