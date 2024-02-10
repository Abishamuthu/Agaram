#include <iostream>
using namespace std;
class Base{
public:
    int i;
    Base(){

    }
    virtual void sum(int a){
     i = a;
     cout <<"base value:"<<i<<endl;
     }

    
};
class Derived : public Base
{
public:
    int j;
    Derived(){

    }
    virtual void sum(int b)
    {
        j = b;
        cout<<"sum:"<<j<<endl;

    }
};

int main(){
    //Base ptr;
     Base*ptr=new Derived();
     ptr->sum(10);
     delete(ptr);
     ptr=new Derived;
     ptr->sum(20);
     delete(ptr);
     ptr=new Base();
     ptr->sum(40);
    return 0;

}




