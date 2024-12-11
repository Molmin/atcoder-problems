Score : $300$ points

## Problem Statement

Takahashi loves the number $7$ and multiples of $K$.

Where is the first occurrence of a multiple of $K$ in the sequence $7,77,777,\ldots$? (Also see Output and Sample Input/Output below.)

If the sequence contains no multiples of $K$, print `-1` instead.

## Constraints

- $1 \leq K \leq 10^6$
- $K$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Print an integer representing the position of the first occurrence of a multiple of $K$. (For example, if the first occurrence is the fourth element of the sequence, print `4`.)

```input1
101
```

```output1
4
```

None of $7$, $77$, and $777$ is a multiple of $101$, but $7777$ is.

```input2
2
```

```output2
-1
```

All elements in the sequence are odd numbers; there are no multiples of $2$.

```input3
999983
```

```output3
999982
```