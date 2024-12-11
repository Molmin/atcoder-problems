Score : $150$ points

## Problem Statement

There are $2N$ people standing in a row, and the person at the $i$-th position from the left is wearing clothes of color $A_i$. Here, the clothes have $N$ colors from $1$ to $N$, and exactly two people are wearing clothes of each color.

Find how many of the integers $i=1,2,\ldots,N$ satisfy the following condition:

- There is exactly one person between the two people wearing clothes of color $i$.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq N$
- Each integer from $1$ through $N$ appears exactly twice in $A$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_{2N}$

## Output

Print the answer.

```input1
3
1 2 1 3 2 3
```

```output1
2
```

There are two values of $i$ that satisfy the condition: $1$ and $3$.

In fact, the people wearing clothes of color $1$ are at the 1st and 3rd positions from the left, with exactly one person in between.

```input2
2
1 1 2 2
```

```output2
0
```

There may be no $i$ that satisfies the condition.

```input3
4
4 3 2 3 2 1 4 1
```

```output3
3
```