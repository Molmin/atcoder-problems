Score : $100$ points

    

## Problem Statement

    

A professor invented Cookie Breeding Machine for his students who like cookies very much. 

    

When one cookie with the taste of $x$ is put into the machine and a non-negative integer $y$ less than or equal to $127$ is input on the machine,
        it consumes the cookie and generates two cookies with the taste of $y$ and ($x$ XOR $y$). 

    

Here, XOR represents [Bitwise Exclusive OR](https://en.wikipedia.org/wiki/Exclusive_or). 

    

At first, there is only one cookie and the taste of it is $D$ . 

    

Find the maximum value of the sum of the taste of the exactly $N$ cookies generated after the following operation is conducted $N-1$ times. 

    

1. Put one of the cookies into the machine.
2. Input a non-negative integer less than or equal to $127$ on the machine.

    

## Constraints

    

- $1 \leq T \leq 1000$
- $1 \leq N_t \leq 1000$ $(1 \leq t \leq T)$
- $1 \leq D_t \leq 127$ $(1 \leq t \leq T)$

    
        

## Input

        

The input is given from Standard Input in the following format:

> $T$
> 
> $N_1$ $D_1$
> 
> :
> 
> $N_T$ $D_T$
        

            The input consists of multiple test cases. An Integer $T$ that represents the number of test cases is given on line $1$. <br>
            Each test case is given on the next $T$ lines. <br>
            In the $t$-th test case ($1 \leq t \leq T$),
            $N_t$ that represents the number of cookies generated through the operations and $D_t$ that represents the taste of the initial cookie are given separated by space. <br>
        

    

    
        

## Output

        

For each test case, print the maximum value of the sum of the taste of the $N$ cookies generated through the operations on one line. 

    

    
```input1
3
3 1
4 108
1 10
```

    
```output1
255
400
10
```
    

        On the 1st test case, if the machine is used as follows, three cookies with the taste of $61$, $95$ and $99$ are generated.
        Since the sum of these values is maximum among all possible ways, the answer is $255$.
        

1. Put the cookie with the taste of $1$ and input an integer $60$ on the machine, lose the cookie and get two cookies with the taste of $60$ and $61$.
2. Put the cookie with the taste of $60$ and input an integer $99$ on the machine, lose the cookie and get two cookies with the taste of $99$ and $95$.

    

    

        On the 3rd test case, the machine may not be used.