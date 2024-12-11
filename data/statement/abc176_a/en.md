Score : $100$ points

## Problem Statement

Takahashi loves takoyaki - a ball-shaped snack.

With a takoyaki machine, he can make at most $X$ pieces of takoyaki at a time, taking $T$ minutes regardless of the number of pieces to make.

How long does it take to make $N$ takoyaki?

## Constraints

- $1 \leq N,X,T \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $T$

## Output

Print an integer representing the minimum number of minutes needed to make $N$ pieces of takoyaki.

```input1
20 12 6
```

```output1
12
```

He can make $12$ pieces of takoyaki in the first $6$ minutes and $8$ more in the next $6$ minutes, so he can make $20$ in a total of $12$ minutes.

Note that being able to make $12$ in $6$ minutes does not mean he can make $2$ in $1$ minute.

```input2
1000 1 1000
```

```output2
1000000
```

It seems to take a long time to make this kind of takoyaki.