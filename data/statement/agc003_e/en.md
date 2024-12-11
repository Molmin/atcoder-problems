Score : $1400$ points

## Problem Statement

Snuke got an integer sequence from his mother, as a birthday present. The sequence has $N$ elements, and the $i$-th of them is $i$.
Snuke performs the following $Q$ operations on this sequence. The $i$-th operation, described by a parameter $q_i$, is as follows:

- Take the first $q_i$ elements from the sequence obtained by concatenating infinitely many copy of the current sequence, then replace the current sequence with those $q_i$ elements.

After these $Q$ operations, find how many times each of the integers $1$ through $N$ appears in the final sequence.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq Q \leq 10^5$
- $1 \leq q_i \leq 10^{18}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $q_1$
> 
> :
> 
> $q_Q$

## Output

Print $N$ lines. The $i$-th line $(1 \leq i \leq N)$ should contain the number of times integer $i$ appears in the final sequence after the $Q$ operations.

```input1
5 3
6
4
11
```

```output1
3
3
3
2
0
```

After the first operation, the sequence becomes: $1,2,3,4,5,1$.

After the second operation, the sequence becomes: $1,2,3,4$.

After the third operation, the sequence becomes: $1,2,3,4,1,2,3,4,1,2,3$.

In this sequence, integers $1,2,3,4,5$ appear $3,3,3,2,0$ times, respectively.

```input2
10 10
9
13
18
8
10
10
9
19
22
27
```

```output2
7
4
4
3
3
2
2
2
0
0
```