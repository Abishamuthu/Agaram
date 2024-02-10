#include <iostream>
using namespace std;
class A{
    public:
    int a,b,c;
    A(){
        a=10;
        b=20;
    }
    A operator+(const A&val){
        A obj2;
        obj2.c=val.a-val.b;
        return obj2;
    }
};
int main(){
    A obj;
    A obj1;
    A obj2=obj+obj1;
    cout <<"sum="<<obj2.c;
    return 0;
}