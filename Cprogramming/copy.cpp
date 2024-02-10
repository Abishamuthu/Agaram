#include <iostream>
#include <string>
using namespace std;
class A{
    public:
    int*a;
    A(){
        a=new int();
    }
    A(const A&copy){
        a=new int();
        *a=*copy.a;
    }
};
int main(){
    A obj;
     *obj.a=240;
    A obj1=obj;
     //*obj1.a=50;
   
    cout <<"base:"<<*obj.a<<endl;
    cout <<"copy:"<<*obj1.a<<endl;
    return 0;
}