Score : $500$ points

## Problem Statement

You are given positive integers $A$ and $B$.

Find the minimum value of $X+Y$ for non-negative integers $X$ and $Y$ such that $B+Y$ is a multiple of $A+X$.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq A,\ B \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_{1}$
> 
> $\mathrm{case}_{2}$
> 
> $\vdots$
> 
> $\mathrm{case}_{T}$

Each case is in the following format:

> $A$ $B$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.

```input1
5
11 23
8 16
4394 993298361
95392025 569922442
8399283 10293
```

```output1
2
0
65
2429708
8388990
```

For the first test case, if we let $X=1$ and $Y=1$, then $B+Y=24$ will be a multiple of $A+X=12$. Here, we have $X+Y=2$, and there is no way to make $X+Y$ smaller, so the answer is $2$.

For the second test case, if we let $X=0$ and $Y=0$, then $B+Y=16$ will be a multiple of $A+X=8$.