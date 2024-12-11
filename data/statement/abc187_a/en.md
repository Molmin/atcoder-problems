Score : $100$ points

## Problem Statement

For an integer $n$, let $S(n)$ be the sum of digits in the decimal notation of $n$. For example, we have $S(123) = 1 + 2 + 3 = 6$.

Given two $3$-digit integers $A$ and $B$, find the greater of $S(A)$ and $S(B)$.

## Constraints

- All values in input are integers.
- $100 \le A, B \le 999$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the value of the greater of $S(A)$ and $S(B)$.<br>
If these are equal, print $S(A)$.

```input1
123 234
```

```output1
9
```

We have $S(123) = 1 + 2 + 3 = 6$ and $S(234) = 2 + 3 + 4 = 9$, so we should print the greater of these: $9$.

```input2
593 953
```

```output2
17
```

```input3
100 999
```

```output3
27
```