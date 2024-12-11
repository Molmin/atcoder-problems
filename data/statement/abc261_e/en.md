Score : $500$ points

## Problem Statement

We have a variable $X$ and $N$ kinds of operations that change the value of $X$. Operation $i$ is represented as a pair of integers $(T_i,A_i)$, and is the following operation:

- if $T_i=1$, it replaces the value of $X$ with $X\ {\rm and}\ A_i$;
- if $T_i=2$, it replaces the value of $X$ with $X\ {\rm or}\ A_i$;
- if $T_i=3$, it replaces the value of $X$ with $X\ {\rm xor}\ A_i$.

Initialize $X$ with the value of $C$ and execute the following procedures in order:

- Perform Operation $1$, and then print the resulting value of $X$.
- Next, perform Operation $1, 2$ in this order, and then print the value of $X$.
- Next, perform Operation $1, 2, 3$ in this order, and then print the value of $X$.
- $\vdots$
- Next, perform Operation $1, 2, \ldots, N$ in this order, and then print the value of $X$.

  What are ${\rm and}, {\rm or}, {\rm xor}$? 

 The ${\rm and}, {\rm or}, {\rm xor}$ of non-negative integers $A$ and $B$ are defined as follows:

- When $A\ {\rm and}\ B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if both of the digits in that place of $A$ and $B$ are $1$, and $0$ otherwise.
- When $A\ {\rm or}\ B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if at least one of the digits in that place of $A$ and $B$ is $1$, and $0$ otherwise.
- When $A\ {\rm xor}\ B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of the digits in that place of $A$ and $B$ is $1$, and $0$ otherwise.

For example, $3\ {\rm and}\ 5 = 1$, $3\ {\rm or}\ 5 = 7$, and $3\ {\rm xor}\ 5 = 6$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1\leq T_i \leq 3$
- $0\leq A_i \lt 2^{30}$
- $0\leq C \lt 2^{30}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $C$
> 
> $T_1$ $A_1$
> 
> $T_2$ $A_2$
> 
> $\vdots$
> 
> $T_N$ $A_N$

## Output

Print $N$ lines, as specified in the Problem Statement.

```input1
3 10
3 3
2 5
1 12
```

```output1
9
15
12
```

The initial value of $X$ is $10$.

- Operation $1$ changes $X$ to $9$.
- Next, Operation $1$ changes $X$ to $10$, and then Operation $2$ changes it to $15$.
- Next, Operation $1$ changes $X$ to $12$, and then Operation $2$ changes it to $13$, and then Operation $3$ changes it to $12$.

```input2
9 12
1 1
2 2
3 3
1 4
2 5
3 6
1 7
2 8
3 9
```

```output2
0
2
1
0
5
3
3
11
2
```