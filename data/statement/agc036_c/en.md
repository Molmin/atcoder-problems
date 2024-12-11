Score : $900$ points

## Problem Statement

We have a sequence of $N$ integers: $x=(x_0,x_1,\cdots,x_{N-1})$.
Initially, $x_i=0$ for each $i$ ($0 \leq i \leq N-1$).

Snuke will perform the following operation **exactly** $M$ times:

- Choose two distinct indices $i, j$ ($0 \leq i,j \leq N-1,\ i \neq j$).
Then, replace $x_i$ with $x_i+2$ and $x_j$ with $x_j+1$.

Find the number of different sequences that can result after $M$ operations.
Since it can be enormous, compute the count modulo $998244353$.

## Constraints

- $2 \leq N \leq 10^6$
- $1 \leq M \leq 5 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of different sequences that can result after $M$ operations, modulo $998244353$.

```input1
2 2
```

```output1
3
```

After two operations, there are three possible outcomes:

- $x=(2,4)$
- $x=(3,3)$
- $x=(4,2)$

For example, $x=(3,3)$ can result after the following sequence of operations:

- First, choose $i=0,j=1$, changing $x$ from $(0,0)$ to $(2,1)$.
- Second, choose $i=1,j=0$, changing $x$ from $(2,1)$ to $(3,3)$.

```input2
3 2
```

```output2
19
```

```input3
10 10
```

```output3
211428932
```

```input4
100000 50000
```

```output4
3463133
```