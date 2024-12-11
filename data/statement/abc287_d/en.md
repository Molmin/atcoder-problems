Score : $400$ points

## Problem Statement

You are given strings $S$ and $T$ consisting of lowercase English letters and `?`.  Here, $|S| \gt |T|$ holds (for a string $X$, $|X|$ denotes the length of $X$).

Two strings $X$ and $Y$ such that $|X|=|Y|$ is said to **match** if and only if:

- one can make $X$ equal $Y$ by replacing each `?` in $X$ and $Y$ with any English letter independently.

Solve the following problem for each $x=0,1,\ldots,|T|$:

- Let $S'$ be the string of length $|T|$ obtained by concatenating the first $x$ characters and the last $(|T|-x)$ characters of $S$ without changing the order.  Print `Yes` if $S'$ and $T$ match, and `No` otherwise.

## Constraints

- $S$ and $T$ are strings consisting of lowercase English letters and `?`.
- $1 \leq |T| \lt |S| \leq 3 \times 10^5$

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print $(|T|+1)$ lines.<br>
The $i$-th line should contain the answer for $x=i-1$.

```input1
a?c
b?
```

```output1
Yes
No
No
```

When $x=0$, $S'$ equals `?c`.  Here, we can replace the $1$-st character of $S'$, `?`, with `b` and the $2$-nd character of $T$, `?`, with `c` to make $S'$ equal $T$, so $S'$ and $T$ match.  Thus, `Yes` should be printed in the first line.<br>
When $x=1$ and $2$, respectively, $S'$ is `ac` and `a?`, neither of which matches with $T$.  Thus, `No` should be printed in the second and third lines.

```input2
atcoder
?????
```

```output2
Yes
Yes
Yes
Yes
Yes
Yes
```

```input3
beginner
contest
```

```output3
No
No
No
No
No
No
No
No
```