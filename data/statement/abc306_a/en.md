Score : $100$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.<br>
We denote the $i$-th character of $S$ by $S_i$.<br>
Print the string of length $2N$ obtained by concatenating $S_1,S_1,S_2,S_2,\dots,S_N$, and $S_N$ in this order.<br>
For example, if $S$ is `beginner`, print `bbeeggiinnnneerr`.

## Constraints

- $N$ is an integer such that $1 \le N \le 50$.
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
8
beginner
```

```output1
bbeeggiinnnneerr
```

It is the same as the example described in the problem statement.

```input2
3
aaa
```

```output2
aaaaaa
```