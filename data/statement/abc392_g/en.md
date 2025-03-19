Score : $600$ points

## Problem Statement

For integers $A, B, C$ ( $A &lt; B &lt; C$ ), if they satisfy $B-A = C-B$, then $(A, B, C)$ is called a **fine triplet**.<br>
You are given a set of $N$ distinct positive integers $S = \{ S_1, S_2, \dots, S_N \}$. Find the number of fine triplets $(A, B, C)$ with $A, B, C \in S$.

## Constraints

- All input values are integers.
- $1 \le N \le 10^6$
- $1 \le S_i \le 10^6$
- The elements of $S$ are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $S_2$ $\dots$ $S_N$

## Output

Print the number of fine triplets as an integer.

```input1
5
8 3 1 5 2
```

```output1
3
```

Here, $S = \{8,3,1,5,2\}$.
The fine triplets to be counted are the following three:

- $(1,2,3)$
- $(1,3,5)$
- $(2,5,8)$

```input2
7
300000 100000 499998 499999 200000 400000 500000
```

```output2
5
```

```input3
10
13 1 16 15 12 4 7 10 2 19
```

```output3
10
```