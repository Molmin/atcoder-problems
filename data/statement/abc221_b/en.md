Score : $200$ points

## Problem Statement

You are given two strings $S$ and $T$. Determine whether it is possible to make $S$ and $T$ equal by doing the following operation **at most once**:

- choose two adjacent characters in $S$ and swap them.

Note that it is allowed to choose not to do the operation.

## Constraints

- Each of $S$ and $T$ is a string of length between $2$ and $100$ (inclusive) consisting of lowercase English letters.
- $S$ and $T$ have the same length.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

If it is possible to make $S$ and $T$ equal by doing the operation in Problem Statement at most once, print `Yes`; otherwise, print `No`.

```input1
abc
acb
```

```output1
Yes
```

You can swap the $2$-nd and $3$-rd characters of $S$ to make $S$ and $T$ equal.

```input2
aabb
bbaa
```

```output2
No
```

There is no way to do the operation to make $S$ and $T$ equal.

```input3
abcde
abcde
```

```output3
Yes
```

$S$ and $T$ are already equal.