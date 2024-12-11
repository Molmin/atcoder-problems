Score : $500$ points

## Problem Statement

Snuke received a positive integer $N$ from Takahashi.
A positive integer $m$ is called a *favorite number* when the following condition is satisfied:

- The quotient and remainder of $N$ divided by $m$ are equal, that is, $\lfloor \frac{N}{m} \rfloor = N \bmod m$ holds.

Find all favorite numbers and print the sum of those.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
8
```

```output1
10
```

There are two favorite numbers: $3$ and $7$. Print the sum of these, $10$.

```input2
1000000000000
```

```output2
2499686339916
```

Watch out for overflow.