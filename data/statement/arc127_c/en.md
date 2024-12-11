Score : $500$ points

## Problem Statement

Snuke has written on a blackboard every integer from $1$ through $(2^N-1)$, in binary.

Find the $X$-th lexicographically smallest string when seeing the integers on the blackboard as strings.

Here, the input gives $N$ in decimal, but $X$ in binary.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq X \leq 2^N-1$
- $X$ is in binary.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X$

## Output

Print the answer.

```input1
3
101
```

```output1
11
```

The strings written on the blackboard in lexicographical order are `1`, `10`, `100`, `101`, `11`, `110`, `111`.
Additionally, we have $X=101(\mathrm{binary})=5(\mathrm{decimal})$.
Thus, the answer is `11`.

```input2
10
10100011
```

```output2
1001001111
```

```input3
1000000
11111
```

```output3
1000000000000000000000000000000
```