Score: $100$ points

## Problem Statement

There are $N$ boxes arranged in a row, and some of these boxes contain cookies.

The state of these boxes is represented by a string $S$ of length $N$.
Specifically, the $i$-th box $(1\leq i \leq N)$ from the left contains one cookie if the $i$-th character of $S$ is `@`, and is empty if it is `.`.

Over the next $D$ days, Takahashi will choose and eat one cookie per day from among the cookies in these boxes.

Determine how many of the $N$ boxes will be empty after $D$ days have passed.
(It can be proved that this value does not depend on which cookies Takahashi chooses each day.)

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

Print the number of boxes that will be empty after $D$ days have passed among the $N$ boxes.

```input1
5 2
.@@.@
```

```output1
4
```

For example, Takahashi might act as follows:

- Day $1$: There are cookies in the 2nd, 3rd, and 5th boxes from the left. He chooses the cookie in the 2nd box to eat.
- Day $2$: There are cookies in the 3rd and 5th boxes. He chooses the cookie in the 5th box to eat.
- After two days have passed, only the 3rd box from the left contains a cookie. Therefore, four out of the five boxes are empty.

Even though Takahashi might choose differently on each day than in this example, there will still be four empty boxes after two days.
Therefore, the answer is $4$.

```input2
3 3
@@@
```

```output2
3
```

```input3
10 4
@@@.@@.@@.
```

```output3
7
```