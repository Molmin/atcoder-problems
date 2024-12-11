Score : $200$ points

## Problem Statement

There are $N$ people. The family name and given name of the $i$-th person $(1 \leq i \leq N)$ are $S_i$ and $T_i$, respectively.

Determine whether there is a pair of people with the same family and given names. In other words, determine whether there is a pair of integers $(i,j)$ such that $1 \leq i \lt j \leq N$, $S_i=S_j$, and $T_i=T_j$.

## Constraints

- $2 \leq N \leq 1000$
- $N$ is an integer.
- Each of $S_i$ and $T_i$ is a string of length between $1$ and $10$ (inclusive) consisting of English lowercase letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $T_1$
> 
> $S_2$ $T_2$
> 
> $\hspace{0.6cm}\vdots$
> 
> $S_N$ $T_N$

## Output

If there is a pair of people with the same family and given names, print `Yes`; otherwise, print `No`.

```input1
3
tanaka taro
sato hanako
tanaka taro
```

```output1
Yes
```

The first and third persons have the same family and given names.

```input2
3
saito ichiro
saito jiro
saito saburo
```

```output2
No
```

No two persons have the same family and given names.

```input3
4
sypdgidop bkseq
bajsqz hh
ozjekw mcybmtt
qfeysvw dbo
```

```output3
No
```