Score : $500$ points

## Problem Statement

There are $N$ people numbered $1$ through $N$.<br>
Takahashi has decided to choose a sequence $P = (P_1, P_2, \dots, P_N)$ that is a permutation of integers from $1$ through $N$, and give a candy to Person $P_1$, Person $P_2$, $\dots$, and Person $P_N$, in this order.<br>
Since Person $i$ dislikes Person $X_i$, if Takahashi gives a candy to Person $X_i$ prior to Person $i$, then Person $i$ gains frustration of $C_i$; otherwise, Person $i$'s frustration is $0$.<br>
Takahashi may arbitrarily choose $P$.  What is the minimum possible sum of their frustration?

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq X_i \leq N$
- $X_i \neq i$
- $1 \leq C_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $X_2$ $\dots$ $X_N$
> 
> $C_1$ $C_2$ $\dots$ $C_N$

## Output

Print the answer.

```input1
3
2 3 2
1 10 100
```

```output1
10
```

If he lets $P = (1, 3, 2)$, only Person $2$ gains a positive amount of frustration, in which case the sum of their frustration is $10$.<br>
Since it is impossible to make the sum of frustration smaller, the answer is $10$.

```input2
8
7 3 5 5 8 4 1 2
36 49 73 38 30 85 27 45
```

```output2
57
```