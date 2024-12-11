Score : $500$ points

## Problem Statement

Let us call a positive integer $n$ that satisfies the following condition an **arithmetic number**.

- Let $d_i$ be the $i$-th digit of $n$ from the top (when $n$ is written in base $10$ without unnecessary leading zeros.) Then, $(d_2-d_1)=(d_3-d_2)=\dots=(d_k-d_{k-1})$ holds, where $k$ is the number of digits in $n$.-   - This condition can be rephrased into the sequence $(d_1,d_2,\dots,d_k)$ being arithmetic.
-   - If $n$ is a $1$-digit integer, it is assumed to be an arithmetic number.

For example, $234,369,86420,17,95,8,11,777$ are arithmetic numbers, while $751,919,2022,246810,2356$ are not.

Find the smallest arithmetic number not less than $X$.

## Constraints

- $X$ is an integer between $1$ and $10^{17}$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the answer as an integer.

```input1
152
```

```output1
159
```

The smallest arithmetic number not less than $152$ is $159$.

```input2
88
```

```output2
88
```

$X$ itself may be an arithmetic number.

```input3
8989898989
```

```output3
9876543210
```