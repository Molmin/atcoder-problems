Score : $400$ points

## Problem Statement

We have a sequence of $N$ integers between $0$ and $9$ (inclusive): $A=(A_1, \dots, A_N)$, arranged from left to right in this order.

Until the length of the sequence becomes $1$, we will repeatedly do the operation $F$ or $G$ below.

- Operation $F$: delete the leftmost two values (let us call them $x$ and $y$) and then insert $(x+y)\%10$ to the left end.
- Operation $G$: delete the leftmost two values (let us call them $x$ and $y$) and then insert $(x\times y)\%10$ to the left end.

Here, $a\%b$ denotes the remainder when $a$ is divided by $b$.

For each $K=0,1,\dots,9$, answer the following question.

Among the $2^{N-1}$ possible ways in which we do the operations, how many end up with $K$ being the final value of the sequence?<br>
Since the answer can be enormous, find it modulo $998244353$.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq A_i \leq 9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\dots$ $A_N$

## Output

Print ten lines.<br>
The $i$-th line should contain the answer for the case $K=i-1$.

```input1
3
2 7 6
```

```output1
1
0
0
0
2
1
0
0
0
0
```

If we do Operation $F$ first and Operation $F$ second: the sequence becomes $(2,7,6) \to (9,6) \to (5)$.<br>
If we do Operation $F$ first and Operation $G$ second: the sequence becomes $(2,7,6) \to (9,6) \to (4)$.<br>
If we do Operation $G$ first and Operation $F$ second: the sequence becomes $(2,7,6) \to (4,6) \to (0)$.<br>
If we do Operation $G$ first and Operation $G$ second: the sequence becomes $(2,7,6) \to (4,6) \to (4)$.

```input2
5
0 1 2 3 4
```

```output2
6
0
1
1
4
0
1
1
0
2
```