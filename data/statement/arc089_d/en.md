Score : $1100$ points

## Problem Statement

There are $N$ white balls arranged in a row, numbered $1,2,..,N$ from left to right.
AtCoDeer the deer is thinking of painting some of these balls red and blue, while leaving some of them white.

You are given a string $s$ of length $K$.
AtCoDeer performs the following operation for each $i$ from $1$ through $K$ in order:

- The $i$-th operation: Choose a contiguous segment of balls (**possibly empty**), and paint these balls red if the $i$-th character in $s$ is `r`; paint them blue if the character is `b`.

Here, if a ball which is already painted is again painted, the color of the ball will be overwritten.
However, due to the properties of dyes, **it is not possible to paint a white, unpainted ball directly in blue.**
That is, when the $i$-th character in $s$ is `b`, the chosen segment must not contain a white ball.

After all the operations, how many different sequences of colors of the balls are possible?
Since the count can be large, find it modulo $10^9+7$.

## Constraints

- $1$ $\leq$ $N$ $\leq$ $70$
- $1$ $\leq$ $K$ $\leq$ $70$
- $|s|$ $=$ $K$
- $s$ consists of `r` and `b`.
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $s$

## Output

Print the number of the different possible sequences of colors of the balls after all the operations, modulo $10^9+7$.

```input1
2 2
rb
```

```output1
9
```

There are nine possible sequences of colors of the balls, as follows:

`ww`, `wr`, `rw`, `rr`, `wb`, `bw`, `bb`, `rb`, `br`.

Here, `r` represents red, `b` represents blue and `w`represents white.

```input2
5 2
br
```

```output2
16
```

Since we cannot directly paint white balls in blue, we can only choose an empty segment in the first operation.

```input3
7 4
rbrb
```

```output3
1569
```

```input4
70 70
bbrbrrbbrrbbbbrbbrbrrbbrrbbrbrrbrbrbbbbrbbrbrrbbrrbbbbrbbrbrrbbrrbbbbr
```

```output4
841634130
```