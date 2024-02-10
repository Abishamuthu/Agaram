#include <stdio.h>
void f(int *p) {
  *p=*p+1;
}
int main() {
  int i = 20;
  int *p = &i;
  f(p);
  printf("%d\n", i);

  return 0;
}
/////////////////

#include <stdio.h>
int main() {
   int a[3]={10,20,30};
   int *b;
   b=a;
   for(int i=0;i<3;i++){
        printf("Value of *b = %d\n", *b);
        printf("Value of b = %d\n", b);
        b++;
   }
    return 0;
}
/// /////////////

#include <stdio.h>
int main(){
    int n=10;
    for(int i=0;i<n;i++){
        printf("%d\n",i);
    }
    return 0;
}
///////////////

#include <stdio.h>
int main(){
    int i=2;
    while(i<10){
        printf("%d\n",i);
        i++;
    }
    return 0;
}
//////////////

#include <stdio.h>
int main(){
    int i=0;
    do{
        printf("%d\n",i);
        i++;
    }while(i<5);
    return 0;
}
///////////////

#include <stdio.h>
#include <string.h>
struct personData{
    char name[10];
    int age;
};
int main() {
   
struct personData person;
    strcpy(person.name,"Abisha");
    person.age = 20;
    printf("The name of the person is: %s\n", person.name);
    printf("The age of person is: %d\n", person.age);
    return 0;
}

///////////////

#include <stdio.h>
#include <stdlib.h>
int main(){
    int n;
    int i;
    int*ptr;
    printf("Enter the number:");
    scanf("%d",&n);
    ptr=(int*)malloc(sizeof(int)*n);
    
    printf("Enter the element number:");
    // scanf("%d\n",ptr[i]);
    for(i=0;i<n;i++)
    {
        scanf("%d",&ptr[i]);
    }
    for(i=0;i<n;i++){
        printf("Element is:%d\n",ptr[i]);
    }
    return 0;
}

////////////////

#include<stdio.h>
int main(){
    int a=10;
    char b='s';
    b=b+3;
    printf("Value of b is:%c",b);
}

//////////////

//Fabonacci
#include <stdio.h>

int main() {
    int a=0,b=1,c,i,number;
     printf("Enter the number:");
     scanf("%d",&number);
     printf("%d\n",a);
     printf("%d\n",b);
     for(i=2;i<number;i++){
         c=a+b;
         printf("%d\n",c);
         a=b;
         b=c;
     }

    return 0;
}

/////////////////

//palindrome
#include <stdio.h>

int main(){
    int n,original,reversed=0,reminder;
    printf("Enter the number:");
    scanf("%d",&n);
    original=n;
    
    for(;n!=0;n/=10){
        reminder=n%10;
        reversed=reversed*10+reversed;
    }
    
    if(original==reversed){
        printf(original,"it is palindome %d");
    }
    else{
        printf(original,"it is not palindrome %d");
        }
    return 0;
}

///////////////

#include<stdio.h>  
int main(){    
    int number=0;     
    printf("enter a number:");    
    scanf("%d",&number);    
switch(number){    
case 10:    
    printf("number is equals to 10");    
break;    
case 50:    
    printf("number is equal to 50");    
break;    
case 100:    
    printf("number is equal to 100");    
break;    
default:    
    printf("number is not equal to 10, 50 or 100");    
}    
return 0;  
} 