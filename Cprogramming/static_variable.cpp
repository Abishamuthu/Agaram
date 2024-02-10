#include <iostream>
using namespace std;
class A{
    public:
    int a;
    A(){}
    static int k;
    // static int fun(){
    //     A::k++;
    //     return k;
    // }
};
class B : public A{
    public:
    static int fun(){
        A::k++;
        return k;
    }
};
int A::k=10;
int main(){
    A obj;
    obj.a=20;
    cout<<"a="<<obj.a<<endl;
    //int k=A::k;
    cout<<"k="<<A::k<<endl;
    //int result=A::fun();
    int result=B::fun();
    cout<<"result:"<<result<<endl;
    return 0;
}