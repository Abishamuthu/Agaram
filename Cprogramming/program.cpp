// #include <iostream>
// #include <string>
// using namespace std;
// class A{
// public:
//     string name;
//     int age;
// };
// int main() {
//     A obj;
//     obj.name="Abisha";
//     obj.age=20;
//     cout << "Name is:"<<obj.name<<"\n";
//     cout << "Age is:"<<obj.age;

//     return 0;
// }

// ///////////////////

// #include <iostream>
// using namespace std;
// class A{
// public:
//    int num1;
//    int func2(){
//     int num2=5;
//     return num2;
// }
// private:
//     int num2;
// protected:
//     int num3;
// };
// class B : public A {
// public:
//     int func1(){
//         int num3 = 10;
//         return num3;
//     }
    
//     int func3(){
//         int num1 = 20;
//         return num1;
//     }
// };
// int main(){
//  B obj;
//  cout << "protected number:" <<obj.func3()<<"\n";
//  cout << "public number:" <<obj.func1()<<"\n";
//  cout << "private number:" <<obj.func2()<<"\n";
//  return 0;
// }

// ////////////////

// #include <iostream>
// using namespace std;
// class A{
// public:
//     void add(int a,int b){
//         cout << "sum ="<<a+b;
//     }
    
//     void add(int a,int b,int c){
//         cout << "sum ="<<a+b+c;
//     }
// };
// int main(){
//     A obj;
//     obj.add(3, 5);
//     obj.add(1,2,3);
    
//     return 0;
// }

////////////////

#include <iostream>
using namespace std;
class A{
    public:
    virtual func(int a,int b){
       cout << "sum ="<<a+b; 
    }
};
class B :public A{
    public:
    virtual func(int a,int b){
        cout<<"sub ="<<a-b;
    }
};
int main() {   
    B *ptr=new B();
    ptr->func(5,2);
    delete(ptr);
    A*pt=new A();
    pt->func(5,2);
    return 0;
}


