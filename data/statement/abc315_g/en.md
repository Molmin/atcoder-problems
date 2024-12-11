Score : $550$ points

## Problem Statement

You are given integers $N,A,B,C,X$. Find the number of triples of integers $(i,j,k)$ that satisfy all of the following conditions.

- $1 \le i,j,k \le N$
- $Ai+Bj+Ck=X$

## Constraints

- All input values are integers.
- $1 \le N \le 10^6$
- $1 \le A,B,C \le 10^9$
- $1 \le X \le 3 \times 10^{15}$

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$ $C$ $X$

## Output

Print the answer as an integer.

```input1
5 3 1 5 15
```

```output1
3
```

The following three triples satisfy the conditions.

- $(1,2,2)$ : $3 \times 1 + 1 \times 2 + 5 \times 2 = 15$
- $(2,4,1)$ : $3 \times 2 + 1 \times 4 + 5 \times 1 = 15$
- $(3,1,1)$ : $3 \times 3 + 1 \times 1 + 5 \times 1 = 15$

```input2
1 1 1 1 1
```

```output2
0
```

```input3
100000 31415 92653 58979 1000000000
```

```output3
2896
```