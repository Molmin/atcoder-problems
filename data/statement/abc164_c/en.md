Score : $300$ points

## Problem Statement

You drew lottery $N$ times. In the $i$-th draw, you got an item of the kind represented by a string $S_i$.

How many kinds of items did you get?

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $S_i$ consists of lowercase English letters and has a length between $1$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $:$
> 
> $S_N$

## Output

Print the number of kinds of items you got.

```input1
3
apple
orange
apple
```

```output1
2
```

You got two kinds of items: `apple` and `orange`.

```input2
5
grape
grape
grape
grape
grape
```

```output2
1
```

```input3
4
aaaa
a
aaa
aa
```

```output3
4
```