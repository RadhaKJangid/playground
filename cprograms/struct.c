#include<stdio.h>
#include<string.h>

struct Customers
{
    char name[20];
    int acc_number;
    float acc_balance;

};
int i;
struct Customers b[5];
void main()
{
    
    for(i=0;i<2;i++)
    {
            printf("Customer Details:\n");
            printf("Enter customer name:\n ");
            scanf("%s",b[i].name);
            printf("Account number:\n");
            scanf("%d", &b[i].acc_number);
            printf("Account Balance:\n");
            scanf("%f", &b[i].acc_balance);
             }
            display();
            print();
   
}
    void display(){
                                printf("Customer with balance less than 500 are\n");
                                for(i=0;i<2;i++)
                                {
                                    
                                    if(b[i].acc_balance<500)
                                
                                    {
                                        
                                        printf("Customer name:%s\n",b[i].name);
                                        printf("Account No.:%d\n", b[i].acc_number);
                                        printf("Account balance:%f\n", b[i].acc_balance);
                                    }
                                }
                       }
    void print(){
                                printf("Customer with balance greater than 1000 are\n");
                                for(i=0;i<2;i++)
                                {
                                    
                                if(b[i].acc_balance>1000)
                                    {
                                    b[i].acc_balance+= 100;
                                    printf("Customer name:%s\n",b[i].name);
                                    printf("Account balance:%f\n", b[i].acc_balance);
                                    }
                                
        
                    }
}
 
   
