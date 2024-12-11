Score : $1100$ points

## Problem Statement

You have an integer sequence $a=(a_1,a_2,\cdots,a_N)$ of length $N$.
All elements are initially $0$.

You are given an integer $C$ and $M$ intervals $([L_1,R_1],[L_2,R_2],\cdots,[L_M,R_M])$.

You will choose a permutation $p$ of $(1,2,\cdots,M)$ and an integer sequence $w=(w_1,w_2,\cdots,w_M)$ of length $M$.
Here, $1\le w_i\le C$ must hold.

Then, you will do $M$ modifications.
The $i$-th modification is the following:

- Change $a_{L_{p_i}}, \cdots, a_{R_{p_i}}$ to $w_i$.

It is guaranteed that every position in $a$ is covered by at least one interval.

Find the number of achievable $a$ after all modifications.
Print the answer modulo $998244353$.

## Constraints

- $1\le N\le 100$
- $1\le M\le\dfrac{N(N+1)}{2}$
- $1\le C&lt;998244353$
- $1 \le L_i \le R_i \le N$
- $(L_i,R_i) \neq (L_j,R_j)$ ($i \neq j$)
- Every position in $a$ is covered by at least one interval.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $C$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## Output

Print the answer.

```input1
5 5 2
1 3
2 2
3 3
1 5
3 5
```

```output1
16
```

There are $16$ sequences that can be achieved.
For example, you can achieve $a=(2,1,1,1,1)$ in the following manner:

- Choose $p=(4,1,2,3,5)$ and $w=(1,2,1,2,1)$
- The $1$-st operation changes $a$ into $(1,1,1,1,1)$
- The $2$-nd operation changes $a$ into $(2,2,2,1,1)$
- The $3$-rd operation changes $a$ into $(2,1,2,1,1)$
- The $4$-th operation changes $a$ into $(2,1,2,1,1)$
- The $5$-th operation changes $a$ into $(2,1,1,1,1)$

```input2
20 30 20
1 14
1 7
1 16
3 13
1 17
4 8
2 11
4 12
9 14
3 15
11 19
1 13
4 15
8 19
3 17
15 18
10 18
1 18
17 19
16 20
1 8
8 15
13 17
1 19
13 19
1 20
6 13
10 12
11 20
17 18
```

```output2
258066445
```