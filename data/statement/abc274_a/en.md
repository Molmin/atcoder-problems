Score : $100$ points

## Problem Statement

Takahashi is making a computer baseball game.<br>
He will write a program that shows a batter's batting average with a specified number of digits.

There are integers $A$ and $B$, which satisfy $1 \leq A \leq 10$ and $0 \leq B \leq A$.<br>
Let $S$ be the string obtained as follows.

- Round off $\dfrac{B}{A}$ to three decimal digits, then write the integer part ($1$ digit), `.` (the decimal point), and the decimal part ($3$ digits) in this order, with trailing zeros.

For example, if $A=7$ and $B=4$, then $\dfrac{B}{A} = \dfrac{4}{7} = 0.571428\dots$ rounded off to three decimal digits is $0.571$. Thus, $S$ is `0.571`.

You are given $A$ and $B$ as the input and asked to print $S$.

## Constraints

- $1 \leq A \leq 10$
- $0 \leq B \leq A$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print $S$ in the format specified in the Problem Statement. **Note that answers in different formats will be considered wrong.**

```input1
7 4
```

```output1
0.571
```

As explained in the Problem Statement, $\dfrac{B}{A} = \dfrac{4}{7} = 0.571428\dots$ rounded off to three decimal digits is $0.571$. Thus, $S$ is `0.571`.

```input2
7 3
```

```output2
0.429
```

$\dfrac{B}{A} = \dfrac{3}{7} = 0.428571\dots$ rounded off to three decimal digits is $0.429$. (Note that it got rounded up.)<br>
Thus, $S$ is `0.429`.

```input3
2 1
```

```output3
0.500
```

$\dfrac{B}{A} = \dfrac{1}{2} = 0.5$ rounded off to three decimal digits is again $0.5$.<br>
Thus, $S$ is `0.500`. Note that it must have three decimal places.

```input4
10 10
```

```output4
1.000
```

```input5
1 0
```

```output5
0.000
```