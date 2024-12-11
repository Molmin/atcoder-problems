Score : $900$ points

## Problem Statement

Takahashi has an empty string $S$ and a variable $x$ whose initial value is $0$.

Also, we have a string $T$ consisting of `0` and `1`.

Now, Takahashi will do the operation with the following two steps $|T|$ times.

- Insert a `0` or a `1` at any position of $S$ of his choice.
- Then, increment $x$ by the sum of the digits in the odd positions (first, third, fifth, ...) of $S$. For example, if $S$ is `01101`, the digits in the odd positions are `0`, `1`, `1` from left to right, so $x$ is incremented by $2$.

Print the maximum possible final value of $x$ in a sequence of operations such that $S$ equals $T$ in the end.

## Constraints

- $1 \leq |T| \leq 2 \times 10^5$
- $T$ consists of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $T$

## Output

Print the maximum possible final value of $x$ in a sequence of operations such that $S$ equals $T$ in the end.

```input1
1101
```

```output1
5
```

Below is one sequence of operations that maximizes the final value of $x$ to $5$.

- Insert a `1` at the beginning of $S$. $S$ becomes `1`, and $x$ is incremented by $1$.
- Insert a `0` to the immediate right of the first character of $S$. $S$ becomes `10`, and $x$ is incremented by $1$.
- Insert a `1` to the immediate right of the second character of $S$. $S$ becomes `101`, and $x$ is incremented by $2$.
- Insert a `1` at the beginning of $S$. $S$ becomes `1101`, and $x$ is incremented by $1$.

```input2
0111101101
```

```output2
26
```