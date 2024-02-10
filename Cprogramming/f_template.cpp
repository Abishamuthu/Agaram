#include <iostream>
using namespace std;
class A{
    public:
    template<typename T,typename Y>
    Y add(T a,Y b){
        return a+b;
    };
};
int main(){
    A obj;
    //int sum=obj.add<int>(2,3);
    float sum=obj.add<int,float>(3,5.5);
    cout<<"sum is:"<<sum;
    return 0;
}