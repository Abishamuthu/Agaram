#include <iostream>
using namespace std;
class A{
    public:
    int x;
    A(){
    
        cout <<"value:"<<x<<endl;
    }
    virtual void fun()=0;
};
class B : public A{
    public:
    int y;
    B(){
        
        }
    void fun(){
        cout <<"value x:"<<x<<endl;
        cout <<"value y"<<y<<endl;
    }
};
int main(){
    B obj;
    obj.x=10;
    obj.y=20;
    obj.fun();
    return 0;
}