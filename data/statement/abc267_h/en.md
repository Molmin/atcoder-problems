Score : $600$ points

## Problem Statement

You are given a sequence $A=(A_1,A_2,\dots,A_N)$ of length $N$.

Find the number, modulo $998244353$, of ways to choose an odd number of elements from $A$ so that the sum of the chosen elements equals $M$.

Two choices are said to be different if there exists an integer $i (1 \le i \le N)$ such that one chooses $A_i$ but the other does not.

## Constraints

- $1 \le N \le 10^5$
- $1 \le M \le 10^6$
- $1 \le A_i \le 10$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
5 6
1 2 3 3 6
```

```output1
3
```

The following $3$ choices satisfy the condition:

- Choosing $A_1$, $A_2$, and $A_3$.
- Choosing $A_1$, $A_2$, and $A_4$.
- Choosing $A_5$.

Choosing $A_3$ and $A_4$ does not satisfy the condition because, although the sum is $6$, the number of chosen elements is not odd.

```input2
10 23
1 2 3 4 5 6 7 8 9 10
```

```output2
18
```