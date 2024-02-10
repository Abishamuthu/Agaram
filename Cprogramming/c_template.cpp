#include <iostream>
using namespace std;
template<typename T,typename Y>
class A{
    public:
    T a;
    Y b;
    A(T a,Y b):a(a),b(b){}
    Y add(){
        return a+b;
    }

};
int main(){
    //A<int>obj(5,6);
    A<int,float>obj(5,3.6);
    // int result=obj.add();
    float result=obj.add();
    cout<<"result:"<<result<<endl;
    return 0;
}

