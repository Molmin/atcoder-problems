Score : $100$ points

## Problem Statement

You are given a $6$-digit positive integer $N$.<br>
Determine whether $N$ satisfies all of the following conditions.

- Among the digits of $N$, the digit $1$ appears exactly once.
- Among the digits of $N$, the digit $2$ appears exactly twice.
- Among the digits of $N$, the digit $3$ appears exactly three times.

## Constraints

- $N$ is an integer satisfying $100000 \le N \le 999999$.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print `Yes` if $N$ satisfies all the conditions described in the problem statement, and `No` otherwise, in one line.

```input1
123233
```

```output1
Yes
```

$123233$ satisfies the conditions in the problem statement, so print `Yes`.

```input2
123234
```

```output2
No
```

$123234$ does not satisfy the conditions in the problem statement, so print `No`.

```input3
323132
```

```output3
Yes
```

```input4
500000
```

```output4
No
```