Score : $800$ points

## Problem Statement

You are given a sequence of positive integers $A=(A_1,A_2,\cdots,A_N)$ of length $N$.

Consider dividing this sequence into $K$ non-empty contiguous subsequences.
Among these $K$ contiguous subsequences, the number of ones whose sum of elements is at least $S$ will be called the **score**.
Find the maximum value of the score.

## Constraints

- $1 \leq K \leq N \leq 250000$
- $1 \leq A_i \leq 10^9$
- $1 \leq S \leq 10^{15}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$ $S$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
4 3 6
1 4 2 8
```

```output1
2
```

If the sequence is divided into $(1),(4,2),(8)$, the score will be $2$.
No higher score can be achieved, so the answer is $2$.

```input2
10 5 2
1 1 1 1 1 1 1 1 1 1
```

```output2
5
```

```input3
10 5 3
1 1 1 1 1 1 1 1 1 1
```

```output3
2
```

```input4
20 6 946667802
786820955 250480341 710671229 946667801 19271059 404902145 251317818 22712439 520643153 344670307 274195604 561032101 140039457 543856068 521915711 857077284 499774361 419370025 744280520 249168130
```

```output4
6
```