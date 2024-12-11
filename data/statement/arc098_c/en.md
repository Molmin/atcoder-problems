Score : $600$ points

## Problem Statement

You are given an integer sequence $A$ of length $N$ and an integer $K$.
You will perform the following operation on this sequence $Q$ times:

- Choose a contiguous subsequence of length $K$, then remove the smallest element among the $K$ elements contained in the chosen subsequence (if there are multiple such elements, choose one of them as you like).

Let $X$ and $Y$ be the values of the largest and smallest element removed in the $Q$ operations. You would like $X-Y$ to be as small as possible.
Find the smallest possible value of $X-Y$ when the $Q$ operations are performed optimally.

## Constraints

- $1 \leq N \leq 2000$
- $1 \leq K \leq N$
- $1 \leq Q \leq N-K+1$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $Q$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the smallest possible value of $X-Y$.

```input1
5 3 2
4 3 1 5 2
```

```output1
1
```

In the first operation, whichever contiguous subsequence of length $3$ we choose, the minimum element in it is $1$.
Thus, the first operation removes $A_3=1$ and now we have $A=(4,3,5,2)$.
In the second operation, it is optimal to choose $(A_2,A_3,A_4)=(3,5,2)$ as the contiguous subsequence of length $3$ and remove $A_4=2$.
In this case, the largest element removed is $2$, and the smallest is $1$, so their difference is $2-1=1$.

```input2
10 1 6
1 1 2 3 5 8 13 21 34 55
```

```output2
7
```

```input3
11 7 5
24979445 861648772 623690081 433933447 476190629 262703497 211047202 971407775 628894325 731963982 822804784
```

```output3
451211184
```