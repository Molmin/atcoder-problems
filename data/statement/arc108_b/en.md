Score : $400$ points

## Problem Statement

Given is a string $S$ of length $N$ consisting of lowercase English letters.
Snuke can do this operation any number of times: remove `fox` occurring as a substring from $s$ and concatenate the remaining parts of $s$.

What is the minimum possible length of $s$ after some number of operations by Snuke?

## Constraints

- $1 \leq N \leq 2 \times 10^{5}$
- $s$ is a string of length $N$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s$

## Print

Print the minimum possible length of $s$ after some number of operations by Snuke.

```input1
6
icefox
```

```output1
3
```

- By removing the `fox` at the end of `icefox`, we can turn $s$ into `ice`.

```input2
7
firebox
```

```output2
7
```

- `fox` does not occur as a substring.

```input3
48
ffoxoxuvgjyzmehmopfohrupffoxoxfofofoxffoxoxejffo
```

```output3
27
```