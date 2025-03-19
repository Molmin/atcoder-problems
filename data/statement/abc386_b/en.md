Score : $200$ points

## Problem Statement

There is a calculator with the buttons `00`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`.<br>
When a string $x$ is displayed on this calculator and you press a button $b$, the resulting displayed string becomes the string $x$ with $b$ appended to its end.

Initially, the calculator displays the empty string (a string of length $0$).<br>
Find the minimum number of button presses required to display the string $S$ on this calculator.

## Constraints

- $S$ is a string of length at least $1$ and at most $1000$, consisting of `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`.
- The first character of $S$ is not `0`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer as an integer.

```input1
1000000007
```

```output1
6
```

To display `1000000007`, you can press the buttons `1`, `00`, `00`, `00`, `00`, `7` in this order. The total number of button presses is $6$, and this is the minimum possible.

```input2
998244353
```

```output2
9
```

```input3
32000
```

```output3
4
```