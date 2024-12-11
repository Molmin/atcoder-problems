Score : $400$ points

## Problem Statement

Let $f(A, B)$ be the exclusive OR of $A, A+1, ..., B$. Find $f(A, B)$.

What is exclusive OR?

The bitwise exclusive OR of integers $c_1, c_2, ..., c_n$ (let us call it $y$) is defined as follows:

- When $y$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if, the number of integers among $c_1, c_2, ...c_m$ whose binary representations have $1$ in the $2^k$'s place, is odd, and $0$ if that count is even.

For example, the exclusive OR of $3$ and $5$ is $6$. (When written in base two: the exclusive OR of `011` and `101` is `110`.)

## Constraints

- All values in input are integers.
- $0 \leq A \leq B \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Compute $f(A, B)$ and print it.

```input1
2 4
```

```output1
5
```

$2, 3, 4$ are `010`, `011`, `100` in base two, respectively.
The exclusive OR of these is `101`, which is $5$ in base ten.

```input2
123 456
```

```output2
435
```

```input3
123456789012 123456789012
```

```output3
123456789012
```