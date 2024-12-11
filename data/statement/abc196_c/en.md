Score : $300$ points

## Problem Statement

Given is an integer $N$.<br>
How many integers $x$ between $1$ and $N$ (inclusive) satisfy the following condition?

- The decimal representation (without leading zeros) of $x$ has an even number of digits, and its first and second halves are equal as strings.

## Constraints

- $N$ is an integer.
- $1 \leq N &lt; 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
33
```

```output1
3
```

Three numbers $11$, $22$, and $33$ satisfy the condition.

```input2
1333
```

```output2
13
```

For example, the decimal representation of $1313$ has four digits, and its first and second halves are both $13$, so $1313$ satisfies the condition.

```input3
10000000
```

```output3
999
```