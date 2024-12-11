Score : $300$ points

## Problem Statement

When Takahashi writes an integer, he uses a comma every third digit from the right. For example, $1234567$ is written as `1,234,567`, and $777$ is written as `777`.

How many commas will be used in total when he writes each integer from $1$ through $N$ once?

## Constraints

- $1 \leq N \leq 10^{15}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the total number of commas.

```input1
1010
```

```output1
11
```

No comma is used in writing $999$ or smaller numbers. One comma is used in writing each of the numbers from $1000$ through $1010$.

Thus, $11$ commas are used in total.

```input2
27182818284590
```

```output2
107730272137364
```