function test(){
    var arr=[0,1,2,3];
    arr[10]="a";
    arr.push("6");
    arr.splice(10,2);
    for(var i=0;i<arr.length;++i){
        console.log(arr[i]);
    }
   
}

var testClass={
    name:"tom",
    age:21,
    eat:function(s1,s2){
        console.log(s1+" "+s2);
    }

}