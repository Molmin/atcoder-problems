Score : $400$ points

## Problem Statement

There are $N$ squares indexed $0$ through $(N-1)$ arranged in a line.
Snuke is going to mark every square by the following procedure.

1. Mark square $0$.
2. Repeat the following steps i - iii $(N-1)$ times.
1.    1. Initialize a variable $x$ with $(A+D) \bmod N$, where $A$ is the index of the square marked last time.
2.    2. While square $x$ is marked, repeat replacing $x$ with $(x+1) \bmod N$.
3.    3. Mark square $x$.

Find the index of the square that Snuke marks for the $K$-th time.

Given $T$ test cases, find the answer for each of them.

## Constraints

- $1\leq T \leq 10^5$
- $1\leq K\leq N \leq 10^9$
- $1\leq D \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{test}_i$ denotes the $i$-th test case:

> $T$
> 
> $\mathrm{test}_1$
> 
> $\mathrm{test}_2$
> 
> $\vdots$
> 
> $\mathrm{test}_T$

Each test case is given in the following format:

> $N$ $D$ $K$

## Output

Print $T$ lines.

The $i$-th $(1\leq i \leq T)$ line should contain the answer to the $i$-th test case.

```input1
9
4 2 1
4 2 2
4 2 3
4 2 4
5 8 1
5 8 2
5 8 3
5 8 4
5 8 5
```

```output1
0
2
1
3
0
3
1
4
2
```

If $N=4$ and $D=2$, Snuke marks the squares as follows.

1. Mark square $0$.
2. ($1$-st iteration) Let $x=(0+2)\bmod 4=2$.  Since square $2$ is not marked, mark it.
<br>($2$-nd iteration) Let $x=(2+2)\bmod 4=0$.  Since square $0$ is marked, let $x=(0+1)\bmod 4=1$.  Since square $1$ is not marked, mark it.
<br>($3$-rd iteration) Let $x=(1+2)\bmod 4=3$.  Since square $3$ is not marked, mark it.