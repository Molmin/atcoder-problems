Score : $600$ points

## Problem Statement

You are given a sequence $A=(A_1,A_2,\dots,A_N)$ of length $N$ consisting of positive integers, where the elements of $A$ are distinct.

You will choose a positive integer $M$ between $3$ and $10^9$ (inclusive) to perform the following operation once:

- For each integer $i$ such that $1 \le i \le N$, replace $A_i$ with $A_i \bmod M$.

Can you choose an $M$ so that $A$ satisfies the following condition after the operation?  If you can, find such an $M$.

- There exists an integer $x$ such that $x$ is the majority in $A$.

Here, an integer $x$ is said to be the majority in $A$ if the number of integers $i$ such that $A_i = x$ is greater than the number of integers $i$ such that $A_i \neq x$.

## Constraints

- $3 \le N \le 5000$
- $1 \le A_i \le 10^9$
- The elements of $A$ are distinct.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If there exists an $M$ that satisfies the condition, print such an $M$.  Otherwise, print $-1$.

```input1
5
3 17 8 14 10
```

```output1
7
```

If you let $M=7$ to perform the operation, you will have $A=(3,3,1,0,3)$, where $3$ is the majority in $A$, so $M=7$ satisfies the condition.

```input2
10
822848257 553915718 220834133 692082894 567771297 176423255 25919724 849988238 85134228 235637759
```

```output2
37
```

```input3
10
1 2 3 4 5 6 7 8 9 10
```

```output3
-1
```