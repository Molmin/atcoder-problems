Score : $200$ points

## Problem Statement

Takahashi is playing a game called Chess960.
He has decided to write a code that determines if a random initial state satisfies the conditions of Chess960.

You are given a string $S$ of length eight.  $S$ has exactly one `K` and `Q`, and exactly two `R`'s, `B`'s , and `N`'s.  Determine if $S$ satisfies all of the following conditions.

- <p>Suppose that the $x$-th and $y$-th $(x &lt; y)$ characters from the left of $S$ are `B`; then, $x$ and $y$ have different parities.</p>
- <p>`K` is between two `R`'s. More formally, suppose that the $x$-th and $y$-th $(x &lt; y)$ characters from the left of $S$ are `R` and the $z$-th is `K`; then $x&lt; z &lt; y$.</p>

## Constraints

- $S$ is a string of length $8$ that contains exactly one `K` and `Q`, and exactly two `R`'s, `B`'s , and `N`'s.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print `Yes` if $S$ satisfies the conditions; print `No` otherwise.

```input1
RNBQKBNR
```

```output1
Yes
```

The $3$-rd and $6$-th characters are `B`, and $3$ and $6$ have different parities.
Also, `K` is between the two `R`'s.  Thus, the conditions are fulfilled.

```input2
KRRBBNNQ
```

```output2
No
```

`K` is not between the two `R`'s.

```input3
BRKRBQNN
```

```output3
No
```