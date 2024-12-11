Score : $600$ points

## Problem Statement

Snuke has an integer sequence $A$ of length $N$.

He will make three cuts in $A$ and divide it into four (non-empty) contiguous subsequences $B, C, D$ and $E$.
The positions of the cuts can be freely chosen.

Let $P,Q,R,S$ be the sums of the elements in $B,C,D,E$, respectively.
Snuke is happier when the absolute difference of the maximum and the minimum among $P,Q,R,S$ is smaller.
Find the minimum possible absolute difference of the maximum and the minimum among $P,Q,R,S$.

## Constraints

- $4 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Find the minimum possible absolute difference of the maximum and the minimum among $P,Q,R,S$.

```input1
5
3 2 4 1 2
```

```output1
2
```

If we divide $A$ as $B,C,D,E=(3),(2),(4),(1,2)$, then $P=3,Q=2,R=4,S=1+2=3$.
Here, the maximum and the minimum among $P,Q,R,S$ are $4$ and $2$, with the absolute difference of $2$.
We cannot make the absolute difference of the maximum and the minimum less than $2$, so the answer is $2$.

```input2
10
10 71 84 33 6 47 23 25 52 64
```

```output2
36
```

```input3
7
1 2 3 1000000000 4 5 6
```

```output3
999999994
```