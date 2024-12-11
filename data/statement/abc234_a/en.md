Score : $100$ points

## Problem Statement

Let us define a function $f$ as $f(x) = x^2 + 2x + 3$.<br>
Given an integer $t$, find $f(f(f(t)+t)+f(f(t)))$.<br>
Here, it is guaranteed that the answer is an integer not greater than $2 \times 10^9$.

## Constraints

- $t$ is an integer between $0$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $t$

## Output

Print the answer as an integer.

```input1
0
```

```output1
1371
```

The answer is computed as follows.

- $f(t) = t^2 + 2t + 3 = 0 \times 0 + 2 \times 0 + 3 = 3$
- $f(t)+t = 3 + 0 = 3$
- $f(f(t)+t) = f(3) = 3 \times 3 + 2 \times 3 + 3 = 18$
- $f(f(t)) = f(3) = 18$
- $f(f(f(t)+t)+f(f(t))) = f(18+18) = f(36) = 36 \times 36 + 2 \times 36 + 3 = 1371$

```input2
3
```

```output2
722502
```

```input3
10
```

```output3
1111355571
```