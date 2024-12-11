Score: $200$ points

## Problem Statement

**This problem shares a similar setting with Problem A. The way Takahashi chooses cookies and what you are required to find are different from Problem A.**

There are $N$ boxes arranged in a row, and some of these boxes contain cookies.

The state of these boxes is represented by a string $S$ of length $N$.
Specifically, the $i$-th box $(1\leq i \leq N)$ from the left contains one cookie if the $i$-th character of $S$ is `@`, and is empty if it is `.`.

Over the next $D$ days, Takahashi will choose and eat one cookie per day from among the cookies in these boxes. On each day, he chooses the cookie in the rightmost box that contains a cookie at that point.

Determine, for each of the $N$ boxes, whether it will contain a cookie after $D$ days have passed.

It is guaranteed that $S$ contains at least $D$ occurrences of `@`.

## Constraints

- $1 \leq D \leq N \leq 100$
- $N$ and $D$ are integers.
- $S$ is a string of length $N$ consisting of `@` and `.`.
- $S$ contains at least $D$ occurrences of `@`.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $S$

## Output

Print a string of length $N$.
The $i$-th character ($1 \leq i \leq N$) of the string should be `@` if the $i$-th box from the left contains a cookie after $D$ days have passed, and `.` otherwise.

```input1
5 2
.@@.@
```

```output1
.@...
```

Takahashi acts as follows:

- Day $1$: There are cookies in the 2nd, 3rd, and 5th boxes from the left. Among these, the rightmost is the 5th box. He eats the cookie in this box.
- Day $2$: There are cookies in the 2nd and 3rd boxes. Among these, the rightmost is the 3rd box. He eats the cookie in this box.
- After two days have passed, only the 2nd box from the left contains a cookie.

Therefore, the correct output is `.@...`.

```input2
3 3
@@@
```

```output2
...
```

```input3
10 4
@@@.@@.@@.
```

```output3
@@@.......
```