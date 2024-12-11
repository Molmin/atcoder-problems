Score : $300$ points

## Problem Statement

Snuke loves puzzles.

Today, he is working on a puzzle using `S`- and `c`-shaped pieces.
In this puzzle, you can combine two `c`-shaped pieces into one `S`-shaped piece, as shown in the figure below:

![9b0bd546db9f28b4093d417b8f274124.png](https://atcoder.jp/img/arc069/9b0bd546db9f28b4093d417b8f274124.png)

Snuke decided to create as many `Scc` groups as possible by putting together one `S`-shaped piece and two `c`-shaped pieces.

Find the maximum number of `Scc` groups that can be created when Snuke has $N$ `S`-shaped pieces and $M$ `c`-shaped pieces.

## Constraints

- $1 \leq N,M \leq 10^{12}$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
1 6
```

```output1
2
```

Two `Scc` groups can be created as follows:

- Combine two `c`-shaped pieces into one `S`-shaped piece
- Create two `Scc` groups, each from one `S`-shaped piece and two `c`-shaped pieces

```input2
12345 678901
```

```output2
175897
```