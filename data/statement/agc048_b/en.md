Score : $700$ points

## Problem Statement

In this problem, we consider strings consisting of `(`, `)`, `[`, and `]`.

A string $x$ is said to be a **good parentheses sequence** if and only if **one** of the following conditions is satisfied:

- $x$ is an empty sequence.
- There is a good parentheses sequence $s$ such that concatenating `(`, $s$, and `)` in this order results in $x$.
- There is a good parentheses sequence $s$ such that concatenating `[`, $s$, and `]` in this order results in $x$.
- There are non-empty good parentheses sequences $s$ and $t$ such that concatenating $s$ and $t$ in this order results in $x$.

For example, `[]`, `([()])`, and `()[()]` are good parentheses sequences, but neither `())` nor `([)]` is a good parentheses sequence.

Given are an even number $N$ and integer sequences $A$ and $B$ of length $N$ each.
Here, we define a score for a good parentheses sequence of length $N$, $s=s_1s_2\cdots s_N$, as follows:

- The score for $s$ is the sum of the scores of its characters.
- The score for the $i$-th character ($1 \leq i \leq N$) is $A_i$ if $s_i$ is `(` or `)`, and $B_i$ if $s_i$ is `[` or `]`.

Find the maximum possible score for a good parentheses sequence of length $N$.

## Constraints

- $2 \leq N \leq 10^5$
- $N$ is an even number.
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- All numbers in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_N$

## Output

Print the answer.

```input1
4
4 2 3 1
2 3 2 4
```

```output1
12
```

For $s=$`()[]`, the score is $A_1+A_2+B_3+B_4=12$, which is the maximum possible value.

```input2
10
866111664 844917655 383133839 353498483 472381277 550309930 378371075 304570952 955719384 705445072
178537096 218662351 231371336 865935868 579910117 62731178 681212831 16537461 267238505 318106937
```

```output2
6629738472
```