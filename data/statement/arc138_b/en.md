Score : $500$ points

## Problem Statement

Snuke is about to make an integer sequence of length $N$ consisting of $0$ and $1$.
He starts with an empty sequence $x$ and does the following two kinds of operations $N$ times in total, in any order he likes.

- Operation A: Flip every element of $x$, that is, convert each $0$ to $1$ and vice versa. Then, add $0$ to the beginning of $x$.
- Operation B: Add $0$ to the end of $x$.

You are given an integer sequence of length $N$ consisting of $0$ and $1$: $A=(A_1,A_2,\cdots,A_N)$.
Determine whether it is possible to make $x$ equal to $A$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If it is possible to make $x$ equal to $A$, print `Yes`; otherwise, print `No`.

```input1
4
0 1 1 0
```

```output1
Yes
```

Snuke can do the following.

- Start with $x=()$
- Do operation A, making $x=(0)$.
- Do operation B, making $x=(0,0)$.
- Do operation A, making $x=(0,1,1)$.
- Do operation B, making $x=(0,1,1,0)$.

```input2
4
1 0 0 0
```

```output2
No
```

```input3
4
0 0 0 1
```

```output3
No
```