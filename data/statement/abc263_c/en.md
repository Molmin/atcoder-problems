Score : $300$ points

## Problem Statement

Print all strictly increasing integer sequences of length $N$ where all elements are between $1$ and $M$ (inclusive), in lexicographically ascending order.

## Notes

For two integer sequences of the same length $A_1,A_2,\dots,A_N$ and  $B_1,B_2,\dots,B_N$, $A$ is said to be lexicographically earlier than $B$ if and only if:

- there is an integer $i$ $(1 \le i \le N)$ such that $A_j=B_j$ for all integers $j$ satisfying $1 \le j &lt; i$, and $A_i &lt; B_i$.

An integer sequence $A_1,A_2,\dots,A_N$ is said to be strictly increasing if and only if:

- $A_i &lt; A_{i+1}$ for all integers $i$ $(1 \le i \le N-1)$.

## Constraints

- $1 \le N \le M \le 10$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the sought sequences in lexicographically ascending order, each in its own line (see Sample Outputs).

```input1
2 3
```

```output1
1 2 
1 3 
2 3
```

The sought sequences are $(1,2),(1,3),(2,3)$, which should be printed in lexicographically ascending order.

```input2
3 5
```

```output2
1 2 3 
1 2 4 
1 2 5 
1 3 4 
1 3 5 
1 4 5 
2 3 4 
2 3 5 
2 4 5 
3 4 5
```