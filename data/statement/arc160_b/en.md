Score : $500$ points

## Problem Statement

You are given a positive integer $N$.

Find the number, modulo $998244353$, of triples of positive integers $(x,y,z)$ that satisfy the following condition.

- All of $xy$, $yz$, $zx$ are less than or equal to $N$.

You have $T$ test cases to solve.

## Constraints

- $1 \le T \le 100$
- $1 \le N \le 10^9$

## Input

The input is given from Standard Input in the following format, where $\mathrm{case}_i$ represents the $i$-th test case:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is in the following format:

> $N$

## Output

Print $T$ lines. The $i$-th line $(1 \le i \le T)$ should contain the answer for the $i$-th test case.

```input1
4
1
2
5
998244353
```

```output1
1
4
17
727512986
```

In the first test case, $N=1$. There is one triple $(x,y,z)$ that satisfies the condition: $(1,1,1)$.

In the second test case, $N=2$. There are four triples $(x,y,z)$ that satisfy the condition: $(1,1,1),(2,1,1),(1,2,1),(1,1,2)$.