Score: $200$ points

## Problem Statement

A string $S$ consisting of lowercase English letters is a **good string** if and only if it satisfies the following property for all integers $i$ not less than $1$:

- There are exactly zero or exactly two different letters that appear exactly $i$ times in $S$.

Given a string $S$, determine if it is a good string.

## Constraints

- $S$ is a string of lowercase English letters with a length between $1$ and $100$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print `Yes` if $S$ is a good string, and `No` otherwise.

```input1
commencement
```

```output1
Yes
```

For the string `commencement`, the number of different letters that appear exactly $i$ times is as follows:

- $i=1$: two letters (`o` and `t`)
- $i=2$: two letters (`c` and `n`)
- $i=3$: two letters (`e` and `m`)
- $i\geq 4$: zero letters

Therefore, `commencement` satisfies the condition of a good string.

```input2
banana
```

```output2
No
```

For the string `banana`, there is only one letter that appears exactly one time, which is `b`, so it does not satisfy the condition of a good string.

```input3
ab
```

```output3
Yes
```