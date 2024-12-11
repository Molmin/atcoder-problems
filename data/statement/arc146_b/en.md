Score : $500$ points

## Problem Statement

You are given a sequence of $N$ non-negative integers: $A=(A_1,A_2,\dots,A_N)$. You may perform the following operation at most $M$ times (possibly zero):

- choose an integer $i$ such that $1 \le i \le N$ and add $1$ to $A_i$.

Then, you will choose $K$ of the elements of $A$.

Find the maximum possible value of the bitwise $\mathrm{AND}$ of the elements you choose.

    
        What is bitwise ${\rm AND}$? 
    
    

        The bitwise ${\rm AND}$ of non-negative integers $A$ and $B$, $A\ \mathrm{AND}\ B$, is defined as follows:
        

- When $A\ {\rm AND}\ B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if both of the digits in that place of $A$ and $B$ are $1$, and $0$ otherwise.

        For example, $3\ {\rm AND}\ 5 = 1$. (In base two, $011\ {\rm AND}\ 101 = 001$.)  
        Generally, the bitwise ${\rm AND}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1\ \mathrm{AND}\ p_2)\ \mathrm{AND}\ p_3)\ \mathrm{AND}\ \dots\ \mathrm{AND}\ p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.
    

​

## Constraints

- $1 \le K \le N \le 2 \times 10^5$
- $0 \le M &lt; 2^{30}$
- $0 \le A_i &lt; 2^{30}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4 8 2
1 2 4 8
```

```output1
10
```

If you do the following, the bitwise $\mathrm{AND}$ of the elements you choose will be $10$.

- Perform the operation on $A_3$ six times. Now, $A_3 = 10$.
- Perform the operation on $A_4$ twice. Now, $A_4 = 10$.
- Choose $A_3$ and $A_4$, whose bitwise $\mathrm{AND}$ is $10$.

There is no way to choose two elements whose bitwise $\mathrm{AND}$ is greater than $10$, so the answer is $10$.

```input2
5 345 3
111 192 421 390 229
```

```output2
461
```