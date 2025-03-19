Score : $100$ points

## Problem Statement

You are given an integer sequence of length $N$: $A = (A_1,A_2,\ldots,A_N)$.

Determine whether there is a place in $A$ where the same element appears three or more times in a row.

More formally, determine whether there exists an integer $i$ with $1 \le i \le N-2$ such that $A_i = A_{i+1} = A_{i+2}$.

## Constraints

- $3 \le N \le 100$
- $1 \le A_i \le 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

If there is a place in $A$ where the same element appears three or more times in a row, print `Yes`. Otherwise, print `No`.

```input1
5
1 4 4 4 2
```

```output1
Yes
```

We have $A=(1,4,4,4,2)$. There is a place where $4$ appears three times in a row, so print `Yes`.

```input2
6
2 4 4 2 2 4
```

```output2
No
```

We have $A=(2,4,4,2,2,4)$. There is no place where the same element appears three or more times in a row, so print `No`.

```input3
8
1 4 2 5 7 7 7 2
```

```output3
Yes
```

```input4
10
1 2 3 4 5 6 7 8 9 10
```

```output4
No
```

```input5
13
1 1 1 1 1 1 1 1 1 1 1 1 1
```

```output5
Yes
```