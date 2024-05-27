#include <stdio.h>

int main()
{
    printf("Hello World\n");
    int a=1000;
    printf("%d\n",a);
    
    int *p=&a;
    printf("here is the memory address:");
    printf("%p",p);

    return 0;
}
