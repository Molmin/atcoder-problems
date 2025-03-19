Score : $500$ points

## Problem Statement

You are given two positive integers $N$ and $K$. A positive integer $X$ is called **compatible with $N$** if it satisfies the following condition:

- The bitwise XOR of $X$ and $N$ is equal to the remainder when $X$ is divided by $N$.

Determine whether there exist at least $K$ such integers $X$ that are compatible with $N$. If they do exist, find the $K$-th smallest such integer.

You are given $T$ test cases; solve each of them.

    
        About XOR
    
    

        The bitwise XOR of nonnegative integers $A$ and $B$, denoted $A\ \mathrm{XOR}\ B$, is defined as follows:
        

- In the binary representation of $A\ \mathrm{XOR}\ B$, the digit in the $2^k$ place (for $k \geq 0$) is $1$ if and only if exactly one of $A$ and $B$ has a $1$ in the $2^k$ place in its binary representation. Otherwise, it is $0$.

        For example, $3\ \mathrm{XOR}\ 5 = 6$ (in binary: $011\ \mathrm{XOR}\ 101 = 110$).
    

## Constraints

- $1 \le T \le 2\times 10^5$
- $1 \le N,K \le 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Here, $\text{case}_i$ denotes the $i$-th test case.<br>
Each test case is given in the following format:

> $N$ $K$

## Output

For each test case, if there exist at least $K$ positive integers that are compatible with $N$, print the $K$-th smallest such integer. Otherwise, print `-1`.

```input1
4
2 1
2 2
1 7
20250126 191
```

```output1
2
3
-1
20381694
```

Consider the case $N=2$.

- When $X=1$, $X\ \mathrm{XOR}\ N = 3$ and the remainder of $X$ when divided by $N$ is $1$. Therefore, $1$ is not compatible with $N$.
- When $X=2$, $X\ \mathrm{XOR}\ N = 0$ and the remainder of $X$ when divided by $N$ is $0$. Therefore, $2$ is compatible with $N$.
- When $X=3$, $X\ \mathrm{XOR}\ N = 1$ and the remainder of $X$ when divided by $N$ is $1$. Therefore, $3$ is compatible with $N$.

Hence, among the numbers that are compatible with $2$, the smallest is $2$ and the second smallest is $3$. Therefore, the answer to $\text{case}_1$ is $2$ and the answer to $\text{case}_2$ is $3$.