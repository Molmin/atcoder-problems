Score : $400$ points

## Problem Statement

Let us regard an integer $k$ as "similar to $250$" if the following condition is satisfied:

- $k$ is represented as $k=p \times q^3$ with primes $p&lt;q$.

How many integers less than or equal to $N$ are "similar to $250$"?

## Constraints

- $N$ is an integer between $1$ and $10^{18}$ (inclusive)

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
250
```

```output1
2
```

- $54 = 2 \times 3^3$ is "similar to $250$".
- $250 = 2 \times 5^3$ is "similar to $250$".

The two integers above are all the integers "similar to $250$".

```input2
1
```

```output2
0
```

```input3
123456789012345
```

```output3
226863
```