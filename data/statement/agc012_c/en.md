Score : $1000$ points

## Problem Statement

We will call a string $x$ *good* if it satisfies the following condition:

- Condition: $x$ can be represented as a concatenation of two copies of another string $y$ of length at least $1$.

For example, `aa` and `bubobubo` are good; an empty string, `a`, `abcabcabc` and `abba` are not good.

Eagle and Owl created a puzzle on good strings.
Find one string $s$ that satisfies the following conditions. It can be proved that such a string always exists under the constraints in this problem.

- $1 \leq |s| \leq 200$
- Each character of $s$ is one of the $100$ characters represented by the integers $1$ through $100$.
- Among the $2^{|s|}$ subsequences of $s$, exactly $N$ are good strings.

## Constraints

- $1 \leq N \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

In the first line, print $|s|$, the length of $s$.
In the second line, print the elements in $s$ in order, with spaces in between. Any string that satisfies the above conditions will be accepted.

```input1
7
```

```output1
4
1 1 1 1
```

There are two good strings that appear as subsequences of $s$: $(1,1)$ and $(1,1,1,1)$. There are six occurrences of $(1,1)$ and one occurrence of $(1,1,1,1)$, for a total of seven.

```input2
299
```

```output2
23
32 11 11 73 45 8 11 83 83 8 45 32 32 10 100 73 32 83 45 73 32 11 10
```