Score : $1500$ points

## Problem Statement

A string, consisting of letters `A`, `B`, and `C`, is called **good**, if every two consecutive letters are different. For example, strings `ABABAB` and `ABC` are good, while `ABBA` and `AABBCC` aren't.

You are given two **good** strings $S$ and $T$ of length $N$.
In one operation, you can choose any letter of $S$, and change it to another letter among `A`, `B`, and `C`, so that $S$ remains **good**.

What's the smallest number of operations needed to transform $S$ into $T$?
We can prove that it can always be done in a finite number of operations.

## Constraints

- $1\le N \le 5\cdot 10^5$
- $S$ is a **good** string of length $N$ consisting of `A`, `B`, and `C`
- $T$ is a **good** string of length $N$ consisting of `A`, `B`, and `C`

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

Output the smallest number of operations needed to transform $S$ into $T$.

```input1
4
CABC
CBAC
```

```output1
6
```

Here is one possible sequence of operations of length $6$:

`CABC` $\to$ `BABC` $\to$ `BCBC` $\to$ `BCAC` $\to$ `ACAC` $\to$ `ABAC` $\to$ `CBAC`

It can be shown that $6$ operations are necessary for this case.

```input2
10
ABABABABAB
BABABABABA
```

```output2
15
```