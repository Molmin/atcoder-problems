Score : $700$ points

## Problem Statement

You are given a sequence of $N$ non-negative integers $A=(A_1,A_2,\dots,A_N)$ and a positive integer $K$.

Find the bitwise $\mathrm{XOR}$ of $\displaystyle \sum_{i=1}^{K} A_{X_i}$ over all $N^K$ sequences of $K$ positive integer sequences $X=(X_1,X_2,\dots,X_K)$ such that $1 \leq X_i \leq N\ (1\leq i \leq K)$.

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows:
        

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of the digits in that place of $A$ and $B$ is $1$, and $0$ otherwise.

        For example, we have $3 \oplus 5 = 6$ (in base two: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$. We can prove that this value does not depend on the order of $p_1, p_2, p_3, \dots, p_k$.
    

## Constraints

- $1 \leq N \leq 1000$
- $1 \leq K \leq 10^{12}$
- $0 \leq A_i \leq 1000$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
2 2
10 30
```

```output1
40
```

There are four sequences to consider: $(X_1,X_2)=(1,1),(1,2),(2,1),(2,2)$, for which $A_{X_1}+A_{X_2}$ is $20,40,40,60$, respectively. Thus, the answer is $20 \oplus 40 \oplus 40 \oplus 60=40$.

```input2
4 10
0 0 0 0
```

```output2
0
```

```input3
11 998244353
314 159 265 358 979 323 846 264 338 327 950
```

```output3
236500026047
```